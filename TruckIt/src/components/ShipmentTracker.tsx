
import React, { useState } from 'react';
import { Search, Truck, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

interface TrackingResult {
  trackingId: string;
  status: 'in-transit' | 'delivered' | 'processing' | 'exception';
  currentLocation: string;
  estimatedDelivery: string;
  history: {
    date: string;
    location: string;
    status: string;
  }[];
}

const mockTrackingData: Record<string, TrackingResult> = {
  'TRACK123456': {
    trackingId: 'TRACK123456',
    status: 'in-transit',
    currentLocation: 'Frankfurt, Germany',
    estimatedDelivery: '2025-05-05',
    history: [
      {
        date: '2025-04-30 14:30',
        location: 'Frankfurt, Germany',
        status: 'In transit to destination'
      },
      {
        date: '2025-04-29 08:15',
        location: 'Paris, France',
        status: 'Departed from facility'
      },
      {
        date: '2025-04-28 18:40',
        location: 'Paris, France',
        status: 'Arrived at facility'
      },
      {
        date: '2025-04-26 10:00',
        location: 'New York, USA',
        status: 'Shipment picked up'
      }
    ]
  },
  'TRACK654321': {
    trackingId: 'TRACK654321',
    status: 'delivered',
    currentLocation: 'London, UK',
    estimatedDelivery: '2025-04-30',
    history: [
      {
        date: '2025-04-30 09:45',
        location: 'London, UK',
        status: 'Delivered'
      },
      {
        date: '2025-04-29 14:20',
        location: 'London, UK',
        status: 'Out for delivery'
      },
      {
        date: '2025-04-28 11:30',
        location: 'Manchester, UK',
        status: 'In transit'
      },
      {
        date: '2025-04-27 08:15',
        location: 'Dubai, UAE',
        status: 'Departed from facility'
      }
    ]
  },
  'TRACK789012': {
    trackingId: 'TRACK789012',
    status: 'processing',
    currentLocation: 'Singapore',
    estimatedDelivery: '2025-05-10',
    history: [
      {
        date: '2025-04-29 16:40',
        location: 'Singapore',
        status: 'Processing at logistics center'
      },
      {
        date: '2025-04-28 14:30',
        location: 'Hong Kong',
        status: 'Cleared customs'
      },
      {
        date: '2025-04-27 09:20',
        location: 'Shanghai, China',
        status: 'Shipment received'
      }
    ]
  }
};

const ShipmentTracker: React.FC = () => {
  const { toast } = useToast();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      toast({
        title: "Tracking Number Required",
        description: "Please enter a tracking number",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulating API call with timeout
    setTimeout(() => {
      const result = mockTrackingData[trackingNumber];
      
      if (result) {
        setTrackingResult(result);
      } else {
        toast({
          title: "Tracking Information Not Found",
          description: "We couldn't find any information for the provided tracking number. Please verify and try again.",
          variant: "destructive"
        });
        setTrackingResult(null);
      }
      
      setIsLoading(false);
    }, 1000);
  };
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle2 className="text-green-500" />;
      case 'in-transit':
        return <Truck className="text-accent" />;
      case 'processing':
        return <Clock className="text-yellow-500" />;
      case 'exception':
        return <AlertTriangle className="text-red-500" />;
      default:
        return null;
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'in-transit':
        return 'In Transit';
      case 'processing':
        return 'Processing';
      case 'exception':
        return 'Exception';
      default:
        return status;
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 text-primary">Track Your Shipment</h3>
      
      <form onSubmit={handleTrack} className="mb-8">
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <div className="flex-grow form-control">
            <input
              type="text"
              className="form-input"
              placeholder="Enter Tracking Number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
          </div>
          
          <button
            type="submit"
            className="btn btn-accent flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
            ) : (
              <>
                <Search size={18} className="mr-2" />
                Track
              </>
            )}
          </button>
        </div>
        
        <div className="text-sm text-gray-500 mt-2">
          <p>Try sample tracking numbers: TRACK123456, TRACK654321, or TRACK789012</p>
        </div>
      </form>
      
      {trackingResult && (
        <div className="animate-fade-in">
          <div className="mb-6 flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <div>
              <div className="text-sm text-gray-500">Tracking Number</div>
              <div className="font-medium text-gray-800">{trackingResult.trackingId}</div>
            </div>
            
            <div className="flex items-center">
              {getStatusIcon(trackingResult.status)}
              <span className="ml-2 font-medium text-gray-800">
                {getStatusText(trackingResult.status)}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500">Current Location</div>
              <div className="font-medium text-gray-800">{trackingResult.currentLocation}</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500">Estimated Delivery</div>
              <div className="font-medium text-gray-800">{formatDate(trackingResult.estimatedDelivery)}</div>
            </div>
          </div>
          
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Tracking History</h4>
          
          <div className="border rounded-lg divide-y">
            {trackingResult.history.map((event, index) => (
              <div key={index} className="p-4">
                <div className="flex justify-between items-start">
                  <div className="font-medium text-gray-800">{event.status}</div>
                  <div className="text-sm text-gray-500">{event.date}</div>
                </div>
                <div className="text-sm text-gray-600 mt-1">{event.location}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShipmentTracker;

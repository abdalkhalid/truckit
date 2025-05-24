import React, { useEffect } from 'react';

// This component adds the Kommunicate chatbot widget to the website
const ChatbotWidget: React.FC = () => {
  useEffect(() => {
    const kommunicateSettings = {
      appId: '34d2ab48d2b7c8fa795893de2975c4329',
      popupWidget: true,
      automaticChatOpenOnNavigation: true,
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widget.kommunicate.io/v2/kommunicate.app';

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(script);

    (window as any).kommunicate = (window as any).kommunicate || {};
    (window as any).kommunicate._globals = kommunicateSettings;

    // Clean up function to remove elements when component unmounts
    return () => {
      // Kommunicate might have its own cleanup or might not need explicit removal
      // For now, we'll remove the script tag if it's still there.
      // More robust cleanup might involve checking Kommunicate's API if available.
      if (head.contains(script)) {
        head.removeChild(script);
      }
      // Potentially remove Kommunicate global objects if necessary and safe
      // delete (window as any).kommunicate;
      // delete (window as any).KommunicateGlobal; // Or whatever global it might set
      
      // Remove widget elements if Kommunicate adds them directly to body and doesn't clean up
      const kommunicateWidgets = document.querySelectorAll('[id^="kommunicate-widget-iframe"]');
      kommunicateWidgets.forEach(widget => widget.remove());
      const kommunicateLauncher = document.getElementById('kommunicate-widget-launcher');
      if (kommunicateLauncher) {
        kommunicateLauncher.remove();
      }
    };
  }, []);

  // This component doesn't render anything by itself
  return null;
};

export default ChatbotWidget;

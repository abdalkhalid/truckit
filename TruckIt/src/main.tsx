import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add the <df-messenger> chatbot widget
const dfMessengerScript = document.createElement('script');
dfMessengerScript.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
dfMessengerScript.async = true;
document.body.appendChild(dfMessengerScript);

// The script will register the custom element, so we don't need to add it separately
// The ChatbotWidget component will handle the creation and configuration of the widget

createRoot(document.getElementById("root")!).render(<App />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import initServices from './initServices';
import {OrderService} from './services/legacyImpl'
import container from './container.instance';


initServices();

// legacy 
const service = new OrderService();
service.placeOrder("ORD-001", "ana@email.com");

// with DIP
const notifier = container.resolve<INotificationService>("smsNotifier");
notifier.send("099123456", "Alerta: pago rechazado");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

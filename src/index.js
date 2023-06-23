import React from 'react';
import App from 'components/App';
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

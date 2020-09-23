import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';
import InboxScreen from './components/InboxScreen';
import './index.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    </div>
  );
}

export default App;

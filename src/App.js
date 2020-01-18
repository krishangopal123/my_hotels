import React from 'react';
import logo from './logo.svg';
import OyoContainer from './Components/OyoContainer'
import store from './redux/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <OyoContainer />
      
    </div>
    </Provider>
  );
}

export default App;

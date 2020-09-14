import React from 'react';
import './App.css';
import Articles from './components/Articles';
import News from './components/News'
import Header from './components/Header'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Header/>
        <div className="News-container"> 
          <div className="News-titles">
            <Articles/>
          </div>
          <div className="News-content">
            <News/>
          </div>
        </div>
      </div>
    </Provider>
    
  );
}

export default App;

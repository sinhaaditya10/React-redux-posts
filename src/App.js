import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import PostForm from './components/Postform'
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  
  render()
  {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;

import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

//react ja entende que tem index.js dentro da pasta
// import Main from './pages/Main';
import Routes from './routes'

class App extends Component {
  render() {
    return <Routes />;
  }
}

export default App;

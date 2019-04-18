import React, { Component } from 'react';

//components
import Navbar from './Navbar/Navbar';
import Landing from '../views/Landing/Landing';
import Footer from '../views/Footer/Footer';

interface IAppProps {}

interface IAppState {}

class App extends Component<IAppProps, IAppState> {
  render(): JSX.Element {
    return (
      <div className="App">
      	<Navbar />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
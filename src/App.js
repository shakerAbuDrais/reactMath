import React from 'react';
import Header from './components/header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default App;

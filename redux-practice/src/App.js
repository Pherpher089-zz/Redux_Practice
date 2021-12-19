import React from 'react';
import './App.css';
import TodoView from './components/TodoView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <TodoView />
      </div>
    );
  }
}

export default App;

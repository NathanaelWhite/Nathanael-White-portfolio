import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    </div>
  );
}

export default App;

import React from 'react';
import Button from './components/layoutComponent/button';

function App() {
  return (
    <div className="App">
      <h1> React UI library</h1>
      <Button>
        {/* Get Started */}
        <i className="fas fa-check" />
      </Button>
    </div>
  );
}

export default App;

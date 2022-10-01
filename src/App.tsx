import React from 'react';
import './css/app.css';

import Home from './views/Home';

function App() {
  return (
    <div className="App">
      {/* possible extension to routes */}
      <Home></Home>
    </div>
  );
}

export default App;

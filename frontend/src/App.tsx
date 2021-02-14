import React from 'react';
import axios from 'axios';

function App() {
  axios.get('http://localhost:8000/polls/')
  .then(res => console.log(res))

  return (
    <div className="App">

    </div>
  );
}

export default App;

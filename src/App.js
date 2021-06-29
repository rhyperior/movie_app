import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Your Movie Feed !</h1>
      <div className="form">
        <label>Movie Name</label>
        <input type="text" name="movieName" />
        <label>Review</label>
        <input type="text" name="review" />
      </div>  
    </div>
  );
}

export default App;

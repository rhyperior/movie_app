import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  
  // console.log("Trying to Post a request !!!!");
  
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      console.log(response);
    })
  }, [])

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert",
       { "movieName": movieName,
        "movieReview": review
      })
  };
  
  return (
    <div className="App">
      <h1>Your Movie Feed !</h1>
      <div className="form">
        <label>Movie Name</label>
        <input type="text"
               name="movieName" onChange={(e)=> {
               setMovieName(e.target.value)
              }}/>
        <label>Review</label>
        <input type="text" 
              name="review" onChange={(e)=> {
              setReview(e.target.value)
              }}/>
        <button onClick={submitReview}>Submit</button>
        {/* <button onClick={() => { console.log("button clicked");}}>button</button> */}
      </div>  
    </div>
  );
}

export default App;

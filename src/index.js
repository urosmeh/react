import React from "react";
import ReactDOM from "react-dom";

function MyApp(){
  return(
  <ul>
    <li>Toast</li>
    <li>Jajca</li>
    <li>Mleko</li>  
  </ul>
  )
}

function MyInfo(){
  return(
    <div>
      <h1>Uroš Meh</h1>
      <p>
        I like to play football and do Insanity Workout.
      </p>
      <ol>
        <li>Paris</li>
        <li>Barcelona</li>
        <li>London</li>
      </ol>
    </div>
  )
}

ReactDOM.render(<MyInfo/>, document.getElementById("root"));
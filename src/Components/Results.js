import React from 'react';

const results = (props) => {
    const translateResponse = props.results.map((element, index) => {
      return (
        element === 1 
          ? <div key={index}>
              <h4>Question {index+1}.</h4>
              <p>Correct</p> 
            </div>
          : <div key={index}>
              <h4> Question {index+1}.</h4>
              <p> Incorrect</p>
            </div>
        )
    });

    const totalScore = props.results.reduce((a, b) => a + b, 0);

    return (
      	<div className="results">
      		 <div>{translateResponse}</div>
       		<div>
         		<h2>Your Final Score Is:</h2>
          		<strong>{totalScore} out of {props.questions.length}!</strong>
      	    </div>
      	    	<button 
      	    		className="tryAgainBtn" onClick={()=> props.clickHandler()}>Try Again</button>
      	</div>
    );
}

export default results;
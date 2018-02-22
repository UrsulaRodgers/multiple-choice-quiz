import React from 'react';

const results = (props) => {
    const translateResponse = props.results.map((element, index) => {
      return (
        element === 1 
          ? <div key={index}>
              <h3>Question {index+1}.</h3>
              <p>Correct</p> 
            </div>
          : <div key={index}>
              <h3> Question {index+1}.</h3>
              <p> Incorrect</p>
            </div>
        )
    });

    const totalScore = props.results.reduce((a, b) => a + b, 0);

    return (
      	<div className="results">
       		<h2>Results</h2>
      		 	<div>{translateResponse}</div>
       		<div>
         		<h3>Your Final Score Is:</h3>
          			{totalScore} out of {props.questions.length}!
      	    	</div>
      	    	<button 
      	    		className="tryAgainBtn" onClick={()=> props.clickHandler()}>Try Again</button>
      	</div>
    );
}

export default results;
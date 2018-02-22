import React, { Component } from 'react';
import axios from 'axios';
import AnswerOptions from '../Components/AnswerOptions';
import Results from '../Components/Results';
//need to get the questions from the server - this is a placeholder for now
import { questions } from '../Data/questions.json';


let answers = {};

class Questions extends Component {
	constructor() {
		super();

		this.state = { 
			questions,
			formSubmitted: false,
			results:[]
		}

		this.handleChange = this.handleChange.bind(this);
		this.answersSubmit = this.answersSubmit.bind(this);
		this.tryAgain = this.tryAgain.bind(this);
	}

	

	handleChange(event) {
		answers[event.target.name] = event.target.value;
		console.log(answers);
	}

	answersSubmit(event) {
		event.preventDefault();

		if (Object.keys(answers).length === questions.length) {
			const values = Object.entries(answers).sort();

			 axios.post('http://localhost:3001/users', {
          	 answers : values
        })
        .then(response => {
          this.setState({results: response.data, formSubmitted: true});
        })
        .catch(error => {
          alert(error);
        });
		} else {
			alert("Please answer all questions before submitting.");
		}

		

	}

	tryAgain() {
		this.setState({ formSubmitted: false, results:[]});
		answers = {};
	}

	render() {

		const viewChanger = (
			!this.state.formSubmitted
				? <div>
					<h1>Australian Trivia Quiz</h1>
					  <form className="testQuestions" onSubmit={this.answersSubmit}>
						{this.state.questions.map((question, index)=>{
							return (
								<div key={index}>
										<p><strong>Question {index+1}. {question.question}</strong></p>
										<AnswerOptions 
											choices={question.answers} 
											name={question.name} 
											handler={this.handleChange} 
										/>
								</div>			
							)
						})}
						<input 
							type="submit" 
							value="Submit Answers" 
							className="submitAnswers" 
						/>
					  </form>
				  </div>

				: <div>
					<h1>Your Results</h1>
					<Results 
						questions={this.state.questions} 
						results={this.state.results} 
						clickHandler={this.tryAgain} 
				  	/>
				  </div>
		);

		return (
			<div>
				{viewChanger}
			</div>
		);
	}
}

export default Questions;
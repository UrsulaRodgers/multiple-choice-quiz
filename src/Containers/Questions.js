import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import AnswerOptions from '../Components/AnswerOptions';
import Results from '../Components/Results';
//need to get the questions from the server - this is a placeholder for now
import { questions } from '../Data/questions.json';


let answers = {};

class Questions extends Component {
	constructor() {
		super();

		this.state = { 
			questions
		}

		this.handleChange = this.handleChange.bind(this);
		this.answersSubmit = this.answersSubmit.bind(this);
		this.tryAgain = this.tryAgain.bind(this);
	}

	

	handleChange(event) {
		answers[event.target.name] = event.target.value;
	}

	answersSubmit(event) {
		event.preventDefault();

		if (Object.entries(answers).length === questions.length) {
			const values = Object.entries(answers).sort();
			this.props.getResults(values);	 
		} else {
			alert("Please answer all questions before submitting.");
		}	

	}

	tryAgain() {
		answers = {};
		this.props.reset();
	}

	render() {

		const viewChanger = (
			!this.props.formSubmitted
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
						results={this.props.results}
						error={this.props.error} 
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

const mapStateToProps = state => {
	return {
		results: state.results,
		formSubmitted: state.formSubmitted,
		error: state.error
	};
};

const mapDispatchToProps = dispatch => {
  return {
     getResults: (answers) => dispatch(actions.returnResults(answers)),
     reset: () => dispatch(actions.resetPage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
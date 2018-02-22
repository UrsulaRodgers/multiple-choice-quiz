import React from 'react';

const answerOptions = (props) => {
	return (
		props.choices.map((answer, index) => {
			return (
			<div className="answerChoices" key={index}>
				<label>
					<input 
						type="radio"
						name={props.name}
						onChange={props.handler}
						value={index}
					/>
					{answer.a}
					{answer.b}
					{answer.c}
					{answer.d}		
				</label>
			</div>
			)
		})
	)
}

export default answerOptions;
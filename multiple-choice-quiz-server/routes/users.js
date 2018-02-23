var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next){
	const correct = [['Q1', '2'] , ['Q2', '1'], ['Q3', '0'], ['Q4', '2'],['Q5', '3']];
	const user = req.body.answers;
	const compareAnswers = [];

    // Populate compareAnswers.
    for (let i = 0; i < correct.length; i++) {
    		if (correct[i][1] === user[i][1]) {
    			compareAnswers.push(1);
    		} else {
    			compareAnswers.push(0);
    		}
  	}

    console.log(compareAnswers);

	res.status(200).send(compareAnswers);
});

module.exports = router;

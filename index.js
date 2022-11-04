const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5600;

app.use(
	cors({
		origin: '*',
	})
);

app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).json({
		slackUsername: 'geraldlouisugwunna',
		backend: true,
		age: 24,
		bio: 'I love to code but i am very lazy',
	});
});

app.post('/', (req, res) => {
	let x = req.body.x;
	let y = req.body.y;
	if (req.body.operation_type === 'addition') {
		const result = x + y;
		console.log(typeof String);

		return res.status(200).json({
			slackUsername: 'geraldlouisugwunna',
			result,
			operation_type: req.body.operation_type,
		});
	}

	if (req.body.operation_type === 'subtraction') {
		const result = x - y;

		return res.status(200).json({
			slackUsername: 'geraldlouisugwunna',
			result,
			operation_type: req.body.operation_type,
		});
	}

	if (req.body.operation_type === 'multiplication') {
		const result = x * y;

		return res.status(200).json({
			slackUsername: 'geraldlouisugwunna',
			result,
			operation_type: req.body.operation_type,
		});
	}

	if (
		req.body.operation_type !== 'addition' &&
		req.body.operation_type !== 'subtraction' &&
		req.body.operation_type !== 'multiplication'
	) {
		console.log(req.body.operation_type);
		const string_array = req.body.operation_type.split(' ');
		console.log(string_array);
		let x = req.body.x;
		let y = req.body.y;
		if (string_array.includes('plus' || 'add' || 'adding')) {
			const result = x + y;
			return res.status(200).json({
				slackUsername: 'geraldlouisugwunna',
				result,
				operation_type: req.body.operation_type,
			});
		}
	}

	res.status(200).json({
		slackUsername: 'geraldlouisugwunna',
		result: 'answer',
		operation_type: 'operator',
	});
});

app.listen(PORT, () => {
	console.log('server is running on 5600');
});

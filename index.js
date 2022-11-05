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

	// check for addition operation
	if (req.body.operation_type === 'addition') {
		const result = x + y;
		console.log(typeof String);

		return res.status(200).json({
			slackUsername: 'geraldlouisugwunna',
			result,
			operation_type: req.body.operation_type,
		});
	}

	// check for subtraction operation
	if (req.body.operation_type === 'subtraction') {
		const result = x - y;

		return res.status(200).json({
			slackUsername: 'geraldlouisugwunna',
			result,
			operation_type: req.body.operation_type,
		});
	}

	// check for multiplication operation
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
		if (
			string_array.includes('add') ||
			string_array.includes('plus') ||
			string_array.includes('adding') ||
			string_array.includes('sum')
		) {
			console.log('yes');
			const result = x + y;
			return res.status(200).json({
				slackUsername: 'geraldlouisugwunna',
				result,
				operation_type: 'addition',
			});
		} else if (
			string_array.includes('minus') ||
			string_array.includes('subtract') ||
			string_array.includes('remove') ||
			string_array.includes('subtracting')
		) {
			console.log('yes');
			const result = x - y;
			return res.status(200).json({
				slackUsername: 'geraldlouisugwunna',
				result,
				operation_type: 'subtraction',
			});
		} else if (
			string_array.includes('multiply') ||
			string_array.includes('times') ||
			string_array.includes('product') ||
			string_array.includes('multiplying')
		) {
			console.log('yes');
			const result = x * y;
			return res.status(200).json({
				slackUsername: 'geraldlouisugwunna',
				result,
				operation_type: 'multiplication',
			});
		} else {
			return res.status(400).json({
				success: 'false',
				message: 'bad request',
			});
		}
	}

	res.status(400).json({
		success: 'false',
		message: 'bad request',
	});
});

app.listen(PORT, () => {
	console.log('server is running on 5600');
});

import React from 'react';
import zxcvbn from 'zxcvbn';
import './PasswordMeter.css';

const PasswordMeter = ({ password }) => {
	const result = zxcvbn(password);

	const passwordLabel = (result) => {
		switch (result.score) {
			case 0:
				return 'Weak';
			case 1:
				return 'Weak';
			case 2:
				return 'Fair';
			case 3:
				return 'Good';
			case 4:
				return 'Strong';
			default:
				return 'Weak';
		}
	};

	return (
		<div className="meter">
			<progress
				className={`meter-progress strength-${passwordLabel(result)}`}
				value={result.score}
				max="4"
			/>
			<br />
			<label className="meter-label">
				{password && (
					<>
						<strong>Password strength: </strong>
						{passwordLabel(result)}
					</>
				)}
			</label>
		</div>
	);
};

export default PasswordMeter;

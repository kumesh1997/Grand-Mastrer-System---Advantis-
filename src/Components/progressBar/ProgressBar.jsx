import { Progress } from 'antd'
import { useState, useEffect } from 'react'

function ProgressBar({ selectedAnswerNumber, showCorrect, openTimer }) {
	const [progress, setProgress] = useState(100)
	console.log(openTimer)
	useEffect(() => {
		const interval = setInterval(() => {
			if (!selectedAnswerNumber && openTimer) {
				setProgress((prevProgress) => prevProgress - 1)
			}
		}, 500)

		if (progress === 0) {
			clearInterval(interval)
			alert('Progress bar complete!')
		}
		if (showCorrect) {
			setProgress(100)
		}

		return () => clearInterval(interval)
		// eslint-disable-next-line no-unreachable
	}, [showCorrect, progress, openTimer])

	console.log(progress)
	return <Progress percent={progress} />
}

export default ProgressBar

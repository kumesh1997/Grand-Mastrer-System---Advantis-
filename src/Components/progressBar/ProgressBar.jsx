import { Progress } from 'antd'
import { useState, useEffect } from 'react'
import LinearProgressWithLabel from '../LinearProgressWithLabel'

function ProgressBar({ selectedAnswerNumber, showCorrect, openTimer }) {
	const [progress, setProgress] = useState(100)
	useEffect(() => {
		const interval = setInterval(() => {
			if (!selectedAnswerNumber && openTimer) {
				setProgress((prevProgress) => prevProgress - 1)
			}
		}, 300)

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

	return <LinearProgressWithLabel value={progress} />
}

export default ProgressBar

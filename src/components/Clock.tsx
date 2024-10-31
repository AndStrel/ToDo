import { useState, useEffect } from 'react'

export const Clock = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString())

	useEffect(() => {
		const сlockUpdate = setInterval(() => {
			setTime(new Date().toLocaleTimeString())
		}, 1000)
		return () => {
			clearInterval(сlockUpdate)
		}
	}, [])

	return (
		<div>
			<h1 className='clock'>{time}</h1>
		</div>
	)
}

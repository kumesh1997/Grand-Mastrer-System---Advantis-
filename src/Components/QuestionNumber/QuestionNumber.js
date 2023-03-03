import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import './QuestionNumber.css'

import snitch from '../../images/snitch.gif'
import { Button, Modal } from 'antd'

function QuestionNumber({ QuestionNumber = 1, viewed = false, handleClick }) {
	let css
	if (parseInt(QuestionNumber) % 5 === 1) {
		css = viewed
			? 'pointer-events-none test2'
			: ' test2 cursor-pointer duration-75 active:scale-95'
	} else {
		css = viewed
			? 'pointer-events-none test'
			: ' test cursor-pointer duration-75 active:scale-95'
	}

	return (
		<div
			className={css}
			onClick={() => {
				handleClick(QuestionNumber)
			}}
		>
			<div className={'number text-white cursor-pointer'}>
				{viewed ? (
					<label>
						{QuestionNumber}{' '}
						<span className=' text-4xl absolute top-0 left-0 text-red-600'>
							X
						</span>{' '}
					</label>
				) : (
					<label>{QuestionNumber}</label>
				)}
			</div>
		</div>
	)
}

export default QuestionNumber

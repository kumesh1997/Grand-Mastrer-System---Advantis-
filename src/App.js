import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'
import QuestionBank from './Screens/QuestionBank/QuestionBank'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import QuestionPage from './Screens/QuestionPage'
import Round3QuestionPage from './Screens/Round3QuestionPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='/questionbank/:round' element={<QuestionBank />} />
				<Route path='/questionbank_Round/:round' element={<Round3QuestionPage />}/>
				<Route path='/question/:round/:QId' element={<QuestionPage />} />
			</Routes>
			<div className=' text-base text-Red'>
				{/* Grand Master - Advantis */}
				{/* <Button variant="contained">Contained</Button> */}
			</div>
		</BrowserRouter>
	)
}

export default App

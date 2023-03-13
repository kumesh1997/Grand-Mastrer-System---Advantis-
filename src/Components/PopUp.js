import React from 'react'
import { Button, Modal, Progress } from 'antd'

const PopUp = ({
    image,
    imgWidth,
    openModel,
	handleOkButton,
	handleCancelButton,
	message,
	FontColor,
	PopupHandler
}) => {

    // const showModal = () => {
	// 	setOpen(true)
	// }

	// // Handle OK
	// const handleOk = () => {
	// 	setOpen(false)
	// }
	const handleCancel = () => {
		PopupHandler(false)
	}
  return (
    <div>
        <Modal
				open={openModel}
				onOk={handleOkButton}
				onCancel={handleCancelButton}
				footer={[
					<>
						<Button key='submit' className=' bg-red-600 text-white font-semibold' onClick={handleCancel}>
							Close
						</Button>
					</>,
				]}
			>
				<div className=' flex justify-center align-middle'>
					<img src={image} width={imgWidth} alt='images' />
				</div>
				<div className={`text-center font-semibold text-${FontColor}-600 text-xl`}>
					<h5 className=' text-xl font-bold'>{message}</h5>
				</div>
			</Modal>
    </div>
  )
}

export default PopUp
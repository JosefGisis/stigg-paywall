import React from 'react'
import { Checkout } from '@stigg/react-sdk'

export default function CheckoutView(props) {
	console.log(props)
	return (
		<Checkout
			planId={props.planId}
			onCheckoutCompleted={({ success, error }) => {
				return new Promise((resolve, reject) => {
					if (success) {
						console.log('Payment successful')
						resolve()
					} else {
						console.error('Payment failed', error)
						reject()
					}
				})
			}}
		/>
	)
}

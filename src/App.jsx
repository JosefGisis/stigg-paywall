import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useStiggContext } from '@stigg/react-sdk'
import PricingTable from './PricingTable'
import { useEffect, useRef, useState } from 'react'
import CheckoutView from './CheckoutView'

const CUSTOMER_ID = 'totally-random-customer-id'

function App() {
	const [view, setView] = useState('pricing-table')
	// const [customerId, setCustomerId] = useState(CUSTOMER_ID)
	const [planId, setPlanId] = useState(null)

	const isCustomerInitialized = useRef(false)

	const { stigg } = useStiggContext()

	useEffect(() => {
		if (isCustomerInitialized.current) return
		stigg.setCustomerId(CUSTOMER_ID)
	}, [stigg])

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Stigg Paywall Demonstration</h1>
			{view === 'pricing-table' ? (
				<PricingTable setPlanId={setPlanId} setView={setView} />
			) : planId ? (
				<CheckoutView planId={planId} setView={setView} />
			) : (
				<h1 style={{ color: 'red' }}>Plan ID missing!</h1>
			)}
		</>
	)
}

export default App

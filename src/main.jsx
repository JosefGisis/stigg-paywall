import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StiggProvider } from '@stigg/react-sdk'

const apiKey = import.meta.env.VITE_STIGG_API_KEY

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<StiggProvider apiKey={apiKey}>
			<App />
		</StiggProvider>
	</StrictMode>
)

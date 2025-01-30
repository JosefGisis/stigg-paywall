import React from 'react'
import { Paywall, SubscribeIntentionType } from '@stigg/react-sdk'

export default function PricingTable(props) {
	return (
		<Paywall
			onPlanSelected={({ plan, intentionType }) => {
				switch (intentionType) {
					case SubscribeIntentionType.START_TRIAL:
						// TODO: provision trial subscription
						props.setPlanId(plan.id)
						props.setView('checkout')
						break
					case SubscribeIntentionType.REQUEST_CUSTOM_PLAN_ACCESS:
						// TODO: redirect to contact us form
						break
					case SubscribeIntentionType.UPGRADE_PLAN:
					case SubscribeIntentionType.DOWNGRADE_PLAN:
						// TODO: show checkout experience
						break
				}
			}}
		/>
	)
}

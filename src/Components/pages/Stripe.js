import React from 'react'
import { useState } from 'react'
import StripeCheckOut from 'react-stripe-checkout'
import './ProfileScreen.css'

const Stripe = ({price}) => {
    const [isSubscribe, setIsSubscribe] = useState('')
    const priceForStripe = price * 100
   // const publishableKey = 'pk_live_51KAm2BSCfDtGSBHhgo7qJMS8kofiKgKodAglxYPfL84PYyCN9ZXXXaDxKw05vNnK2WvdlCWJckfZ7AeboD08Zi2d003YyOK0vz'

    const publishableKey = 'pk_test_51QIOrTP6atSLBwu7AG42tGw3QSXptpjpV1xgCKHu7edji2RVPAtZHFNMgfKlUnHxJBquWpLrabwa7kN3jdYqjzpN00nogShydE'
    const onToken = token => {
        alert('Payment Successful')
        setIsSubscribe(token.card.id)
    }
    return (
        <StripeCheckOut 
            label='Subscribe'
            name='Netflix Clone'
            billingAddress
            description={`Your Total is ${price}`}
            amount = {priceForStripe}
            panelLabel='Subscribe'
            token={onToken}
            stripeKey={publishableKey}
        >
          {isSubscribe === '' ? <button className='plan__btn'>Subscribe</button> : <button className='plan__btn__disable'>UnSubscribe</button>}  
        </StripeCheckOut>
    )
}

export default Stripe;

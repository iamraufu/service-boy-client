import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const SimpleCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h3>Pay Now</h3>
            <CardElement />
            <button class='btn btn-success mt-5' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        {
            paymentError && <p style={{color: 'red'}}>{paymentError}</p>
        }
        { 
            paymentSuccess && <div className="">
              <p class='mt-5' style={{color: 'green'}}>Your payment was successful.</p>
            <a href="/home"><button className='btn btn-success'><FontAwesomeIcon icon={faHome} /> Go Home</button></a>
            </div> 
        }
    </div>
  );
};

export default SimpleCardForm;
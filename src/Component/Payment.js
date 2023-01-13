import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';


function Payment() {
    const ordernow =(e)=>{
        e.preventDefault();
    }
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className="payment__container">

                <h1>
                    Checkout (<Link to="/checkout" >{basket.length} items</Link>)
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user.email}</p>
                        <p>raipur chhattishgarh</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review item and delevery</h3>
                    </div>
                    <div className="payment__item">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">

                        <form action="">
                            <h4>Your Payment Option:</h4>
                            <div className="allpayment">
                           <span>
                           <input type="radio" id="card" name="payment" value="card" />
                            <label for="card">Card's</label>
                            </span> 
                            <span>

                            <input type="radio" id="upi" name="payment" value="upi" />
                            <label for="upi">UPI</label>
                            </span>
                            <span>
                            <input type="radio" id="cod" name="payment" value="cod" />
                            <label for="cod">COD</label>
                            </span>
                            
                            </div>
                         
                            <button onClick={ordernow}>Order - Now</button>
                        </form>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment

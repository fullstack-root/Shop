import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../FormContainer";
import CheckOutSteps from "../../CheckOutSteps";
import {savePaymentMethod} from '../../../actions/cartActions'

const PaymentScreen = () => {
    let navigate = useNavigate();
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('Paypal')
    
    if (!shippingAddress.address) {
        navigate('/shipping')
    }

const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')

}
    return(
        <FormContainer>
            <CheckOutSteps step1 step2 step3/>
            <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label as='legend'>Select Method</Form.Label>
                <Col>
                <Form.Check
                    type = 'radio'
                    label='Paypal or Credit Card'
                    id='paypal'
                    name='paymentMethod'
                    checked
                    onChange={(event) => setPaymentMethod(event.target.value)}
                >

                </Form.Check>
                </Col>
            </Form.Group>
            <Button type='submit' variant='primary'>
                Continue
            </Button>
            </Form>


        </FormContainer>
    )
}

export default PaymentScreen
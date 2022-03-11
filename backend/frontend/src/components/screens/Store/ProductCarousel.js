import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Carousel, Image} from 'react-bootstrap'
import Loader from "../../Loader";
import Message from "../../Message";
import { listTopProducts } from '../../../actions/productActions'

const ProductCarousel = () => {

    const dispatch = useDispatch()

    const productTopRated = useSelector(state =>state.productTopRated)
    const {error, loading, products} = productTopRated

    useEffect (() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return (
        loading ? <Loader />
        :error
        ? <Message variant='danger'>{error}</Message>
        : (
            <Carousel pause='hover' className='bg-dark'>
                {products.map(products =>(
                    <Carousel.Item key={products._id}>
                        <Link to={`/product/${products._id}`}>
                            <Image src={products.image} alt={products.name}/>
                            <Carousel.Caption className='carousel.caption'>
                                <h4>{products.name} ({"\u0E3F"}{products.price})</h4>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
        )

    )
}

export default ProductCarousel
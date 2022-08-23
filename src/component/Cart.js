import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../app/cartSlice'

const Cart = () => {
  const dispach = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const handleRemove = (product) => {
    dispach(remove(product))
  }
  return (
    <div style={{ marginTop: '50px' }} className='row'>
      <h2 className='my-3 text-center'>Your cart</h2>
      <h2 className="">
        {cart.length === 0 && 'Nothing in cart'}
      </h2>
      {cart.map((cart, i) => {
        return <div key={i} className="col-md-6 ">
          <div className="card mx-2 my-3" >
            <img style={{ height: '217px', width: '390' }} src={cart.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{cart.title}</h5>
              <p className="card-text">{cart.description}</p>
              <p className="card-text"> Price:{cart.price}</p>
              <button onClick={() => { handleRemove(cart.id) }} className="btn btn-sm btn-dark">Remove from cart</button>
            </div>

          </div>
        </div>
      })}
    </div>
  )
}

export default Cart

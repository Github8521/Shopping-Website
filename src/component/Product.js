import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../app/cartSlice'
import { fechproduct } from '../app/productSlice'
import { STATUSES } from '../app/productSlice'
const Product = () => {
  const dispatch = useDispatch()
  // const [products, setProducts]=useState([])
  const products = useSelector((state) => state.product.data)
  const status = useSelector((state) => state.product.status)



  useEffect(() => {

    //  const fechproduct=async()=>{
    //    const res=await fetch('https://fakestoreapi.com/products')
    //    const data=await res.json()
    //   //  console.log(data)
    //     setProducts(data)

    //  }
    //  fechproduct()
    dispatch(fechproduct())

    // eslint-disable-next-line 
  }, []

  )
  const handleAdd = (product) => {
    dispatch(add(product))
  }
  if (status === STATUSES.LOADING) {
    return <h2 className='text-center'>Loading....</h2>
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>
  }

  return (
    <div className='row'>
      {
        products.map((product) => {

          return <div className="col-md-4">
            <div className="card mx-2 my-3" >
              <img style={{ height: '300px' }} src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"> Rating:{product.rating.rate}</p>
                <p className="card-text"> Price:${product.price}</p>
                <button onClick={() => { handleAdd(product) }} className="btn btn-sm btn-dark">Add to cart</button>
              </div>

            </div>
          </div>
        })
      }
    </div>
  )
}

export default Product

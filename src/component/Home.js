import Product from './Product'

const Home = () => {

  return (
    <div style={{ marginTop: '55px' }}>
      <h2 className='text-center' style={{ backgroundColor: 'yellow' }}>Welcome to ReduxCart</h2>
      <section>
        <h3 className='text-center'>
          Products
        </h3>

      </section>
      <Product />
    </div>
  )
}

export default Home

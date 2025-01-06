import Header from '../../Header'
import Banner from '../../Partials/Banner'
import Featured from '../../Partials/Featured'
import ProductList from '../../Partials/ProductList'

const Home = () => {
  return (
     <>
        <Header />
      <Banner />
      <Featured />
     <main>
      <ProductList />
      </main>
     </>
  )
}

export default Home
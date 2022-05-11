import {getProductsInCollection} from '../lib/shopify'
import ProductList from '../components/ProductList.jsx'

const Home = ({ products }) => {


  return (
    <>
			<ProductList products={products}/>
		</>
  )
}

export async function getStaticProps() {
	const products = await getProductsInCollection()

	return {
		props: {products},
	}
}

export default Home


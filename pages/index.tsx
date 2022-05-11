import type { NextPage } from 'next'
import {getProductsInCollection} from '../lib/shopify'
import ProductList from '../components/ProductList.jsx'

const Home: NextPage = ({ products }) => {


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
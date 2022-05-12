import {getProductsInCollection} from '../lib/shopify'
import Hero from '../components/Hero'
import ProductList from '../components/ProductList.jsx'

import Head from 'next/head'

const Home = ({ products }) => {


  return (
    <>
			<Head>
				<title>Modern eCommerce Website portfolio</title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
				<meta name="description" content="Modern eCommerce Development focusing on Shopify, Next.js, TailwindCSS, GraphQL"/>
				<meta property="og:title" content="Modern eCommerce Website portfolio" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://shopify-next-js-tailwind-seven.vercel.app/" />
				<meta property="og:description" content="Modern eCommerce Development focusing on Shopify, Next.js, TailwindCSS, GraphQL" />
				<meta property="og:locale" content="en_US " />
				<meta property="og:site_name" content="Modern eCommerce Website portfolio" />
			</Head>
			<Hero />
			<div className="products">
				<ProductList products={products}/>
			</div>
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


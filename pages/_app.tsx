import '../styles/globals.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import ShopProvider from '../context/shopContext'
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {

	const router = useRouter()

  return (
		<ShopProvider>
			<Layout >
				<Component {...pageProps} key={router.asPath}/>
			</Layout>
		</ShopProvider>
	)
}

export default MyApp

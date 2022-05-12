import Link from "next/link"
import { useContext } from "react"
import { CartContext } from "../context/shopContext"
import MiniCart from "./MiniCart"
import { FaGithub } from 'react-icons/fa'

const Nav = () => {

	const { cart, cartOpen, setCartOpen } = useContext(CartContext)

	let cartQuantity = 0

	cart.map(item => {
		return (cartQuantity += item?.variantQuantity)
	})

	
	
	return (
		<div className="border-b sticky top-0 z-20 bg-white">
			<div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
				<Link href='/' passHref>
					<a className="cursor-pointer hidden sm:block">
						<span className="text-lg pt-1 font-bold">
							Shopify + Next.js
						</span>
					</a>
				</Link>
				<a href="https://github.com/bdoroshev/Shopify-NextJS-Tailwind" target="_blank" className="flex items-center font-bold sm:absolute top-1/2 left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:mt-1"><FaGithub /> <span className="block ml-2">Github Repo</span></a>
				<a className="text-md font-bold cursor-pointer"
					onClick={() => setCartOpen(!cartOpen)}
				>
					Cart ({cartQuantity})
				</a>
				<MiniCart cart={cart} />
			</div>
		</div>
	)
}

export default Nav
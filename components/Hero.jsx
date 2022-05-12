import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Hero = () => {
	return (
		<div className="my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center">
			<h1 className="font-extrabold text-gray-900">
				<p className="text-xl sm:text-3xl md:text-4xl">Shopify + Next.js + Tailwind CSS:</p>
				<p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-text-4xl sm:text-6xl md:text-7xl">Modern eCommerce</p>
			</h1>
			<h2 className="mt-3 msx-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:tet-xl md:max-x-3xl">
				Build the eCommerce Revolution
			</h2>
			<div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8">
				<a href="https://www.upwork.com/freelancers/~01adae76a6fd6cd404" target="_blank" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 order-transparent rounded-md text-white bg-gray-900 hover:bg-gray-800">
					Hire me
				</a>
				<ScrollLink
					smooth={true}
					offset={-20}
					duration={500}
					to="products">
					<a className="inline-flex items-center font-semibold text-gray-900 hover:text-gray-800 cursor-pointer">
						Look at the store
					</a>
				</ScrollLink>

			</div>
		</div>
	)
}

export default Hero
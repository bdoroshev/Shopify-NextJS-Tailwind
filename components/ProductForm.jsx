import {useState, useContext} from 'react'
import {formatter} from '../utils/helpers'
import ProductOptions from './ProductOptions'

function ProductForm({ product }) {

	const allVariantOptions = product.variants.edges?.map(variant => {
		const allOptions = {}

		variant.node.selectedOptions.map(item => {
			allOptions[item.name] = item.value
		})

		return {
			id: variant.node.id,
			title: product.title,
			handle: product.handle,
			image: variant.node.image?.originalSrc,
			options: allOptions,
			variantTitle: variant.node.title,
			variantPrice: variant.node.priceV2.amount,
			variantQuantity: 1
		}
	})

	const defaultValues = {}
	product.options.map(item => {
		defaultValues[item.name] = item.values[0]
	})

	const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
	const [selectedOptions, setSelectedOptions] = useState(defaultValues)

	const setOptions = (name,value) => {
		setSelectedOptions(prevState => {
			return { ...prevState, [name]: value}
		})
	}


	return (
		<div>
			<div className="rounded-2xl p-4 shadow-lg flex flex-col w-full">
				<h2 className="text-2xl font-bold">{product.title}</h2>
				<p className="pb-6">{formatter.format(product.variants.edges[0].node.priceV2.amount)}</p>
				{
					product.options.map(({name,values}) => (
						<ProductOptions 
							key={name} 
							name={name}
							values={values}
							selectedOptions={selectedOptions} 
							setOptions={setOptions}
						/>
					))
				}
				<button className="bg-black rounded-lg text-white px-2 py-3 mt-9 hover:bg-gray-800">Add To Card</button>
			</div>
		</div>
	)
}

export default ProductForm
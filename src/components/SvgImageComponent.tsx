import React, {useState, useEffect} from 'react'
//import Circle from "../assets/images/other.svg";

const SvgImageComponent = () => {
	const [Circle, setCircle] = useState(null)

	async function dynamicImportImage(filename: string){
		const { default: Component } = await import(`../assets/images/${filename}.svg`)
		setCircle(Component)
	}

	useEffect(() => {
		dynamicImportImage('other')
	},[])

	if(!Circle) return null

	return (
		<div>
			{Circle}
		</div>
	)
}

export default SvgImageComponent
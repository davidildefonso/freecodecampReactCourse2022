import React, {useState, useEffect} from 'react'

interface SvgImageComponentTypes {
	imageFilename: string,
	stylesFilename: string
}

const SvgImageComponent = ({imageFilename, stylesFilename} : SvgImageComponentTypes ) => {
	const [Circle, setCircle] = useState(null)

	async function dynamicImportImage(filename: string){
		const { default: Component } = await import(`../assets/images/${filename}.svg`)
		await import(`../assets/css/${stylesFilename}.css`)
		setCircle(Component)
	}

	useEffect(() => {
		dynamicImportImage(imageFilename)
	},[])

	if(!Circle) return null

	return (
		<div>
			{Circle}
		</div>
	)
}

export default SvgImageComponent
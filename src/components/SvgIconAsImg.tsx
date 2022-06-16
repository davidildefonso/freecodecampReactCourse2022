import React, { useEffect, useState } from "react"

interface SvgIconType{
	filename: string,
	cssFilename: string
}

const SvgIconAsImage = ({ filename, cssFilename } : SvgIconType) => {
	const [svgSrc, setImgSrc] = useState()

	async function dynamicImportImage(filename: string){
		const { default: img } = await import(`../../resources/images/${filename}.svg`)
		setImgSrc(img)
	}

	useEffect(() => {
		dynamicImportImage(filename)
	},[])

	return (
		<img src= {svgSrc} />
	)
}

export default SvgIconAsImage
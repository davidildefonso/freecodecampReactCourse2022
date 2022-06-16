import React, { useEffect, useState } from "react"

interface MyImageType{
	filename: string
}

const MyImage = ({filename} : MyImageType) => {
	const [imgSrc, setImgSrc] = useState()

	async function dynamicImportImage(filename: string){
		const { default: img } = await import(`../../resources/images/${filename}.jpg`)
		setImgSrc(img)
	}

	useEffect(() => {
		dynamicImportImage(filename)
	},[])

	return (
		<img src= {imgSrc} />
	)
}

export default MyImage
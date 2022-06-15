import React, {useState, useEffect} from "react"
import "./svgStyles.css";

interface SvgIconType{
	filename: string,
}

const SvgIcon = ({ filename } : SvgIconType) => {
	const [svgContent, setSvgContent] = useState<string | undefined>();
	
	const getContent = async () => {
		const res =  await fetch(`api/images/convertSvg`, {
			method: 'POST', 
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({filename})
		})
		const fileContent = await res?.text()	
		setSvgContent(fileContent)
	}

	useEffect(() => {
		getContent();
	}, []);

	if(!svgContent) return null

	return (
		<div dangerouslySetInnerHTML= {{ __html: svgContent}} ></div>
	)
}

export default SvgIcon
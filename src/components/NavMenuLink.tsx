import React, { useEffect, useRef, useState } from 'react'

interface NavMenuLink{
	label: string
	selected: boolean
	id: string
	updateHiddenLabels: Function
}

const NavMenuLink = ({ label, selected, id, updateHiddenLabels } : NavMenuLink) => {
	const [hide, setHide] = useState(false)
	const myRef = useRef() as React.MutableRefObject<HTMLInputElement>;

	useEffect(() => {
		if(myRef.current){
			const topPos = myRef.current.offsetTop;
			console.log(topPos)
			if (topPos > 35) {
				updateHiddenLabels(id)
				setHide(true)
			}
		}
		
  }, [])

	console.log(hide)

  return (
		<div ref={myRef} className={selected ? 'nav-menu-item-selected' : 'nav-menu-item'}>
			{label}
		</div> 
  )
}

export default NavMenuLink
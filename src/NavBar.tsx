import React from 'react'
import SvgIcon from './SvgIcon'

const Navbar = () => {
  return (
	<nav>
		<div>
			<h3>
				<SvgIcon  filename= 'flour' cssFilename='svgStyles' />
				<SvgIcon  filename= 'circle' cssFilename='circle'/>
				My React App
			</h3>
		</div>
		<div>
			Menu long
		</div>
		<div>
			<div>Mobile Menu</div> 
			<div>
				<div>Store</div>
				<div>Free stuff</div>
				<div>Games</div>
			</div>
		</div>
	</nav>
  )
}

export default Navbar
import React from 'react'
import SvgIcon from './SvgIcon'
import svg from './flour.svg'
import image from './assets/images/github-logo.png'

const Navbar = () => {
  return (
	<nav>
		<div>
			<h3>
				<SvgIcon  filename= 'flour'/>
				<img src={image} alt="image logo"></img>
				<img src={svg} alt="image logo"></img>
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
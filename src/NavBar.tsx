import React from 'react'
import SvgIcon from './SvgIcon'
import SvgIconAsImage from './components/SvgIconAsImg'
import MyImage from './components/MyImage'
import src2 from '../resources/images/plazi.jpg'
import src3 from './assets/images/github-logo.png'
import SvgImageComponent from './components/SvgImageComponent'

const Navbar = () => {
  return (
	<nav>
		<div>
			<h3>
				<SvgImageComponent imageFilename='flour' stylesFilename='flour' />
				<SvgIcon  filename= 'flour' cssFilename='svgStyles' />
				<SvgIcon  filename= 'circle' cssFilename='circle'/>
				<SvgIconAsImage  filename= 'circle' cssFilename='circle'/>
				<MyImage filename = 'other'/>
				<MyImage filename = 'plazi'/>
				<img src={src2}></img>
				<img src={src3}></img>
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
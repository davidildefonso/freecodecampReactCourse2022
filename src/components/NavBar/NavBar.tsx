import React, {useState, useEffect} from 'react'
import NavMenuLink from '../NavMenuLink'
import SvgImageComponent from '../SvgImageComponent'
import './styles.css'

const Navbar = () => {
	
	const menuData = [
		{
			id: 'menu-1',
			selected: true,
			label: 'HOME'
		},
		{
			id: 'menu-2',
			selected: false,
			label: 'SOMETHING'
		},
		{
			id: 'menu-3',
			selected: false,
			label: 'FREE STUFF'
		},
		{
			id: 'menu-4',
			selected: false,
			label: 'GAMES'
		},
		{
			id: 'menu-5',
			selected: false,
			label: 'FORUM'
		},
		{
			id: 'menu-6',
			selected: false,
			label: 'CHALLENGE'
		}
	]

	const [hiddenLabels, setHiddenLabels] = useState([])

	useEffect(() => {
		console.log(hiddenLabels)
	}, [hiddenLabels])
	
	const updateHiddenLabels = (id : number) => {
		setHiddenLabels((prevState) : any => {
			return [...prevState, id]
		})
	}

  return (
		<nav className = "container">
			<div>			
					<SvgImageComponent imageFilename='flour' stylesFilename='flour' />
			</div>
			<div className='menu'>
				{menuData.map(({ id, selected, label}) => 
					<NavMenuLink 
						selected={selected} 
						label={label} 
						key={id}
						id={id}
						updateHiddenLabels={updateHiddenLabels}
					/> )}
			</div>
			<div className='mobile-menu'>
				<SvgImageComponent imageFilename='hamburger' stylesFilename='hamburger' />
			</div> 
		</nav>
  )
}

export default Navbar
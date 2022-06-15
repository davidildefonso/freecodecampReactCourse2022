import React from 'react'

const MainContent = () => {
  return (
	<main>
		<h1>this is the main content</h1>
		<section>
			<article>
				<header>this is an article title</header>
				<section>the content of the article in the section</section>
			</article>
		</section>
		<section>
			<article>
				<header>this is another article title</header>
				<section>the content of the second article in the second section</section>
			</article>
		</section>
	</main>
  )
}

export default MainContent
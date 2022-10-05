import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import Planets from "../assets/planets.inline.svg"
import Stars from "../assets/star.inline.svg"
import Github from '../assets/github.inline.svg'

const DryPeaks = () => {
	return (
		<StaticImage
			src="../images/221004_dp-homepage_lg.jpg"
			alt="Dry Peaks Homepage"
			placeholder="blurred"
		/>
	)
}

const PortfolioPage = () => (
	<Layout>
		<h1 className="page-title">portfolio</h1>
		<section className="top-content">
			<div>
				<a alt="link to drypeaks online store" href="https://www.drypeaks.com"><DryPeaks /></a>
				<p className="caption">The first interation of <a href="https://www.drypeaks.com">drypeaks</a> online athleisure store is a React/GatsbyJS frontend dual sourced from headless Shopify and headless Sanity.io backends.</p>
				<h1>Purpose</h1>
				<p className="caption">To drive the development of web and software projects that deliver value to the customer and the community at large, including <a href="https://www.drypeaks.com">drypeaks</a> online athleisure store and more! The purpose of this portfolio is to demontrate coding skills and all around technical aptitude.</p>
			</div>
		</section>
		<section className="mid-content">
			<article className="mid-flow">
				<div className="svg">
					<Planets alt="planets" />
				</div>
																					{/* drypeaks */}
				<div>
					<a href="https://www.drypeaks.com">
						<h3 className="project-link">drypeaks online store</h3>
					</a>
					<p>Version 1.0 of drypeaks online athleisure store presents the following features:</p>	
					<ul>
						<li>Built with
							<a className="dark-link" aria-label="gatsby" href="https://gatsbyjs.com"> Gatsby, </a>
								a frontend framework based on the opensource 
							<a className="dark-link" aria-label="react" href="https://reactjs.org"> React </a>
							library. Gatsby is a blazing-fast static site builder that comes out of the box with SEO and image handling. This UI stems from the Gatsby Shopify starter</li>
						<li>Taking advantage of modern jamstack technology, the frontend is hosted by
							<a className="dark-link" aria-label="netlify" href="https://netlify.com"> Netlify </a>
								with CI/CD (Continuous Integration and Continuous Deployment) via Github commits.</li>
						<li>Custom backend and CMS (Content Management Studio) built with and hosted by
							<a className="dark-link" aria-label="sanity" href="https://sanity.io"> Sanity.io</a>
						</li>
						<li>
							<a className="dark-link" aria-label="graph q l" href="https://graphql.org">GraphQL </a>
							is implemented to traverse the Gatsby and Sanity APIs</li>
						<li>
							<a href="https://www.shopify.com/plus/solutions/headless-commerce">Headless Shopify</a> 
						</li>	
					</ul>
					<p>There is no link to the GitHub repo because this, currently-solo project, is a private commercial endeavor</p>
				</div>
				<div>
																			{/* Clark Blog 4.0 */}
					<a href="/">
						<h3 className="project-link">clarknewell.tech 4.0</h3>
					</a>
					<p>Version 4.0 of my personal website presents the following features:</p>	
					<ul>
						<li>Built with
							<a className="dark-link" aria-label="gatsby" href="https://gatsbyjs.com"> Gatsby, </a>
								a frontend framework based on the opensource 
							<a className="dark-link" aria-label="react" href="https://reactjs.org"> React </a>
							library. Gatsby is a blazing-fast static site builder that comes out of the box with SEO and image handling. This UI stems from the default starter
						</li>
						<li>Taking advantage of modern jamstack technology, the frontend is hosted by
							<a className="dark-link" aria-label="netlify" href="https://netlify.com"> Netlify </a>
							with CI/CD (Continuous Integration and Continuous Deployment) via Github commits. Netlify also provides the honeypot and data transfer for the contact form
						</li>
						<li>Custom backend and CMS (Content Management Studio) built with and hosted by
							<a className="dark-link" aria-label="sanity" href="https://sanity.io"> Sanity.io</a>
						</li>
						<li>
							<a className="dark-link" aria-label="graph q l" href="https://graphql.org">GraphQL </a>
							is implemented to traverse the Gatsby and Sanity APIs
						</li>
						<li>
							<a className="dark-link" aria-label="sass" href="https://sass-lang.com">Sass, </a>
							<a className="dark-link" aria-label="typography.js" href="https://kyleamathews.github.io/typography.js/"> Typography.js, </a>
							<a className="dark-link" aria-label="react syntax highlighter" href="https://www.npmjs.com/package/react-syntax-highlighter">React Syntax Highlighter, </a> 
							and a custom responsive grid are implemented for CSS styling with a *mobile first* approach
						</li>
						<li>Artwork sourced from and credited to
							<a className="dark-link" aria-label="flaticon" href="https://www.flaticon.com"> flaticon </a>and accessbility audit performed with
							<a className="dark-link" aria-label="wave" href="https://wave.webaim.org/"> WAVE </a>
						</li>
						<li>This solo project features custom self-designed logo/branding and original blog content</li>
					</ul>
					<span className="button-box">
						<button className="repo-link">	
						<a href="https://github.com/WCNewell/clark-front-four">
							<Github className='portfolio-icon' alt='github icon' />
								<p>View the code on Github</p>
							</a>
						</button>
					</span>
				</div>
				<div>
																					{/* Clark Blog 3.0 */}
					<a href="">
						<h3 className="project-link">clarknewell.tech 3.0</h3>
					</a>
					<p>Version 3.0 of my personal website presents the following features:</p>	
					<ul>
						<li>Built with
							<a className="dark-link" aria-label="gatsby" href="https://gatsbyjs.com"> Gatsby, </a>
								a frontend framework based on the opensource 
							<a className="dark-link" aria-label="react" href="https://reactjs.org"> React </a>
							library. Gatsby is a blazing-fast static site builder that comes out of the box with SEO and image handling. This UI stems from the default starter</li>
						<li>Taking advantage of modern jamstack technology, the frontend is hosted by
							<a className="dark-link" aria-label="netlify" href="https://netlify.com"> Netlify </a>
								with CI/CD (Continuous Integration and Continuous Deployment) via Github commits. Netlify also provides the honeypot and data transfer for the contact form</li>
						<li>Custom backend and CMS (Content Management Studio) built with and hosted by
							<a className="dark-link" aria-label="sanity" href="https://sanity.io"> Sanity.io</a>
						</li>
						<li>
							<a className="dark-link" aria-label="graph q l" href="https://graphql.org">GraphQL </a>
							is implemented to traverse the Gatsby and Sanity APIs</li>
						<li>
							<a className="dark-link" aria-label="sass" href="https://sass-lang.com">Sass, </a> 
							<a className="dark-link" aria-label="styled components" href="https://styled-components.com"> Styled Components, </a>
							<a className="dark-link" aria-label="typography.js" href="https://kyleamathews.github.io/typography.js/"> Typography.js, </a>
							<a className="dark-link" aria-label="react syntax highlighter" href="https://www.npmjs.com/package/react-syntax-highlighter">React Syntax Highlighter, </a> 
							and a custom responsive grid are implemented for CSS styling</li>
						<li>Light and dark "star" modes are implemented with context and state management via React hooks, and the 
							<a className="dark-link" aria-label="use dark mode" href="https://www.npmjs.com/package/use-dark-mode"> useDarkMode </a>
							plugin
						</li>
						<li>Testing created with
							<a className="dark-link" aria-label="jest" href="https://jestjs.io/"> Jest </a>and accessbility audit performed with
							<a className="dark-link" aria-label="wave" href="https://wave.webaim.org/"> WAVE</a>
						</li>
					</ul>
					<span className="button-box">
						<button className="repo-link">	
							<a href='https://github.com/WCNewell/clark-blog-gatsby'>
							<Github className='portfolio-icon' alt='github icon' />
								<p>View the code on Github</p>
							</a>
						</button>
					</span>
				</div>
				<div className="svg">
					<Stars alt="stars" />
				</div>
				<div>
																			{/* Clark's Slices */}
					<a aria-label="clarks slices" href='https://clarks-slices.netlify.app/'>
						<h3 className="project-link">Clark's Slices</h3>
					</a>
					<p>Completed the entire Master-Gatsby course from Wes Bos and this is the resulting demo.</p>
					<span className="button-box">
						<button className="repo-link">	
							<a aria-label="github" href='https://github.com/WCNewell/master-gatsby'>
								<Github className='portfolio-icon' alt='github icon' />
								<p>View the code on Github</p>
							</a>
						</button>
					</span>
																		{/* Max Hamburger */}
					<a aria-label="max hamburger" href='https://wcnewell.github.io/max-hamburger/'>
						<h3 className="project-link">Max Hamburger</h3>
					</a>
					<p>Completed the entire Udemy React course from Maximilian Schwarzmueller and this is the resulting demo.</p>
					<span className="button-box">
						<button className="repo-link">	
							<a aria-label="github" href='https://github.com/WCNewell/max-hamburger'>
								<Github className='portfolio-icon' alt='github icon' />
								<p>View the code on Github</p>
							</a>
						</button>
					</span>
					
																			{/* Vuetiful Goals */}
					<a aria-label="vuetiful goals" href='https://vuetiful-goals.firebaseapp.com/#/goals'>
						<h3 className="project-link">Vuetiful Goals</h3>
					</a>
					<p>Very first CRUD (Create, Read, Update, Delete) application completed while at Galvanize using Vue.js.</p>
					<span className="button-box">
						<button className="repo-link">	
							<a aria-label="github" href='https://github.com/WCNewell/VuetifulGoals-client'>
								<Github className='portfolio-icon' alt='github icon' />
								<p>View the code on Github</p>
							</a>
						</button>
					</span>
				</div>
			</article>
		</section>
	</Layout>
)

export const Head = () => <Seo title="Portfolio" />

export default PortfolioPage
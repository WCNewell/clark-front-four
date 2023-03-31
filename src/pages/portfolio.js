import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import Planets from "../assets/planets.inline.svg"
import LevelUp from "../assets/leveluptwo.inline.svg"
import Social from "../assets/socialmedia.inline.svg"
import Github from '../assets/github.inline.svg'

const DryPeaks = () => {
	return (
		<StaticImage
			src="../images/230120_DryPeaks-Remix.JPG"
			alt="Dry Peaks Homepage"
			placeholder="blurred"
			width={1500}
		/>
	)
}

const PortfolioPage = () => (
	<Layout>
		<h1 className="page-title">portfolio</h1>
		<section className="top-content">
			<div>
				<DryPeaks />
				<p className="image-caption">An alternate custom version of <a href="https://www.drypeaks.com">Dry Peaks</a> Sportswear's online store is being developed with React Remix and Crystallize API</p>
				<h2>Purpose</h2>
				<p className="caption">To drive the development of web/software/e-commerce and social media projects that deliver value to the customer and the community at large.</p>
			</div>
		</section>
		<section className="mid-content">
			<article className="mid-flow">
				<div className="svg">
					<Planets alt="planets" />
				</div>
				<div>
																				{/* drypeaks 1.0*/}
					<a href="https://www.drypeaks.com">
						<h3 className="project-link">Dry Peaks Sportswear Alternate 1.0</h3>
					</a>
					<p>In order to focus on product development at this time, <a href="https://www.drypeaks.com">Dry Peaks</a> Sportswear's website is currently a customized Shopify template. We are experimenting in the background with two custom alternatives. The first one is a <a href="https://stellular-begonia-b45d0d.netlify.app/">Gatsby on React frontend</a> using Shopify as a headless API.</p>	
					<ul>
						<li>Built with
							<a className="dark-link" aria-label="gatsby" href="https://gatsbyjs.com"> Gatsby, </a>
								a frontend framework based on the opensource 
							<a className="dark-link" aria-label="react" href="https://reactjs.org"> React </a>
							library. Gatsby is a blazing-fast static site builder that comes out of the box with SEO and image handling. This UI stems from the Gatsby Shopify Starter</li>
						<li>Taking advantage of modern jamstack technology, the frontend is hosted by
							<a className="dark-link" aria-label="netlify" href="https://netlify.com"> Netlify </a>
								with CI/CD (Continuous Integration and Continuous Deployment) via Github commits</li>
						<li>Custom CMS (Content Management Studio) for blog content built with and hosted by
							<a className="dark-link" aria-label="sanity" href="https://sanity.io"> Sanity.io</a>
						</li>
						<li>
							<a className="dark-link" aria-label="graph q l" href="https://graphql.org">GraphQL </a>
							is implemented to traverse Gatsby, Shopify and Sanity APIs
						</li>
						<li>
							<a href="https://www.shopify.com/plus/solutions/headless-commerce">Headless Shopify</a> provides the PIM (Product Information Management)
						</li>
						<li>Original photography and graphic design enhanced by or created with Adobe Photoshop, Lightroom and Illustrator</li>	
					</ul>
					<p>There is no link to the GitHub repo because this is a private, commercial endeavor</p>
				</div>
				<div>
																					{/* drypeaks 2.0*/}
					<a href="">
						<h3 className="project-link">Dry Peaks Sportswear Alternate 2.0</h3>
					</a>
					<p>A second alternate (not yet launched) of Dry Peaks Sportswear's online store presents the following features:</p>	
					<ul>
						<li>Built with
							<a className="dark-link" aria-label="remix" href="https://remix.run"> Remix, </a>
								a full stack web framework based on the opensource 
							<a className="dark-link" aria-label="react" href="https://reactjs.org"> React </a>
							library. This UI is based on the Remix boilerplate from 
							<a className="dark-link" aria-label="crystallize" href="https://crystallize.com"> Crystallize</a>
						</li>
						<li>The full stack eCommerce app is hosted by
							<a className="dark-link" aria-label="fly.io" href="https://fly.io"> Fly.io </a></li>
						<li>Custom PIM (Product Information System), CMS (Content Management Studio) and DAM (Digital Asset Management) built with and hosted by
							<a className="dark-link" aria-label="crystallize" href="https://crystallize.com"> Crystallize</a>
						</li>
						<li>
							<a className="dark-link" aria-label="tailwind css" href="https://tailwindcss.com">Tailwind CSS </a>
							is implemented for CSS styling
						</li>
						<li>
							Customer login or guest checkout with payment services provided by <a href="https://www.stripe.com">Stripe</a>
						</li>
						<li>Original photography and graphic design enhanced by or created with Adobe Photoshop, Lightroom and Illustrator</li>
					</ul>
					<p>There is no link to the GitHub repo because this is a private, commercial endeavor</p>
				</div>
				<div className="svg">
					<LevelUp alt="level up" />
				</div>
				<div>
																					{/* Clark Blog 3.0 */}
					<a href="https://gracious-hoover-8389b4.netlify.app/">
						<h3 className="project-link">clarknewell.tech 3.0</h3>
					</a>
					<p>Version 3.0 of my personal website presents the following features:</p>	
					<ul>
					<li>Custom website built with
							<a className="dark-link" aria-label="gatsby" href="https://gatsbyjs.com"> Gatsby, </a>
								a frontend framework based on the opensource 
							<a className="dark-link" aria-label="react" href="https://reactjs.org"> React </a>
							library. Gatsby is a blazing-fast static site builder that comes out of the box with SEO and image handling
						</li>
						<li>Custom CMS (Content Management Studio) for blog content built with and hosted by
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
				<div>
																			{/* Clark Blog 4.0 */}
					<a href="/">
						<h3 className="project-link">clarknewell.tech 4.0</h3>
					</a>
					<p>Version 4.0 of my personal website presents the following features:</p>	
					<ul>
						<li>Custom website built with
							<a className="dark-link" aria-label="gatsby" href="https://gatsbyjs.com"> Gatsby </a>
						</li>
						<li>Taking advantage of modern jamstack technology, the frontend is hosted by
							<a className="dark-link" aria-label="netlify" href="https://netlify.com"> Netlify </a>
							with CI/CD (Continuous Integration and Continuous Deployment) via Github commits. Custom CMS (Content Management Studio) for blog content built with and hosted by
							<a className="dark-link" aria-label="sanity" href="https://sanity.io"> Sanity.io</a> Gatsby and Sanity APIs are traversed by <a className="dark-link" aria-label="graph q l" href="https://graphql.org">GraphQL </a>
						</li>
						<li>
							<a className="dark-link" aria-label="sass" href="https://sass-lang.com">Sass, </a>
							<a className="dark-link" aria-label="styled components" href="https://styled-components.com"> Styled Components, </a>
							<a className="dark-link" aria-label="typography.js" href="https://kyleamathews.github.io/typography.js/"> Typography.js, </a>
							<a className="dark-link" aria-label="react syntax highlighter" href="https://www.npmjs.com/package/react-syntax-highlighter">React Syntax Highlighter, </a> 
							and a custom responsive grid are implemented for CSS styling with a *mobile first* approach
						</li>
						<li> 
							<a className="dark-link" aria-label="pure react carousel" href="https://express-labs.github.io/pure-react-carousel"> Pure React Carousel by Express </a>
							(yes, the clothing company) is implemented for the testimonial carousel
						</li>
						<li>This website features self-designed original logo / branding, and original blog content. Artwork sourced from
							<a className="dark-link" aria-label="flaticon" href="https://www.flaticon.com"> Flaticon </a>
						</li>
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
				<div className="svg">
					<Social alt="social media smile, hearts and thumbs up" />
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
					
																			{/* Vuetiful Goals
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
					</span> */}
				</div>
			</article>
		</section>
		<section className="bottom-content">
			<Link to="/blog">
        <button className="repo-link"><b>Read Blog Posts</b></button>
      </Link>
		</section>
	</Layout>
)

export const Head = () => <Seo title="Portfolio" />

export default PortfolioPage
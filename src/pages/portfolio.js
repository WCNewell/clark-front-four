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
				<a><DryPeaks /></a>
				<p className="caption">The first interation of drypeaks online athleisure store is a React/GatsbyJS frontend dual sourced from headless Shopify and headless Sanity.io backends.</p>
				<h1>Purpose</h1>
				<p className="caption">To drive the development of web and software projects that deliver value to the customer and the community at large, including drypeaks online athleisure store and more! The purpose of this portfolio is to demontrate technical aptitude.</p>
			</div>
		</section>
		<section className="mid-content">
			<article className="midflow">
				<div className="svg">
					<Planets alt="planets" />
					</div>
					{/* drypeaks */}
					<a href='/'>
						<h3 className="project-link">drypeaks online store</h3>
					</a>
					<p>Version 1.0 of drypeaks online athleisure store presents the following features:</p>	
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
							<a href="https://www.shopify.com/plus/solutions/headless-commerce">Headless Shopify</a> 
						</li>	
					</ul>
			</article>
		</section>
	</Layout>
)

export const Head = () => <Seo title="Portfolio" />

export default PortfolioPage
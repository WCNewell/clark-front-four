import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import downLoadFile from '../assets/Newell_William-Clark_Resume-Full.pdf'
import Diploma from "../assets/diploma.inline.svg"
import StartUp from '../assets/start-up.inline.svg'
import LevelUp from '../assets/level.inline.svg'
import Rainbow from "../assets/rainbow-two.svg"

const ClarkAlyeska = () => {
  return (
		<StaticImage
			src='../images/IMG_2776-Edited.jpg'
			alt="Clark Newell at Alyeska Ski Resort"
			placeholder="blurred"
		/>
	)
}

const DryPeaksLogo = () => {
	return (
		<StaticImage
			src='../images/221115_drypeaksFont.png'
			alt="Dry Peaks Logo"
			placeholder="blurred"
			width={300}
		/>
	)
}

const AboutPage = () => (
  <Layout>
		<h1 className="page-title">about</h1>
		<section className="top-content">
			<div>
				<ClarkAlyeska />
				<p className="image-caption">Hello World! I'm an entrepreneur/business owner, customer service manager, outdoorsman, and CrossFit athlete. Photo of myself on the Alyeska headwall by Robyn Newell, July 2021.</p>
				<h2>Goal</h2>
				<p className="caption">To support, uplift, and coach my team as a Project Manager.
				<strong><a alt="link to download pdf resume" href={downLoadFile} download> Download My Resume.</a></strong></p>
			</div>
		</section>		
		<section className="mid-content">
			<article className="mid-flow">
				<div className="svg">
					<Diploma alt="education" />
				</div>
				<div>
					<ul>
						<h3>Certified Scrum Master</h3>
						<h4>Six Sigma Global Institute, Jan 2023</h4>
						<p>
							Successfully completed and passed the <a href="https://www.6sigmacertificationonline.com/">Six Sigma Global Institute's </a>Scrum Master Certification training program and certification exam. <a href="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/66546310">View the Accredible Badge.</a>
						</p>
					</ul>
					<ul>
						<h3>Certified Associate Project Manager</h3>
						<h4>Project Management Institute, Feb 2022</h4>
						<p>As member of 
							<a href="https://www.pmi.org/"> PMI,</a> the global authority on project management best practices and producer of PMBOK, the Project Management Body of Knowledge, completed the CAPM online course and certification exam. <a className="dark-link" href="https://www.credly.com/badges/1cfcdd1d-6612-493e-9454-d4c76d8cbe53/public_url">View the Credly Badge.</a>	
						</p>
					</ul>
					<ul>
						<h3>Certified Web Developer</h3>
						<h4>Galvanize + Hack Reactor, Jul 2018</h4>
						<p><a href="https://www.galvanize.com/"> Galvanize,</a> in association with Hack Reactor, provides a 6-month coding bootcamp which trains participants in building full-stack JavaScript web applications. In a fully immersive developer environment, Galvanize participants complete industry focused drills, including front-end frameworks, building back-end databases with API CRUD connectivity, pair programming, and agile workflow.</p>	
					</ul>
					<ul>
						<h3>Bachelor of Arts in Music, German Minor</h3>
						<h4>University of Utah, Jul 2013</h4>
						<p>Completed a liberal arts degree in music along with a German minor. Also intentionally completed multiple business, communication and marketing electives all while working full time as an administrator for the College of Engineering.</p>	
					</ul>
				</div>
				<div className="svg">
					<StartUp alt="start up rocket" />
				</div>
					<div>
						<div className="drypeakslogo">
							<DryPeaksLogo />
						</div>
						<a href="https://www.drypeaks.com"><h3>Founder and Business Owner</h3></a>
						<p>Sept 2022 - Current</p>
						<ul>
							<li>A side hustle working nights and weekends, wear all the hats while directing the design, development, and sales of moisture wicking sportswear available via <a href="https://www.drypeaks.com">online store.</a></li>
							<li>Principal Web Developer, manage PIM and CMS backends (eventually migrating from Shopify and Sanity.io to Crystallize) while building a custom React frontend (eventually migrating from Shopify to Gatsby or Remix)</li>
							<li>Lead Digital Marketing Manager, Photographer and Graphic Designer creating and running a digial marketing campaign on social media while creating original blog content</li>
							<li>Personally pack and ship all orders, manufacture prototype products, and develop tech packs for suppliers</li>
							<li>Oversee business licenses, finances, taxes and trademark applications</li>
							<li>I am looking for collaborators and business partners, so please feel free to <a href="mailto:contact@drypeaks.com">contact Dry Peaks</a></li>
						</ul>
					</div>
					<div>
						<h3>Customer Service Manager - Kroger dba Smith's Marketplace</h3>
						<p>Sept 2018 - Current</p>
						<ul>
							<li>Keyholder, responsible for supervising all operations of a 170,000 sq. ft. superstore in the evenings, while directly managing up to 30 people per shift in the Front End Department</li>
							<li>Respond in real time to constant fluctuations in business volume, and resolve customer feedback</li>
							<li>Ensure maintenance and operability of check-out technology including self-checkout robots and SmartSafe while protecting substantial cash assets</li>
							<li>Trained in inventory ordering as well as selection and curbside delivery of online Pickup orders</li>
						</ul>
					</div>
					<div>
						<h3>Full Stack Software Development Intern - Red Pepper Software</h3>
						<p>Jan 2019 - Nov 2019</p>
						<ul>
							<li>Using Jira as the productivity tool with scrum methodology and agile workflow, assisted team with QA, pair programming, code review and full stack coding assignments building proprietary software for multiple clients</li>
							<li>While managing multiple tickets on strict tempo timers, switched between different tech stacks and languages</li>
							<li>Worked in frontend web and mobile development using HTML, CSS, Sass, JavaScript, TypeScript, PHP,  Razor, Xamarin.iOS, and JS frameworks such as Angular</li>
							<li>Customized templates on e-commerce platforms such as Shopify and blog-sites such as WordPress and Magento</li>
							<li>Worked in backend development using C#, ASP.NET, Entity framework and SQL</li>
						</ul>
					</div>
					<div className="svg">
						<LevelUp alt="level up" />
					</div>
					<div>
						<h3 className>Project Coordinator - University of Utah</h3>
						<p>Dec 2007 - Jul 2014</p>
						<ul>
							<li>Former Assistant to the Director of the Center for Engineering Innovation in the Dept. of Electrical & Computer Engineering and Nanotechnology Institute of Utah</li>
							<li>Coordinated the design and development of websites, social media, and marketing materials</li>
							<li>Coordinated multiple submissions of multi-million dollar, interdisciplinary grant proposals to NIH, NSF and DARPA and was trained in pre- and post-award management by the University's Office of Research Administration</li>
							<li>Organized and supervised special events and conferences including venue selection, catering, promotion, sponsorship, and media materials</li>
							<li>Coordinated project and customer resource management using CRM tools such as Pipedrive and Zoho</li>
						</ul>
					</div>
					{/* <div>
						<h3 className>Assistant Manager - Flynn Restaurant Group</h3>
						<p>Jan 2016 - Nov 2016</p>
						<ul>
							<li>Trained to oversee every aspect of full service Applebee's restaurants</li>
							<li>Singlehandedly ran restaurants while supervising up to 30 people per day</li>
							<li>Learned and performed with proficiency, every single role in the front and back of house</li>
							<li>Managerial duties included daily/weekly inventory, supply orders, interviewing, hiring, training, and promoting special marketing events</li>
						</ul>
					</div>
					<div>
						<h3 className>Account Administrator - Great West Financial</h3>
						<p>Aug 2014 - Jul 2015</p>
						<ul>
							<li>As part of the cash processing team, provided expeditious and accurate distribution of retirement contributions for various retirement plans and their participants</li>
							<li>Monitored, researched, adjusted and cleared outstanding items in all suspense accounts</li>
							<li>Trained to become a subject matter expert in IRA direct rollovers and plan-to-plan transfers</li>
						</ul>
					</div>	 */}
			</article>
		</section>
		<section className="bottom-content">
			<div className="svg">
				<Rainbow alt="rainbow"/>
			</div>
			<h2>Service</h2>
			<div>
				<h3>Co-organizer</h3>
				<h4 className="service">Queer Tech Utah</h4>
				<p className="service">Organized social networking events and technology discussions for the LGBTQIA+ developer and tech community in the Salt Lake City, Utah area via meetup. Also chaired a Diversity and Inclusion discussion panel for the Silicon Slopes organization.</p>
			</div>
			<div>
				<h3>Co-organizer</h3>
				<h4 className="service">Denver LGBT Tech</h4>
				<p className="service">Organized social networking events and technology discussions for the LGBTQIA+ developer and tech community in the Denver, Colorado area via meetup.</p>	
			</div>
			<Link to="/portfolio">
          <button className="repo-link"><b>See Portfolio</b></button>
      </Link>
		</section>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
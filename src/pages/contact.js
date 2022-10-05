import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Megaphone from "../assets/megaphone.inline.svg"

const GatsbyAstronaut = () => {
  return (
    <StaticImage
      src='../images/gatsby-astronaut.png'
      className="astro-image"
      alt="Gatsby Astronaut"
      placeholder="blurred"
    />
  )
}

const ContactPage = () => (
  <Layout>
    <h1 className="page-title">contact</h1>
    <div className="mid-content">
      <article className="mid-flow">
        <div className="svg">
          <Megaphone />
        </div>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label>
              <h4>email</h4>
              <input className="form-input" type="email" name="email" placeholder=" email address" />
            </label>
          </div>
          <div>
            <label>
              <h4>name</h4>
              <input className="form-input" type="text" name="name" placeholder=" name"/>
            </label>
          </div>
          <div>
            <label>
              <h4>message</h4>
              <textarea className="form-input" type="text" name="message" rows="6"/>
            </label>
            <div> 
              <button className="form-button">
                <h4 className="send-link">send</h4>
              </button>
            </div>
          </div>
        </form>
      </article>
    </div>
    <section className="bottom-content">
      <div className="egg-box">
        <a alt="Gatsby Astronaut" href="https://www.gatsbyjs.com"><GatsbyAstronaut /></a>
        <p className="caption">You found the "easter egg"! Hello from the OG Gatsby Spaceman. Image design by Gatsby.</p>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Contact" />

export default ContactPage

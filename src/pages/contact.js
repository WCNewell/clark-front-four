import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <h1>contact</h1>
    <p>Reach out and touch someone</p>
    <div className="grid-one">
          <h1 className="page-title">contact form</h1>
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
        </div>
      <div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Contact" />

export default ContactPage

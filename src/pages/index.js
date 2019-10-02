import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="site-name">
      <p className="text-center mb-0 text-secondary" style={{
        fontSize: '25px',
        fontStyle: 'italic'
      }}>" Eager to learn, love Coding & Designing "</p>

      <h4 className="site-name my-5 text-center text-dark" style={{ lineHeight: '2em' }}>
        Hello ! <br />
        I am Tin Ko Hein ,<br />
        holding diploma of Information Technology ,<br />
        who lived in Yangon , Myanmar
      </h4>

      <div className="row">
        <div className="col-12 col-sm-6 mb-4">
          <b className="text-secondary">DATE OF BIRTH</b><br />
          <small>— 11.10.1982</small>
        </div>

        <div className="col-12 col-sm-6 mb-4">
          <b className="text-secondary">NRC NO.</b><br />
          <small>— 10/TPZT(N) 089162</small>
        </div>

        <div className="col-12 col-sm-6 mb-4">
          <b className="text-secondary">RACE</b><br />
          <small>— Mon Nationality</small>
        </div>

        <div className="col-12 col-sm-6 mb-4">
          <b className="text-secondary">LANGUAGES</b><br />
          <small>— Mon, Myanmar, English, Vietnamese, Chinese, Malaysian</small>
        </div> 

        {/* <div className="col-12 col-sm-6 mb-4">
          <b className="text-secondary">EDUCATION</b><br />
          <small><strong>2000 — 2002</strong> <br />Diploma in Information Technology, studied at Government Technical College (Mawlamyine)</small>
          <br /><br />
          <small><strong>April 2004 — November 2004</strong> <br />Basic Spoken English, Pre-Intermediate English Proficiency & Intermediate with certificates in Yangon English Services (Y.E.S) Language Centre</small>
          <br /><br />
          <small><strong>June 2014 — November 2018</strong> <br />Web Development , Web Development with PHP & Drupal CMS with certificates in Efficient Soft</small>
        </div> 

        <div className="col-12 col-sm-6 mb-4">
          <b className="text-secondary">ADDRESS</b><br />
          <small>— Yangon , Myanmar</small>
          <br />
          <small>— <a href="tel:+959441588759" target="_blank" className="text-decoration-none text-dark" rel="noopener noreferrer"><strong>09 441588759</strong></a></small>
          <br />
          <small>— <a href="mailto:tinkohein.oo@gmail.com" target="_blank" className="text-decoration-none text-dark" rel="noopener noreferrer"><strong>tinkohein.oo@gmail.com</strong></a></small>
        </div>  */}
      </div>

    </div>
  </Layout>
)

export default IndexPage

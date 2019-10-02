import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Education = () => (
    <Layout>
        <SEO title="Eduction" />
        <div className="site-name">
            <p className="text-center mb-0 text-secondary mb-5" style={{
                fontSize: '25px',
                fontStyle: 'italic'
            }}>" Although there is sunset in everyevening, we all can't see and watch it in everyevening "</p>
            <b className="text-secondary">2000 — 2002</b><br />
            <small>Diploma in Information Technology, studied at Government Technical College (Mawlamyine)</small>
            <br /><br />
            <b className="text-secondary">APRIL 2004 — NOVEMBER 2004</b><br />
            <small>Basic Spoken English, Pre-Intermediate English Proficiency & Intermediate with certificates in Yangon English Services (Y.E.S) Language Centre</small>
            <br /><br />
            <b className="text-secondary">JUNE 2014 — NOVEMBER 2018</b><br />
            <small>Web Development , Web Development with PHP & Drupal CMS with certificates in Efficient Soft</small>
        </div>
    </Layout>
)

export default Education
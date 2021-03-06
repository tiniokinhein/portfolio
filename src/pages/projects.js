import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

import Myanmarorphans from '../images/myanmarorphans.jpg'
import Marykyapfoundation from '../images/marykyapfoundation.jpg'
import Waiyan from '../images/waiyan.jpg'
import BBG from '../images/bbg.jpg'
import DSW from '../images/dsw.jpg'
import KTS from '../images/kts.jpg'
import SYS from '../images/sys.jpg'
import SSK from '../images/ssk.jpg'
import SSDSW from '../images/ssdsw.jpg'
import MC from '../images/mc.jpg'
import BPPL from '../images/bppl.jpg'
import Yatkwat from '../images/yatkwat.jpg'
import GWI from '../images/gwi.jpg'
import WOM from '../images/wom.jpg'
import JIT from '../images/jit.jpg'
import AustCham from '../images/austcham.jpg'
import Janamon from '../images/janamon.jpg'
import FTP from '../images/ftp.png'
import BZ from '../images/bz.png'
import BS from '../images/bs.png'

const Projects = () => (
    <Layout>
        <SEO title="Working Experiences" />
        <div className="site-name">
            <div className="row">
                <div className="col-6 col-md-3 mb-3">
                    <a href="https://baganstore.netlify.app" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <img src={BS} alt="Bagan Store" className="mb-0 border" />
                        <p className="border border-top-0 m-0 px-3 py-4 bg-white text-dark text-decoration-none text-center site-name text-uppercase"><small>Visit</small></p>
                    </a>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <a href="https://zayweb.netlify.app" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <img src={BZ} alt="Bagan Zay" className="mb-0 border" />
                        <p className="border border-top-0 m-0 px-3 py-4 bg-white text-dark text-decoration-none text-center site-name text-uppercase"><small>Visit</small></p>
                    </a>
                </div>
    
                <div className="col-6 col-md-3 mb-3">
                    <a href="http://frontiertechnologypartners.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <img src={FTP} alt="Frontier Technology Partners" className="mb-0 border" />
                        <p className="border border-top-0 m-0 px-3 py-4 bg-white text-dark text-decoration-none text-center site-name text-uppercase"><small>Visit</small></p>
                    </a>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <a href="https://janamon.co/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <img src={Janamon} alt="Jana Mon - Ethnic Mon Cuisine" className="mb-0 border" />
                        <p className="border border-top-0 m-0 px-3 py-4 bg-white text-dark text-decoration-none text-center site-name text-uppercase"><small>Visit</small></p>
                    </a>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <a href="https://austchammyanmar.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <img src={AustCham} alt="AustCham Myanmar" className="mb-0 border" />
                        <p className="border border-top-0 m-0 px-3 py-4 bg-white text-dark text-decoration-none text-center site-name text-uppercase"><small>Visit</small></p>
                    </a>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <a href="http://jitmyanmar.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <img src={JIT} alt="JITIM Co., Ltd." className="mb-0 border" />
                        <p className="border border-top-0 m-0 px-3 py-4 bg-white text-dark text-decoration-none text-center site-name text-uppercase"><small>Visit</small></p>
                    </a>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <a href="https://yatkwat.netlify.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <img src={Yatkwat} alt="YatKwat" className="mb-0 border" />
                        <p className="border border-top-0 m-0 px-3 py-4 bg-white text-dark text-decoration-none text-center site-name text-uppercase"><small>Visit</small></p>
                    </a>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <a href="https://www.ssdsw.gov.mm" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <img src={SSDSW} alt="Department Of Social Welfare" className="mb-0 border" />
                        <p className="border border-top-0 m-0 px-3 py-4 bg-white text-dark text-decoration-none text-center site-name text-uppercase"><small>Visit</small></p>
                    </a>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <a href="https://www.dsw.gov.mm" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <img src={DSW} alt="Department Of Social Welfare" className="mb-0 border" />
                        <p className="border border-top-0 m-0 px-3 py-4 bg-white text-dark text-decoration-none text-center site-name text-uppercase"><small>Visit</small></p>
                    </a>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <a href="https://bbg.com.mm" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <img src={BBG} alt="Bagan Business Group" className="mb-0 border" />
                        <p className="border border-top-0 m-0 px-3 py-4 bg-white text-dark text-decoration-none text-center site-name text-uppercase"><small>Visit</small></p>
                    </a>
                </div>
            </div>
        </div>
    </Layout>
)

export default Projects

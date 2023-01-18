import React from 'react'
import {Container,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faLinkedin, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <div className='bg-footer'>
        <Container>
           <footer id='footer' className='footer-i '>
            <div className="main-foooter widgets-dark typo-light">
              <div className="container">
                <div className="row pt-5">

                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="widget subscribe no-box">
                      <h5 className="widget-title">M-LEARN <span></span></h5>
                      <p>We Are Dedicated To Improving Academic Performance For The Future Generation</p>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="widget subscribe no-box">
                      <h5 className="widget-title">Quick Links <span></span> </h5>
                    <ul className='thumbnail-widget'>
                      <li> <div className="thumb-content"> <a href="#">&nbsp;Get Started</a></div> </li>
                      <li> <div className="thumb-content"> <a href="#">&nbsp;Our Mission</a></div> </li>
                      <li> <div className="thumb-content"> <a href="#">&nbsp; Our Vision</a></div> </li>
                      <li> <div className="thumb-content"> <a href="#">&nbsp;Buy Me A Coffee</a></div> </li>
                    </ul>                    
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="widget subscribe no-box">
                      <h5 className="widget-title">Follow Up <span></span> </h5>
                      <a href="#"> <FontAwesomeIcon className='fontawesome' icon = {faGithub} /> </a>
                      <a href="#"> <FontAwesomeIcon  className='fontawesome' icon = {faTwitter} /> </a>
                      <a href="#"> <FontAwesomeIcon  className='fontawesome' icon = {faLinkedin} /> </a>
                      <a href="#"> <FontAwesomeIcon  className='fontawesome' icon = {faGoogle} /> </a>
                    </div>
                  </div>
                  <br />
                  <br />

                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="widget subscribe no-box">
                      <h5 className="widget-title">Contact Us <span></span> </h5>
                      <p>Ensure To Drop a Feedback Message. It Would Be Really Appreciated</p>
                      <div className="emailfield">
                      <form action="">
                      <input className='homeInput' type="text" name="email" placeholder='Email' />
                      <button className="submitbutton ripplelink" type='submit' value='subscribe'>Subscribe</button>
                      </form>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            <div className="footer-copyright">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <p>Copyright Onyewuchi Emeka &#169; 2022. All Rights Reserved</p>
                  </div>
                </div>
              </div>
            </div>
           </footer>
        </Container>
    </div>
  )
}

export default Footer
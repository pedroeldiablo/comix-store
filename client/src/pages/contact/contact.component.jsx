import React from 'react';
import { connect } from 'react-redux';

import SimpleSlider from '../../components/simple-slider/simple-slider.component';


import './contact.styles.scss';

const ContactPage = () => {
  
    
    return (

    <div className="contact-page">
        <h2 className='title'>Contact</h2> 
        <SimpleSlider />  
        <p>React Ecommerce Store built with Create React App, Styled Components, Firebase, Stripe and Heroku</p>
        <p>For more projects to get in touch visit <a href="http://www.peternicholaswilliams.com/">www.peternicholaswilliams.com/</a></p>
        <p>Or see <a href="https://github.com/pedroeldiablo/react-ecommerce">Github</a> to see how it's coded.</p>
    </div>

)
}



export default ContactPage;

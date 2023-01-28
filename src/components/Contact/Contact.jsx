import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import '../Contact/Contact.css'

function Contact() {
    return ( 
        <div className="contactFooter">
            <div className="wrapperFooter">
                <span>Be touch with us</span>
                <div className="email">
                <input type="email" class="form-control m-1" id="exampleFormControlInput1" placeholder="Enter your Email..."/>
                <button type="button" class="btn btn-primary m-1" style={{width:'8rem'}}>Join us</button>
                </div>
                <div className="icns">
                    <InstagramIcon className='m-1'/>
                    <WhatsAppIcon className='m-1'/>
                    <FacebookIcon className='m-1'/>
                    <TwitterIcon className='m-1'/>
                    <GoogleIcon className='m-1'/>
                </div>
            </div>
        </div>
     );
}

export default Contact;
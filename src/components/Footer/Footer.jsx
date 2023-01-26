import React from 'react';
import "./Footer.css";


function Footer() {
    return ( 
        <div className='footer'>
           <div className='topfooter'>
            <div className="itemfooter">
            <p style={{margin:'0px'}}><b>Categories</b></p>           
               <ul>
                <li><span>Medicinal Plants</span></li>
                <li><span>Climbers</span></li>
                <li><span>Orchids</span></li>
                <li><span>Herbs</span></li>
               </ul>     
            </div>
            <div className="itemfooter">
            <p  style={{margin:'0px'}}><b>Links</b></p>                     
            <ul>
                <li><span>Medicinal Plants</span></li>
                <li><span>Climbers</span></li>
                <li><span>Orchids</span></li>
                <li><span>Herbs</span></li>
               </ul> 
            </div>
            <div className="itemfooter">
            <p><b>Contact</b></p>
           <span style={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt exercitationem quo, adipisci suscipit, ad, earum repudiandae perspiciatis praesentium ut rerum tempora alias! </span>
            </div>
            <div className="itemfooter">
            <p><b>About</b></p>
           <span style={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt exercitationem quo, adipisci suscipit, ad, earum repudiandae perspiciatis praesentium ut rerum tempora alias!</span>
            </div>
           </div>
           <div className='bottomfooter'>
               <div className='leftfooter'>
                <b>© Copyright, All Rights Reserved</b>              
               </div>
               <div className="rightfooter" >
                <img src="img/payment.png" alt="" srcset="" style={{width:'14rem',height:'3rem'}}/>             
               </div>
           </div>
        </div>
     );
}

export default Footer;
import React , {useState} from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GrassIcon from '@mui/icons-material/Grass';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import ProductionQuantityLimitsTwoToneIcon from '@mui/icons-material/ProductionQuantityLimitsTwoTone';
import LocationSearchingTwoToneIcon from '@mui/icons-material/LocationSearchingTwoTone';
import "./Navbar.css";
import { Link } from 'react-router-dom';


function Navbar() {
   const [ navbar,setNavbar] = useState(false)
   const changeNavbarOpacity =()=>{
      if (window.scrollY >= 80) {
         setNavbar(false)
      }else{
         setNavbar(true)
      }
   }
   window.addEventListener('scroll',changeNavbarOpacity);

    return ( 
        
         <div className={navbar? 'wrapper': 'active'} >
         <div className='leftnav'>
         <div className='items'>
               <img src="img/india.png" alt="" srcset="" style={{height:"31px",width:'31px'}}/>
               <ArrowDropDownIcon />
            </div>
            <div className={navbar ? 'itemss': 'items'}>
               <p style={{margin:"0"}}><b>Healing</b></p>
               <ArrowDropDownIcon/>
            </div>
            <div className={navbar ? 'itemss': 'items'}>
            <p style={{margin:"0"}}><b>Climbers</b></p>
            <ArrowDropDownIcon/>
            </div>
         </div> 
         <div className='center'>
           <b> Your`Leaves`</b>
         </div> 
         <div className='rightnav'>
         <LocationSearchingTwoToneIcon/>
           <div className='items'>
               <Link className={navbar? 'linkss':'links'} to="/">Feeds</Link>
            </div>
            <div className='items'>
               <Link  className={navbar? 'linkss':'links'}  to="/">Plantations</Link>
            </div>
            <div className='items'>
               <Link  className={navbar? 'linkss':'links'}  to="/">Orchids</Link>
            </div>
            <FavoriteBorderTwoToneIcon style={{cursor:"pointer"}}/>
            <div>
            <ProductionQuantityLimitsTwoToneIcon style={{cursor:"pointer"}}/><span>0</span>
            </div>
            <GrassIcon style={{cursor:"pointer"}}/>
         </div>  
         </div>       
        
     );
}

export default Navbar;
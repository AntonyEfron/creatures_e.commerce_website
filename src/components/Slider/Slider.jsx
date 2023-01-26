import React,{useState} from 'react'
import '../Slider/Slider.css'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

 
function Slider() {
    const [currentImg,setCurrentImg] = useState(0);
    const Img  = [
        "img/Slider_images/img1-min.jpg",
        "img/Slider_images/img2-min.jpg",
        "img/Slider_images/img3-min.jpg",
        "img/Slider_images/img4-min.jpg"
    ]
    const prevImg = () =>{
        setCurrentImg(currentImg === 0 ? 3 : (prev)=> prev - 1 );       
    }
    const nextImg = () =>{
        setCurrentImg(currentImg === 3 ? 0 : (prev) => prev + 1);
    }
    return ( 
    <div className='slider'>
        <div className="containerSlide" style={{transform:`translateX(-${currentImg*100}vw)`}}>
            <img className='slide_img' src={Img[0]} alt=""  />
            <img className='slide_img' src={Img[1]} alt=""  />
            <img className='slide_img' src={Img[2]} alt=""  />
            <img className='slide_img' src={Img[3]} alt=""  />
        </div>
        <div className="icons">
         <div className="icon" onClick={prevImg}>
            <KeyboardDoubleArrowLeftIcon style={{ color:'white'}}/>
         </div>
         <div className="icon" onClick={nextImg}>
            <KeyboardDoubleArrowRightIcon style={{color:'white'}}/>
         </div>
        </div>
        
    </div> );
}

export default Slider;
import React from 'react';
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
function Home() {
    return ( 
        <React.Fragment>
             <Slider/>
             <FeaturedProducts type={"Featured"}/>
             <Categories/>
             <FeaturedProducts type={"Trending"}/>
        </React.Fragment>           
     );
}

export default Home;
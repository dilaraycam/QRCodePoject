import React from 'react';
import Welcome from '../Welcome/Welcome'
import Restaurant from '../RestaurantCards/Restaurant'
import Menu from '../Menu/Menu'
import MenuDetailCard from '../Menu/MenuDetailCard'
import Footer from '../Footer/Footer'
import './Home.css'


function Home(props){
    
    return(

        <>
         <Welcome/>
         <Restaurant/>
       
         <Menu/>
        
        <div class="container-fluid bg-light text-dark">
  
  <section id="KAHVALTI">
 <MenuDetailCard/>
  </section>
  
  <section id="BURGER">
  <MenuDetailCard/>
  </section>
  <section id="MAKARNA">
  <MenuDetailCard/>
  </section>
</div>

        </>
    )
}

export default Home
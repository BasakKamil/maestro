import React, { useRef, useEffect } from 'react';
import {TweenMax, Power3} from 'gsap';
import logo from '../../images/star.png';

function Shop(){

   
  
        let logoItem = useRef(null);
        let textItem = useRef(null);
       
        useEffect(()=>{
            console.log(logoItem);
            TweenMax.to(
                logoItem,
                 .8, 
                 {
                     opacity: 1, 
                     y: -20,
                     ease: Power3.easeOut
                })
            TweenMax.to(
                    textItem,
                     .8, 
                     {
                         opacity: 1, 
                         y: -20,
                         ease: Power3.easeOut,
                         delay: .2
            })
        },[])
        return (
            <div className="ShopKamila">
                <img
                ref={el=>{logoItem=el}}
                src={logo}
                className="LogoKamila"
                alt="logo"
                />
                <h2 ref={el=>{textItem=el}}>Witaj w Sklepie :D</h2>
                <nav>
                <ul>      
                    <li><a data-page="iPhone" href="https://allegro.pl/">iPhone</a></li>
                    <li><a data-page="iPad" href="https://allegro.pl/">iPad</a></li>
                    <li><a data-page="iPod" href="https://allegro.pl/">iPod</a></li>
                    <li><a data-page="iMac" href="https://allegro.pl/">iMac</a></li>
                    <li><a data-page="MacBook" href="https://allegro.pl/">MacBook</a></li>
                </ul>
                </nav>
                <main>
                    <section 
                    
                    data-index="0" 
                    className="iPhone">
                        <h2 >iPhone</h2>

                    </section>
                    <section data-index="1" className="iPad">
                        <h2>iPad</h2>

                    </section>
                    <section data-index="2" className="iMac">
                        <h2>iMac</h2>

                    </section>
                    <section data-index="3" className="MacBook">
                        <h2>MacBook</h2>

                    </section>
                </main>
            </div>
        )
     
}

export default Shop

import { Fragment } from 'react';
import './hero.styles.css'

import { Link, animateScroll as scroll } from "react-scroll";
import profilePic from '../../img/profilePic.png';

const Hero = () => {
    return ( 
    <Fragment>
    <div id="hero" className="bg-buttercup relative">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-items-stretch m-auto p-5">
            <div className="grid gap-4">
                <h1 className="text-4xl md:text-6xl text-blackPearl">Esteban Palacio</h1>
                <p className="leading-9 text-xl md:text-2xl mb-6 pl-1 text-blackPearlLight font-light">MERN-Stack Developer with a knack for minimalist design and the efficient use of space.</p>
                <div className="flex justify-start pl-1">
                    <Link 
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={800}
                        className="z-50 select-none flex align-center border-blackPearl border-2 cursor-pointer px-3 py-2 text-blackPearl rounded-md hover:bg-blackPearl bg-lightRaisinBlack hover:text-buttercup hover:scale-110 transform h-12"
                        style={{'line-height': '1.6'}}
                        >Contact
                    </Link>
                </div>
            </div>
            <img className="mb-8 sm:mb-0 rounded-md w-48 md:w-60" src={profilePic} alt="Esteban Profile Picture"/>
        </div>  
        <div class="hero-wave-bg">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
    </div>
    </Fragment>
    );
}
 
export default Hero;
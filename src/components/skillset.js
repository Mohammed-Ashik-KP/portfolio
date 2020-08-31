import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css';
import html from '../assets/icons/html.svg'
import css from '../assets/icons/css.svg'
import js from '../assets/icons/js.svg'
import react from '../assets/icons/react.svg'
import node from '../assets/icons/node.svg'
import python from '../assets/icons/python.svg'
import sass from '../assets/icons/sass.svg'
import mysql from '../assets/icons/mysql.svg'
import mongo from '../assets/icons/mongo.svg'
import express from '../assets/icons/express.svg'
import git from '../assets/icons/git.svg'

const SkillSet = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow:3,
        slide:'img',
        centerMode:true,
        initialSlide:5,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                slidesPerRow:3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                slidesPerRow:2,
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                slidesPerRow:1,
              }
            },
              {
                breakpoint: 360,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  slidesPerRow:1,
                }
            }
          ]
        
    }
    return ( 
        <React.Fragment>
            <div className="container">
                <div className="row m-2 d-flex justify-content-center">
                    <div className="content-title">
                            Skill Set
                    </div>
                </div>

                <div className="skills">
                   
                   <Slider {...settings}>
                   
                        <img src={html} alt="HTML" height="60px"/>
                        <img src={css} alt="CSS" height="50px"/>
                        <img src={js} alt="Javascript" height="60px"/>
                        <img src={react} alt="React JS" height="60px"/>
                        <img src={node} alt="Node JS" height="60px"/>
                        <img src={express} alt="Express JS" height="60px"/>
                        <img src={git} alt="GitHub" height="60px"/>
                        <img src={python} alt="Python" height="60px"/>
                        <img src={sass} alt="Sass" height="60px"/>
                        <img src={mysql} alt="MySQL" height="60px"/>
                        <img src={mongo} alt="MongoDB" height="60px"/>
                       
                        


                  
                    </Slider>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default SkillSet;
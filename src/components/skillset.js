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
        
    }
    return ( 
        <React.Fragment>
            <div className="container">
                <div className="row m-2 d-flex justify-content-center">
                    <div className="content-title">
                            Skill Set
                    </div>
                </div>

                <div className="">
                   
                   <Slider {...settings}>
                   
                        <img src={html} alt="html css js" height="60px"/>
                        <img src={css} alt="html css js" height="50px"/>
                        <img src={js} alt="html css js" height="60px"/>
                        <img src={react} alt="html css js" height="60px"/>
                        <img src={node} alt="html css js" height="60px"/>
                        <img src={express} alt="html css js" height="60px"/>
                        <img src={git} alt="html css js" height="60px"/>
                        <img src={python} alt="html css js" height="60px"/>
                        <img src={sass} alt="html css js" height="60px"/>
                        <img src={mysql} alt="html css js" height="60px"/>
                        <img src={mongo} alt="html css js" height="60px"/>
                       
                        


                  
                    </Slider>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default SkillSet;
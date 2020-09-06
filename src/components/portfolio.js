import React from 'react';
import Project from './project';
import bca from '../assets/BCA.jpg'
import track from '../assets/track.png'
import automation from '../assets/automation.jpg'
const Portfolio = () => {
    return (   
        <React.Fragment>
            <div className="container-fluid">
                <div className="row d-flex offset-3 justify-content-start align-items-center mt-4">
                       <div className="content-title">Portfolio</div>
                </div>

                <div className="row mt-5 offset-xl-2 offset-md-1 offset-sm-1 d-flex justify-content-center">
                    <div className="col d-flex justify-content-center mt-2">
                        <Project image={bca} title="Binance Coin Analyzer"
                         description = "A Simple Tool To analyze crypto market. Analyze market volume , market actions and big buys on Binance Exchange"/>
                    </div>
                    <div className="col d-flex justify-content-center mt-2">
                        <Project image={track} title="Covid 19 Tracker" description = "Covid-19 Tracker For State Kerala, Which shows district wise data" />
                    </div>
                    <div className="col d-flex justify-content-center mt-2">
                        <Project image={automation} title="Insta Automation Tool" description = "Automate Your Instagram Account easily With This Python Tool Using Selenium" />
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Portfolio    ;
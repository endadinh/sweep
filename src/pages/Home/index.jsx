import React from 'react'

import './Home.scss'

// components
import HomeHeader from '../../components/HomeHeader'
import SuperVipSlider from '../../components/SuperVipSlider'
import BackgroundIntro from '../../components/BackgroundIntro'
import VerticalSlider from '../../components/VerticalSlider'

export default function Home() {
  return (
    <div className="home">
        <BackgroundIntro/>

        {/* INTRO */}
        <div className="intro">
            <HomeHeader />
        
            <div className="intro-content">
                <div className="container">
                    <div className="row">
                        {/* img title */}
                        <div className="col-xl-12">
                            <div className="intro-title-img">
                                <img src="./images/title-intro.png" alt="" />
                            </div>
                        </div>

                        {/* slogan text */}
                        {/* <div className="col-xl-12">
                            <div className="intro-title-slogan-wrap">
                                <div className="intro-title-slogan text-gradient text-border">
                                    Shooting game with the highest coordinates in the solar system
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

        <VerticalSlider />
        {/* <SuperVipSlider /> */}
    </div>
  )
}

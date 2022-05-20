import React from 'react'

import './BackgroundIntro.scss'

import FireLies from '../FireLies'

export default function BackgroundIntro() {
  return (
    <div className="background-intro">
        <div className="background-intro-image">
            <div className="background-intro-image-wrap">
                <img src="./images/br.jpg" alt="" />

                {/* Fire Fly */}
                <FireLies />

                {/* LAMP */}
                <div className="lamp lamp--1">
                    <img src="./images/den1.png" alt="" />
                </div>

                <div className="lamp lamp--2">
                    <img src="./images/den1.png" alt="" />
                </div>

                <div className="lamp lamp--3">
                    <img src="./images/den1.png" alt="" />
                </div>

                <div className="lamp lamp--4">
                    <img src="./images/den1.png" alt="" />
                </div>

                 <div className="lamp lamp--5">
                    <img src="./images/den1.png" alt="" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

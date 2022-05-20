import React from 'react'

import './Home.scss'

// components
import HomeHeader from '../../components/HomeHeader'
import SuperVipSlider from '../../components/SuperVipSlider'
import BackgroundIntro from '../../components/BackgroundIntro'

export default function Home() {
  return (
    <div className="home">
        <BackgroundIntro/>
        <HomeHeader />
        {/* <SuperVipSlider /> */}
    </div>
  )
}

import React from 'react'

import './HomeHeader.scss'

export default function HomeHeader() {
  return (
    <div className="home-header">
      <div className="container">
        <div className="row">
          {/* logo */}
          <div className="col-xl-1">
            <div className="home-header-logo">
              <img src="./images/logo.png" alt="" />
            </div>
          </div>

          {/* nav iem */}
          <div className="col-xl-8">
            <div className="home-header-nav">
              <div className="home-header-item">
                Home
              </div>
              <div className="home-header-item">
                Marketplace
              </div>
              <div className="home-header-item">
                News
              </div>
              <div className="home-header-item">
                Event
              </div>
              <div className="home-header-item">
                Sign up
              </div>
            </div>
          </div>

          {/* button */}
          <div className="col-xl-3">
            <div className="home-header-btns">
              
              {/* button play game */}
              <div className="home-header-btn">
                <div className="home-header-btn-bg">
                  <img src="./images/bg-btn-blue.png" alt="" />
                </div>
                <div className="home-header-btn-name">
                  PLAY GAME
                </div>
              </div>

              {/* button wallet */}
              <div className="home-header-btn">
                <div className="home-header-btn-bg">
                  <img src="./images/bg-btn-red.png" alt="" />
                </div>
                <div className="home-header-btn-name">
                  <div className="home-header-btn-name-wrap">
                    <div className="home-header-btn-name-icon">
                      <img src="./images/dollas-icon.png" alt="" />
                    </div>
                    <span className="">WALLET CONNECT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

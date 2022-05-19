import React,{useState,useEffect,useRef} from 'react'
import './SuperVipSlider.scss'

export default function SuperVipSlider() {
  const [percent,setPercent] = useState(0)

  const sliderComponent = useRef();

    useEffect(() => {
      const hanldeSlider = () => {
        let distanceFromTop = sliderComponent.current?.getBoundingClientRect?.().y;
        let heightComponents = sliderComponent.current?.clientHeight;

        let thisArea = distanceFromTop+heightComponents

        if(thisArea<=heightComponents && thisArea >0){
              setPercent(100-((thisArea/heightComponents)*100))
              console.log(100-((thisArea/heightComponents)*100)+"%")
          }
      }

        // clean up code
        window.removeEventListener('scroll', hanldeSlider);
        window.addEventListener('scroll', hanldeSlider, { passive: true });

        
        return () => window.removeEventListener('scroll', hanldeSlider);
    }, [percent]);

  return (
    <div className="super-slider" ref={sliderComponent}>
      {/* HEADER */}
      <div className="header">
        oekoekokeoekoek
      </div>

      {/* SLIDER */}
      <div className="super-slider-content">
        <div 
          className="super-slider-content-wrap" 
          style={{
            transform: `translate(${-63+percent}%)`
          }}>

          <div className="super-slider-img">
            <img src="./images/61cbccfb5d009c2e31f79095_bottom_d1.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccff5645554f77ef3533_bottom_d6.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfb5d009c2e31f79095_bottom_d1.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccff5645554f77ef3533_bottom_d6.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfb5d009c2e31f79095_bottom_d1.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccff5645554f77ef3533_bottom_d6.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfb5d009c2e31f79095_bottom_d1.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccff5645554f77ef3533_bottom_d6.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfb5d009c2e31f79095_bottom_d1.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccff5645554f77ef3533_bottom_d6.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfb5d009c2e31f79095_bottom_d1.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccff5645554f77ef3533_bottom_d6.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <div className="super-slider-content">
        <div className="super-slider-content-wrap" style={{transform: `translateX(-${percent}%)`,transformStyle: 'preserve-3d'}}>
          <div className="super-slider-img">
            <img src="./images/61cbccfb347ea6066f0d3c02_bottom_d4.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfbb7eba47873f9f4f9_bottom_d2.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfb347ea6066f0d3c02_bottom_d4.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfbb7eba47873f9f4f9_bottom_d2.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfb347ea6066f0d3c02_bottom_d4.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfbb7eba47873f9f4f9_bottom_d2.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfb347ea6066f0d3c02_bottom_d4.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfbb7eba47873f9f4f9_bottom_d2.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfb347ea6066f0d3c02_bottom_d4.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfbb7eba47873f9f4f9_bottom_d2.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfb347ea6066f0d3c02_bottom_d4.jpg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/61cbccfbb7eba47873f9f4f9_bottom_d2.jpg" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

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
        skill oke chua a chien
      </div>

      {/* SLIDER */}
      <div className="super-slider-content">
        <div 
          className="super-slider-content-wrap" 
          style={{
            transform: `translateX(${-63+percent}%)`
          }}>

          <div className="super-slider-img">
            <img src="./images/crypto-com-coin-cro-token-symbol-cryptocurrency-logo-icon-isolated-white-background-vector-illustration-224951773.jpeg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/tsFcezlL_400x400.jpeg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/Dash_logo.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/11581880_3.jpeg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/st,small,507x507-pad,600x600,f8f8f8.webp" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/st,small,507x507-pad,600x600,f8f8f8.jpeg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/crypto-com-coin-cro-token-symbol-cryptocurrency-logo-icon-isolated-white-background-vector-illustration-224951773.jpeg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/tsFcezlL_400x400.jpeg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/Dash_logo.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/11581880_3.jpeg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/st,small,507x507-pad,600x600,f8f8f8.webp" alt="" />
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <div className="super-slider-content">
        <div className="super-slider-content-wrap" style={{transform: `translateX(-${percent}%)`,transformStyle: 'preserve-3d'}}>
          <div className="super-slider-img">
            <img src="./images/tsFcezlL_400x400.jpeg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/Dash_logo.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/11581880_3.jpeg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/st,small,507x507-pad,600x600,f8f8f8.webp" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/tsFcezlL_400x400.jpeg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/crypto-com-coin-cro-token-symbol-cryptocurrency-logo-icon-isolated-white-background-vector-illustration-224951773.jpeg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/Dash_logo.png" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/11581880_3.jpeg" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/st,small,507x507-pad,600x600,f8f8f8.webp" alt="" />
          </div>
          <div className="super-slider-img">
            <img src="./images/tsFcezlL_400x400.jpeg" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

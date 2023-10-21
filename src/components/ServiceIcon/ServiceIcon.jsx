import "./ServiceIcon.css"

import star from './icon_0.png';
import icon1 from './icon_1.png';
import icon2 from './icon_2.png';
import icon3 from './icon_3.png';
import icon4 from './icon_4.png';
import icon5 from './icon_5.png';
import icon6 from './icon_6.png';

function ServiceIcon() {
  return (
      <div className="container w-7/12 h-screen flex justify-center align-middle">
        <div className="service-icons mt-10">
          <img src={star} className="star" alt=""/>
          <img src={icon1} className="icon1 icon" alt=""/>
          <img src={icon2} className="icon2 icon" alt=""/>
          <img src={icon3} className="icon3 icon" alt=""/>
          <img src={icon4} className="icon4 icon" alt=""/>
          <img src={icon5} className="icon5 icon" alt=""/>
          <img src={icon6} className="icon6 icon" alt=""/>
        </div>
      </div>
  )
}

export default ServiceIcon;
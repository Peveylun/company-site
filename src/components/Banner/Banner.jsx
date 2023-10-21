import './Banner.css'
import BannerContent from "../BannerContent/BannerContent.jsx";
import ServiceIcon from "../ServiceIcon/ServiceIcon.jsx";

function Banner() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen content flex items-center">
        <BannerContent></BannerContent>
        <ServiceIcon></ServiceIcon>
      </div>
    </div>
  )
}

export default Banner;
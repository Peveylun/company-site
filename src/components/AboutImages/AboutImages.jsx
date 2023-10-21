import img1 from "../../assets/about1.png"
import img2 from "../../assets/about2.png"
import "./AboutImages.css"

function AboutImages() {
  return (
    <div className="w-1/2 h-full relative">
      <img className="about-img absolute top-28 left-0 z-10" src={img1} alt="Cannot load"/>
      <img className="about-img absolute top-0 left-28" src={img2} alt="Cannot load"/>

    </div>
  )
}

export default AboutImages;
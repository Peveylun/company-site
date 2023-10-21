import AboutContent from "../AboutContent/AboutContent.jsx";
import AboutImages from "../AboutImages/AboutImages.jsx";
import "./About.css"

function About() {
  return (
    <div className="about w-full flex justify-between">
      <AboutContent></AboutContent>
      <AboutImages></AboutImages>
    </div>
  )
}

export default About;
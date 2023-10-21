import "./More.css"
import MoreSlider from "../MoreSlider/MoreSlider.jsx";

function More() {
  return (
    <div className="more flex flex-col w-full items-center pt-20">
      <p className="more font-medium h-10">WE LOVE OUR WORK</p>
      <p className="font-bold more-title h-10">FIND OUT MORE</p>
      <MoreSlider></MoreSlider>
    </div>
  )
}

export default More;
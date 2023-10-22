import "./MoreSlider.css"
import MoreSliderSection from "../MoreSliderSection/MoreSliderSection.jsx";
import {useState} from "react";

function MoreSlider() {
  const [active, setActive] = useState(0)
  return (
    <div className="w-full h-full relative">
      <button className="slider-but rounded slider-but1 absolute font-medium text-xl -rotate-90 translate-y-36 h-14 w-64">Our Mission</button>
      <MoreSliderSection className="absolute slider-text1" title="Our Mission">
        Integer non velit nec nunc pulvinar porttitor.
        Vivamus euismod, mauris ac pellentesque commodo, est nunc dapibus metus, vel dapibus felis lacus sit amet urna.
        Curabitur feugiat bibendum ex, id mollis enim sollicitudin dictum.
        Aenean ullamcorper volutpat lacus.
      </MoreSliderSection>
      <button className="slider-but rounded slider-but2 absolute font-medium text-xl -rotate-90 translate-y-36 h-14 w-64">Our Company</button>
      <MoreSliderSection className="hidden slider-text2" title="Our Company">
        Integer non velit nec nunc pulvinar porttitor.
        Vivamus euismod, mauris ac pellentesque commodo, est nunc dapibus metus, vel dapibus felis lacus sit amet urna.
        Curabitur feugiat bibendum ex, id mollis enim sollicitudin dictum.
        Aenean ullamcorper volutpat lacus.
      </MoreSliderSection>
      <button className="slider-but rounded slider-but3 absolute font-medium text-xl -rotate-90 translate-y-36 h-14 w-64">Our Customer</button>
      <MoreSliderSection className="hidden slider-text3" title="Our Customer">
        Integer non velit nec nunc pulvinar porttitor.
        Vivamus euismod, mauris ac pellentesque commodo, est nunc dapibus metus, vel dapibus felis lacus sit amet urna.
      W  Curabitur feugiat bibendum ex, id mollis enim sollicitudin dictum.
        Aenean ullamcorper volutpat lacus.
      </MoreSliderSection>
    </div>
  )
}

export default MoreSlider;
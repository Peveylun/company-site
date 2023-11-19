import { Rating } from "@material-tailwind/react"
import "./Testimonial.css"
import apos from "../../assets/apos.png"

function Testimonial() {
  return (
    <div className="testimonial w-full pt-16">
      <div className="w-full flex flex-col items-center">
        <p className="testimonial-title">TESTIMONIALS</p>
        <p className="font-bold">Our successful clients</p>
      </div>
      <div className="card-holder flex justify-around w-full h-full pt-8">
        <div className="card w-1/4 h-5/6 flex flex-col items-center pt-16">
          <img src={apos} alt="Cannot load"/>
          <p className="text-sm w-3/5 text-center pt-16">Nisl rhoncus mattis rhoncus urna neque viverra.
            Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.</p>
          <Rating className="pt-16" value={4} readonly></Rating>
        </div>
        <div className="card w-1/4 h-5/6 flex flex-col items-center pt-16">
          <img src={apos} alt="Cannot load"/>
          <p className="text-sm w-3/5 text-center pt-16">Nisl rhoncus mattis rhoncus urna neque viverra.
            Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.</p>
          <Rating className="pt-16" value={3} readonly></Rating>
        </div>
        <div className="card w-1/4 h-5/6 flex flex-col items-center pt-16">
          <img src={apos} alt="Cannot load"/>
          <p className="text-sm w-3/5 text-center pt-16">Nisl rhoncus mattis rhoncus urna neque viverra.
            Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.</p>
          <Rating className="pt-16" value={5} readonly></Rating>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
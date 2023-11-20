import { Rating } from "@material-tailwind/react"
import "./Testimonial.css"
import apos from "../../assets/apos.png"
import testimonial_img from "../../assets/testimonial_img.png"

function Testimonial() {
  return (
    <div className="testimonial w-full pt-16">
      <div className="w-full flex flex-col items-center">
        <p className="testimonial-title">TESTIMONIALS</p>
        <p className="font-bold">Our successful clients</p>
      </div>
      <div className="card-holder flex justify-around w-full h-full pt-8">
        <div className="card-wrapper w-1/4 h-5/6">
          <div className="card h-4/6 flex flex-col items-center pt-8">
            <img src={apos} alt="Cannot load"/>
            <p className="text-sm w-5/6 text-center pt-8">Nisl rhoncus mattis rhoncus urna neque viverra.
              Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.</p>
            <Rating className="pt-16 pb-16" value={4} readonly></Rating>
            <img src={testimonial_img} alt="Cannot load"/>
            <div className="name-holder text-center">
              <h3>Jennifer Doe</h3>
              <p>Businesswoman</p>
            </div>
          </div>
        </div>
        <div className="card-wrapper w-1/4 h-5/6">
          <div className="card h-4/6 flex flex-col items-center pt-8">
            <img src={apos} alt="Cannot load"/>
            <p className="text-sm w-5/6 text-center pt-8">Nisl rhoncus mattis rhoncus urna neque viverra.
              Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.</p>
            <Rating className="pt-16 pb-16" value={3} readonly></Rating>
            <img src={testimonial_img} alt="Cannot load"/>
            <div className="name-holder text-center">
              <h3>Martina Doe</h3>
              <p>Businesswoman</p>
            </div>
          </div>
        </div>
        <div className="card-wrapper w-1/4 h-5/6">
          <div className="card h-4/6 flex flex-col items-center pt-8">
            <img src={apos} alt="Cannot load"/>
            <p className="text-sm w-5/6 text-center pt-8">Nisl rhoncus mattis rhoncus urna neque viverra.
              Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.</p>
            <Rating className="pt-16 pb-16" value={5} readonly></Rating>
            <img src={testimonial_img} alt="Cannot load"/>
            <div className="name-holder text-center">
              <h3>Julia Doe</h3>
              <p>Businesswoman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
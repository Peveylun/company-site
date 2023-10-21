import slide1 from "../../assets/more_slide1.png";

function MoreSliderSection(props) {
  const { title } = props;
  const componentClasses = `w-3/5 h-full absolute flex gap-4 pt-10 ${props.className}`
  return (
    <div className={componentClasses}>
      <img src={slide1} className="w-64 h-64" alt=""/>
      <div className="text-holder flex flex-col justify-around">
        <h3 className="font-medium text-xl">{title}</h3>
        <p className="text-sm">
          {props.children}
        </p>
        <button className="bg-blue-900 text-white text-sm rounded w-1/3 h-1/4">Learn More</button>
      </div>
    </div>
  )
}

export default MoreSliderSection;
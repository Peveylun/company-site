import './ServiceCard.css'

function ServiceCard({ title, text, link }) {
  return (
    <div className="service-card w-1/5 h-full
    flex flex-col justify-around
    rounded-md pl-5 pr-10
    hover:text-white">
      <p className="font-semibold text-xl">{title}</p>
      <p className="text-sm">{text}</p>
      <a href={link} className="underline text-sm">Learn More</a>
    </div>
  )
}

export default ServiceCard;
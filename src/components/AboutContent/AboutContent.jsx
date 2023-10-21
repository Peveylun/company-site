import "./AboutContent.css"

function AboutContent() {
  return (
    <div className="flex flex-col justify-around w-1/2 h-full pl-10">
      <p className="about-desc text-xl font-medium">FEW WORDS ABOUT US</p>
      <p className="about-title font-bold">We Are Leaders In It Solutions</p>
      <p className="text-sm">Aliquam a diam gravida, pretium justo non, facilisis eros.
        Integer posuere semper condimentum. Praesent tortor dui, auctor a condimentum vitae, aliquam at quam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse consequat lacus a sapien pretium, sit amet finibus ex.</p>
      <ul className="text-sm font-medium grid grid-cols-2 gap-4 pl-5">
        <li className="list-disc">Quisque metus felis in dictum</li>
        <li className="list-disc">Sed ac ligula nec felis modo</li>
        <li className="list-disc">Mauris sollicitudin nunc quis at</li>
        <li className="list-disc">In massa erat, ac dictum alis</li>
      </ul>
    </div>
    )
}

export default AboutContent;
import "./Services.css"
import ServiceTitle from "../ServiceTitle/ServiceTitle.jsx";
import ServiceCard from "../ServiceCard/ServiceCard.jsx";
import CompanyInfo from "../CompanyInfo/CompanyInfo.jsx";

function Services() {
  return (
    <div className="container max-w-full pt-14">
      <ServiceTitle></ServiceTitle>
      <div className="card-holder max-w-full h-72
      flex justify-center space-x-20 pt-8">
        <ServiceCard title="Software Development" text="Posuere morbi leo urna molestie at elementum eu egestas." link="#"></ServiceCard>
        <ServiceCard title="AI Programmer & Technical" text="Posuere morbi leo urna molestie at elementum eu egestas." link="#"></ServiceCard>
        <ServiceCard title="System Application Development" text="Posuere morbi leo urna molestie at elementum eu egestas." link="#"></ServiceCard>
        <ServiceCard title="Server and Network Solutions" text="Posuere morbi leo urna molestie at elementum eu egestas." link="#"></ServiceCard>
      </div>
      <div className="info-holder max-w-full h-36
      flex justify-around mt-52">
          <CompanyInfo amount="782" text="worldwide customers"></CompanyInfo>
          <CompanyInfo amount="12K" text="projects done"></CompanyInfo>
          <CompanyInfo amount="5,896" text="it products"></CompanyInfo>
          <CompanyInfo amount="$890K" text="projects spend"></CompanyInfo>
      </div>
    </div>
    )
}

export default Services;
import "./BannerContent.css"

function BannerContent() {
  return (
    <div className="container w-1/2 h-screen flex items-center justify-around">
      <div className="banner-content h-1/2 w-2/3 space-y-3">
        <p className="title">Software solution providers that
          help brands thrive and stand out</p>
        <p className="text">Since 2014, we have been exploring the world of design
          and development offering our expertise in web and mobile.
          It is perfect fusion of innovation, development and
          execution at one place.</p>
        <div className="explore">
          <a href="#">EXPLORE MORE</a>
        </div>
      </div>
    </div>
  )
}

export default BannerContent;
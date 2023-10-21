import './Navbar.css'

function Navbar () {
  return (
    <div className="container min-w-full sticky top-0 z-50">
      <div className="flex justify-end p-2 space-x-2
      border-2 rounded-b-lg border-gray-300
      bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-800">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">About Us</a>
        <a href="#" className="nav-item">Portfolio</a>
        <a href="#" className="nav-item">Expertise</a>
        <a href="#" className="nav-item">Client</a>
        <a href="#" className="nav-item">Services</a>
        <a href="#" className="nav-item">Contact Us</a>
        </div>
      </div>
  )
}

export default Navbar;
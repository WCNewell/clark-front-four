import * as React from "react"
import { Link } from "gatsby"
import Logo from "../assets/clarklogo.inline.svg"
import Nav from "./nav"

const Header = () => {
  const [isSticky, setSticky] = React.useState(false)
  const ref = React.useRef(null)
  const handleScroll = () => {
    if (ref.current) {
        setSticky(ref.current.getBoundingClientRect().top <= 0)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', () => handleScroll)
    }
  }, []);
  
  return (
    <header>
      <div className="logo-grid">
        <Link to="/" aria-label="home page">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="name-grid">
        <h2 className="name">clark newell</h2>
      </div>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
          <div className='sticky-inner'> 
            <div>
              <Nav />
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header

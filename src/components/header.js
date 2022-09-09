import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from '../assets/clarklogo.inline.svg'
import Nav from './nav'

const Header = ({siteTitle}) => {
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
      <Link to="/" aria-label="home page">
        Logo
        {/* <Logo className="logo" /> */}
        <h2>{siteTitle}</h2>
      </Link>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <div className='sticky-inner'> 
          <div>
            Hamburger
            {/* <Nav /> */}
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

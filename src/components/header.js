import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from '../assets/clarklogo.inline.svg'

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
  
  <header>
   <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      
      <Logo />
      <h2>{siteTitle}</h2>
    </Link>
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import '../styles/header.css'
import ToggleDarkMode from './ToggleDarkMode'

const Header = () => {
    return (
      <header className="header">
        <div className="header-container container">
          <div className="header__logo">
            <div className="text-logo">
              Task Manager
            </div>
          </div>
          <ToggleDarkMode />
        </div>
      </header>
    )
}

export default Header

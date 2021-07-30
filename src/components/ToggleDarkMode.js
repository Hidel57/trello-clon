import '../styles/toggle_darkmode.css'
import '../styles/material_icons.css'
import { currentThemeFctn, switchTheme } from '../helpers/toggle-darmode';

const ToggleDarkMode = () => {
  const handleOnChange = e => {
    switchTheme(e)
  }

  return (
    <div>
      <input
        className="checkbox" type="checkbox"
        name="checkbox" id="checkbox"
        onChange={handleOnChange}
        defaultChecked={currentThemeFctn()}
      />
      <label htmlFor="checkbox" className="theme-switch label">
        <span className="material-icons-outlined md-16">dark_mode</span>
        <span className="material-icons-outlined md-16">light_mode</span>
        <div className="ball"></div>
      </label>
    </div>
  );
}

export default ToggleDarkMode;
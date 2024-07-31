import { useContext } from "react";
import { LayoutPreferencesContext } from "./LayoutPreferencesContext";

const LayoutSwitcher = () => {
    const { preferences, updatePreferences } = useContext(LayoutPreferencesContext);

    const handleFontChange = (event) => {
        updatePreferences({ font: event.target.value });
    }

    const handleSpacingChange = (event) => {
        updatePreferences({ spacing: event.target.value });
    }

    const handleThemeChange = (event) => {
        updatePreferences({ theme: event.target.value });
    }

    const handleLangChange = (event) => {
        updatePreferences({ lang: event.target.value });
    }

    return (
        <div id="options">
            <h2>Layout Switcher</h2>
            <div>
                <label>Fonte: </label> 
                    <select value={preferences.font} onChange={handleFontChange}>
                        <option value="Arial">Arial</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Tahoma">Tahoma</option>
                        <option value="Garamond">Garamond</option>
                        <option value="Monaco">Monaco</option>
                    </select>
            </div>
            <div>
                <label>Espaçamento: </label>
                    <select value={preferences.spacing} onChange={handleSpacingChange}>
                        <option value="small">Small</option>
                        <option value="normal">Normal</option>
                        <option value="large">Large</option>
                    </select>
            </div>
            <div>
                <label>Tema: </label>
                    <select value={preferences.theme} onChange={handleThemeChange}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
            </div>
            <div>
                <label>Idioma: </label>
                    <select value={preferences.lang} onChange={handleLangChange}>
                        <option value='pt'>Português</option>
                        <option value='en'>English</option>
                        <option value='es'>Spanish</option>
                    </select>
            </div>
        </div>
    )
}

export default LayoutSwitcher
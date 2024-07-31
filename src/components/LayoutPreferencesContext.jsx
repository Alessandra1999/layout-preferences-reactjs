import { createContext, useState, useEffect } from "react";

export const LayoutPreferencesContext = createContext();

export const LayoutPreferencesProvider = (props) => {
    const [preferences, setPreferences] = useState({
        font: 'Arial',
        spacing: 'normal',
        theme: 'light',
        lang: 'pt'
    });

    const updatePreferences = (newPreferences) => {
        setPreferences((prevPreferences) => ({
            ...prevPreferences,
            ...newPreferences
        }));
    };

    useEffect(() => {
        document.body.style.backgroundColor = preferences.theme === 'light' ? '#DEDEDE' : '#333';
        document.body.style.color = preferences.theme === 'light' ? '#000' : '#DEDEDE';
    }, [preferences.theme]);

    return (
        <LayoutPreferencesContext.Provider value={{ preferences, updatePreferences }}>
            {props.children}
        </LayoutPreferencesContext.Provider>
    )
}
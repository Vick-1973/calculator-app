import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {

};

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Dark');
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeGraph, setActiveGraph] = useState(false);
    const [sticky, setSticky] = useState("");
    
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };
    
    return (
        <StateContext.Provider value={{ activeGraph, setActiveGraph, sticky, setSticky, activeMenu, setActiveMenu, isClicked, setIsClicked, screenSize, setScreenSize, currentColor, currentMode, setMode, setColor, themeSettings, setThemeSettings }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
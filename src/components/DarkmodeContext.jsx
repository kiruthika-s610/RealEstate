import React, {createContext, useContext, useState} from "react";

const DarkmodeContext = createContext();


const DarkmodeProvider = ({children}) => {
    const [darkMode, setDartMode] = useState(false);

    const toggleDarkMode = ()=>{
        setDartMode(!darkMode);
        }
  return (
    <DarkmodeContext.Provider value={{darkMode, toggleDarkMode}}>
{children}
    </DarkmodeContext.Provider>
  )
};

const useDarkmode = () =>{
    const context = useContext(DarkmodeContext);
    if(!context){
        throw new Error('useDarknode must be used within DarkmodeProvider')
    } return context;
};

export {DarkmodeProvider, useDarkmode};

import React, {createContext, useState} from 'react';

export const LanguageContext = createContext (null);

function LanguageContextProvider({ children }) {
    const [language, toggleLanguage] = useState('nl');
    console.log("dit is een contextfile");
    function setNl() {
        toggleLanguage('nl')
    }
    function setEs() {
        toggleLanguage('es')
    }
    const data = {
        activeLanguage: language,
        setNlFunction: setNl,
        setEsFunction: setEs,
    }
return (
    <LanguageContext.Provider value={data}>
        {children}
    </LanguageContext.Provider>
);
}
export default LanguageContextProvider;

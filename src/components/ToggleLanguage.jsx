import React from 'react'
import { useLanguage } from '../context/languageContext';


const ToggleLanguage = () => {
  const { language, toggleLanguage } = useLanguage();

    return (
        <>
            <div>
                <div className="flex items-center mb-4">
                    <input
                        checked={language === 'mar'}
                        onChange={() => toggleLanguage('mar')}
                        id="default-radio-1"
                        type="radio"
                        name="lang"
                        className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 focus:ring-pink-500"
                    />
                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-primary ">मराठी</label>
                </div>
                <div className="flex items-center">
                    <input
                        checked={language === 'eng'}
                        onChange={() => toggleLanguage('eng')}
                        id="default-radio-2"
                        type="radio"
                        name="lang"
                        className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 focus:ring-pink-500"
                    />
                    <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-primary">English</label>
                </div>
            </div>
        </>
    )
}

export default ToggleLanguage
import React,{useState} from 'react';
import LanguageTopup from './LanguageTopup';

const LangProgres = () => {
    const [currentSkill,stateCurent] = useState(
        {
            'title': 'HTML',
            'percent': '100',
            'imageTag': 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg'
        }
    
    )
    const JavaScript = () => {
        const nextLag = {
            'title': 'JAVA SCRIPT',
            'percent': '85',
            'imageTag': 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg'
        }
        stateCurent(nextLag);
    }
    const Java = () => {
        const nextLag = {
            'title': 'SPRING BOOT',
            'percent': '75',
            'imageTag': 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg'
        }
        stateCurent(nextLag);
    }
    const ReactLan = () => {
        const nextLag = {
            'title': 'REACT',
            'percent': '65',
            'imageTag': 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
        }
        stateCurent(nextLag);
    }
    const phpLan = () => {
        const nextLag = {
            'title': 'LARAVEL',
            'percent': '75',
            'imageTag': 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg'
        }
        stateCurent(nextLag);
    }
    const typeScript = () => {
        const nextLag = {
            'title': 'TYPESCRIPT',
            'percent': '55',
            'imageTag': 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg'
        }
        stateCurent(nextLag);
    }
    const tailwindcss = () => {
        const nextLag = {
            'title': 'TAILWINDCSS',
            'percent': '65',
            'imageTag': 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
        }
        stateCurent(nextLag);
    }
    const python = () => {
        const nextLag = {
            'title': 'PYTHON',
            'percent': '45',
            'imageTag': 'https://www.vectorlogo.zone/logos/python/python-icon.svg'
        }
        stateCurent(nextLag);
    }
    
    
    return (
        <>
                
    
    <div className="relative grid w-full min-h-screen text-gray-100 bg-gray-900 place-content-center">
        <div className="p-6 space-y-6 bg-gray-800 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
            <div className="grid grid-cols-2 gap-6">
            <button className="px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700" onClick={JavaScript}>JavaScript</button>
            <button className="px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700" onClick={Java}>Java</button>
            <button className="px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700" onClick={ReactLan}>React</button>
            <button className="px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700" onClick={phpLan}>PHP</button>
            <button className="px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700" onClick={typeScript}>TypeScript</button>
            <button className="px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700" onClick={tailwindcss}>Tailwindcss</button>
            <button className="px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700" onClick={phpLan}>PHP</button>
            <button className="px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700" onClick={typeScript}>TypeScript</button>
            <button className="px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700" onClick={tailwindcss}>Tailwindcss</button>
            <button className="px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700" onClick={python}>Python</button>
              </div>  
              
              <LanguageTopup 
                    title={currentSkill.title}
                    percentage={currentSkill.percent}
                    imageTag={currentSkill.imageTag}
                ></LanguageTopup> 

              </div>
                  
        </div>
    
    
    
        </>
      );
}
 
export default LangProgres;
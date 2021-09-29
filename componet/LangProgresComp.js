import React,{useState} from 'react';
import LanguageTopup from './LanguageTopup';

const LangProgres = () => {
    const [currentSkill,stateCurent] = useState(
        {
            'title': 'HTML',
            'percent': '95',
        }
    
    )
    const JavaScript = () => {
        const nextLag = {
            'title': 'JavaScript',
            'percent': '85',
        }
        stateCurent(nextLag);
    }
    const Java = () => {
        const nextLag = {
            'title': 'java',
            'percent': '75',
        }
        stateCurent(nextLag);
    }
    const ReactLan = () => {
        const nextLag = {
            'title': 'React',
            'percent': '65',
        }
        stateCurent(nextLag);
    }
    const phpLan = () => {
        const nextLag = {
            'title': 'php',
            'percent': '75',
        }
        stateCurent(nextLag);
    }
    const typeScript = () => {
        const nextLag = {
            'title': 'typescript',
            'percent': '75',
        }
        stateCurent(nextLag);
    }
    const tailwindcss = () => {
        const nextLag = {
            'title': 'tailwindcss',
            'percent': '65',
        }
        stateCurent(nextLag);
    }
    
    return (
        <>
                
    
    <div className="grid w-full min-h-screen text-gray-100 bg-gray-900 place-content-center">
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
              </div>  
              
              <LanguageTopup 
                    title={currentSkill.title}
                    percentage={currentSkill.percent}
                ></LanguageTopup> 

              </div>
                  
        </div>
    
    
    
        </>
      );
}
 
export default LangProgres;
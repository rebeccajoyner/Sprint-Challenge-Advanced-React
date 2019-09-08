import { useEffect } from 'react'




 const DarkMode = () => {
  
    const [darkMode, setDarkMode] 
  
    useEffect(()=>{

        if(darkMode === true) return  document.querySelector('body').classList.add('dark-mode')

    else return document.querySelector('body').classList.remove('dark-mode')

    },[darkMode])

    return [darkMode, setDarkMode]

}
export default DarkMode
import { useContext, useEffect, useState } from "react"
import LanguageContext from "./LanguageContext"

function Clock(){
const [date, setDate] = useState(new Date())
const language = useContext(LanguageContext)

useEffect(()=>{
    const intervalId = setInterval(()=> {
        setDate(new Date())
    }, 1000)

    return clearInterval(intervalId)
})



    return(
        <>
            <h2>{language === "en" ? `The current time is: ${date.toLocaleTimeString()}` : `L'ora corrente è: ${date.toLocaleTimeString()}`}</h2>

        </>
    )
}

export default Clock
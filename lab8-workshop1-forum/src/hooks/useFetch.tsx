import {useEffect, useState} from "react"

export default function useFetch(url:string){
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [data, setData] = useState([])

    useEffect(()=>{
        setIsLoading(true);
        (async () => {
            try{
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
                setIsSuccess(true)
                setIsLoading(false)
            }catch(error){
                setIsLoading(false)
                setIsError(true)
            }
        })()
    }, [url])

    return {isError, isLoading, isSuccess, data}

}
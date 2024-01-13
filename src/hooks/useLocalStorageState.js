import {useEffect, useState} from "react";

export default function useLocalStorageState(key, initialState) {
    const [value, setValue] = useState(() => {
        const theme = localStorage.getItem(key)
        return theme ? JSON.parse(theme) : initialState
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])
    return [value, setValue]
}
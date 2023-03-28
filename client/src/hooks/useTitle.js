import { useEffect } from 'react'
import logo from '../img/group-2-logo.png'

const useTitle = (title) => {
    useEffect(() => {
        const prevTitle = document.title
        document.title = title

        return () => document.title = prevTitle
    }, [title])
}

export default useTitle
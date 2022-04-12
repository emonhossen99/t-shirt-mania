import { useEffect, useState } from "react"

const useTShirt = () => {
    const [shirt,setShirt] = useState([])
    useEffect(() => {
        fetch('tshirts.json')
        .then(res => res.json())
        .then(data => setShirt(data))
    }, [])
    return [shirt,setShirt]
}
export default useTShirt;
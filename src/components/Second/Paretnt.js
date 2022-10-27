import { useState } from "react"
import Child from "./Child"

const Parent = () => {
    const [fruits, setFruits]= useState([
        'Apple', 'Banana', 'Strawberries', 'Blackberries','Lemons', 'Pomegranate'
    ])

    return (
        <>
            <Child
                fruits={fruits}
            />
        </>
    )

}

export default Parent
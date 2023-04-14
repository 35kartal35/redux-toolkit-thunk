
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAnswer, getLanguages } from "../app/translateState";

const MainPage = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    const [prompt, setPrompt] = useState("")
    console.log('store', state)
    useEffect(() => {
        dispatch(getLanguages());
    }, [])


    const handleClick = () => {
        dispatch(getAnswer(prompt))
    }


    return (
        <>
            <div className="container">
                <h1>Çeviri +</h1>
                <div >

                    <textarea className="left" onChange={(e) => setPrompt(e.target.value)} type="text" />
                </div>
                <div>
                    <textarea className="right" type="text" />
                </div>


                <button onClick={handleClick}>Çevir</button>

            </div>
        </>
    )

};

export default MainPage;
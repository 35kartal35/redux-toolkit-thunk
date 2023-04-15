
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer, getLanguages } from "../app/translateState";
import Select from "react-select"

const MainPage = () => {
    const state = useSelector((state) => state);
    const [sourceLang, setSourceLang] = useState({
        value: 'tr',
        label: 'Turkish',
    });
    const [targetLang, setTargetLang] = useState({
        value: 'tr',
        label: 'English',
    });
    const dispatch = useDispatch();
    const [prompt, setPrompt] = useState('');



    useEffect(() => {
        dispatch(getLanguages());
    }, []);




    const handleClick = () => {
        dispatch(getAnswer({ prompt, sourceLang, targetLang }));
    };


    return (
        <>

            <h1>TRANSLATE</h1>

            <div className="container">


                <div className="left" >
                    <Select
                        className="select"
                        value={sourceLang}
                        options={state.languages}
                        onChange={(e) => { setSourceLang(e) }}
                    />

                    <textarea
                        onChange={(e) => setPrompt(e.target.value)}
                        type="text" />
                </div>
                <div className="right">
                    <Select
                        className="select"
                        value={targetLang}
                        options={state.languages}
                        onChange={(e) => {
                            setTargetLang(e)
                        }}
                    />
                    <textarea
                        value={state.answer}
                        disabled
                        className="disabled-text"
                        type="text" />
                </div>



            </div>

            <button onClick={handleClick}>Çevir</button>


        </>
    )

};

export default MainPage;
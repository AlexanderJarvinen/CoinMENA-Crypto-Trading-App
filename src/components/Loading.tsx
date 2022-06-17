import {useEffect, useState} from "react";


const Loading = () => {
    const [dotWord, setDotWord] = useState<string>("Loading");

    const setDotToEnd = () => {
        let counter = 1;
        let dotWord = "Loading";
        setInterval(() => {
            dotWord += '.';
            setDotWord(dotWord);
            counter++;
            if(counter === 5) {
                counter = 1;
                dotWord = "Loading";
            }
        },300);

    }

    useEffect(() =>{
        setDotToEnd();
    }, []);

    return (<div className={"loading_page"}>
                <div className={"loading_wrapper"}>
                    <h2>{dotWord}</h2>
                </div>
            </div>);
}

export default Loading;

import React, {useState} from 'react';

const Question = ({number, title, a, b, c, d, right }) => {
    const handleSubmitQuestion = (e) => {
        e.preventDefault();

        if(response === right){
            setIsRight(1)
        } else {
            setIsRight(2)
        }
    }

    const [response, setResponse] = useState('');
    const [isRight, setIsRight] = useState(0);

    const handleAClick = () => {
        setResponse('a')
    }
    const handleBClick = () => {
        setResponse('b')
    }
    const handleCClick = () => {
        setResponse('c')
    }
    const handleDClick = () => {
        setResponse('d')
    }

    return (  
        <div className="question">
            <h2>{number}. {title}</h2>
            <form onSubmit={handleSubmitQuestion}>
                <div className="aswers-container">
                    <div className="answer">
                        a)
                        <input type="radio" id="a" name="answer" value="a" onClick={handleAClick}></input>
                        <label >{a}</label>
                    </div>
                    <div className="answer">
                        b)
                        <input type="radio" id="b" name="answer" value="b" onClick={handleBClick}></input>
                        <label >{b}</label>
                    </div>
                    <div className="answer">
                        c)
                        <input type="radio" id="c" name="answer" value="c" onClick={handleCClick}></input>
                        <label >{c}</label>
                        
                    </div>
                    <div className="answer">
                        d)
                        <input type="radio" id="d" name="answer" value="d" onClick={handleDClick}></input>
                        <label >{d}</label>
                    </div>
                    <input type="submit" value="Responder"></input>
                    <div className={`not-show-div ${isRight == 1 ? 'show-true' : isRight == 2 ? 'show-false' : ''}`}>
                            
                        </div>
                </div>
            </form >
        </div >
    );
}

export default Question;
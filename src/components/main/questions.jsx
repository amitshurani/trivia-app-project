import {useNavigate} from 'react-router-dom';
import { useState } from 'react'

const Questions=(props) => {
    
    const [currentQ, setCurrentQ] = useState(0)
    
    const navigate = useNavigate();
    const navigateToWin = () => {
        navigate('/win');
    };
    const navigateToLost = () => {
        navigate('/lost');
    };    
    let newQuestion = () => {
        if (currentQ<19){
            setCurrentQ(currentQ + 1)
        }
        else{ 
        return navigateToWin()}
    }

    let shownAnswers = props.shuffle(props.question[currentQ].answers)
        return (
            <div className="container text-center m-5">
            <div className="row m-3">
                <h4>Question number {currentQ+1} : <h3> <span className='badge bg-primary'> {props.question[currentQ].q} </span> </h3> </h4>
            </div>
            <div className="row">
                <div className="col m-5">
                    <button className='btn btn-outline-primary' id='button' onClick={shownAnswers[0].isTrue?()=>newQuestion():navigateToLost}>{shownAnswers[0].text}</button>
                </div>
                <div className="col m-5">
                    <button className='btn btn-outline-primary' id='button' onClick={shownAnswers[1].isTrue?()=>newQuestion():navigateToLost}>{shownAnswers[1].text} </button>
                </div>
            </div>
            <div className="row">
                <div className="col m-5">
                    <button className='btn btn-outline-primary' id='button' onClick={shownAnswers[2].isTrue?()=>newQuestion():navigateToLost}>{shownAnswers[2].text} </button>
                </div>
                <div className="col m-5">
                    <button className='btn btn-outline-primary' id='button' onClick={shownAnswers[3].isTrue?()=>newQuestion():navigateToLost}>{shownAnswers[3].text} </button>
                </div>
            </div>
            <h1 className="m-2">progress</h1>
        </div>
        );
    } 



export default Questions;

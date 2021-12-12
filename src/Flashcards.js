import { useState } from 'react';
import turningArrow from './Images/turningarrow.svg';
import lightning from "./Images/Vector.svg";

export default function Flashcards(props){

    console.log(props)

    

    return(
        <div className={props.class}>
            <Topo src={lightning}/>
            <div className={props.cardClass} >
                    <Question cardSideQuestion={props.cardSideQuestion} count={props.questionIndex + 1 + '/' + props.questionArray.length} question={props.questionArray[props.questionIndex]} turnCard={props.turnCard} questionAndAnswerContent={props.questionAndAnswerContent} cardClass={props.cardClass} questionIndex={props.questionIndex}>
                    
                    </Question>
                    <Answer cardSideAnswer={props.cardSideAnswer} count={props.questionIndex + 1 + '/' + props.questionArray.length} question={props.questionArray[props.questionIndex]} answer={props.answerArray[props.answerIndex]} color={props.color} cardClass={props.cardClass} selectColor={props.selectColor} situations={props.situations} arrowClass={props.arrowClass} questionAndAnswerContent={props.questionAndAnswerContent} questionIndex={props.questionIndex} turnCard={props.turnCard} hideAnswer={props.hideAnswer} hideCard={props.hideCard} addAnswer={props.addAnswer}>
                           
                    </Answer>
            </div>
        </div>
    )
}

 function Topo(props){
    return(
        <div className='topo'>
            <img src={props.src}></img>
            <span> ZapRecall </span>
     </div>

    )
}

function Question(props){

    return(
    <div className={props.cardSideQuestion}>
        <span>{props.count}</span>
        <>
            <h1>{props.question}</h1>
        </>
        <img src={turningArrow} onClick={() => {props.turnCard(props.cardClass);props.questionAndAnswerContent(props.questionIndex);}}></img>
    </div>

    )

}

function Answer(props){

    return(
    <div className={props.cardSideAnswer}>
        <span className='questionUpperText'>{props.question}</span>
        <span>{props.count}</span>
        <p>{props.answer}</p>
        <SituationAnswer color={props.color} cardClass={props.cardClass} selectColor={props.selectColor} situations={props.situations} questionAndAnswerContent={props.questionAndAnswerContent} questionIndex={props.questionIndex} hideCard={props.hideCard} addAnswer={props.addAnswer}/>
        <img className={props.arrowClass} src={turningArrow} onClick={() => {props.turnCard(props.cardClass);props.questionAndAnswerContent(props.questionIndex);props.hideAnswer();}}></img>
    </div>

    )

}

function SituationAnswer(props){


    return(
    <div className={props.situations}>
        <div className={'container ' + props.color[0]} onClick={() => {props.selectColor(props.cardClass,props.color[0]);props.questionAndAnswerContent(props.questionIndex);props.hideCard()}}>
            <button onClick={e => props.addAnswer(e.target.innerText)}> Aprendi agora</button>
        </div>
        <div className={'container ' + props.color[1]} onClick={() => {props.selectColor(props.cardClass,props.color[1]);props.questionAndAnswerContent(props.questionIndex);props.hideCard()}}>
            <button onClick={e => props.addAnswer(e.target.innerText)}> Não lembrei</button>
        </div>
        <div className={'container ' + props.color[2]} onClick={() => {props.selectColor(props.cardClass,props.color[2]);props.questionAndAnswerContent(props.questionIndex);props.hideCard()}}>
            <button onClick={e => props.addAnswer(e.target.innerText)}> Lembrei com esforço </button>
        </div>
        <div className={'container ' + props.color[3]} onClick={() => {props.selectColor(props.cardClass,props.color[3]);props.questionAndAnswerContent(props.questionIndex);props.hideCard()}}>
            <button onClick={e => props.addAnswer(e.target.innerText)}> Zap </button>
        </div>
    </div>

    )


}

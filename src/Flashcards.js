import { useState } from 'react';
import turningArrow from './Images/turningarrow.svg';
import lightning from "./Images/Vector.svg";

export default function Flashcards(props){

    console.log(props)

    

    return(
        <div className={props.class}>
            <Topo src={lightning}/>
            <div className={props.cardClass} onClick={() => {props.turnCard(props.cardClass);props.questionContent(props.questionIndex);}}>
                    <Question cardSideQuestion={props.cardSideQuestion} count={props.questionIndex + 1 + '/' + props.questionArray.length} question={props.questionArray[props.questionIndex]}>
                    
                    </Question>
                    <Answer cardSideAnswer={props.cardSideAnswer} count={props.questionIndex + 1 + '/' + props.questionArray.length} answer={props.answerArray[props.answerIndex]} color={props.color} cardClass={props.cardClass} selectColor={props.selectColor}>
                           
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
        <img src={turningArrow}></img>
    </div>

    )

}

function Answer(props){

    return(
    <div className={props.cardSideAnswer}>
        <span>{props.count}</span>
        <p>{props.answer}</p>
        <SituationAnswer color={props.color} cardClass={props.cardClass} selectColor={props.selectColor}/>
    </div>

    )

}

function SituationAnswer(props){
    return(
        <div className='situations'>
        <div className={'container ' + props.color[0]} onClick={() => props.selectColor(props.cardClass,props.color[0])}>
            <span> Aprendi agora </span>
        </div>
        <div className={'container ' + props.color[1]} onClick={() => props.selectColor(props.cardClass,props.color[1])}>
            <span> Não lembrei </span>
        </div>
        <div className={'container ' + props.color[2]} onClick={() => props.selectColor(props.cardClass,props.color[2])}>
            <span> Lembrei com esforço </span>
        </div>
        <div className={'container ' + props.color[3]} onClick={() => props.selectColor(props.cardClass,props.color[3])}>
            <span> Zap </span>
        </div>
    </div>

    )


}

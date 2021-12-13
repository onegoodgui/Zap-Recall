import lightning from "./Images/Vector.svg";
import partyingEmoji from './Images/partyingEmoji.svg';
import sadEmoji from './Images/sadEmoji.svg';
import arrowright from './Images/arrowright.svg';

export default function ResultsScreen(props){
    
    return(
        <div className={props.resultsScreenClass}>
            <Topo src={lightning}/>
            <GoodResult goodResultClass={props.goodResultClass}
                        setFrontpage={props.setFrontpage} 
                        setFlashcard={props.setFlashcard}
                        setCount={props.setCount}
                        setCard = {props.setCard}
                        setQuestionIndex={props.setQuestionIndex}
                        setAnswerIndex={props.setAnswerIndex}
                        setSituations={props.setSituations}
                        setArrowClass={props.setArrowClass}
                        setCardSideAnswer={props.setCardSideAnswer}
                        setResultados={props.setResultados}
                        setResultsScreenClass={props.setResultsScreenClass}
                        setGoodResultClass={props.setGoodResultClass}
                        setBadResultClass={props.setBadResultClass}
                        setInputValue={props.setInputValue}
                        setInputPlaceholder={props.setInputPlaceholder}/>

            <BadResult badResultClass={props.badResultClass} 
                    setFrontpage={props.setFrontpage} 
                    setFlashcard={props.setFlashcard}
                    setCount={props.setCount}
                    setCard = {props.setCard}
                    setQuestionIndex={props.setQuestionIndex}
                    setAnswerIndex={props.setAnswerIndex}
                    setSituations={props.setSituations}
                    setArrowClass={props.setArrowClass}
                    setCardSideAnswer={props.setCardSideAnswer}
                    setResultados={props.setResultados}
                    setResultsScreenClass={props.setResultsScreenClass}
                    setGoodResultClass={props.setGoodResultClass}
                    setBadResultClass={props.setBadResultClass}
                    setInputValue={props.setInputValue}
                    setInputPlaceholder={props.setInputPlaceholder}
 
            />
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

function GoodResult(props){
    return( 
    <div className={props.goodResultClass}>
        <div className="main-text">
            <h1>Parabéns!</h1>
            <img src={partyingEmoji}></img>
        </div>
        <span> Você não esqueceu nenhum flashcard</span>
        <ResetButton setFrontpage={props.setFrontpage} 
                    setFlashcard={props.setFlashcard}
                    setCount={props.setCount}
                    setCard = {props.setCard}
                    setQuestionIndex={props.setQuestionIndex}
                    setAnswerIndex={props.setAnswerIndex}
                    setSituations={props.setSituations}
                    setArrowClass={props.setArrowClass}
                    setCardSideAnswer={props.setCardSideAnswer}
                    setResultados={props.setResultados}
                    setResultsScreenClass={props.setResultsScreenClass}
                    setGoodResultClass={props.setGoodResultClass}
                    setBadResultClass={props.setBadResultClass}
                    setInputValue={props.setInputValue}
                    setInputPlaceholder={props.setInputPlaceholder}
                    
        /> 
    </div>       
    )
}

function BadResult(props){
    return(
    <div className={props.badResultClass}>
        <div className="main-text">
            <h1>Putz... </h1>
            <img src={sadEmoji}></img>
        </div>
        <span>Você esqueceu alguns flashcards...Não desanime! Na próxima você consegue!</span>
        <ResetButton setFrontpage={props.setFrontpage} 
                    setFlashcard={props.setFlashcard}
                    setCount={props.setCount}
                    setCard = {props.setCard}
                    setQuestionIndex={props.setQuestionIndex}
                    setAnswerIndex={props.setAnswerIndex}
                    setSituations={props.setSituations}
                    setArrowClass={props.setArrowClass}
                    setCardSideAnswer={props.setCardSideAnswer}
                    setResultados={props.setResultados}
                    setResultsScreenClass={props.setResultsScreenClass}
                    setGoodResultClass={props.setGoodResultClass}
                    setBadResultClass={props.setBadResultClass}
                    setInputValue={props.setInputValue}
                    setInputPlaceholder={props.setInputPlaceholder}
                    
        />
    </div>
    )
}

function ResetButton(props){ 

    return(
    <>
        <button onClick={() => {props.setFrontpage(['frontpage']);
        props.setFlashcard(['hidden']);
        props.setCount(1);
        props.setCard('card');
        props.setQuestionIndex(0);
        props.setAnswerIndex(0);
        props.setSituations('situations');
        props.setArrowClass('hidden');
        props.setCardSideAnswer('card-face card-back');
        props.setResultados([]);
        props.setResultsScreenClass('results hidden');
        props.setGoodResultClass('goodresult hidden');
        props.setBadResultClass('badresult hidden');
        props.setInputValue('');
        props.setInputPlaceholder('Sua meta de zaps');
        }}>
            <span>Tentar Novamente</span>
            <img src={arrowright}></img>
            <img src={arrowright}></img>
        </button>
    </> 
        

    )
    
}
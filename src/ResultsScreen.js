import lightning from "./Images/Vector.svg";
import partyingEmoji from './Images/partyingEmoji.svg';
import sadEmoji from './Images/sadEmoji.svg';

export default function ResultsScreen(props){
    
    return(
        <div className={props.resultsScreenClass}>
            <Topo src={lightning}/>
            <GoodResult goodResultClass={props.goodResultClass}/>
            <BadResult badResultClass={props.badResultClass}/>
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
    </div>
    )
}
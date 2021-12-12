import React from 'react';
import Inicio from "./inicio.js";
import Flashcards from './Flashcards.js';
import ResultsScreen from './ResultsScreen.js';

export default function App(){

    const content = [{pergunta:'O que é JSX?',resposta:'Uma extensão de linguagem do JavaScript'},
    {pergunta:'O React é __', resposta: 'Uma biblioteca JavaScript para construção de interfaces'},
    {pergunta:'Componentes devem iniciar com __ ', resposta: 'letra maiúscula'},
    {pergunta:'Podemos colocar __ dentro do JSX', resposta: 'expressões'},
    {pergunta:'O ReactDOM nos ajuda __ ', resposta:'interagindo com a DOM para colocar componentes React na mesma'},
    {pergunta:'Usamos o npm para __', resposta:'gerenciar os pacotes necessários e suas dependências'},
    {pergunta:'Usamos props para __', resposta:'passar diferentes informações para componentes'},
    {pergunta:'Usamos estado (state) para __ ', resposta:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}]

    const question = content.map((question) => (question.pergunta));
    const answer = content.map((question) => (question.resposta));
    const colors = ['black', 'red', 'green', 'yellow']


    const [frontpage, setFrontpage] = React.useState(['frontpage']);
    const [flashcard, setFlashcard] = React.useState(['hidden']);
    const [count, setCount] = React.useState(1);
    const [card,setCard] = React.useState('card');
    const [questionArray] = React.useState(question);
    let [questionIndex, setQuestionIndex] = React.useState(0);
    const [answerArray] = React.useState(answer);
    let [answerIndex, setAnswerIndex] = React.useState(0);
    const [situations,setSituations] = React.useState('situations');
    const [arrowClass,setArrowClass] = React.useState('hidden');
    const [cardSideAnswer, setCardSideAnswer] = React.useState('card-face card-back');
    let [results, setResultados] = React.useState([]);
    const[resultsScreenClass,setResultsScreenClass] = React.useState('results hidden');
    const[goodResultClass,setGoodResultClass] = React.useState('goodresult hidden');
    const[badResultClass,setBadResultClass] = React.useState('badresult hidden');
    let erros = 0;

    function hideFrontpage(){
        const newFrontpage = [...frontpage, 'hidden'];
        let arrayClassFrontpage = newFrontpage.join(' ');
        
        let arrayCard = [...flashcard]
        arrayCard.push('flashcard');
        let index = arrayCard.indexOf('hidden');
        arrayCard.splice(index,1);
        arrayCard.join(' ')

        setFrontpage(arrayClassFrontpage)
        setFlashcard(arrayCard)

    }

    function turnCard(card){
        if(card.includes('card-flip')){
            // setCard('card')
            if(card.includes('black') || card.includes('red') || card.includes('green') || card.includes('yellow')){
                setCard('card')
                setArrowClass('hidden');
                setSituations('situations');
                
            }
            else{

            }
        }
        else{
            setCard(card.concat(' ', 'card-flip'));
            setCardSideAnswer('card-face card-back');
        }
    }

    function selectColor(card,color){
        setCard(card.concat(' ', color))

    }

    function questionAndAnswerContent(questionIndex){
        if (card.includes('card-flip')){
            if(card.includes('black') || card.includes('red') || card.includes('green') || card.includes('yellow')){
                
                setQuestionIndex(questionIndex + 1);
                setAnswerIndex(answerIndex + 1);
                setCount(count+1)
            }
            else{
                setSituations('situations hidden')
                setArrowClass(' ');
            }
        }
        
    }

    function hideAnswer(){
        setCardSideAnswer(cardSideAnswer.concat(' ','hidden'));
    }

    function hideCard(){
        if(answerIndex+1 === question.length){
            setArrowClass('hidden');
            setTimeout(() => {
                setFlashcard('hidden');
                setResultsScreenClass('results');
                if(results.includes('Não lembrei')){
                    setBadResultClass('badresult');
                }
                else{
                    setGoodResultClass('goodresult');
                }
            }, 500);
            
        }
    }

    function addAnswer(string){
        if(string === 'Não lembrei'){
            erros++
        }
        let newresults = [...results,string];
        setResultados(newresults);
    }
    console.log(results)

    return(
        <>
            <Inicio class={frontpage} hideFrontpage={hideFrontpage}/>
            <Flashcards class = {flashcard} count={count} cardClass = {card} turnCard={turnCard} cardSideQuestion='card-face card-front' cardSideAnswer={cardSideAnswer} questionAndAnswerContent={questionAndAnswerContent} questionArray={questionArray} questionIndex={questionIndex} answerArray={answerArray} answerIndex={answerIndex} color={colors} selectColor={selectColor} situations={situations} arrowClass={arrowClass} hideAnswer={hideAnswer} hideCard={hideCard} results={results} addAnswer={addAnswer}/>
            <ResultsScreen resultsScreenClass={resultsScreenClass} goodResultClass={goodResultClass} badResultClass={badResultClass}/> 
        </>
    )
}
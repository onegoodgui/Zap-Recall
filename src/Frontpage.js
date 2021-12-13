import arrowright from './Images/arrowright.svg';
import lightning from "./Images/Vector.svg";


export default function Frontpage(props){




    return(
        <div className = {props.class} >
            <div className="logo">
                <img src={lightning} className='logoImg'></img>
                <h1>ZapRecall</h1>
            </div>
            <Input value={props.value} placeholder={props.placeholder} setInputValue={props.setInputValue}/>    
            <button onClick = {props.hideFrontpage}>
                <span>Praticar React</span>
                <img src={arrowright}></img>
                <img src={arrowright}></img>
            </button>
        </div>

    )
} 

function Input(props){
    return(
        <input value={props.value} placeholder={props.placeholder} onChange={e => props.setInputValue(e.target.value)}></input>
    )
}
import arrowright from './Images/arrowright.svg';
import lightning from "./Images/Vector.svg";


export default function Inicio(props){




    return(
        <div className = {props.class} >
            <div className="logo">
                <img src={lightning} className='logoImg'></img>
                <h1>ZapRecall</h1>
            </div>
            <button onClick = {props.hideFrontpage}>
                <span>Praticar React</span>
                <img src={arrowright}></img>
                <img src={arrowright}></img>
            </button>
        </div>

    )
} 
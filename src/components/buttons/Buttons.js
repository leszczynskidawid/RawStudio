import './button.css'
function Buttons(props) {
    return ( 
        <button onClick = {props.click} >{props.text}</button>
     );
}

export default Buttons;
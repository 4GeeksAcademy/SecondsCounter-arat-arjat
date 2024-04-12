//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import ProTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter1 (props) {
    return (
        <div className="BigClock">
            <div className="calendar">
            <i class="fa-solid fa-clock-rotate-left fa-2x"></i>
            </div>
            <div className="Seis">{props.digitoSeis % 10}</div>
            <div className="cinco">{props.digitoCinco % 10}</div>
            <div className="cuatro">{props.digitoCuatro % 10}</div>
            <div className="tres">{props.digitoTres % 10}</div>
            <div className="dos">{props.digitoDos % 10}</div>
            <div className="uno">{props.digitoUno % 10}</div>
        </div>
    )
}

SimpleCounter1.prototype = {
    digitoSeis: ProTypes.number,
   digitoCinco: ProTypes.number,
    digitoCuatro: ProTypes.number,
    digitoTres: ProTypes.number, 
    digitoDos:ProTypes.number, 
    digitoUno: ProTypes.number,
};

let counter = 0; 
setInterval(function(){
    const seis = Math.floor(counter/100000)
   const cinco = Math.floor(counter/10000)
    const cuatro = Math.floor(counter/1000);
    const tres = Math.floor(counter/100);
    const dos = Math.floor(counter/10);
    const uno = Math.floor(counter/1);
 counter ++;

//render your react application
    ReactDOM.render(< SimpleCounter1 digitoUno={uno} digitoDos={dos} digitoTres={tres} digitoCuatro={cuatro} digitoCinco={cinco} digitoSeis={seis} />, 
    document.querySelector("#app")
);

},1000);



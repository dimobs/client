import { useState } from "react";

export default function Book (x){
const [heghlited, setHeghlited] = useState(false);
const [isDel, setDel] = useState(false);

const clickHandler = () => {
setHeghlited(state => !state)
}

const doubleClick = () => {
    setDel(state => !state)
}

let style = {};
if(heghlited) {
    style.background = 'blue';
}

if(isDel) {
    style.background = 'red'
}

    return (
     <li style={style}>
        <article>
            <h2>
                {x.title}
            </h2>
            <div>Year: {x.year}</div>
            <button onClick={clickHandler}>Done!</button>
            <button onDoubleClick={doubleClick}>Delete</button>
        </article>
        </li>
    )
}
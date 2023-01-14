import { useState } from "react";

export default function Book (x){
const [heghlited, setHeghlited] = useState(false);

const clickHandler = () => {
setHeghlited(state => !state)
}

let style = {};
if(heghlited) {
    style.background = 'blue';
}

    return (
     <li onClick={clickHandler} style={style}>
        <article>
            <h2>
                {x.title}
            </h2>
            <div>Year: {x.year}</div>
        </article>
        </li>
    )
}
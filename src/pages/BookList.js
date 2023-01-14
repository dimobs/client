import Book from "./Book";

export default function BookList(props) {
    return(
        <ul>
 {  props.books.map(x => <Book key={x.year} {...x} />)}
   </ul>
)}
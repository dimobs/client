export const Item =({x}) => {

    return(
        <>
    <td class="tr">{x.date}</td>
    <td class="tr">{x.date}</td>
   {/* <td>{{owner.username}}</td> */}
    <td>{x.sender}</td>
    <td>{x.resiver}</td>
    <td>{x.amount}</td>
    <td>{x.description}</td>
        </>
    )

}
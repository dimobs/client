import { Item } from "./item";
import uniqid from 'uniqid'

 export const HistoryPage = ({
pays
}) => {
console.log(pays);
  return (
    <>   
      <table>
      <colgroup className="colgroup">
        <col style={{ backgroundColor: "burlywood" }} />
        <col span={99} />
      </colgroup>
      <tbody>
        <tr className="tr">
          <th>Date:</th>
          <th>owner:</th>
          <th>Sender</th>
          <th>Resiver</th>
          <th>Money</th>
          <th>Description</th>
        </tr>
        {pays.map(x => {
        return(
        <Item key={uniqid} x={x} />
        )
      })}
        <tr className="tr" />
      </tbody>
    </table>
    : <p>No pay history yet!</p>
    </>
  )
 }

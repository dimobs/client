
 export const HistoryPage = ({
  pay
}) => {

  return (
    <>
     <div className="admin">
    <li><a href="/createPay">Create</a></li>
    <p>Table:</p>
    {"{"}
    {"{"}#each tablePays{"}"}
    {"}"}
    {"{"}
    {"{"}&gt; payPreview{"}"}
    {"}"}
    {"{"}
    {"{"}else{"}"}
    {"}"}
    <p>
      No pays in database. <a href="/createPay">Create the first listing!</a>
    </p>
    {"{"}
    {"{"}/each{"}"}
    {"}"}
    {pay?.map(x => {
      console.log(x);
    })}
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
        <tr className="tr" />
      </tbody>
    </table>
  </div>
    </>
  )
 }

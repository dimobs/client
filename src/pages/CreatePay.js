export const CreatePay = () => {

    return (
        <>
 <>
  <div className="admin">
    <li>
      <a href="/paymentHistory">View History</a>
    </li>
  </div>
  <h1>Payment Page</h1>
  <p>Expense Tracker</p>
  <i className="fa-regular fa-arrow-right-to-arc" />
  <div className="form">
    <form action="/createPay" method="POST">
      <select name="sender">
        <option>Select Sender Name*</option>
        <option value="Todor" selected="">
          Todor Yankov Karachorbadzhiev
        </option>
        <option value="Dimo" name="nameSender">
          Dimo Yankov Karachorbadzhiev
        </option>
        <option value="Ivanka" name="nameSender">
          Ivanka Dimova Karachorbadzhieva
        </option>
      </select>
      <select name="resiver">
        <option>Select Resiver Name*</option>
        <option value="Todor">Todor Yankov Karachorbadzhiev</option>
        <option value="Dimo" selected="">
          Dimo Yankov Karachorbadzhiev
        </option>
        <option value="Ivanka">Ivanka Dimova Karachorbadzhieva</option>
      </select>
      {"{"}
      {"{"}!--{" "}
      <p style={{ display: "inline-block", color: "grey" }}>
        Format: dd/mm/yyyy
      </p>{" "}
      --{"}"}
      {"}"}
      {"{"}
      {"{"}!--{" "}
      <h5 style={{ padding: "10px 10px 10px 10px" }} className="mt-4 card-info">
        <label htmlFor=""> Date: </label>
        <i className="far fa-calendar-alt" />
        <span>2021-06-16</span> --{"}"}
        {"}"}
        <label htmlFor="">Date:</label> <i className="far fa-calendar-alt" />
        <input
          name="date"
          type="text"
          defaultValue="{{dateBg}}"
          placeholder="{{dateBg}}"
        />
        <label style={{ display: "inline-block" }} htmlFor="amount">
          Amount:
        </label>
        <div style={{ display: "block" }}>
          <input
            placeholder="0.00*"
            id="amount"
            name="amount"
            defaultValue=""
          />
          <i className="fas fa-hand-holding-usd" />
        </div>
        {"{"}
        {"{"}!--{" "}
        <div style={{ marginTop: "2em" }}>
          Description: --{"}"}
          {"}"}
          <label
            style={{ display: "block", marginTop: "2em" }}
            htmlFor="description"
          >
            Description:
          </label>
          <textarea
            id="name"
            placeholder="Pay for?"
            name="description"
            defaultValue={""}
          />
          {"{"}
          {"{"}!--{" "}
        </div>{" "}
        --{"}"}
        {"}"}
        <label htmlFor="imageURL">IMAGE:</label>
        <input
          type="text"
          placeholder="Add image"
          id="image"
          name="imageUrl"
          defaultValue=""
        />
        <input type="submit" defaultValue="Publish" />
      </h5>
    </form>
  </div>
</>

        </>
    )
}
import styles from './createPay.module.css'
import {Link } from 'react-router-dom';


export const CreatePay = ({addPayHandler}) => {

const onSubmit = (e) => {
  e.preventDefault();

  const payData = Object.fromEntries(new FormData(e.target));

  console.log(payData);
  addPayHandler(payData)
}


    return (
        <>
  <div className={styles.admin}>
    {/* <li><a href="/paymentHistory">View History</a></li> */}
  </div>
  <h1>Payment Page</h1>
  <p>Expense Tracker</p>
  <i className={styles["fa-regular fa-arrow-right-to-arc"]} />
  <div className= {styles.form}>
    <form id="createPay"  onSubmit={onSubmit} >
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
        <option defaultValue={"Todor"}>Todor Yankov Karachorbadzhiev</option>
        <option value="Dimo" selected="">
          Dimo Yankov Karachorbadzhiev
        </option>
        <option value="Ivanka">Ivanka Dimova Karachorbadzhieva</option>
      </select>
    
      <p style={{ display: "inline-block", color: "grey" }}>
        Format: dd/mm/yyyy
      </p>{" "}
          <h5 style={{ padding: "10px 10px 10px 10px" }} className="mt-4 card-info">
        <label htmlFor=""> Date: </label>
        <i className={styles["far fa-calendar-alt"]} />
        <span>2021-06-16</span> --{"}"}
        {"}"}
        <label htmlFor="">Date:</label> <i className={styles["far fa-calendar-alt"]} />
        <input
          name="date"
          type="text"
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
                    />
          <i className={styles["fas fa-hand-holding-usd"]} />
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
        
        />
        <input type="submit" />
      </h5>
    </form>
  </div>
        </>
    )
}
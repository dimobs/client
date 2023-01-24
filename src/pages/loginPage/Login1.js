
import styles from './entrance.module.css'
export const Login1 =() => {

return(
<div className={`${styles["form-wrapper"]} ${styles["sign-in"]}`}>
<form action="">
    <h2>Login</h2>
    <div className={styles["input-group"]}>
        <input type="text" required />
        <label for="">Username</label>
    </div>
    <div className={styles["input-group"]}>
        <input type="password" required />
        <label for="">Password</label>
    </div>
    <div className={styles["forgot-pass"]}>
        <a href="/">Forgot Password?</a>
    </div>
    <button type="submit" className={styles["btn"]}>Login</button>
    <div className={styles["sign-link"]}>
        <p>Don't have an account? <a href="/" className={styles["signUp-link"]}>Sign Up</a></p>
    </div>
</form>
</div>
)
}
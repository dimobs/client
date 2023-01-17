import styles from './entrance.module.css'
export const Login =() => {

return(
<>
<div className={styles["wrapper"]}>
        <div className={`${styles["form-wrapper"]} ${styles["sign-up"]}`}>
            <form action="">
                <h2>Sign Up</h2>
                <div className={styles["input-group"]}>
                    <input type="text" required />
                    <label for="">Username</label> 
                </div>
                <div className={styles["input-group"]}>
                    <input type="email" required />
                    <label for="">Email</label>
                </div>
                <div className={styles["input-group"]}>
                    <input type="password" required />
                    <label for="">Password</label>
                </div>
                <button type="submit" className={styles["btn"]}>Sign Up</button>
                <div className={styles["sign-link"]}>
                    <p>Already have an account? <a href="/" className={styles["signIn-link"]}>Sign In</a></p>
                </div>
            </form>
        </div>


    </div>
</>
)
}




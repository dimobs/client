import broken from '../public/brokingPic.jpg';
import styles from '../public/public.module.css';

export const NotFound = () => {
    
    
    return (
        <>
        <div className={styles.notFaound}>
<img id={styles.sadFaceImg} className={styles.sadface} src={broken} alt="sadface" />
        </div>
<h1>404</h1>
<p>
{/* {{data}} */}

</p>
<h2>Page not found</h2>
 <div className="admin">
     <div className="format-404" >

     </div>
     <div className="format-404">
 
     </div>
      <div className="format-404">

     </div>
 </div>
 </>
    )
}
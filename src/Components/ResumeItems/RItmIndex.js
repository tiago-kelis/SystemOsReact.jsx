/* eslint-disable jsx-a11y/role-supports-aria-props */
import styles from "./ResumeItms.module.css";


function ResumeItems  ({title, Icon, value}) {
  return (
    <header className={styles.headerItem}>      
     
        <div>
        <h2>{title}</h2>  
        <Icon/> 
                
        </div>       
       <nav>
            <h4>R$</h4>
            <p>{value}</p>

        </nav>       

    </header>

  )
}

export default ResumeItems;

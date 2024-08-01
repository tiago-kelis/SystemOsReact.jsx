/* eslint-disable jsx-a11y/anchor-is-valid */

import styles from "./Form.module.css";
import React from 'react'

function Form  () {
  return (

    <form>
          <div className={styles.form}>
          <input type="text" placeholder="Descrição"></input> 
          <input type="number" placeholder="Valor"></input> 
         <nav>
         <input type="checkbox" value="entradas"/>
         <label for="Entradas">Entradas</label>

         <input type="checkbox" value="saidas"/>
         <label for="saidas">Saídas</label>          
           
         </nav>   
         <section>
           <a id="#">Adicionar</a>
        </section>   
      
    </div>

    </form>
  
  )
}

export default Form;


import ResumeItems from "../ResumeItems/RItmIndex";
import styles from "./Resume.module.css";
import React from 'react'
import { FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
 } from "react-icons/fa";



function Resume ()  {
  return (
    <div className={styles.resume}>        
       <ResumeItems title="Entradas" Icon={FaRegArrowAltCircleUp} value={"0,00"}/>
       <ResumeItems title="Saídas" Icon={ FaRegArrowAltCircleDown} value={"0,00"} />
       <ResumeItems title="Total" Icon={FaDollarSign} value={"0,00"}/>
    </div>
  ) 
}

export default Resume;
import React from 'react'
import Global from './styles/global'
import Header from './Components/Header'
import Resume from './Components/Resume/RsumIndex'
import Form from './Components/Form/FormIndex'

const App = () => {
  return (
   <>
   <Header/>
   <Resume/>
   <Form/>
    <Global/>
   </>

  )
}

export default App
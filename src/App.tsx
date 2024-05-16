import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import UnorderedList from './components/UnorderedList'
import OrderedList from './components/OrderedList'
import { headlines } from './services/Headline'
import { preparationList } from './services/PreparationHeadline'
import { ingredientList } from './services/Ingredients'
import { instructionList } from './services/Instructions'
import './App.css'


function App() {
  return (
    <>
      <div className="container">
        <Header headers={headlines}/>
        <section className="preparation">
          <h4>Preparation time</h4>
          <UnorderedList customClassName='bold' list={preparationList}/>
        </section>
        <section className="ingredients">
          <h3>Ingredients</h3>
          <UnorderedList list={ingredientList}/>
        </section>
        <section className="Instructions">
          <h3>Instructions</h3>
          <OrderedList list={instructionList}/>
        </section>
      </div>
    </>
  )
}

export default App

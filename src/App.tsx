import './App.css'
import {ItemList} from './components/ItemList'
import Data from '../data/data.json'
import { Item } from './types'
const data = Data as Array<Item>  //Объявляем что Data является массивом Item-сов

function App() {


  return (
    <>
      <ItemList items={data} />
    </>
  )
}

export default App

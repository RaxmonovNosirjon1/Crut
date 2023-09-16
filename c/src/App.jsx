
import { deleteDoc,doc } from 'firebase/firestore'
import './App.css'
import Home from './components/Home'
import Modals from './components/Modal'
import Swal from 'sweetalert2'
import {db} from "./config"

function App() {

function deleteItem(id){
 deleteDoc(doc(db,'users',id)).then(res=>{
  Swal.fire( 'Good job!',
  'You clicked the button!','success')
 }).catch(err=>{
  Swal.fire('error')
 })
}
  return (
    <>
    <Modals/>
     <Home deleteItem={deleteItem}/>
    </>
  )
}

export default App

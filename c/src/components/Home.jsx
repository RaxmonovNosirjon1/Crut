import React, { useEffect, useState } from 'react'
import {db} from "../config"
import { collection, getDocs } from 'firebase/firestore';
import {Grid, IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Home({deleteItem}) {
  const [user,setUser]=useState([])
   

  async function getUsers(){
    try{
     await getDocs(collection(db,'users')).then(res=>{
      setUser(res.docs.map(doc=>({id:doc.id,...doc.data()})))
     })
     }catch{
  
     }
  }
  useEffect(()=>{
    getUsers()
   
  },[user])
  return (
    <Grid container>
    
      <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell component={'th'}>
              id
            </TableCell>
            <TableCell component={'th'}>
              name
            </TableCell>
            <TableCell component={'th'}>
              email
            </TableCell>
            <TableCell component={'th'}>
              delet
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {user.length > 0 ? user.map((item,idx)=>(
      <TableRow>
        <TableCell>
          {idx+1}
        </TableCell>
        <TableCell>
          {item.name}
        </TableCell>
        <TableCell>
          {item.email}
        </TableCell>
        <TableCell>
          <IconButton onClick={()=>deleteItem(item.id)} color='error'>
            <DeleteIcon/> 
          </IconButton>
        </TableCell>
      </TableRow>
      )):<h1>Loading...</h1>}
        </TableBody>
      </Table>
      </TableContainer>
    </Grid>
    
  )
}

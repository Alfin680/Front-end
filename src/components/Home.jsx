import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Style.css';
import axios from 'axios';
const Home = () => {
    var [value,setValue]=useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/users').then((response)=>{
            console.log(response.data.users);
            setValue(value=response.data.users)
        })
    },[])
  return (
    <div>
      <Table className='D1'>
        <TableHead>
            <TableRow className='D2'>
                <TableCell id='t1'>First Name</TableCell>
                <TableCell id='t2'>Last Name</TableCell>
                <TableCell id='t3'>Age</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {value.map((data,index)=>{
                return <TableRow>
                    <TableCell>{data.firstName}</TableCell>
                    <TableCell>{data.lastName}</TableCell>
                    <TableCell>{data.age}</TableCell>
                </TableRow>
            })}
        </TableBody>
      </Table>
    </div>
  )
}

export default Home

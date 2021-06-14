import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";

const Display = ()=>{
   const [todo, setTodo] = useState([])

   useEffect(()=>{
       fetch("http://192.168.8.101:9090/todo/display")
       .then(res=>res.json())
       .then(data => setTodo(data))
   },[])
   
    return (
        <div>
            <h1>All Your Todo Display Inside of here</h1>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Titre</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {todo.map(tod=>(
                        <TableRow key={tod.id}>
                            <TableCell>{tod.id}</TableCell>
                            <TableCell>{tod.nom}</TableCell>
                            <TableCell>{tod.description}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Paper>

        </div>
    )
}

export default Display;
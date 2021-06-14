import { Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@material-ui/core";
import { Add,  Delete } from "@material-ui/icons";
import { Fragment, useEffect, useState } from "react";


const AddTodo = ({onTodoAdd})=>{
    const [dialogOpen, setDialogOpen] = useState(false);
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [todos, setTodos] = useState([{id:1, nom: "demo", description:"demo"}])
    const [load, setLoad] = useState(false)
    

    const onDialogOpen = ()=>setDialogOpen(true)

    const onDialogClosed = ()=>setDialogOpen(false)

    const onCreate = ()=>{
        if(title!=="" && desc !==""){
            onDialogClosed()
            setLoad(true)
            setTitle(""); setDesc("");
        }
    }
    const handleDelete = (id)=>{
        setLoad(false)
    }

    useEffect(()=>{
        fetch("http://192.168.8.101:9090/users")
          .then((data)=>data.json())
          .then((data)=>console.log(data))
          .catch((err)=>console.log("Erreur "+err))
    },[load])
    
    return (
        <Fragment>
            <div  style={{marginTop:"20px"}}>
            <Button 
            onClick={onDialogOpen}
            variant="contained" 
            style={{float:"right"}}
            color="primary" 
            endIcon={<Add/>}>
                Add Todo
            </Button>
            
            <Dialog open={dialogOpen} onClose={onDialogClosed}>
                <DialogTitle>
                    New Todo 
                </DialogTitle>
                <DialogContent>
                    <TextField value={title} onChange={e=>setTitle(e.target.value)} fullWidth margin="normal" label="Title"/>
                    <TextField value={desc} onChange={e=>setDesc(e.target.value)} fullWidth margin="normal" label="description"/>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={onDialogClosed}>Cancel</Button>
                    <Button variant="contained" color="primary" onClick={onCreate}>Create</Button>
                </DialogActions>
            </Dialog>
            </div>

            <div>
            <Paper>
            <Table>
                <TableHead color="primary">
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Options</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map(dt=>(
                        <TableRow key={dt.id}>
                            <TableCell>{dt.id}</TableCell>
                            <TableCell>{dt.nom}</TableCell>
                            <TableCell>{dt.description}</TableCell>
                            <TableCell>
                                <span onClick={()=>handleDelete(dt.id)}><Delete color="secondary"/></span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </Paper>
        </div>


        </Fragment>
    )
}


export default AddTodo;
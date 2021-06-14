import { Button, Grid, makeStyles, TextField } from "@material-ui/core"
import { useState } from "react"

const useStyle = makeStyles(theme=>({
    myForm: {
        width: "60%",
        margin: "0 auto"
    }
}))

const Post = ()=>{
    
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(title !=='' && desc !==''){
            fetch("http://192.168.8.101:9090/todo/display", {
                method: "POST",
                headers: {'Content-type': "application/json"},
                body: JSON.stringify({description: desc, nom: title})
            })
            .then(()=>{ console.log("Enregistré avec succes") })
            .catch(err=>console.log("Une erreur "+err))
        }
    }


    const classes = useStyle()
    return (
        <div>
            <div className={classes.myForm}>
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item md={12}>
                            <TextField id="title" value={title} label="Title" onChange={e=>setTitle(e.target.value)}/>
                        </Grid>
                        <Grid item md={12}>
                            <TextField id="desc" value={desc} label="Description" onChange={e=>setDesc(e.target.value)}/>
                        </Grid>
                        <Grid item md={12}>
                            <Button variant="contained" color="secondary" type="submit">Enregistrer</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )
}

export default Post;
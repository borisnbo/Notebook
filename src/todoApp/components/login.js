import { Button, makeStyles, TextField } from "@material-ui/core"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"

const useStyles = makeStyles((theme)=>({
    form: {
        width: "35%",
        margin: "0 auto",
        marginTop: "5%",
        padding:"10px",
        border: "3px solid blue"
    }
}))

export function Register(){
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [passC, setPassC] = useState('')
    const styl = useStyles()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(name!=='' && pass !=='' && pass===passC){
            console.log(name+" succes "+pass)
        }else{
            alert("Les infos doivent correspondre")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styl.form}>
                <h1>Veillez remplir tous les champs</h1>
                <TextField onChange={(e)=>setName(e.target.value)} fullWidth label="User Name"/><br/><br/>
                <TextField type="password" onChange={(e)=>setPass(e.target.value)} fullWidth label="Password"/><br/><br/>
                <TextField type="password" onChange={(e)=>setPassC(e.target.value)} fullWidth label="Confirm Password"/><br/><br/>
                <Button type="submit" variant="contained" color="primary">M'inscrire</Button>
            </form> 
        </div>
    )
}

export function Login({onConnected}){

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const style = useStyles()
    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(name==='demo' && pass ==='pass'){
            console.log(name+" succes "+pass)
            onConnected(true)
            history.push("display")
        }else{
            alert("Les infos doivent correspondre")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={style.form}>
                <TextField onChange={(e)=>setName(e.target.value)} fullWidth label="User Name"/><br/><br/>
                <TextField type="password" onChange={(e)=>setPass(e.target.value)} fullWidth label="Password"/><br/><br/>
                <Link to="/register">Je n'ai pas de compte</Link><br/>
                <Button type="submit" variant="contained" color="primary">Me Connecter</Button>
            </form> 
        </div>
    )
}
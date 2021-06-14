import { useState } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Carte from "./components/card"
import Display from "./components/display"
import {Login, Ok, Register} from "./components/login"
import Nav from "./components/nav"
import AddTodo from "./components/page"
import Post from "./components/posts"

const Todo = ()=>{
    const [connected, setConnected] = useState(false)

    const handleConnected = (data)=>{
        setConnected(data)
    }

    return (
        <div>
            <BrowserRouter>
                <Nav/>
                <Route exact path="/add" component={()=>connected?<AddTodo/>:<Login onConnected={handleConnected}/>}/>
                <Route exact path="/login" component={()=><Login onConnected={handleConnected}/>}/>
                <Route exact path="/register" component={Register}/>
            </BrowserRouter>
        </div>
    )

}
export default Todo;
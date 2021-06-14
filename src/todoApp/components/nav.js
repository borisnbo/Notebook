import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { Camera, CameraAltOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom"

const useStyle = makeStyles(theme=>({
    toolbar: theme.mixins.toolbar,
    title: {
        flexGrow:1
    },
    lien: {
        marginLeft: 15,
        color:"#fff",
        textDecoration: "none",
        '&hover': {
            backgroundColor: "red"
        }
    },
    root:{
        boxShadow: "none",
    }
}))

const Nav = ()=>{
    const classes = useStyle()
    return(
        <div>
            <AppBar className={classes.root}>
                <Toolbar>
                    <Typography variant="title" className={classes.title}>
                        <CameraAltOutlined/>
                        Our Todo App
                    </Typography>
                    <Typography><Link to="/add" className={classes.lien}>Add Todo</Link></Typography>
                    <Typography><Link to="/display" className={classes.lien}>display</Link></Typography>
                    <Typography><Link to="/login" className={classes.lien}>login</Link></Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar}></div>
        </div>
    )
}
export default Nav;
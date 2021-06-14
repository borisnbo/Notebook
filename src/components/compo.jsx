
import { Grid, makeStyles } from "@material-ui/core";
import Acceul from "./acceuil";
import Navbar from "./navbar"

const useStyles = makeStyles((theme)=>({
    first:{
        height:"500px",
        backgroundImage: "url('./bg/bg-2.jpg')"
    },
    root:{
        flexDirection:"column",
        flexWrap:"wrap"
    },
    derer:{
        margin: "15%",
        position: "relative"
    }
}))

const Compo = ()=>{

    const classes = useStyles()

    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item md={12}>
                    <div className={classes.first}>
                        <Navbar/>
                        <Acceul/>
                    </div>
                </Grid>
                <Grid item md={12} sm={12} className={classes.derer}>
                    <div className={classes.derer}>demo texr</div>
                </Grid>
            </Grid>

        </div>
    )
}
export default Compo;
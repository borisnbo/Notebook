import { AppBar, Button, makeStyles, Toolbar, Typography } from "@material-ui/core"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyle= makeStyles((theme)=>({
    root:{
        display: "flex",
        padding: "0 6% 0 10%",
        backgroundColor: "inherit",
        boxShadow: "none",
        position: "relative",
        marginBottom: "20px"
    },
    title: {
        flexGrow: 1,
    },
    left:{
        marginRight: theme.spacing(2)
    }
}))

const Navbar = ()=>{

    const classes = useStyle()

    return(
        <div>
            <AppBar className={classes.root}>
                <Toolbar>
                        <Typography variant="h6" className={classes.left}>
                            BrandName
                        </Typography>
                        <Typography className={classes.left}>Home</Typography>
                        <Typography className={classes.left}>Product</Typography>
                        <Typography className={classes.left}>Pricing</Typography>
                        <Typography className={classes.title}>Contact</Typography>
                        <Typography>Login</Typography>
                        <Typography><Button variant="contained" color="primary" size="small" endIcon={<ArrowRightAltIcon/>}>Become a member</Button></Typography>
                 
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
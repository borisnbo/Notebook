import { Button, Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core"
import { PeopleOutline } from "@material-ui/icons"

const useStyle = makeStyles((theme)=>({
    root:{
        width: "80%",
        margin: "0 auto",
        textAlign: "center",
        color: "#fff",
    },
    title:{
        margin:"35px 0",
    },
    buttons:{
        margin: "10px 0 35px",
    }
}))

const Acceul = ()=>{

    const classes = useStyle()

    return (
        <div className={classes.root}>
            <div className={classes.bloc1}>
                <div className={classes.title} style={{marginTop:"70px"}}>
                    <Typography variant="h3">We Insure A Best <br/> Insurance Service</Typography>
                </div>
                <div className={classes.title}>
                    <Typography variant="body2">
                        We know how large objects will acts, but things on a<br/> small scale just do not act that way.
                    </Typography>
                </div>
                <div className={classes.buttons}>
                    <Button size="small" sm={12} variant="contained" color="primary">Get Quote now</Button>
                    <Button size="small" sm={12}>Learn more</Button>
                </div>
            </div>
            <div classNAme={classes.bloc2}>
                <Grid container spacing={6}>
                    {
                    ['Peace Of Mind', 'Set For Life', '100% Satisfaction'].map(val=>(
                        <Grid item md={4} sm={12}>
                            <Card>
                                <PeopleOutline size="large"/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        {val}
                                    </Typography>
                                    <Typography>
                                        The quick for jumps over the lazy dog
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                    }
                </Grid>
            </div>
        </div>
    )
}
export default Acceul;
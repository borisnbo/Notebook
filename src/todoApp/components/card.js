import { Button, Card, CardContent, CardHeader, CardMedia, Input, InputBase, TextField } from "@material-ui/core"
import { Twitter } from "@material-ui/icons"

const Carte = ()=>{

    return  (
        <div>
            <Card>
                <CardHeader>
                    <Twitter fontSize="large"/>
                </CardHeader>
                <CardContent>
                <form>
                    <TextField label="Enter your Name"/>
                    <TextField label="Enter your Number"/>
                    <TextField label="Enter your Email"/>
                    <Button variant="contained" color="secondary">Save</Button>
                </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default Carte;
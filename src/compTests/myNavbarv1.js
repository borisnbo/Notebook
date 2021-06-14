import { AppBar, Toolbar, Typography } from "@material-ui/core"

const NavbarV1 = ()=>{

    return(
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="title">
                        My Todo App
                    </Typography>
                    <Typography>Add todo</Typography>
                    <Typography>display todos</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
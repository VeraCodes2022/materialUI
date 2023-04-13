import React from "react";
import {Typography, AppBar, Card,CardContent, 
  CardMedia,CssBaseline,Grid,Toolbar, Container, CardActions} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Button from '@mui/material/Button';
import ComboBox from "./ComboBox";
import useStyles from "./style";
import '@fontsource/roboto/300.css';
import './App.css'

function App() {
  const classes=useStyles()
  const cards=[1,2,3,4,5,6,7,8,9]

  return (
    <>
    <CssBaseline/>
    <AppBar position="relative">
        <Toolbar>
            <PhotoCamera className={classes.icon}/>
            <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
    </AppBar>
    <main>
        <Container  maxWidth="sm"  className={classes.Container}>
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>Material UI Demo</Typography>
            <Typography variant="body" align="center" color="textSecondary"  paragraph   gutterBottom>
                 MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.
            </Typography>
            <div className={classes.buttons}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item>
                        <Button  variant="contained" color="primary">See My Photos</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="primary">Secondary Action</Button>
                    </Grid>

                </Grid>
            </div>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card,index)=>(<Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia 
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Random"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5">
                                Nesting the theme
                            </Typography>
                            <Typography>
                                 The Material palette generator can be used to generate a palette for any color you input.
                            </Typography>
                            <CardActions>
                                <Button size="small" color="primary" className={classes.btn}>view</Button>
                                <Button size="small" color="primary" className={classes.btn}>Edit</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>))}
                
            </Grid>
          
        </Container>
        <Container className={classes.combox}>
            <ComboBox/>
        </Container>
        <Container className={classes.disoptions}>
             {/* <DisabledOptions/> */}
        </Container>
      
    </main>
    <footer className={classes.footer}>
        <Container>
            <Typography variant="h6" color="textSecondary" gutterBottom > 
                Learn Material UI in One Hour 
            </Typography>
            <Typography variant="subtitle" color="textSecondary"> 
                The theme specifies the color of the components, darkness of the surfaces, level of shadow, appropriate opacity of ink elements, etc. React Material UI Project Tutorial [2022]
            </Typography>
        </Container>
       
    </footer>
</>
  )
}

export default App

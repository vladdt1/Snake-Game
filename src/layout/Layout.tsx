import React, {FC} from 'react'
import {Grid, ListItem} from '@mui/material'
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Menu from "./sidebar/Menu";

const Layout:FC = ({children}) => {

    return(
        <>
            <Header/>
            <Grid container spacing={0} marginX={0} marginTop={12}>
                    <Grid item md={2}>
                        <ListItem><Menu/></ListItem>
                    </Grid>
                <Grid item md={8}>
                    <ListItem>{children}</ListItem>
                </Grid>
            </Grid>
            <Footer/>
        </>
    )
}

export default Layout

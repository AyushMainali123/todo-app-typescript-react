import React from 'react'
import {makeStyles} from '@material-ui/core'
const Home = () => {

    const useStyles = makeStyles((theme) => ({
        container:  {
            padding: `${theme.spacing(2)}px ${theme.spacing(8)}px`,
        }
    }))


    const classes = useStyles();
    return (
        <div className = {classes.container}>
            This is a Home Page
        </div>
    )
}

export default Home

import React from 'react'
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
    button: {
        width: '100%',
        borderRadius: '1.2rem',
        border: 'none',
        background: 'rgb(81, 96, 145)',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '1rem',
        color: '#EEF3AD',
        padding: '1rem '

    }
})

function Button() {
    const classes = useStyles()
    return <button className={classes.button}>All Set!</button>

}

export default Button

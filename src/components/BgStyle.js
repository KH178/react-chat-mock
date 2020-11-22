import React from 'react';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
    bgStyle: {
        background: '#516091',
        height: '100vh',
        width: '100vw',
        position: 'fixed',

    },
    colorBallTopRight: {
        position: 'absolute',
        zIndex: -1,
        width: '100vh',
        height: '100vh',
        background: '#EEF3AD',
        borderRadius: '50%',
        top: '-30%',
        left: '40%',
        zIndex: -2
    },
    colorBallTopLeft: {
        position: 'absolute',
        zIndex: -1,
        width: '100vh',
        height: '100vh',
        background: '#ADEBBE',
        borderRadius: '50%',
        top: '-35%',
        left: '-100%',
        zIndex: -3
    },
    colorBallBottomLeft: {
        position: 'absolute',
        zIndex: -1,
        width: '100vh',
        height: '100vh',
        background: '#74BEC1',
        borderRadius: '50%',
        bottom: '-40%',
        left: '-100%',
        zIndex: -4
    },
    colorBallBottomRight: {
        position: 'absolute',
        zIndex: -1,
        width: '70vh',
        height: '70vh',
        background: '#516091',
        borderRadius: '50%',
        bottom: '-22%',
        right: '-62%',
        zIndex: -3,

    }
})

function BgStyle({ children }) {
    const classes = useStyles()
    return (
        <div className={classes.bgStyle}>
            <div className={classes.colorBallTopRight}> </div>
            <div className={classes.colorBallTopLeft}> </div>
            <div className={classes.colorBallBottomLeft}> </div>
            <div className={classes.colorBallBottomRight}> </div>
            {children}
        </div>
    )
}

export default BgStyle

import React from 'react';
import { createUseStyles } from 'react-jss';
import Login from '../components/Login';
import Spacer from '../components/Spacer';
import BgStyle from '../components/BgStyle';

const useStyles = createUseStyles({
    setupHeading: {
        margin: 'auto',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '2.3125rem',
        fontSize: 'clamp(2rem, 2.3125rem, 4vw)',
        fontWeight: 500,
        textAlign: 'center',
        width: 200,
        lineHeight: 1.5,
        marginTop: '7vh',
        color: '#516091',
        '& p': {
            margin: '0',
            '& span': {
                display: 'block',
                textAlign: 'center',
                '@media (min-width: 1024px)': {
                    display: 'inline-block',
                    marginLeft: '0.4rem'
                }
            }
        },
        '@media (min-width: 1024px)': {
            width: '100%',

        }
    }
})

function SetupScreen() {
    const classes = useStyles();
    return (
        <BgStyle>
            <div className={classes.setupHeading}>
                <p><span>Let's setup</span><span>your profile.</span></p>
            </div>
            <>
                <Spacer size={{ sizeT: '5rem', sizeB: '5rem', sizeL: '2rem', sizeR: '2rem' }}>
                    <Login />
                </Spacer>
            </>
        </BgStyle>
    )
}

export default SetupScreen

import React from 'react';
import { createUseStyles } from 'react-jss';
import Input from './Input';
import Button from './Button';
import Spacer from './Spacer';
import LoginAvatar from './LoginAvatar'
const useStyles = createUseStyles({
    loginContainer: {
        background: 'rgba(75, 75, 75,.2)',
        padding: '1.5rem',
        borderRadius: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative'
    },
    loginAvatarContainer: {

    },
    editTxt: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '0.75rem',
        color: '#516091',
        textAlign: 'center'
    }
})

function Login() {
    const classes = useStyles();
    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginAvatarContainer}>
                <>
                    <LoginAvatar />

                </>
                <Spacer size={{ sizeT: '2rem', sizeB: '1rem', sizeL: '0', sizeR: '0', width: '100%' }}>
                    <span className={classes.editTxt}>Edit display iamge</span></Spacer>
            </div>
            <Spacer size={{ sizeT: '1rem', sizeB: '1rem', sizeL: '0', sizeR: '0', width: '100%' }}>
                <Input />
            </Spacer>
            <Spacer size={{ sizeT: '1rem', sizeB: '0rem', sizeL: '0', sizeR: '0', width: '100%' }}>
                <Button />
            </Spacer>
        </div>
    )
}

export default Login

import React from 'react';
import Avatar from './Avatar';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    loginAvatarBorder: {
        width: '5rem',
        height: '5rem',
        borderRadius: '50%',
        border: '0.5rem solid rgba(75, 75, 75,.2)',
        position: 'absolute',
        top: '-20%',
    },
    loginAvatar: {
        position: 'absolute',
        borderRadius: '50%',
        width: '5rem',
        height: '5rem',
        top: "50%",
        left: '50%',
        transform: 'translate(-50%,-50%)'
    },

})

function LoginAvatar() {
    const classes = useStyles();
    return (
        <div className={classes.loginAvatarBorder}>
            <div className={classes.loginAvatar}>
                <Avatar image={`https://i.pravatar.cc/100`} isBorder />
            </div>
        </div>
    )
}

export default LoginAvatar

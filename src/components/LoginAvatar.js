import React from 'react';
import Avatar from './Avatar';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    loginAvatar: {
        position: 'absolute',
        top: '-20%',
        width: '30%'
    }
})

function LoginAvatar() {
    const classes = useStyles();
    return (
        <div className={classes.loginAvatar}>
            <Avatar image={`https://i.pravatar.cc/100`} isBorder />
        </div>
    )
}

export default LoginAvatar

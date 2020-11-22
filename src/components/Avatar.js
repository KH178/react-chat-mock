import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    avatarImg: ({ isBorder }) => ({
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        // border: isBorder ? '5px solid rgba(75, 75, 75,.2)' : 'auto',
        zIndex: 0
    })
})

function Avatar({ image, isBorder }) {
    const classes = useStyles({ isBorder })
    return <img src={image} alt="avatar" className={classes.avatarImg} />
}

export default Avatar

import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
    input: {
        width: 'calc(100% - 0.5rem)',
        padding: '0.8rem 0 0.8rem 0.5rem',
        borderRadius: '0.7rem',
        border: 'none',
        background: 'rgba(247, 247, 247, 0.8)',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '0.75rem',
        color: '#516091',
        '&::placeholder': {
            color: '#516091',
        }
    }
})


function Input() {
    const [val, setVal] = useState(null);
    const handleChangeVal = (e) => {
        e.preventDefault();
        setVal(e.target.value)
    }
    const classes = useStyles();
    return (
        <input className={classes.input} type="text" placeholder="Enter display name" value={val} onChange={handleChangeVal} />
    )
}

export default Input

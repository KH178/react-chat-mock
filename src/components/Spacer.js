import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    spacer: ({ sizeT, sizeR, sizeB, sizeL, width }) => ({
        margin: `${sizeT} ${sizeR} ${sizeB} ${sizeL}`,
        width: width ?? 'auto'
    })
})

/**
 * 
 * @param {Object} size, containes sizeTB for top bottom, sizeLR for left right.
 */
function Spacer({ size, children }) {
    const classes = useStyles({ ...size });
    return (
        <div className={classes.spacer}>
            {children}
        </div>
    )
}

export default Spacer

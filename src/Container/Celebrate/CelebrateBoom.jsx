import React from 'react';
import ConfettiExplosion from 'react-confetti-explosion';


function CelebrateBoom(props) {
    return (
        <>
            {props.isExploding && <ConfettiExplosion className='boom-boom' />}
        </>
    )
}

export default CelebrateBoom
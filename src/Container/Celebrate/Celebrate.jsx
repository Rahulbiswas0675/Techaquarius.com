import Confetti from "react-confetti";

function Celebrate(props) {


    return (
        <>
            {props.isExploding && <Confetti numberOfPieces={2000} className='boom-box' />}
        </>
    )
}

export default Celebrate;

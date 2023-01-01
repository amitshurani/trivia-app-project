import { Link } from "react-router-dom";

const Win = (props) => {
    const {}=props
    return (
        <div className="text-center m-5">
            <div className="m-3">Congratulations</div>
            <div className="m-3">You Win!</div>
            <div className="m-3"><Link to="/"><button>Let`s Play Again</button></Link></div>
        </div>
    );
}

export default Win;

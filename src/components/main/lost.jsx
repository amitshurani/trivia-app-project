import { Link } from "react-router-dom";

const Lost = (props) => {
    const {}=props
    return (
        <div className="text-center m-5">
            <div className="m-5">You Lost</div>
            <div className="m-5"><Link to="/"><button className="btn btn-outline-warning">Let`s Try Again</button></Link></div>
        </div>
    );
}

export default Lost;

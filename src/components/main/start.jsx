import { Link } from "react-router-dom";

const Start = (props) => {
    const {gettwenty}=props
    return (
        <div className="text-center m-5">
            <h4 className="m-5">Want to be a milionere? sorry, you came to the wrong game</h4>
            <h5 className="m-5">But hi! you can be the Melech Hanihushum, cause you are probably the first man who got in here</h5>
            <h6 className="m-5">Want to try answer some questions?</h6>
            <div><Link to="/questions"><button className="btn btn-outline-success" onClick={()=>gettwenty()}>Click Here And Let`s Start</button></Link></div>
        </div>
    );
}

export default Start;

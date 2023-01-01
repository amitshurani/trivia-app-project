import { Link } from "react-router-dom";

const Header = (props) => {
    const {}=props
    return (
        <div className="row">
            <div className="col ">
                <h5 className="mt-4 mb-2">Made By : AScoding</h5>
            </div>
            <div className="col">
                <Link to="/" style={{ color:"black" }}><h1 className="mt-3 mb-2">Melech Hanihushum</h1></Link>
            </div>
            <div className="col">
                <Link to="/lost"><button className="btn btn-outline-danger mt-4 mb-4">Give Up</button></Link>
            </div>
        </div>
    );
}

export default Header;

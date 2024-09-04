import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>404 Page Does Not Exist</p>
            <Link to="/">Go Back Home</Link>
        </div>
    );
}

export default NotFound;
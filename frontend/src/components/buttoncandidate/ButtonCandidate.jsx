import { Link } from "react-router-dom";
import "./buttoncandidate.css";

function ButtonCandidate() {
  return (
    <div>
      <Link to="/chemin">
        <button className="candidate" type="button">
          <p className="textcandidate">CANDIDATER</p>
        </button>
      </Link>
    </div>
  );
}

export default ButtonCandidate;

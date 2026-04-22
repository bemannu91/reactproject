import { Link } from "react-router-dom";
import './BtnSet.css';

export function BtnSet({ name, id }) {
    return (
        <li className="list-set__item">
            <Link className="list-set__btn" to={`/set/${id}`} state={{ setName: name }}>
                {name}
            </Link>
        </li>
    );
}
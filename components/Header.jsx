import { Link } from "react-router-dom";

import "./Header.css"

export function Header() {
    return (
        <div className="header">
            <h1>
                <Link to="/">Флеш-карточки</Link>
            </h1>
            <nav className="main-menu">
                <ul>
                    <li>
                        <Link className="main-menu_link" to="/admin/createset">Создать сет</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
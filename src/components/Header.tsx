import {NavLink} from 'react-router-dom';
import './scss/Header.scss';
import {ResponsiveContainer} from './ResponsiveContainer';

export function Header(): JSX.Element {
    return (
        <header className="page-header">
            <ResponsiveContainer>
                <h1 className="page-title">Dagbladet</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About this</NavLink>
                        </li>
                    </ul>
                </nav>
            </ResponsiveContainer>
        </header>
    );
}
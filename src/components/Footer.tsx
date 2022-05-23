import {ResponsiveContainer} from './ResponsiveContainer';
import './scss/Footer.scss';

// The footer used globally on the page
export function Footer(): JSX.Element {
    return (
        <footer className="page-footer">
            <ResponsiveContainer>
                <p>Made by Andy</p>
                <p>Not an official <a href="https://dagbladet.no/" target="_blank" rel="noreferrer">Dagbladet</a> site</p>
            </ResponsiveContainer>
        </footer>
    );
}
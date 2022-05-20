import {ResponsiveContainer} from './ResponsiveContainer';
import './scss/Footer.scss';

export function Footer(props: any): JSX.Element {
    return (
        <footer className="page-footer">
            <ResponsiveContainer>
                <p>Made by Andy</p>
            </ResponsiveContainer>
        </footer>
    );
}
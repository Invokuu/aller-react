import {ResponsiveContainer} from './ResponsiveContainer';

// This is just the about page on the site
export function About(): JSX.Element {
    return (
        <main>
            <ResponsiveContainer>
                <article className="inner-spacing">
                    <h2>Aller Media React</h2>
                    <p>This project was made for Aller Media after interview. It was a nice way for me to become more familiar with React and related libraries.</p>
                    <p><a href="https://github.com/invokuu/aller-react" target="_blank" rel="noreferrer">You can find the repository here.</a></p>
                </article>
            </ResponsiveContainer>
        </main>
    );
}
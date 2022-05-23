import {ResponsiveContainer} from './ResponsiveContainer';
import './scss/About.scss';

// This is just the about page on the site
export function About(): JSX.Element {
    return (
        <main>
            <ResponsiveContainer>
                <article className="inner-spacing">
                    <h2>Aller Media React App</h2>
                    <p>I made this as requested by <a href="https://www.aller.no/" target="_blank" rel="noreferrer">Aller Media</a> after interview.</p>
                    <p>I felt like my <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a> knowledge was pretty limited, so I decided to do some research.
                    <br/>I've been doing a course on <a href="https://www.codecademy.com/" target="_blank" rel="noreferrer">Codecademy</a> (<a href="https://www.codecademy.com/learn/react-101" target="_blank" rel="noreferrer">React</a> and <a href="https://www.codecademy.com/learn/learn-react-router" target="_blank" rel="noreferrer">React Router</a>) and watched videos, now I feel like I have a better grasp on the topic.
                    <br/>From what I've learned best practice is using Function component and not Class components, but I've also seen some mention that Function components are good for stateless components while Class components are good for stateful components.
                    <br/>Would like to know what you do here. I like classes (but used functions) even though they might be considered more verbose.</p>
                    <p>I also learned some about <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a> and also looked a little at <a href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a>, but decided to put this aside for now.
                    <br/>I've used <a href="https://axios-http.com/" target="_blank" rel="noreferrer">Axios</a> in this project to use a common library, but I am also familiar with <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" rel="noreferrer">fetch</a> (and <a href="https://developer.mozilla.org/en-US/docs/Glossary/XHR_(XMLHttpRequest" target="_blank" rel="noreferrer">XHR</a>)).</p>
                    <p>This application is written in <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">TypeScript</a>(<a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noreferrer">X</a>) because I know it's something Aller use even though it's not a part of the assignment I was given.
                    <br/>For styling, I chose to use <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">SASS</a>. Not sure what Aller use, but wanted to include this as I often use it.
                    <br/>I decided to include one SCSS-file per component with same name, I'm not sure what the best practice is and would like to know more about this.
                    <br/>It currently doesn't look too great on mobile, but might fix this.</p>
                    <p>In the json data there was a type value for row and article, but it didn't seem to be too relevant in this project.
                    <br/>I haven't taken that much into consideration for now.
                    <br/>Would love to know more about what this is being used for.</p>
                    <p>The package manager of choice is <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer"><code>yarn</code></a>. I'm familiar with <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer"><code>npm</code></a> commands.
                    <br/>I know of <a href="https://pnpm.io/" target="_blank" rel="noreferrer"><code>pnpm</code></a>, but I've never used it.
                    <br/>From what I've seen it's apparently way faster and space efficient, so I might give it a try in a future project.</p>
                    <p>For hosting, I'm using <a href="https://vercel.com/" target="_blank" rel="noreferrer">Vercel</a>.</p>
                    <p>To recreate the template used in this project, you run:
                    <code className="code-block lang-sh">
                    # replace "my-app" with directory name (or . for current)
                    <br/>yarn create react-app my-app --template typescript
                    </code>
                    <br/>...and then you install these packages:
                    <code className="code-block lang-sh">
                    yarn add sass react-router-dom @types/react-router-dom axios uuid @types/uuid
                    </code></p>
                    <p><a href="https://github.com/invokuu/aller-react" target="_blank" rel="noreferrer">You can find the repository here.</a></p>
                    <p><b>- Andy</b></p>
                </article>
            </ResponsiveContainer>
        </main>
    );
}
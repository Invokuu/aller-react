import axios, {AxiosResponse} from 'axios';
import './scss/ArticleGrid.scss';
import {useEffect, useState} from 'react';
import {ArticleRow, ArticleRowProps} from './ArticleRow';
import {Exception} from 'sass';
import {v4 as uuidV4} from 'uuid';
import {ResponsiveContainer} from './ResponsiveContainer';

// url is the json endpoint url
export interface ArticleGridProps {
    url: string;
}

// ArticleGrid component handles fetching the data and separating it into ArticleRows
export function ArticleGrid(props: ArticleGridProps): JSX.Element {
    const [articleData, setArticleData] = useState([]);
    const [loadMessage, setLoadMessage] = useState('Loading articles...');

    useEffect(() => {
        // Using Promise callbacks here because async is not recommended for the useEffect callback,
        // and I don't see much benefit in adding an anonymous function
        axios.get(props.url)
            .then((response: AxiosResponse) => {
                // This seems to always be an array within an array with length of 1 (but I could be wrong).
                // You could potentially add this check if anything else is the case:
                //if (response.data.length !== 1) return;
                // I'm just gonna destructure it in this situation
                const [responseData] = response.data;
                // Update the state of the component
                setArticleData(responseData);
            })
            .catch((exception: Exception) => {
                console.error(exception);
                setLoadMessage('An error occurred while loading articles.');
            });
        // Empty dependencies as this should only run once in the lifecycle
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="article-grid">
            <ResponsiveContainer>
                {articleData.length > 0 ? articleData.map((articleRow: ArticleRowProps) => {
                    return <ArticleRow key={uuidV4()} columns={articleRow.columns} />;
                }) : (
                    <article className="inner-spacing">
                        <h2 className="loading-message">{loadMessage}</h2>
                    </article>
                )}
            </ResponsiveContainer>
        </main>
    );
}
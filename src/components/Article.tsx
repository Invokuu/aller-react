import React from 'react';
import './scss/Article.scss';
import {EditableTitle} from './EditableTitle';
import {ArticleImage} from './ArticleImage';

// The article data as presented in the json
export interface ArticleData {
    type: string;
    width: number;
    url: string;
    title: string;
    imageUrl: string;
}

// Passing ArticleData as a data prop to this component for convenience,
// any better ways to solve this or should I just pass as separate parameters?
interface ArticleProps {
    data: ArticleData;
}

// The Article component is the box for each individual article
export function Article(props: ArticleProps): JSX.Element {
    // Let's destructure the relevant data
    const {width, url, title, imageUrl} = props.data;

    return (
        <article className={`width-${width}`}>
            <a href={url} target="_blank" rel="noreferrer">
                <ArticleImage src={imageUrl} title={title} width={width} />
            </a>
            <EditableTitle url={url} value={title} />
        </article>
    );
}
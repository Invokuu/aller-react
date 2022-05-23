import React from 'react';
import './scss/Article.scss';
import {EditableTitle} from './EditableTitle';
import {ArticleImage} from './ArticleImage';

// The article data as presented in the json
export interface ArticleProps {
    type?: string;
    width: number;
    url: string;
    title: string;
    imageUrl: string;
}

// The Article component is the box for each individual article
export function Article(props: ArticleProps): JSX.Element {
    return (
        <article className={`width-${props.width}`}>
            <a href={props.url} target="_blank" rel="noreferrer">
                <ArticleImage src={props.imageUrl} title={props.title} width={props.width} />
            </a>
            <EditableTitle url={props.url} value={props.title} />
        </article>
    );
}
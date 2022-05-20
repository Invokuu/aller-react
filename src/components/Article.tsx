import React from 'react';
import './scss/Article.scss';
import {EditableTitle} from './EditableTitle';
import {ArticleImage} from './ArticleImage';

export interface ArticleData {
    type: string;
    width: number;
    url: string;
    title: string;
    imageUrl: string;
}

interface ArticleProps {
    data: ArticleData;
}

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
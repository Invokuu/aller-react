import {Article, ArticleProps} from './Article';
import './scss/ArticleRow.scss';
import {v4 as uuidV4} from 'uuid';

// The article row data as presented in the json
export interface ArticleRowProps {
    type?: string;
    columns: ArticleProps[];
}

// ArticleRow handles each row and separate the data into Article components
export function ArticleRow(props: ArticleRowProps): JSX.Element {
    return (
        <section className="article-row">
            {props.columns.map((article: ArticleProps) => {
                return <Article key={uuidV4()}
                                width={article.width}
                                url={article.url}
                                title={article.title}
                                imageUrl={article.imageUrl}/>;
            })}
        </section>
    );
}
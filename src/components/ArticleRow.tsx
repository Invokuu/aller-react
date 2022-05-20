import {Article, ArticleData} from './Article';
import './scss/ArticleRow.scss';
import {v4 as uuidV4} from 'uuid';

export interface ArticleRowData {
    type: string;
    columns: ArticleData[];
}

interface ArticleRowProps {
    columns: ArticleData[];
}

export function ArticleRow(props: ArticleRowProps): JSX.Element {
    return (
        <section className="article-row">
            {props.columns.map((article: ArticleData) => {
                return <Article key={uuidV4()} data={article} />;
            })}
        </section>
    );
}
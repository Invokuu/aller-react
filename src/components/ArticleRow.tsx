import {Article, ArticleData} from './Article';
import './scss/ArticleRow.scss';
import {v4 as uuidV4} from 'uuid';

// The article row data as presented in the json
export interface ArticleRowData {
    type: string;
    columns: ArticleData[];
}

// This is almost the same as above.
// Kept it for consistency right now,
// however I could turn type into an optional property
interface ArticleRowProps {
    columns: ArticleData[];
}

// ArticleRow handles each row and separate the data into Article components
export function ArticleRow(props: ArticleRowProps): JSX.Element {
    return (
        <section className="article-row">
            {props.columns.map((article: ArticleData) => {
                return <Article key={uuidV4()} data={article} />;
            })}
        </section>
    );
}
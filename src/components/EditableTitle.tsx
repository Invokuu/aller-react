import {useState} from 'react';
import './scss/EditableTitle.scss';

// url for the link in the title
// value is just the text displayed
interface EditableTitleProps {
    url: string;
    value: string;
}

// EditableTitle is for the title of the article.
// This allows you to edit by clicking the button next to the text,
// then it will turn into an input field instead.
export function EditableTitle(props: EditableTitleProps): JSX.Element {
    const [value, setValue] = useState(props.value);
    const [editMode, setEditMode] = useState(false);

    // Keeping a temporary value to not update view too often
    let currentValue = value;

    // Updates currentValue onInput
    const valueUpdate = (evt: any) => {
        currentValue = evt.target.value;
    };

    // Quality of life fix that allows you to press enter or esc to leave edit mode
    const handleCompletion = (evt: any) => {
        if (evt.key !== 'Enter' && evt.key !== 'Escape') return;
        toggleEdit();
    };

    // This toggles between input and link
    const toggleEdit = () => {
        if (editMode) setValue(currentValue);
        setEditMode(!editMode);
    };

    return (
        <header className="article-header">
            {editMode ? (
                <input type="text" placeholder="Write your title..." defaultValue={value} onInput={valueUpdate} onKeyUp={handleCompletion} autoFocus />
            ) : (
                <a href={props.url} target="_blank" rel="noreferrer">
                    <h2>{value}</h2>
                </a>
            )}
            <div className="actions">
                <button onClick={toggleEdit} className="edit-btn material-icons">{editMode ? 'save' : 'edit'}</button>
            </div>
        </header>
    );
}
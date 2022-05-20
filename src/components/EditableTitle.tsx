import {useState} from 'react';
import './scss/EditableTitle.scss';

interface EditableTitleProps {
    url: string;
    value: string;
}

export function EditableTitle(props: EditableTitleProps): JSX.Element {
    const [value, setValue] = useState(props.value);
    const [editMode, setEditMode] = useState(false);

    // Keeping a temporary value to not update view too often
    let currentValue = value;

    // Updates currentValue onInput
    function valueUpdate(evt: any) {
        currentValue = evt.target.value;
    }

    function handleCompletion(evt: any) {
        if (evt.key !== 'Enter' && evt.key !== 'Escape') return;
        toggleEdit();
    }

    function toggleEdit() {
        if (editMode) setValue(currentValue);
        setEditMode(!editMode);
    }

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
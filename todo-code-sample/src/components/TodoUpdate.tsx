import React from 'react';

const TodoUpdate = (props: any) => {
    const {
        modifyText,
        setModifyText,
        handleModifySave,
        handleModifyCancel,
    } = props;

    return (
        <>
            <input
                type="text"
                value={modifyText}
                onChange={(e) => setModifyText(e.target.value)}
                className='modify-todo-input'
            />
            <button 
                onClick={handleModifySave}
                className={`todo-buttons modify-todo-button`}
            >
                Save
            </button>
            <button 
                onClick={handleModifyCancel}
                className={`todo-buttons modify-todo-button`}
            >
                Cancel
            </button>
        </>
    )
}

export default TodoUpdate;
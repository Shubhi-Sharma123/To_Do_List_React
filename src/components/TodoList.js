const TodoList = ({ id, text, status, deleteitem, edititem, handleCheckBox }) => {
    return (
        <>
            <div className={`listItems ${status ? 'doneBackground' : ''}`}>
                <div className="checkdata">
                    <input type="checkbox" onChange={() => handleCheckBox(id)} />
                    <p className={status ? "Done" : "NotDone"}>{text}</p>
                </div>
                <div className="buttons">
                    <button id="editbtn" onClick={() => { edititem(id) }}>Edit</button>
                    <button id="delbtn" onClick={() => { deleteitem(id) }}>Delete</button>
                </div>
            </div>
        </>
    );
}
export default TodoList;

import PropTypes from "prop-types";

const TodoList = ({ id, text, status, deleteItem, editItem, handleCheckBox }) => {
    return (
        <div className={`listItems ${status ? 'doneBackground' : ''}`}>
            <div className="checkdata">
                <input type="checkbox" onChange={() => handleCheckBox(id)} checked={status} />
                <p className={status ? "Done" : ""}>{text}</p>
            </div>
            <div className="buttons">
                <button id="editbtn" onClick={() => { editItem(id) }}>Edit</button>
                <button id="delbtn" onClick={() => { deleteItem(id) }}>Delete</button>
            </div>
        </div>
    );
};

TodoList.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    deleteItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    handleCheckBox: PropTypes.func.isRequired,
};

export default TodoList;

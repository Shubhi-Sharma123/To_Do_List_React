import { useState } from "react";
import PropTypes from "prop-types";

const InputBox = ({ text = "", setText = () => {}, transferData = () => {}, editId = null }) => {
    const [isTrue, setIsTrue] = useState(false);

    const handleChange = (e) => {
        setText(e.target.value);
        if (editId) {
            setIsTrue(true);
        } else {
            setIsTrue(false);
        }
    };

    const handleOnAdd = () => {
        transferData(text);
        setText(""); // Clear the input box after adding or saving
    };

    return (
        <div className="inputboxdiv">
            <h3>Manage Your Todos</h3>
            <input
                id="inputbox"
                type="text"
                value={text}
                placeholder="Write Todo...."
                onChange={handleChange}
            />
            <button id="addbtn" onClick={handleOnAdd}>
                {editId && isTrue ? "Save" : "Add"}
            </button>
        </div>
    );
};

InputBox.propTypes = {
    text: PropTypes.string,
    setText: PropTypes.func,
    transferData: PropTypes.func,
    editId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputBox;

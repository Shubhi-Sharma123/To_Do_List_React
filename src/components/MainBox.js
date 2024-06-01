import { useState } from "react";
import InputBox from "./InputBox";
import TodoList from "./TodoList";
import "./mainbox.css";

const MainBox = () => {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);
    const [editId, setEditId] = useState(null);

    const transferData = (data) => {
        if (editId) {
            const updatedList = list.map((item) =>
                item.id === editId ? { ...item, text: data } : item
            );
            setList(updatedList);
            setEditId(null);
        } else if (text !== "") {
            const newItem = {
                text: data,
                id: new Date().getTime().toString(),
                status: false,
            };
            setList([...list, newItem]);
        }
        setText("");
    };

    const deleteItem = (id) => {
        const filteredList = list.filter((item) => item.id !== id);
        setList(filteredList);
    };

    const editItem = (id) => {
        const itemToEdit = list.find((item) => item.id === id);
        setText(itemToEdit.text);
        setEditId(itemToEdit.id);
    };

    const handleCheckBox = (id) => {
        const updatedList = list.map((item) =>
            item.id === id ? { ...item, status: !item.status } : item
        );
        setList(updatedList);
    };

    return (
        <div className="mainbox">
            <div>
                <InputBox text={text} setText={setText} transferData={transferData} editId={editId} />
                {list.map((item) => (
                    <div key={item.id}>
                        <TodoList
                            {...item}
                            deleteItem={deleteItem}
                            editItem={editItem}
                            handleCheckBox={handleCheckBox}
                        />
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainBox;

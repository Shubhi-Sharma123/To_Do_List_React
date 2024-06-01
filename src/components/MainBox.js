import { useState } from "react";
import InputBox from "./InputBox";
import "./mainbox.css";
import TodoList from "./TodoList";

const MainBox = () => {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);
    const [editId, setEditId] = useState(null);

    const transferData = (data) => {
        if (editId) {
            const editItemData = list.map((data1) =>
                data1.id === editId ? { ...data1, text: data } : data1
            );
            setList(editItemData);
            setText("");
            setEditId(null);
        } else if (text !== "") {
            const objData = {
                text: data,
                id: new Date().getTime().toString(),
                status: false,
            };
            setList([...list, objData]);
            setText("");
        }
    };

    const deleteItem = (id) => {
        const deletedData = list.filter((data) => data.id !== id);
        setList(deletedData);
    };

    const editItem = (id) => {
        const editData = list.find((data) => data.id === id);
        setText(editData.text);
        setEditId(editData.id);
    };

    const handleCheckBox = (id) => {
        const checkId = list.map((token) =>
            token.id === id ? { ...token, status: !token.status } : token
        );
        setList(checkId);
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

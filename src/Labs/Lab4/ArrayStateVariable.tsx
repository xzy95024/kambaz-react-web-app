import { useState } from "react";
import { Button,Card } from "react-bootstrap";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((_, i) => i !== index));
    };
    return (

        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <Button variant="success" size="lg" className="me-1 mb-2" onClick={addElement}>Add Element</Button>

                {array.map((item, index) => (
                    <Card key={index} className="p-3 d-flex flex-row justify-content-between align-items-center" style={{ width: "200px" }}>
                        {item}
                        <Button variant="danger" size="sm" onClick={() => deleteElement(index)}
                                id="wd-delete-element-click">
                            Delete</Button>
                    </Card>
                ))}

            <hr/>
        </div>
    );
}

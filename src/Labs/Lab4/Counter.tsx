import React, { useState } from "react";
import { Button } from "react-bootstrap";
export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <Button variant="success" size="lg" className="me-1 w-25" onClick={() =>
            {setCount(prevCount => prevCount + 1);
            }}
                    id="wd-counter-up-click">Up</Button>
            <Button variant="danger" size="lg" className="me-1 w-25" onClick={() => setCount(count - 1)}
                    id="wd-counter-down-click">Down</Button>
            <hr/></div>);}
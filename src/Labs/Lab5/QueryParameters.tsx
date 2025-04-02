import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function QueryParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");

    return (
        <div id="wd-query-parameters">
            <h3>Query Parameters</h3>

            <FormControl
                id="wd-query-parameter-a"
                className="mb-2"
                type="number"
                value={a}
                onChange={(e) => setA(e.target.value)}
            />

            <FormControl
                id="wd-query-parameter-b"
                className="mb-2"
                type="number"
                value={b}
                onChange={(e) => setB(e.target.value)}
            />

            <a
                id="wd-query-parameter-add"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
                className="btn btn-success me-2"
            >
                Add {a} + {b}
            </a>

            <a
                id="wd-query-parameter-subtract"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
                className="btn btn-warning me-2"
            >
                Subtract {a} - {b}
            </a>

            <a
                id="wd-query-parameter-multiply"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
                className="btn btn-primary me-2"
            >
                Multiply {a} × {b}
            </a>

            <a
                id="wd-query-parameter-divide"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
                className="btn btn-danger"
            >
                Divide {a} ÷ {b}
            </a>

            <hr />
        </div>
    );
}

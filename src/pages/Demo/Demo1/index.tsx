import React, { useState } from "react";
import Component from "./Component";

const Demo1 = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <button
                onClick={() => {
                    setVisible(true);
                }}
            >
                展示
            </button>
            <Component visible={visible} onClose={() => {}} />
        </>
    );
};

export default Demo1;

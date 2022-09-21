import React, { useState } from "react";
import { Popup } from "antd-mobile";

interface Props {
    visible: boolean;
    onClose: (...args: any) => void;
}
const Component: React.FC<Props> = ({ visible = false, onClose }) => {
    const [display, setDisplay] = useState(visible);

    return (
        <>
            <div>123</div>
            <Popup
                visible={display}
                onMaskClick={() => {
                    setDisplay(false);
                }}
            >
                <div>213</div>
            </Popup>
        </>
    );
};

export default Component;

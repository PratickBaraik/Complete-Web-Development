import { useState, type ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Alert = ({ children }: Props) => {
    const [visible, setVisible] = useState(true);
    if (!visible) return null;
    return (
        <div
            className="alert alert-warning alert-dismissible d-flex flex-row align-items-center"
            role="alert"
        >
            <p className="mb-0">{children}</p>

            <button
                type="button"
                className="btn-close ms-auto"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => setVisible(false)}
            ></button>
        </div>
    );
};

export default Alert;
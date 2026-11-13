interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
    onClick: () => void;
}

function Button({ children, color, onClick }: Props) {
    return (
        <>
            {/* Solid Buttons */}
            <button
                type="button"
                className={"btn btn-" + color}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    );
}

export default Button;
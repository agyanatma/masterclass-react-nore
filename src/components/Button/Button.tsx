import React from "react";
import "./Button.css";

interface IButtonProps {
    title: string;
    bg?: string;
}

const Button = ({
    title,
    bg,
    ...props
}: IButtonProps &
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >) => {
    return (
        <button
            className="btn"
            style={{
                backgroundColor: bg ? bg : "blue",
            }}
            {...props}
        >
            {title}
        </button>
    );
};

export default Button;

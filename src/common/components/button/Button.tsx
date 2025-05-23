interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, disabled = false, className = "", ...props }) => {
    return (
        <button className={`p-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors ${className}`} disabled={disabled} {...props}>
            {children}
        </button>
    );
};

export default Button;

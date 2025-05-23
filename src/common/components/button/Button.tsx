import useI18N from "@hooks/app/useI18N";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, disabled = false, className = "", ...props }) => {
    const { t } = useI18N();

    return (
        <button className={`p-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors ${className}`} disabled={disabled} {...props}>
            {typeof children === "string" ? t(children) : children}
        </button>
    );
};

export default Button;

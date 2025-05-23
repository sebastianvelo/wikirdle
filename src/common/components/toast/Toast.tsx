import useI18N from "@hooks/app/useI18N";
import { X } from "lucide-react";
import variants from "./common/variants";
import { ToastVariant } from "./types/types";

interface ToastProps {
    variant?: ToastVariant;
    message: string;
    close: () => void;
}

const Toast: React.FC<ToastProps> = ({ close, variant = 'success', message }) => {
    const { t } = useI18N();
    const toastStyle = variants[variant] || variants.success;
    const toastClassName = (variant: ToastVariant) => `${variants[variant].bgColor} ${variants[variant].textColor} border ${variants[variant].borderColor} rounded-lg shadow-lg flex items-center justify-between px-4 py-3 w-full max-w-xl mx-auto transform transition-all duration-300 ease-in-out pointer-events-auto`;

    return (
        <div className={toastClassName(variant)}>
            <div className="flex items-center">
                {toastStyle.icon}
                <p className="ml-3">{t(message)}</p>
            </div>
            <button onClick={close} className="ml-4 text-gray-400 hover:text-gray-600 focus:outline-none">
                <X />
            </button>
        </div>
    );
};

export default Toast;
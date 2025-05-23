import { AlertCircle, CheckCircle, Info } from "lucide-react";

 const variants = {
    success: {
        bgColor: 'bg-green-100',
        textColor: 'text-green-800',
        borderColor: 'border-green-400',
        icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    error: {
        bgColor: 'bg-red-100',
        textColor: 'text-red-800',
        borderColor: 'border-red-400',
        icon: <AlertCircle className="w-5 h-5 text-red-500" />
    },
    info: {
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-800',
        borderColor: 'border-blue-400',
        icon: <Info className="w-5 h-5 text-blue-500" />
    }
};

export default variants;
import useI18N from '@hooks/app/useI18N';
import React from 'react';

type Variant = {
    container: string;
    title: string;
    icon: string;
    content: string;
}

const variants: { [color: string]: Variant } = {
    green: {
        container: "bg-green-50 border border-green-200 rounded-lg p-6",
        title: "text-lg font-medium text-green-900 mb-2",
        icon: "w-6 h-6 text-green-600 mr-3 flex-shrink-0",
        content: "text-green-800",
    },
    amber: {
        container: "bg-amber-50 border border-amber-200 rounded-lg p-6",
        title: "text-lg font-medium text-amber-900 mb-2",
        icon: "w-6 h-6 text-amber-600 mr-3 flex-shrink-0",
        content: "text-amber-800",
    },
    blue: {
        container: "bg-blue-50 border border-blue-200 rounded-lg p-6",
        title: "text-lg font-medium text-blue-900 mb-2",
        icon: "w-6 h-6 text-blue-600 mr-3 flex-shrink-0",
        content: "text-blue-800",
    },
    purple: {
        container: "bg-purple-50 border border-purple-200 rounded-lg p-6",
        title: "text-lg font-medium text-purple-900 mb-2",
        icon: "w-6 h-6 text-purple-600 mr-3 flex-shrink-0",
        content: "text-purple-800",
    },
    red: {
        container: "bg-red-50 border border-red-200 rounded-lg p-6",
        title: "text-lg font-medium text-red-900 mb-2",
        icon: "w-6 h-6 text-red-600 mr-3 flex-shrink-0",
        content: "text-red-800",
    },
    indigo: {
        container: "bg-indigo-50 border border-indigo-200 rounded-lg p-6",
        title: "text-lg font-medium text-indigo-900 mb-2",
        icon: "w-6 h-6 text-indigo-600 mr-3 flex-shrink-0",
        content: "text-indigo-800",
    }
}

interface PrivacyPolicyCardProps {
    icon?: React.ReactNode;
    title: string;
    content: string;
    color: string;
}

const PrivacyPolicyCard: React.FC<PrivacyPolicyCardProps> = ({ icon, title, content, color }) => {
    const { t } = useI18N();
    const variant = variants[color] || variants.green;

    return (
        <div className={variant.container}>
            <div className="flex items-start">
                {icon && (
                    <div className={variant.icon}>
                        {icon}
                    </div>
                )}
                <div>
                    <h3 className={variant.title}>
                        {t(title)}
                    </h3>
                    <p className={variant.content}>
                        {t(content)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyCard;
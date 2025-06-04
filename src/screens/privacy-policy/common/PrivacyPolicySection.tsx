import useI18N from '@hooks/app/useI18N';
import React from 'react';

interface PrivacyPolicySectionProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode | React.ReactNode[];
}

const PrivacyPolicySection: React.FC<PrivacyPolicySectionProps> = ({ title, subtitle, children }) => {
    const { t } = useI18N();

    return (
        <div>
            <h2 className="text-2xl font-semibold text-primary-800 dark:text-primary-300 mb-4">
                {t(title)}
            </h2>
            {subtitle && (
                <p className={`text-secondary-600 dark:text-secondary-300 leading-relaxed ${children ? "mb-4" : ""}`}>
                    {t(subtitle)}
                </p>
            )}
            {children}
        </div>
    );
};

export default PrivacyPolicySection;
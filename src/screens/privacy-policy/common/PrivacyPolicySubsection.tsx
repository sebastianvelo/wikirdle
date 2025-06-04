import useI18N from '@hooks/app/useI18N';
import React from 'react';

interface PrivacyPolicySubsectionProps {
    title: string;
    subtitle: string;
}

const PrivacyPolicySubsection: React.FC<PrivacyPolicySubsectionProps> = ({ title, subtitle }) => {
    const { t } = useI18N();

    return (
        <div>
            <h3 className="text-lg font-medium text-secondary-800 dark:text-secondary-100 mb-2">
                {t(title)}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t(subtitle)}
            </p>
        </div>
    );
};

export default PrivacyPolicySubsection;
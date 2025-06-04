import useI18N from '@hooks/app/useI18N';
import React from 'react';

interface PrivacyPolicyListProps {
    items: string[];
}

const PrivacyPolicyList: React.FC<PrivacyPolicyListProps> = ({ items }) => {
    const { t } = useI18N();

    return (
        <ul className="space-y-3">
            {items.map(item => (
                <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 dark:bg-primary-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{t(item)}</span>
                </li>
            ))}
        </ul>
    );
};

export default PrivacyPolicyList;
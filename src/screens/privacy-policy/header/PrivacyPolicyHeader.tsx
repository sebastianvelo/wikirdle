import GlassCard from '@common/components/glass-card/GlassCard';
import Icons from '@common/icons/Icons';
import I18n from '@context/language/common/I18nKeys';
import useI18N from '@hooks/app/useI18N';
import React from 'react';

const PrivacyPolicyHeader: React.FC = () => {
    const { t } = useI18N();

    return (
        <div className="max-w-4xl mx-auto">
            <GlassCard className="p-4 lg:p-8">
                <h1 className="text-3xl font-bold text-primary-800 dark:text-primary-300">
                    {t(I18n.PRIVACY_POLICY.TITLE)}
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {t(I18n.PRIVACY_POLICY.LAST_UPDATED)}
                </p>
            </GlassCard>
            <Icons.LineDivider />
        </div>
    );
};

export default PrivacyPolicyHeader;
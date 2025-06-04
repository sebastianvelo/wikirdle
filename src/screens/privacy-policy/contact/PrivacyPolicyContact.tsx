import GlassCard from '@common/components/glass-card/GlassCard';
import I18n from '@context/language/common/I18nKeys';
import useI18N from '@hooks/app/useI18N';
import React from 'react';

const PrivacyPolicyContact: React.FC = () => {
    const { t } = useI18N();

    return (
        <section className="max-w-4xl mx-auto mb-6">
            <GlassCard className="p-4 lg:p-6">
                <h2 className="text-2xl font-semibold text-primary-800 dark:text-primary-300 mb-4">
                    {t(I18n.PRIVACY_POLICY.CONTACT.TITLE)}
                </h2>
                <GlassCard className="p-3">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {t(I18n.PRIVACY_POLICY.CONTACT.INTRO)}
                    </p>
                    <div className="space-y-2">
                        <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-medium">{t(I18n.PRIVACY_POLICY.CONTACT.EMAIL_LABEL)}:</span>{' '}
                            <a
                                href={`mailto:${t(I18n.PRIVACY_POLICY.CONTACT.EMAIL)}`}
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                {t(I18n.PRIVACY_POLICY.CONTACT.EMAIL)}
                            </a>
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-medium">{t(I18n.PRIVACY_POLICY.CONTACT.ADDRESS_LABEL)}:</span>{' '}
                            {t(I18n.PRIVACY_POLICY.CONTACT.ADDRESS)}
                        </p>
                    </div>
                </GlassCard>
            </GlassCard>
        </section>
    );
};

export default PrivacyPolicyContact;
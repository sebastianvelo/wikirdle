import GlassCard from '@common/components/glass-card/GlassCard';
import Icons from '@common/icons/Icons';
import I18n from '@context/language/common/I18nKeys';
import useI18N from '@hooks/app/useI18N';
import Header from '@layout/header/Header';
import React from 'react';

const PrivacyPolicyScreen: React.FC = () => {
    const { t } = useI18N();

    return (
        <>
            <Header />
            <div className="min-h-screen">
                {/* Header */}
                <div className="max-w-4xl mx-auto">
                    <GlassCard className="px-4 sm:px-6 lg:px-8 py-8">
                        <h1 className="text-3xl font-bold text-secondary-800 dark:text-secondary-100">
                            {t(I18n.PRIVACY_POLICY.TITLE)}
                        </h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            {t(I18n.PRIVACY_POLICY.LAST_UPDATED)}
                        </p>
                    </GlassCard>
                    <Icons.LineDivider />
                </div>
                {/* Content */}
                <div className="max-w-4xl mx-auto">
                    <GlassCard>
                        <div className="p-8 space-y-12">
                            {/* Introduction */}
                            <section>
                                <h2 className="text-2xl font-semibold text-secondary-800 dark:text-secondary-100 mb-4">
                                    {t(I18n.PRIVACY_POLICY.INTRODUCTION.TITLE)}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {t(I18n.PRIVACY_POLICY.INTRODUCTION.CONTENT)}
                                </p>
                            </section>
                            
                            <Icons.LineDivider />
                            {/* Information We Collect */}
                            <section>
                                <h2 className="text-2xl font-semibold text-secondary-800 dark:text-secondary-100 mb-4">
                                    {t(I18n.PRIVACY_POLICY.INFORMATION_COLLECTED.TITLE)}
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-secondary-800 dark:text-secondary-100 mb-2">
                                            {t(I18n.PRIVACY_POLICY.INFORMATION_COLLECTED.PERSONAL_INFO.TITLE)}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {t(I18n.PRIVACY_POLICY.INFORMATION_COLLECTED.PERSONAL_INFO.CONTENT)}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-secondary-800 dark:text-secondary-100 mb-2">
                                            {t(I18n.PRIVACY_POLICY.INFORMATION_COLLECTED.USAGE_DATA.TITLE)}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {t(I18n.PRIVACY_POLICY.INFORMATION_COLLECTED.USAGE_DATA.CONTENT)}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-secondary-800 dark:text-secondary-100 mb-2">
                                            {t(I18n.PRIVACY_POLICY.INFORMATION_COLLECTED.COOKIES.TITLE)}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {t(I18n.PRIVACY_POLICY.INFORMATION_COLLECTED.COOKIES.CONTENT)}
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <Icons.LineDivider />
                            {/* How We Use Information */}
                            <section>
                                <h2 className="text-2xl font-semibold text-secondary-800 dark:text-secondary-100 mb-4">
                                    {t(I18n.PRIVACY_POLICY.HOW_WE_USE.TITLE)}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    {t(I18n.PRIVACY_POLICY.HOW_WE_USE.INTRO)}
                                </p>
                                <GlassCard className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-600 dark:text-gray-300">{t(I18n.PRIVACY_POLICY.HOW_WE_USE.ITEMS.SERVICE_PROVISION)}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-600 dark:text-gray-300">{t(I18n.PRIVACY_POLICY.HOW_WE_USE.ITEMS.COMMUNICATION)}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-600 dark:text-gray-300">{t(I18n.PRIVACY_POLICY.HOW_WE_USE.ITEMS.IMPROVEMENT)}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-600 dark:text-gray-300">{t(I18n.PRIVACY_POLICY.HOW_WE_USE.ITEMS.LEGAL_COMPLIANCE)}</span>
                                        </li>
                                    </ul>
                                </GlassCard>
                            </section>

                            <Icons.LineDivider />
                            {/* Information Sharing */}
                            <section>
                                <h2 className="text-2xl font-semibold text-secondary-800 dark:text-secondary-100 mb-4">
                                    {t(I18n.PRIVACY_POLICY.INFORMATION_SHARING.TITLE)}
                                </h2>
                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                                    <div className="flex items-start">
                                        <div className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0">
                                            <Icons.Warning />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-amber-900 mb-2">
                                                {t(I18n.PRIVACY_POLICY.INFORMATION_SHARING.COMMITMENT.TITLE)}
                                            </h3>
                                            <p className="text-amber-800">
                                                {t(I18n.PRIVACY_POLICY.INFORMATION_SHARING.COMMITMENT.CONTENT)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                                    {t(I18n.PRIVACY_POLICY.INFORMATION_SHARING.EXCEPTIONS)}
                                </p>
                            </section>

                            {/* Data Security */}
                            <section>
                                <h2 className="text-2xl font-semibold text-secondary-800 dark:text-secondary-100 mb-4">
                                    {t(I18n.PRIVACY_POLICY.DATA_SECURITY.TITLE)}
                                </h2>
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <div className="flex items-start">
                                        <div className="w-6 h-6 text-green-600 mr-3 flex-shrink-0">
                                            <Icons.SecCheck />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-green-900 mb-2">
                                                {t(I18n.PRIVACY_POLICY.DATA_SECURITY.MEASURES.TITLE)}
                                            </h3>
                                            <p className="text-green-800">
                                                {t(I18n.PRIVACY_POLICY.DATA_SECURITY.MEASURES.CONTENT)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <Icons.LineDivider />
                            {/* Your Rights */}
                            <section>
                                <h2 className="text-2xl font-semibold text-secondary-800 dark:text-secondary-100 mb-4">
                                    {t(I18n.PRIVACY_POLICY.YOUR_RIGHTS.TITLE)}
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-blue-50 rounded-lg p-6">
                                        <h3 className="text-lg font-medium text-blue-900 mb-3">
                                            {t(I18n.PRIVACY_POLICY.YOUR_RIGHTS.ACCESS.TITLE)}
                                        </h3>
                                        <p className="text-blue-800 text-sm">
                                            {t(I18n.PRIVACY_POLICY.YOUR_RIGHTS.ACCESS.CONTENT)}
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 rounded-lg p-6">
                                        <h3 className="text-lg font-medium text-purple-900 mb-3">
                                            {t(I18n.PRIVACY_POLICY.YOUR_RIGHTS.CORRECTION.TITLE)}
                                        </h3>
                                        <p className="text-purple-800 text-sm">
                                            {t(I18n.PRIVACY_POLICY.YOUR_RIGHTS.CORRECTION.CONTENT)}
                                        </p>
                                    </div>
                                    <div className="bg-red-50 rounded-lg p-6">
                                        <h3 className="text-lg font-medium text-red-900 mb-3">
                                            {t(I18n.PRIVACY_POLICY.YOUR_RIGHTS.DELETION.TITLE)}
                                        </h3>
                                        <p className="text-red-800 text-sm">
                                            {t(I18n.PRIVACY_POLICY.YOUR_RIGHTS.DELETION.CONTENT)}
                                        </p>
                                    </div>
                                    <div className="bg-indigo-50 rounded-lg p-6">
                                        <h3 className="text-lg font-medium text-indigo-900 mb-3">
                                            {t(I18n.PRIVACY_POLICY.YOUR_RIGHTS.PORTABILITY.TITLE)}
                                        </h3>
                                        <p className="text-indigo-800 text-sm">
                                            {t(I18n.PRIVACY_POLICY.YOUR_RIGHTS.PORTABILITY.CONTENT)}
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <Icons.LineDivider />
                            {/* Changes to Policy */}
                            <section>
                                <h2 className="text-2xl font-semibold text-secondary-800 dark:text-secondary-100 mb-4">
                                    {t(I18n.PRIVACY_POLICY.CHANGES.TITLE)}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {t(I18n.PRIVACY_POLICY.CHANGES.CONTENT)}
                                </p>
                            </section>

                            <Icons.LineDivider />
                            {/* Contact Information */}
                            <section>
                                <h2 className="text-2xl font-semibold text-secondary-800 dark:text-secondary-100 mb-4">
                                    {t(I18n.PRIVACY_POLICY.CONTACT.TITLE)}
                                </h2>
                                <GlassCard className="p-6">
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
                            </section>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicyScreen;
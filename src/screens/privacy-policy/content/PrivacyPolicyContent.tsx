import GlassCard from '@common/components/glass-card/GlassCard';
import Icons from '@common/icons/Icons';
import I18n from '@context/language/common/I18nKeys';
import useI18N from '@hooks/app/useI18N';
import React from 'react';
import PrivacyPolicyCard from '../common/PrivacyPolicyCard';
import PrivacyPolicyList from '../common/PrivacyPolicyList';
import PrivacyPolicySection from '../common/PrivacyPolicySection';
import PrivacyPolicySubsection from '../common/PrivacyPolicySubsection';

const PrivacyPolicyContent: React.FC = () => {
    const { t } = useI18N();

    const cardClassName = "p-4 lg:p-8 space-y-12";

    return (
        <div className="max-w-4xl mx-auto">
            <GlassCard className={cardClassName}>
                <PrivacyPolicySection title={I18n.PRIVACY_POLICY.INTRODUCTION.TITLE} subtitle={I18n.PRIVACY_POLICY.INTRODUCTION.CONTENT} />
            </GlassCard>

            <Icons.LineDivider />

            <GlassCard className={cardClassName}>
                <PrivacyPolicySection title={I18n.PRIVACY_POLICY.INFORMATION_COLLECTED.TITLE}>
                    <div className="space-y-4">
                        <PrivacyPolicySubsection title={I18n.PRIVACY_POLICY.INFORMATION_COLLECTED.PERSONAL_INFO.TITLE} subtitle={I18n.PRIVACY_POLICY.INFORMATION_COLLECTED.PERSONAL_INFO.CONTENT} />
                        <PrivacyPolicySubsection title={I18n.PRIVACY_POLICY.INFORMATION_COLLECTED.USAGE_DATA.TITLE} subtitle={I18n.PRIVACY_POLICY.INFORMATION_COLLECTED.USAGE_DATA.CONTENT} />
                        <PrivacyPolicySubsection title={I18n.PRIVACY_POLICY.INFORMATION_COLLECTED.COOKIES.TITLE} subtitle={I18n.PRIVACY_POLICY.INFORMATION_COLLECTED.COOKIES.CONTENT} />
                    </div>
                </PrivacyPolicySection>

                <Icons.LineDivider />

                <PrivacyPolicySection title={I18n.PRIVACY_POLICY.HOW_WE_USE.TITLE} subtitle={I18n.PRIVACY_POLICY.HOW_WE_USE.INTRO}>
                    <GlassCard className="p-6">
                        <PrivacyPolicyList items={[I18n.PRIVACY_POLICY.HOW_WE_USE.ITEMS.SERVICE_PROVISION, I18n.PRIVACY_POLICY.HOW_WE_USE.ITEMS.COMMUNICATION, I18n.PRIVACY_POLICY.HOW_WE_USE.ITEMS.IMPROVEMENT, I18n.PRIVACY_POLICY.HOW_WE_USE.ITEMS.LEGAL_COMPLIANCE]} />
                    </GlassCard>
                </PrivacyPolicySection>
            </GlassCard>

            <Icons.LineDivider />

            <GlassCard className={cardClassName}>
                <PrivacyPolicySection title={I18n.PRIVACY_POLICY.INFORMATION_SHARING.TITLE}>
                    <PrivacyPolicyCard color="amber" icon={<Icons.Warning />} title={I18n.PRIVACY_POLICY.INFORMATION_SHARING.COMMITMENT.TITLE} content={I18n.PRIVACY_POLICY.INFORMATION_SHARING.COMMITMENT.CONTENT} />
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                        {t(I18n.PRIVACY_POLICY.INFORMATION_SHARING.EXCEPTIONS)}
                    </p>
                </PrivacyPolicySection>

                <PrivacyPolicySection title={I18n.PRIVACY_POLICY.DATA_SECURITY.TITLE}>
                    <PrivacyPolicyCard color="green" icon={<Icons.SecCheck />} title={I18n.PRIVACY_POLICY.DATA_SECURITY.MEASURES.TITLE} content={I18n.PRIVACY_POLICY.DATA_SECURITY.MEASURES.CONTENT} />
                </PrivacyPolicySection>
            </GlassCard>

            <Icons.LineDivider />

            <GlassCard className={cardClassName}>
                <PrivacyPolicySection title={I18n.PRIVACY_POLICY.YOUR_RIGHTS.TITLE}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <PrivacyPolicyCard color="blue" title={I18n.PRIVACY_POLICY.YOUR_RIGHTS.ACCESS.TITLE} content={I18n.PRIVACY_POLICY.YOUR_RIGHTS.ACCESS.CONTENT} />
                        <PrivacyPolicyCard color="purple" title={I18n.PRIVACY_POLICY.YOUR_RIGHTS.CORRECTION.TITLE} content={I18n.PRIVACY_POLICY.YOUR_RIGHTS.CORRECTION.CONTENT} />
                        <PrivacyPolicyCard color="red" title={I18n.PRIVACY_POLICY.YOUR_RIGHTS.DELETION.TITLE} content={I18n.PRIVACY_POLICY.YOUR_RIGHTS.DELETION.CONTENT} />
                        <PrivacyPolicyCard color="indigo" title={I18n.PRIVACY_POLICY.YOUR_RIGHTS.PORTABILITY.TITLE} content={I18n.PRIVACY_POLICY.YOUR_RIGHTS.PORTABILITY.CONTENT} />
                    </div>
                </PrivacyPolicySection>
            </GlassCard>
            
            <Icons.LineDivider />

            <GlassCard className={cardClassName}>
                <PrivacyPolicySection title={I18n.PRIVACY_POLICY.CHANGES.TITLE} subtitle={I18n.PRIVACY_POLICY.CHANGES.CONTENT} />
            </GlassCard>
            <Icons.LineDivider />
        </div>
    );
};

export default PrivacyPolicyContent;
import Header from '@layout/header/Header';
import React from 'react';
import PrivacyPolicyContact from './contact/PrivacyPolicyContact';
import PrivacyPolicyContent from './content/PrivacyPolicyContent';
import PrivacyPolicyHeader from './header/PrivacyPolicyHeader';

const PrivacyPolicyScreen: React.FC = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen lg:py-8 scrollbar overflow-y-auto text-justify">
                <PrivacyPolicyHeader />
                <PrivacyPolicyContent />
                <PrivacyPolicyContact />
            </div>
        </>
    );
};

export default PrivacyPolicyScreen;
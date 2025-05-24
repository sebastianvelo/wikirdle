import useI18N from "@hooks/app/useI18N";
import contacts from "./common/contacts";
import FooterIcon from "./common/FooterIcon";
import I18n from "@context/language/common/I18nKeys";

const Footer: React.FC = () => {
    const { t } = useI18N();
    
    return (
        <footer className="backdrop-blur-lg sticky bottom-0 border-t border-primary-200/50 dark:border-primary-900/50 shadow-lg dark:bg-black/90 text-white py-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-bold">
                        <a className="text-primary-600 hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-200 transition-all duration-200 hover:no-underline" href="https://sebastian-velo.web.app/" target="_blank" rel="noreferrer">
                            {t(I18n.FOOTER.SIGN)}
                        </a>
                    </p>
                    <div className="flex space-x-6 items-center">
                        {contacts.map((link) => (<FooterIcon key={link.name} {...link} />))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

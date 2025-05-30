import SocialIcon from "./SocialIcon";

interface FooterIconProps {
    id: string;
    name: string;
    url: string;
}

const FooterIcon: React.FC<FooterIconProps> = ({ id, name, url }) => {
    const className = "text-slate-600 hover:text-primary-800 dark:text-slate-200 dark:hover:text-primary-200 transition-all duration-200";

    return (
        <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={className} aria-label={name}>
            <SocialIcon icon={id} />
        </a>
    );
};

export default FooterIcon;

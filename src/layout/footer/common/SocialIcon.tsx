import Icons from "../../../common/icons/Icons";

interface SocialIconProps {
    icon: string
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
    switch (icon) {
        case "linkedin":
            return <Icons.Linkedin />;
        case "github":
            return <Icons.Github />;
        case "mail":
            return <Icons.Mail />;
        default:
            return null;
    }
};

export default SocialIcon;

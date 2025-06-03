const Brand: React.FC = () => {
    const className = "bg-clip-text font-bold text-transparent bg-gradient-to-bl from-primary-950 via-primary-700 to-primary-950 dark:from-primary-400 dark:via-primary-400 dark:to-primary-100";
    const widest = `${className} group-hover:tracking-wide transition-all duration-200 ease-in group-hover:text-primary-950/40 dark:group-hover:text-primary-600/40`;
    const tight = `${className} group-hover:tracking-tight transition-all duration-200 ease-in group-hover:text-primary-700/40 dark:group-hover:text-primary-400/40`;

    return (
        <a href="/" className="group cursor-pointer text-4xl font-bold font-lakki-reddy pt-4">
            <span className={widest}>Wiki</span>
            <span className={tight}>rd</span>
            <span className={tight}>le</span>
        </a>
    );
}

export default Brand;
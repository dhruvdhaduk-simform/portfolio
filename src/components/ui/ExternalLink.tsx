interface ExternalLinkProps {
    href: string;
    imgURL: string;
    label: string;
    borderGradient: string;
    borderGradientHover: string;
}

/** Returns an External link with specified gradient stylings. */
export function ExternalLink({
    href,
    imgURL,
    label,
    borderGradient,
    borderGradientHover,
}: ExternalLinkProps) {
    return (
        <a
            href={href}
            className={`p-0.5 bg-gradient-to-r ${borderGradient} rounded-lg min-w-40 md:min-w-48`}
            target="_blank"
            role="button"
            aria-label={`${label} (opens in a new tab)`}
        >
            <span
                className={`bg-black hover:bg-gradient-to-r ${borderGradientHover} rounded-lg flex justify-center items-center gap-2 text-nowrap p-2 px-6 md:p-3 md:px-8 text-sm md:text-base`}
            >
                <img className="w-4 md:w-5" src={imgURL} alt={label} /> {label}
            </span>
        </a>
    );
}

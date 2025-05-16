import { GRADIENTS } from '@/constants/gradients';

export function HomePage() {
    return (
        <div className="w-full h-full p-4 flex flex-col justify-center relative">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
                <p>Hi, I'm</p>
                <p
                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r ${GRADIENTS[0].normal} inline-block text-transparent bg-clip-text`}
                    role="heading"
                >
                    Dhruv Dhaduk
                </p>
                <p className="text-sm md:text-base line-clamp-[20]">
                    I'm a frontend developer who enjoys building fast,
                    responsive web apps using React and modern JavaScript
                    frameworks. I focus on creating clean, interactive UIs with
                    a strong emphasis on performance, accessibility, and user
                    experience. I'm passionate about writing modular,
                    maintainable code and constantly exploring new tools and
                    techniques in the frontend ecosystem. Whether it's building
                    intuitive interfaces, optimizing workflows, or refining
                    component architecture, I love solving real problems through
                    code. I'm always learning, experimenting, and pushing my
                    skills forward.
                </p>
            </div>

            <div className="absolute bottom-16 flex justify-start items-center flex-wrap gap-2 md:gap-4">
                <ExternalLink
                    href="mailto:dhruv.dhaduk@simformsolutions.com"
                    imgURL="/logos/mail.svg"
                    label="Send an email"
                    borderGradient={GRADIENTS[1].normal}
                    borderGradientHover={GRADIENTS[1].hover}
                />
                <ExternalLink
                    href="https://in.linkedin.com/in/dhruvdhaduk"
                    imgURL="/logos/linkedin.svg"
                    label="LinkedIn"
                    borderGradient={GRADIENTS[2].normal}
                    borderGradientHover={GRADIENTS[2].hover}
                />
                <ExternalLink
                    href="https://github.com/dhruvdhaduk-simform"
                    imgURL="/logos/github.svg"
                    label="GitHub"
                    borderGradient={GRADIENTS[3].normal}
                    borderGradientHover={GRADIENTS[3].hover}
                />
            </div>
        </div>
    );
}

function ExternalLink({
    href,
    imgURL,
    label,
    borderGradient,
    borderGradientHover,
}: {
    href: string;
    imgURL: string;
    label: string;
    borderGradient: string;
    borderGradientHover: string;
}) {
    return (
        <a
            href={href}
            className={`p-0.5 bg-gradient-to-r ${borderGradient} rounded-lg min-w-40 md:min-w-48`}
            target="_blank"
            role="button"
            aria-label={label}
        >
            <span
                className={`bg-black hover:bg-gradient-to-r ${borderGradientHover} rounded-lg flex justify-center items-center gap-2 text-nowrap p-2 px-6 md:p-3 md:px-8 text-sm md:text-base`}
            >
                <img className="w-4 md:w-5" src={imgURL} alt="" /> {label}
            </span>
        </a>
    );
}

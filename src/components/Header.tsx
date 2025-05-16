/** Site logo and navigation links to different pages/sections. */
export function Header() {
    return (
        <header className="z-10 fixed top-6 left-0 right-0 w-full flex justify-center">
            <div className="w-full max-w-[80rem] px-9">
                <div className="glassmorphic rounded-2xl h-14 flex justify-between">
                    <a
                        href="#"
                        className="h-full p-2 pl-4 hover:scale-105 duration-200"
                        role="button"
                    >
                        <img
                            src="/logos/header_logo.png"
                            alt="Dhruv"
                            className="h-full"
                        />
                    </a>

                    {/* Navigation links to different pages/sections. */}
                    <nav className="flex items-center gap-2 px-2">
                        <NavLink href="#skills" className="hidden sm:inline">
                            Skills
                        </NavLink>
                        <NavLink href="#projects" className="hidden sm:inline">
                            Projects
                        </NavLink>
                        <NavLink href="#education" className="hidden sm:inline">
                            Education
                        </NavLink>
                        <NavLink
                            href="#contact-me"
                            className="bg-white text-black hover:scale-105 duration-200"
                        >
                            Contact Me
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}

/** Returns an anchor tag with some stylings for Nav Links in Header */
function NavLink({
    href,
    className,
    children,
}: {
    href: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <a
            role="button"
            href={href}
            className={`border border-transparent hover:border-[#ffffffc0] rounded-lg p-2 px-4 text-nowrap duration-300 ${className}`}
        >
            {children}
        </a>
    );
}

export function HomePage() {
    return (
        <div className="w-full h-full p-4 flex flex-col justify-center">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
                <p>Hi, I'm</p>
                <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] inline-block text-transparent bg-clip-text">
                    Dhruv Dhaduk
                </p>
                <p className="text-sm md:text-base">
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
        </div>
    );
}

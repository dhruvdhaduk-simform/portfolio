import marqueeStyles from '@/styles/marquee.module.css';
import { SKILLS } from '@/data/skills';

interface MarqueeSkillsProp {
    direction: 'forward' | 'reverse';
}

export function MarqueeSkills({ direction }: MarqueeSkillsProp) {
    return (
        <div
            className={`w-full overflow-hidden flex gap-5 ${direction === 'reverse' ? marqueeStyles['marquee-reverse'] : marqueeStyles.marquee}`}
        >
            <div className="flex shrink-0 gap-10 min-w-full">
                {SKILLS.map((skill) => (
                    <a
                        href={skill.url}
                        target="_blank"
                        className="w-16 h-16 md:w-20 md:h-20"
                        tabIndex={-1}
                        key={skill.name}
                        aria-label={skill.name}
                    >
                        <img
                            className="w-full h-full object-contain"
                            src={skill.logo}
                            alt={skill.name}
                        />
                    </a>
                ))}
            </div>

            <div className="flex shrink-0 gap-10 min-w-full">
                {SKILLS.map((skill) => (
                    <a
                        href={skill.url}
                        target="_blank"
                        className="w-16 h-16 md:w-20 md:h-20"
                        tabIndex={-1}
                        key={skill.name}
                        aria-label={skill.name}
                    >
                        <img
                            className="w-full h-full object-contain"
                            src={skill.logo}
                            alt={skill.name}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

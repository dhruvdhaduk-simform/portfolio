import { PageHeading } from '@/components/PageHeading';
import { MarqueeSkills } from '@/components/MarqueeSkills';

export function SkillsPage() {
    return (
        <div className="w-full h-full flex flex-col justify-center gap-8">
            <PageHeading title="Skills" />

            <MarqueeSkills direction="forward" />
            <MarqueeSkills direction="reverse" />
        </div>
    );
}

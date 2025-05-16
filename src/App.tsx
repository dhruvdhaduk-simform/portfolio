import { HomePage } from '@/pages/HomePage';
import { SkillsPage } from '@/pages/SkillsPage';
import { EducationPage } from '@/pages/EducationPage';
import { PageLayout } from '@/layouts/PageLayout';
import { Header } from '@/components/Header';

function App() {
    return (
        <div className="w-full max-w-[100rem] m-auto">
            <Header />

            <PageLayout>
                <HomePage />
            </PageLayout>

            <div
                id="skills"
                className="w-full h-[50dvh] min-h-[15rem] max-h-[20rem] p-4"
            >
                <SkillsPage />
            </div>

            <div id="education" className="w-full h-[50dvh] min-h-[15rem] p-4">
                <EducationPage />
            </div>
        </div>
    );
}

export default App;

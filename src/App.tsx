import { Header } from '@/components/Header';
import { PageLayout } from '@/components/layout/PageLayout';
import { HomePage } from '@/pages/HomePage';

function App() {
    return (
        <div className="w-full max-w-[100rem] m-auto">
            <Header />

            <PageLayout>
                <HomePage />
            </PageLayout>
        </div>
    );
}

export default App;

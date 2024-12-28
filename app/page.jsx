import { Notes } from 'components/notes';

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col gap-4">
                <Notes />
            </section>
        </main>
    );
}

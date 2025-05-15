export function PageHeading({ title }: { title: string }) {
    return (
        <p role="heading" className="text-3xl md:text-4xl font-bold">
            {title}
        </p>
    );
}

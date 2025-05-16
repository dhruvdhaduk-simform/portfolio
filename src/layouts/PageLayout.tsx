type PageLayout = {
    id?: string;
} & React.PropsWithChildren;

export function PageLayout({ id, children }: PageLayout) {
    return (
        <div id={id} className="w-full h-[100dvh]">
            {children}
        </div>
    );
}

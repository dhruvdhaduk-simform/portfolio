type PageLayout = {
    id?: string;
} & React.PropsWithChildren;

/** A wrapper which defines height, width, id for a Page component. */
export function PageLayout({ id, children }: PageLayout) {
    return (
        <div id={id} className="w-full h-[100dvh]">
            {children}
        </div>
    );
}

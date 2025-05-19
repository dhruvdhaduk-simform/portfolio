type PageLayoutProps = React.PropsWithChildren<{
    id?: string;
}>;

/** A wrapper which defines height, width, id for a Page component. */
export function PageLayout({ id, children }: PageLayoutProps) {
    return (
        <div id={id} className="w-full h-[100dvh]">
            {children}
        </div>
    );
}

export function SectionContainer ( props ) {
    const className = `md:flex-grow md:order-none flex flex-col gap-y-4 justify-center place-items-center text-xl py-10 md:py-12 lg:py-20 px-10 border-y-2 border-primary ${props.className}`
    
    return (
        <section className={className}>
            {props.children}
        </section>
    )
}
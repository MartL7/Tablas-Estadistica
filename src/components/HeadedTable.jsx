export function Th ({children}) {
    return (
        <th className="md:px-6 md:py-4 px-1 py-1 text-xs font-medium uppercase tracking-wider">{children}</th>
    )
}

export function Td ({children}) {
    return (
        <td className="md:px-6 md:py-4 px-1 py-1 whitespace-nowrap">{children}</td>
    )
}
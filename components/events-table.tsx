import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export type Event = {
    source: string
    message: string
    createdAt: string
}

export default function EventsTable({ events }: { events: Event[] }) {

    return (
        <Table>
            <TableCaption>Recent events.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Source</TableHead>
                    <TableHead>Event message</TableHead>
                    <TableHead className="w-[150px] text-right">Created at</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {events.map((e, i) => (
                    <TableRow key={i}>
                        <TableCell className="font-medium">{e.source}</TableCell>
                        <TableCell>{e.message}</TableCell>
                        <TableCell className="whitespace-nowrap text-right">{e.createdAt}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

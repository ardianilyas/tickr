"use client"

import { TicketStatus as TicketStatusType } from "@/lib/generated/prisma/enums";
import { useGetTicketByStatus } from "../hooks/useGetTicketByStatus";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TicketStatus from "../components/TicketStatus";
import TicketPriority from "../components/TicketPriority";

export default function TicketByStatus({ status }: { status: TicketStatusType }) {
    const { data: tickets, isLoading } = useGetTicketByStatus(status);
    return (
        <div className="mt-6">
            {isLoading ? (
                <p>Loading...</p>
            ) : tickets && tickets.length > 0 ? (
                <Card>
                    <CardContent>
                        <Table>
                            <TableCaption>Tickets</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Priority</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tickets.map((ticket, index) => (
                                    <TableRow key={ticket.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{ticket.title}</TableCell>
                                        <TableCell>
                                            <TicketStatus status={ticket.status} />
                                        </TableCell>
                                        <TableCell>
                                            <TicketPriority priority={ticket.priority} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            ) : (
                <p>No tickets found</p>
            )}
        </div>
    )
}
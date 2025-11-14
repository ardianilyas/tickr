"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TicketStatus from "../components/TicketStatus";
import TicketPriority from "../components/TicketPriority";
import Link from "next/link";
import { useGetAllTickets } from "../hooks/useGetAllTickets";

export default function Tickets() {
    const { data: tickets, isLoading } = useGetAllTickets();

    return (
        <div className="mt-6">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <Card>
                    <CardContent>
                        <Table>
                            <TableCaption>Tickets</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Priority</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tickets?.map((ticket, index) => (
                                    <TableRow key={ticket.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>
                                            <Link className="text-blue-400 hover:underline" href={`/dashboard/admin/tickets/${ticket.id}`}>
                                                <p className="truncate w-64">
                                                    {ticket.title}
                                                </p>
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <p className="truncate w-64">
                                                {ticket.description}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <TicketPriority priority={ticket.priority} />
                                        </TableCell>
                                        <TableCell>
                                            <TicketStatus status={ticket.status} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
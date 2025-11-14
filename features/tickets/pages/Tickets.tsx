"use client"

import Link from "next/link";
import { useGetTicketsByUserId } from "../hooks/useGetTicketsByUserId"
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TicketStatus from "@/features/admin/tickets/components/TicketStatus";
import TicketPriority from "@/features/admin/tickets/components/TicketPriority";
import { Card, CardContent } from "@/components/ui/card";
import { useDeleteTicketById } from "../hooks/useDeleteTicketById";

export default function Tickets() {
    const { data: tickets, isLoading } = useGetTicketsByUserId(); 

    const { mutateAsync, isPending } = useDeleteTicketById();

    const onDeleteTicket = async (id: string) => {
       await mutateAsync({ id });
    };

    return (
        <div className="mt-6">
            <Link href="/dashboard/tickets/create">
                <Button className="mb-4">Create Ticket</Button>
            </Link>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {tickets && tickets.length > 0 ? (
                        <Card>
                            <CardContent>
                                <Table>
                                    <TableCaption>Tickets</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>No</TableHead>
                                            <TableHead>Title</TableHead>
                                            <TableHead>Description</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Priority</TableHead>
                                            <TableHead>Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {tickets.map((ticket, index) => (    
                                            <TableRow key={ticket.id}>
                                                <TableCell>{index+1}</TableCell>
                                                <TableCell>{ticket.title}</TableCell>
                                                <TableCell>{ticket.description}</TableCell>
                                                <TableCell>
                                                    <TicketStatus status={ticket.status} />
                                                </TableCell>
                                                <TableCell>
                                                    <TicketPriority priority={ticket.priority} />
                                                </TableCell>
                                                <TableCell>
                                                    <Link href={`/dashboard/tickets/${ticket.id}`}>
                                                        Edit
                                                    </Link>
                                                    <Button disabled={isPending} onClick={() => onDeleteTicket(ticket.id)} variant="link">
                                                        Delete
                                                    </Button>
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
            )}
        </div>
    )
}
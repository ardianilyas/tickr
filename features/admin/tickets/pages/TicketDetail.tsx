"use client"

import { Card, CardContent } from "@/components/ui/card";
import { useGetTicketById } from "../hooks/useGetTicketById"
import TicketStatus from "../components/TicketStatus";
import TicketPriority from "../components/TicketPriority";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ticketStatusLabels } from "../utils/ticketStatusLabel";
import { TicketStatus as TicketStatusType } from '../../../../lib/generated/prisma/enums';
import { useUpdateTicketStatus } from "../hooks/useUpdateTicketStatus";

export default function TicketDetail({ id }: { id: string }) {
    const { data: ticket, isLoading } = useGetTicketById(id);
    
    const updateTicketStatus = useUpdateTicketStatus(ticket?.id as string);

    return (
        <div className="mt-6">
            {isLoading ? (
                <p>Loading...</p>
            ) : ticket && (
                <Card>
                    <CardContent>
                        <div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    <TicketStatus status={ticket.status} />
                                    <TicketPriority priority={ticket.priority} />
                                    <p className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">
                                    {ticket.category.name}
                                    </p>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">Change Status</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                    {Object.values(TicketStatusType).map((status) => (
                                        <DropdownMenuItem key={status} onClick={() => 
                                            updateTicketStatus.mutate({ id: ticket.id, status })
                                        }>
                                            {ticketStatusLabels[status]}
                                        </DropdownMenuItem>
                                    ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            <h3 className="text-lg mt-4 font-medium"> {ticket.title} </h3>
                            <p className="leading-tight mt-2 font-light"> {ticket.description} </p>

                            <div>
                                <p className="text-sm mt-6 font-light text-neutral-600">Issued by : {ticket.creator.name} </p>
                                <p className="text-sm font-light text-neutral-600">Assigned to : {ticket.assigned?.name ?? "-"} </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ) }
        </div>
    )
}
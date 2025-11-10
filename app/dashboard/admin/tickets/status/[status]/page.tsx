import DashboardTitle from "@/components/dashboard/Title"
import TicketByStatus from "@/features/admin/tickets/pages/TicketByStatus";
import { TicketStatus } from "@/lib/generated/prisma/enums";

export default async function TicketByStatusPage({ params }: { params: Promise<{ status: string }> }) {
    const { status } = await params;
    const normalizedStatus = (status as string).toUpperCase() as TicketStatus;
    return (
        <div>
            <DashboardTitle>Tickets By Status</DashboardTitle>

            <TicketByStatus status={normalizedStatus} />
        </div>
    )
}
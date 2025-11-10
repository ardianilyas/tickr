import DashboardTitle from "@/components/dashboard/Title";
import TicketDetail from "@/features/admin/tickets/pages/TicketDetail";

export default async function TicketDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div>
            <DashboardTitle>Ticket Details</DashboardTitle>

            <TicketDetail id={id} />
        </div>
    )
}
import DashboardSubtitle from "@/components/dashboard/Subtitle";
import DashboardTitle from "@/components/dashboard/Title";
import EditTicket from "@/features/tickets/pages/EditTicket";

export default async function EditTicketPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div>
            <DashboardTitle>Edit Ticket</DashboardTitle>
            <DashboardSubtitle>Edit a ticket here.</DashboardSubtitle>

            <EditTicket id={id} />
        </div>
    )
}
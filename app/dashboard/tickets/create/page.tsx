import DashboardSubtitle from "@/components/dashboard/Subtitle";
import DashboardTitle from "@/components/dashboard/Title";
import CreateTicket from "@/features/tickets/pages/CreateTicket";

export default function CreateTicketPage() {
    return (
        <div>
            <DashboardTitle>Create Ticket</DashboardTitle>
            <DashboardSubtitle>Create a new ticket</DashboardSubtitle>

            <CreateTicket />
        </div>
    )
}
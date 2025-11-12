import DashboardSubtitle from "@/components/dashboard/Subtitle";
import DashboardTitle from "@/components/dashboard/Title";
import Tickets from "@/features/tickets/pages/Tickets";

export default function TicketsPage() {
    return (
        <div>
            <DashboardTitle>Tickets</DashboardTitle>
            <DashboardSubtitle>Manage your tickets here.</DashboardSubtitle>

            <Tickets />
        </div>
    )
}
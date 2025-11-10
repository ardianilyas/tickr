import { TicketStatus as TicketStatusType } from '@/lib/generated/prisma/enums'
import clsx from 'clsx'

type Props = {
    status: TicketStatusType
}

const STATUS_LABELS: Record<TicketStatusType, string> = {
    OPEN: "Open",
    IN_PROGRESS: "In Progress",
    RESOLVED: "Resolved",
    CLOSED: "Closed",
}
  
const STATUS_STYLES: Record<TicketStatusType, string> = {
    OPEN: "bg-blue-100 text-blue-700 border-blue-300",
    IN_PROGRESS: "bg-yellow-100 text-yellow-700 border-yellow-300",
    RESOLVED: "bg-green-100 text-green-700 border-green-300",
    CLOSED: "bg-rose-100 text-rose-700 border-rose-300",
}

export default function TicketStatus({ status }: Props) {
  return (
    <p
        className={clsx(
            "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium capitalize",
            STATUS_STYLES[status]
        )}
    >
        {STATUS_LABELS[status]}
    </p>
  )
}
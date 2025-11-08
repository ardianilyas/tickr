export default function DashboardTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-2xl font-medium leading-tight">
            {children}
        </h2>
    )
}
export default function DashboardSubtitle({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-neutral-600 leading-relaxed">
            {children}
        </p>
    )
}
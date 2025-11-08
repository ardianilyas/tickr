
import DashboardSubtitle from "@/components/dashboard/Subtitle";
import DashboardTitle from "@/components/dashboard/Title";
import EditCategory from "@/features/admin/categories/pages/EditCategory";

export default async function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        < div >
            <DashboardTitle>Edit Category</DashboardTitle>
            <DashboardSubtitle>Edit a category</DashboardSubtitle>

            <EditCategory id={id} />
        </div>
    )
}
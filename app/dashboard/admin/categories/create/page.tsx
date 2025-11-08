import DashboardSubtitle from "@/components/dashboard/Subtitle";
import DashboardTitle from "@/components/dashboard/Title";
import CreateCategory from "@/features/admin/categories/pages/CreateCategory";

export default function CreateCategoryPage() {
    return (
        <div>
            <DashboardTitle>Create Category</DashboardTitle>
            <DashboardSubtitle>Create a new category</DashboardSubtitle>

            <CreateCategory />
        </div>
    )
}
import DashboardSubtitle from "@/components/dashboard/Subtitle";
import DashboardTitle from "@/components/dashboard/Title";
import Categories from "@/features/admin/categories/pages/Categories";

export default function CategoriesPage() {
  return (
    <div>
      <DashboardTitle>Categories Page</DashboardTitle>
      <DashboardSubtitle>Manage your categories here.</DashboardSubtitle>

      <Categories />
    </div>
  )
}
import { Ticket, PlusCircle, Settings } from "lucide-react";

export const sidebarMenus = {
  USER: [
    {
      title: "Tickets",
      url: "/tickets",
      icon: Ticket,
      items: [
        { title: "My Tickets", url: "/tickets" },
        { title: "Create Ticket", url: "/tickets/new", icon: PlusCircle },
      ],
    },
  ],
  ADMIN: [
    {
      title: "Dashboard",
      url: "/dashboard/admin",
      icon: Ticket,
      items: [
        { title: "Overview", url: "/dashboard/admin" },
        { title: "Reports", url: "/dashboard/admin/reports" },
      ],
    },
    {
      title: "Tickets",
      url: "/dashboard/admin/tickets",
      icon: Ticket,
      items: [
        { title: "All Tickets", url: "/dashboard/admin/tickets" },
        { title: "Unassigned", url: "/dashboard/admin/tickets/unassigned" },
        { title: "Resolved", url: "/dashboard/admin/tickets/resolved" },
      ],
    },
    {
      title: "Categories",
      url: "/dashboard/admin/categories",
      icon: Ticket,
      items: [
        { title: "Categories", url: "/dashboard/admin/categories" },
      ],
    },
    {
      title: "Users",
      url: "/dashboard/admin/users",
      icon: Settings,
      items: [
        { title: "All Users", url: "/dashboard/admin/users" },
        { title: "Roles", url: "/dashboard/admin/users/roles" },
      ],
    },
  ],
};
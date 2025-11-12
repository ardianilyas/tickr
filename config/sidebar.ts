import { Ticket, PlusCircle, Settings } from "lucide-react";

export const sidebarMenus = {
  USER: [
    {
      title: "Tickets",
      url: "/dashboard/tickets",
      icon: Ticket,
      items: [
        { title: "My Tickets", url: "/dashboard/tickets" },
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
        { title: "Open", url: "/dashboard/admin/tickets/status/open" },
        { title: "In Progress", url: "/dashboard/admin/tickets/status/in_progress" },
        { title: "Resolved", url: "/dashboard/admin/tickets/status/resolved" },
        { title: "Closed", url: "/dashboard/admin/tickets/status/closed" },
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
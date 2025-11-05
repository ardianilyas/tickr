import { Ticket, PlusCircle, BookOpen, Settings } from "lucide-react";

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
    {
      title: "Knowledge Base",
      url: "/kb",
      icon: BookOpen,
      items: [
        { title: "FAQs", url: "/kb/faqs" },
        { title: "Guides", url: "/kb/guides" },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        { title: "Profile", url: "/settings/profile" },
        { title: "Preferences", url: "/settings/preferences" },
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
      title: "Tickets Management",
      url: "/dashboard/admin/tickets",
      icon: Ticket,
      items: [
        { title: "All Tickets", url: "/dashboard/admin/tickets" },
        { title: "Unassigned", url: "/dashboard/admin/tickets/unassigned" },
        { title: "Resolved", url: "/dashboard/admin/tickets/resolved" },
      ],
    },
    {
      title: "User Management",
      url: "/dashboard/admin/users",
      icon: Settings,
      items: [
        { title: "All Users", url: "/dashboard/admin/users" },
        { title: "Roles", url: "/dashboard/admin/users/roles" },
      ],
    },
  ],
};
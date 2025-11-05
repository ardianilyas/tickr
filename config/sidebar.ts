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
      url: "/admin/dashboard",
      icon: Ticket,
      items: [
        { title: "Overview", url: "/admin/dashboard" },
        { title: "Reports", url: "/admin/reports" },
      ],
    },
    {
      title: "Tickets Management",
      url: "/admin/tickets",
      icon: Ticket,
      items: [
        { title: "All Tickets", url: "/admin/tickets" },
        { title: "Unassigned", url: "/admin/tickets/unassigned" },
        { title: "Resolved", url: "/admin/tickets/resolved" },
      ],
    },
    {
      title: "User Management",
      url: "/admin/users",
      icon: Settings,
      items: [
        { title: "All Users", url: "/admin/users" },
        { title: "Roles", url: "/admin/users/roles" },
      ],
    },
  ],
};
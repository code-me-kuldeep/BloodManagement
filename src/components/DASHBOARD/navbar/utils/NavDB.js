import { ChatAltIcon, CogIcon, LogoutIcon, ShoppingCartIcon, TemplateIcon, UserIcon } from "@heroicons/react/outline";

export const navLinks = [
  {
    id: 0,
    title: "Dashboard",
    icon: <TemplateIcon className="nav-icon" />,
    redirect: ''
  },
  {
    id: 1,
    title: "Find Blood",
    icon: <ShoppingCartIcon className="nav-icon" />,
    redirect: '/findBlood'
  },
  {
    id: 2,
    title: "Donate Blood",
    icon: <UserIcon className="nav-icon" />,
    redirect: '/donate'
  },
  {
    id: 3,
    title: "Blood Required",
    icon: <ChatAltIcon className="nav-icon" />,
    redirect: '/required'
  },
  {
    id: 5,
    title: "LogOut",
    icon: <LogoutIcon className="nav-icon" />,

  },
];

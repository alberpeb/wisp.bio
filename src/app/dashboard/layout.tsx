import DashboardMenu from "@/components/dashboard/Menu";

const navLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Profile",
        path: "/dashboard/profile"
    },
    {
        name: "User",
        path: "/dashboard/user"
    }
];

export default function Layout({children}: { children: React.ReactNode }) {
    return(
        <div className="flex">
          <DashboardMenu/>
          <main>{children}</main>
        </div>
    );
}

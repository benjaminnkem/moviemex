import MovieDetailsSideBar from "@/components/Layout/Movies/Sidebar";
import "./styles/layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="detLayout grid gap-4">
        <MovieDetailsSideBar />
        <main className="p-5 h-screen md:ml-[280px] sm:ml-[200px]">{children}</main>
      </div>
    </>
  );
};

export default Layout;

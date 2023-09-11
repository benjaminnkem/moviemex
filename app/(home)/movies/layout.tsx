import MovieDetailsSideBar from "@/components/Layout/Movies/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="detLayout grid gap-4">
        <MovieDetailsSideBar />
        <main className="p-5 h-screen md:ml-[280px] sm:ml-[160px] ml-[60px]">{children}</main>
      </div>
    </>
  );
};

export default Layout;

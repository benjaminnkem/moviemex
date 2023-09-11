import MovieDetailsSideBar from "@/components/Layout/Movies/Sidebar";
import Footer from "@/components/UI/Footer";
import "./styles/layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="detLayout grid">
        <aside className="min-h-screen fixed md:w-[320px] w-[260px] bg-gray-50">
          <MovieDetailsSideBar />
        </aside>

        <main className="p-5 h-screen md:ml-[320px] ml-[260px]">{children}</main>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;

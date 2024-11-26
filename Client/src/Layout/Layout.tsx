import Footer from "../Layout/Footer/Footer";
import Header from "./Header/Header";
import Main from "./main/main";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="app-container">
      <Header />
      <Main children={children} />
      <Footer />
    </div>
  );
};

export default Layout;

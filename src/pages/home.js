import Header from "../comp/header";
import Footer from "../comp/footer";
import Main from "../comp/mainComp";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="its css" />
        <style type="text/css">{`
        /*chtoto*/
    `}</style>
      </Helmet>

      <Header />

      <Main pageName="Home Page" />
      <Footer />
    </>
  );
};

export default Home;

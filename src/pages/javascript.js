import Header from "../comp/header";
import Footer from "../comp/footer";
import Main from "../comp/mainComp";
import { Helmet } from "react-helmet-async";

const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>More page</title>
        <meta name="description" content="moooore aboute me" />
      </Helmet>
      <Header />

      <Main pageName="MORE Page" />

      <Footer />
    </>
  );
};

export default Javascript;

import Header from "../comp/header";
import Footer from "../comp/footer";
import Main from "../comp/mainComp";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="about meeee" />
      </Helmet>
      <Header />

      <Main pageName="ABOUT PAGE" />

      <Footer />
    </>
  );
};

export default About;

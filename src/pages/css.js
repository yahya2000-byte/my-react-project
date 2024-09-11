import Header from "../comp/header";
import Footer from "../comp/footer";
import Main from "../comp/mainComp";
import { Helmet } from 'react-helmet-async';
const Css = () => {
  return (
    <>
    <Helmet>
        <title>Skills page</title>
        <meta name="description" content="Skilllsss"/>
    </Helmet>

      <Header />

      <Main pageName="SKILLS Page" />

      <Footer />
    </>
  );
};

export default Css;

import "./body.css";
import { Helmet } from 'react-helmet';
import siteConfig from "../siteConfig";

function Body() {
  return (
    <div className="body">
      <Helmet>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta
          property="og:image"
          content={siteConfig.siteUrl + siteConfig.image}
        />
      </Helmet>
      <h1>Hola Jesi</h1>
    </div>
  );
}

export default Body;

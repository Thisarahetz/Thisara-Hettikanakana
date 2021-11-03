import TopContaner from "../componet/Top1/TopContaner";
import Head from 'next/head'
import Footer from "../componet/Navbar/Footer/Footer";
import LangProgres from "../componet/LangProgresComp";
import Project from "../componet/projectAbout/Project";
import About from "./about";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
      <link rel="shortcut icon" href="/assets/favicon.ico" />
        <title>Home</title>
        <meta name="Keyword" content="Thisara Hettikankanama"/>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" 
      integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni" crossOrigin="anonymous"></link>
      </Head>
      <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          
        ></script>
        <script defer src="https://unpkg.com/alpinejs@3.2.4/dist/cdn.min.js"></script>
      
    
    
    <TopContaner/>
    <LangProgres/>
    <Project/>
    <About/>
    <Footer/>
    </div>
    
  )
}

import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/db.json"

export default function App() {
  return (
    <>
        <Header />
        <Banner image="home"/>
        <Container>
        <h2>Geografia</h2>
          <section className="cards">
                 {
                  videos.map((video)=>{
                    return <Card id={video.id} key={video.id}/>
                  })
                 }
          </section>
                  
        </Container>
       
        <Footer />
    </>
  );
}

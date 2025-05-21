import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Carousel />
        <VideoPlayer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
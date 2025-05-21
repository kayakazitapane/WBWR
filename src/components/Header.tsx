const Header = () => {
  return (
    <header className="p-4 bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4" aria-label="Main Navigation">
        <div className="text-lg font-bold" role="heading" aria-level={1}>
          HEADER
        </div>
      </nav>
    </header>
  );
};

const VideoSection = () => {
  return (
    <section className="flex flex-col items-center min-h-screen pt-20 bg-gray-100">
      {/* Video */}
      <video className="w-full max-w-3xl rounded-md shadow-lg" controls autoPlay muted loop>
        <source src="/assets/UA_Theme_1_DT.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Image Below Video */}
      <img
        src="/assets/UA_Theme_2_DT.jpg"
        alt="UA Theme 2"
        className="w-full max-w-2xl mt-6 rounded-lg shadow-md"
      />
    </section>
  );
};

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <VideoSection /> {/* Video now appears below the header, followed by the image */}
    </div>
  );
};

export default App;
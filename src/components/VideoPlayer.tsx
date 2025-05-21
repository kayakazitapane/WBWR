const VideoPlayer = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <video className="w-full rounded-lg shadow-lg border-4 border-primary" controls>
        <source src="/assets/Desktop Assets/UA_Theme_1_DT" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
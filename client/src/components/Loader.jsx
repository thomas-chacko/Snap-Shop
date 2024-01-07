const Loader = () => {
  return (
    <div className="min-w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-row gap-2">
        <div className="w-6 h-6 rounded-full bg-black animate-bounce"></div>
        <div
          className="w-6 h-6 rounded-full bg-black animate-bounce"
          style={{ animationDelay: "-.3s" }}
        ></div>
        <div
          className="w-6 h-6 rounded-full bg-black animate-bounce"
          style={{ animationDelay: "-.5s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;

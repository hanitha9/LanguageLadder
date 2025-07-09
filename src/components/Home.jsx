function Home() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Welcome to Languageladder!</h2>
      <p className="text-lg mb-4">Learn languages interactively and connect with a global community.</p>
      <div className="mt-4">
        <a href="/lesson" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start Learning</a>
        <a href="/community" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ml-4">Join Community</a>
      </div>
    </div>
  );
}

export default Home;

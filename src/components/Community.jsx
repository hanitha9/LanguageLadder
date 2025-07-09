function Community() {
  // Static sample posts (to be replaced with API data in Phase 2)
  const posts = [
    { username: 'john_doe', content: 'Tips for learning Spanish verbs?' },
    { username: 'jane_smith', content: 'French pronunciation is tricky, any advice?' },
    { username: 'alice_wong', content: 'Loving the German lessons!' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Community</h2>
      {posts.map((post, index) => (
        <div key={index} className="border p-4 mb-4 rounded bg-white shadow">
          <p className="font-bold">{post.username}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Community;

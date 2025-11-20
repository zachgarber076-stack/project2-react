import { Link } from "react-router";

export default function Homepage() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center px-4 py-12">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
          Welcome to Our Blog Page!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Discover articles, share ideas, and explore the latest posts.
          We hope you enjoy the content on this page!
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
        
        <Link
          to="/login"
          className="
            bg-white p-8 rounded-2xl border border-gray-200
            shadow-sm hover:shadow-xl transition-all duration-300
            hover:-translate-y-1
          "
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Login</h2>
          <p className="text-gray-600">
            Access, or create your account and start engaging!
          </p>
        </Link>

       
        <Link
          to="/posts"
          className="
            bg-white p-8 rounded-2xl border border-gray-200
            shadow-sm hover:shadow-xl transition-all duration-300
            hover:-translate-y-1
          "
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Explore Blog Posts</h2>
          <p className="text-gray-600">
            Browse enjoyable posts that have been written by some of our contributors!
          </p>
        </Link>
      </div>
    </div>
  );
}

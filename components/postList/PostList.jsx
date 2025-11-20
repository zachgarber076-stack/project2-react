import React, { useEffect } from 'react';
import { Link } from 'react-router';


function PostList() {

    return (
        <div className='max-w-3xl mx-auto mt-10'>
            <h1 className="text-4xl font-bold mb-6 text-center">Blog Posts</h1>

            <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3].map((id) => (
                    <Link
                        key={id}
                        to={`/posts/${id}`}
                        className="block p-6 bg-white shadow-md rounded-xl border hover:shadow-lg hover:-translate-y-1 transition"
                    >
                        <h2 className="text-2xl font-semibold mb-2">Post #{id}</h2>
                        <p className="text-gray-600">
                            Click to read this blog post.
                        </p>
                    </Link>
                ))}
            </div>
            
        </div>
    );
}

export default PostList;

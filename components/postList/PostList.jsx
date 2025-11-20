import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';


function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setPosts(data.slice(0,20)));
    }, []);

    return (
        <div className='max-w-3xl mx-auto mt-10'>
            <h1 className="text-4xl font-bold mb-6 text-center">Blog Posts</h1>

            <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        to={`/posts/${post.id}`}
                        className="block p-6 bg-white shadow-md rounded-xl border hover:shadow-lg hover:-translate-y-1 transition"
                    >
                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
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

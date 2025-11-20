import Content from "./Content";
import Comments from "./Comments";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useAuth } from "../authWrapper/AuthContext";


function BlogPost(){
    const params = useParams();
    const {user} = useAuth();

    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState();
    const [authorData, setAuthorData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const postRes = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${params.post_id}`
                );
                setPostData(postRes.data);

                const authorRes = await axios.get(
                    `https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`
                );
                setAuthorData(authorRes.data);
            }catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);
    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8 mb-8">
            {loading ? (
                <p>Loading...</p>
            ) : (
            <>
            <Content 
                title={postData.title} 
                content={postData.body} 
                author={authorData.name} 
            />
            {user ? (
                <Comments />
            ) : (
                <p className="text-center mt-6 text-gray-600 text-lg">
                    You must {" "}
                    <a 
                        href="/login"
                        className="text-blue-600 underline font-semibold"
                    >
                        login
                    </a>{" "}
                    to write or view comments.
                </p>
            )}
            </>
            )}
        </div>
            
    )
}

export default BlogPost;
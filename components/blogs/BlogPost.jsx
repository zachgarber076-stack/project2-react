import Content from "./Content";
import Comments from "./Comments";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";


function BlogPost(){
    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState();
    const [authorData, setAuthorData] = useState();
    const [commentData, setCommentData] = useState();

    console.log(postData);

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

                const commentRes = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${postRes.postId.id}/comments`
                );
                setCommentData(commentRes.data);
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
                <p>Loading</p>
            ) : (
            <>
            <Content 
                title={postData.title} 
                content={postData.body} 
                author={authorData.name} 
            />
            <Comments />
            </>
            )}
        </div>
            
    )
}

export default BlogPost;
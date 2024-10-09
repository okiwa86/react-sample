import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

export default function BlogView() {
    const params = useParams();
    // const authInfo = useSelector(state => state.auth.value)
    const [post, setPost] = useState({});
    useEffect(() => {
        axios.get(`https://api.aram-in.com/posts/${params.id}`)
            .then(res => {
                if (res.data.code === 1) {
                    setPost(res.data.data);
                }
            })
    }, []);

    return (
        <div>
            <h1>blog view</h1>
            <p>selected id: {params.id}</p>
            <p>title : {post.title}</p>
        </div>);
}
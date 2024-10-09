import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Card from "../../components/Card/Card";

export default function BlogList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://api.aram-in.com/posts?offset=0&count=10')
            .then(res => {
                if (res.data.code === 1) {
                    const data = res.data.data;
                    setPosts(data.list);
                }
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <div>
            <Link to={'/posts/new'}>Write</Link>
            <div>
                {posts.map((post) => <Link to={'/posts/' + post._id}><Card post={post}/></Link>)}
            </div>
        </div>
    )
}
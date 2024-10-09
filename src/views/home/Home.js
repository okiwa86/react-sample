import {Link, useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const clickHandler = (e) => {
        navigate('/posts');
    }

    [1, 2, 3].map(v => ({
        v: 1,
        a: 3
    }))
    return (
        <div>
            <h1>Home</h1>
            <div>
                {/*<Link to={'/posts'}>Move to posts page</Link>*/}
                <button onClick={(e) => e.target.value}>posts</button>
            </div>
        </div>
    );
}
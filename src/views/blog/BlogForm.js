import {useState} from "react";
import api from "../../utils/Sender";
import {useNavigate} from "react-router-dom";

export default function BlogForm() {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const navigate = useNavigate();
    const saveHandler = () => {
        api.post('/posts', {title, contents})
            .then(res => {
                if (res.data.code === 1) {
                    alert('success');
                    navigate('/posts');
                } else if (res.data.code === 3) {
                    alert(res.data.msg);
                    navigate('/login');
                }
            })
    }
    return (
        <div style={{width: 760, margin: '50px auto'}}>
            <h1>Write</h1>
            <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={contents} onChange={(e) => setContents(e.target.value)} />
                <button onClick={saveHandler}>write</button>
            </div>
        </div>
    );
}
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Join() {
    const [id, setId] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const joinHandler = () => {
        const data = {id, name, pass};
        axios.post('https://api.aram-in.com/sign/up', data)
            .then((res) => {
                if (res.data.code === 1) {
                    alert('success');
                    navigate('/login');
                }
            });
    }
    return (
        <div style={{width: 760, margin: '50px auto'}}>
            <h1>Join</h1>
            <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                <input
                    type='text'
                    value={id}
                    onChange={(e) =>
                        setId(e.target.value)}
                />
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='password' value={pass} onChange={(e) => setPass(e.target.value)} />
                <button onClick={joinHandler}>회원가입</button>
            </div>
        </div>
    );
}
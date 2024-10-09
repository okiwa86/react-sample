import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [id, setId] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const loginHandler = () => {
        axios.post('https://api.aram-in.com/sign/in', {id, pass})
            .then((res) => {
                if (res.data.code === 1) {
                    // alert('success');
                    localStorage.setItem('token', res.data.data.token);
                    navigate('/');
                } else {
                    alert('failed!');
                }
            })
    }
    return (
        <div style={{width: 760, margin: '50px auto'}}>
            <h1>Login</h1>
            <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
                <input type='password' value={pass} onChange={(e) => setPass(e.target.value)} />
                <button onClick={loginHandler}>로그인</button>
            </div>
        </div>
    );
}
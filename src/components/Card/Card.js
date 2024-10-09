import './Card.css';
import moment from "moment";

export default function Card(props) {

    return (
        <div
            className='card'
            style={{
                width: '150px',
                border: '1px solid black'
            }}
        >
            <div className={'cover'}></div>
            <div className={'card-body'}>
                <div>{moment(props.post.date).format('YYYY.MM.DD')}</div>
                <div>{props.post.title}</div>
                <div>{props.post.contents}</div>
            </div>
            <div className={'card-footer'}>
                {props.post._u}
            </div>
            {/*<button onClick={props.modifyHandler}>modify</button>*/}
        </div>
    );
}
export function OkButton() {

    const clickHandler = (e) => {
        alert('clickHandler');
    }
    const bg = 'red';
    return (
        <>
            <p
                style={
                    {
                        backgroundColor: bg,
                        color: 'pink'
                    }
                }
            >
            </p>
            <button onClick={(e) => alert('click')}>Ok!!</button>
        </>
    );
}

export function CancelButton() {

}
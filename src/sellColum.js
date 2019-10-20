import React, {useState} from 'react';

const SellColum = (props) => {
    let [text, setText] = useState('');
    // console.log('sellColum-main');
    const nextTurn = () => {
        // console.log('sellColum');
        if (text === '') {
            setText(props.turn)
            props.setTurn(props.row, props.col)        
        }
    }

    return(
        <>
            <span className={`sell ${text}`}  onClick={() => nextTurn()}>{text}</span>
        </>
    )
}
export default SellColum;
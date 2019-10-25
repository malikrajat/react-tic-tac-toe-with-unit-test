import React, {useState} from 'react';

const SellColum = (props) => {
    let [text, setText] = useState('');
    const nextTurn = () => {
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
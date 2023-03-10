import React from 'react'

type ButtonPropsType = {
    names: Array<string>,
    onClickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <>
            {props.names.map((name)=>{
            return (
                <button onClick={props.onClickHandler}>{name}</button>
            )
            })}

        </>

    )
}
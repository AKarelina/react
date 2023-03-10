import React from 'react'

type DisplayPropsType = {
    counter: number
}

export const Display = (props: DisplayPropsType) => {
    return (
        <div>
            {props.counter}
        </div>
    )
}
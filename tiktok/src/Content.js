import { memo } from 'react'

function Content({ count, onIncrease}) {
    console.log('re-render')
    return (
        <>
            <h2>Hello anh em f8 {count}</h2>
            <button onClick={onIncrease}>Click me</button>
        </>
    )
}

export default memo(Content)
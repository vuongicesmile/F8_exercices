import { useEffect, useState } from "react";



const tabs = ['posts', 'comments', 'albums'];
// ------------
//1 . Callback luôn được gọi sau component mounted 

function Context(){
    // đồng hồ đếm ngược , mỗi lần đếm ngược nó update lại theo từng s
    // cần render lại giao diện =>state
    const [countdown, setCountdown] = useState(180);

    // setInterval nếu để ngoài 
    // mỗi lần setCoundơn là render function lại 
    // gọi hàm setInterval nhiều lần
    // càng về sau gọi càng nhiều hàm setInterval chạy // với nhau

    useEffect(() => {
        const timeID = setInterval(() => {
            setCountdown(prev => prev -1)
        },1000)
        return () => clearInterval(timeID)
    },[])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Context;
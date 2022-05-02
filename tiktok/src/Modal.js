import {useState,useEffect} from 'react';


function Modal({modalShow,modalHide}) {
    //console.log({modalHide}
    const [hideModal, setHideModal] = useState('Modal');
    useEffect(() => {
        console.log(modalShow)
       modalHide ? setHideModal("Modal ShowHideModal") : setHideModal("Modal")
        
      },[modalHide])

       
    return (
        <div className={hideModal}>
        <button className="buttonCustom" onClick={() => {modalShow(false)}}>X</button>
        <input type="text" />
        <div className="ContentModal">Day la phan hien thi noi dung</div>
        </div>
        
    )
}

export  default Modal

// useReff : 
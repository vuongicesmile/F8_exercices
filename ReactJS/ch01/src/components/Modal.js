function Modal() {
    
    // const [hideModal, setHideModal] = useState('ShowHideModal');
    // useEffect(() => {
    //  if(modalHide) {
    //     setHideModal('ShowHideModal');
        
    //  }else {
    //     setHideModal('')
    //  }

    //   },[{modalHide}])    

    return (
        <div className="Modal">
        <button className="buttonCustom" >X</button>
        <div className="ContentModal">Day la phan hien thi noi dung</div>
        </div>
        
    )
}

export  default Modal;
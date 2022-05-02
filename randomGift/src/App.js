import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


const gifts = [
  'CPU i9',
  'RAM 32 GB RGB',
  'RGB Keyboard'
]
function App() {
  // init value = để mặc định là trống
  // gift là 1 phần thưởng đặt số ít
  const [gift , setGift] = useState();

  // Khi bấm lấy thưởng thì sẽ nghĩ đến hàm xử lý sự kiện
  const randomGift = () => {
    const index = Math.floor(Math.random() *gifts.length)

    setGift(gifts[index]);
  }

  return (
    <div className="App">  
     {/*Nếu mà có gift thì hiển thị gift , nếu không có gift thì dùng toán tử or  */}
      <h1>{gift  || 'Chưa có phần thưởng'} </h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );
}

export default App;

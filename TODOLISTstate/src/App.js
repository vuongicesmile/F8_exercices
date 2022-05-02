import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {


  // hoặc viết ngắn gọn cái property trùng với key luôn là jobs
  //const storageJobs = localStorage.jobs;
  // trong case 1 : dùng storageJobs là default value thì nó vẫn sống 
  //Khởi tạo 1 state cho input
  const [job,setJob] = useState(''); // value măc định bằng rỗn
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'));
    return storageJobs
  });
  const handleSubmit = () => {
    setJobs(prev => {
      // [...prev,job] lưu phần này vào local storage 
      // tạo biến newJob lưu mảng hiện tại
      const newJobs = [...prev,job];
      //chuyển từ mảng sang chuỗi JSON
      const jsonJobs = JSON.stringify(newJobs);
      // lấy chuỗi json này lưu vào local storage
      localStorage.setItem('jobs', jsonJobs);

      return newJobs;
    })
    setJob('')

    console.log(jobs)
  }

  return (
    <div style={{ padding: 32 }}>
      <input value = {job} onChange={(e) => setJob(e.target.value)}/>
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job,index) =>
          (
          <li key={index}>{job}</li>
          ))}
      </ul>
    </div>
  )
}

export default App;

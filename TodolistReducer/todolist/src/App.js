import './App.css';
import { useReducer, useRef ,useEffect} from 'react';


//initState
const initState  = {
  job: '',
  jobs: [],
}

// 2.Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';


const setJob = payload => {
  // console.log(payload);
  return {
    
    type: SET_JOB,
    payload 
  }
}
const addJob = payload => {
  // console.log(payload);
  return {
    
    type: ADD_JOB,
    payload 
  }
}
const deleteJob = payload => {
  // console.log(payload);
  return {
    
    type: DELETE_JOB,
    payload 
  }
}

// console.log(setJob('rua bat'));

const reducer = (state, action) => {

  switch(action.type) {
    case SET_JOB:
      return {
        ...state,
        job : action.payload
      }

      case ADD_JOB:
        return {
          ...state,
          jobs : [...state.jobs, action.payload]
        }
        case DELETE_JOB:
          // lay gia tri cua mang cu vao mang moi
            const newJobs = [...state.jobs]
            // xoa di 1 phan tu ; mang gia tri cua payload
            newJobs.splice(action.payload, 1)
          return {            
            ...state,
            jobs : newJobs
          }
      default :
      throw new Error('invalid action');
  }

}


function App() {

  const [state,dispatch] = useReducer(reducer,initState);
  // console.log(state);
  console.log(state)
  const { job, jobs } = state;

  useEffect(() => {
    inputRef.current.focus();
  },[job])

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus();
    
  }

  const inputRef = useRef();


  return (
    <div className="App">
      <h3>Todo</h3>
      <input 
      ref={inputRef}
        type="text"
        value={job}
        onChange= {e => {
          dispatch(setJob(e.target.value));
        }} 
        placeholder="enter todo.."></input>
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job,index) =>(
          <li key={index}>{job} 
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>

        ))}
     
      </ul>
    </div>
  );
}

export default App;

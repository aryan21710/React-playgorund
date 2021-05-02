import React, {useState, useCallback} from 'react';
import lodash from 'lodash';
import axios from 'axios';
const _ = lodash;

const AutoComplete = () => {
  const [userInput, setUserInput]=useState("");
  const [todos, setTodos]=useState([]);

  const debounce=useCallback(_.debounce(async ()=>{
    console.count('fetchBackendData')
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    if (response?.data) {
      setTodos([...response.data])
    }
  },1000),[])


  const onChangeHandler=(e)=> {
    setUserInput(e.target.value.trim());
    debounce()
  }
  return (
    <div style={styles.wrapper}>
        <div style={styles.control}>
            <input placeholder="Enter Input" value={userInput} onChange={onChangeHandler} type="text" style={styles.input}/>
        </div>
       {userInput.length > 0 && ( <div style={styles.list}>
        {todos.map((item,idx)=><p style={styles.item} key={item.id}>{idx+1}] {item.title}</p>)}
        </div>)}
    </div>
  )
}

export default AutoComplete;


const styles= {
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50vw',
    height: '70vh',
    margin: '2vh auto',
    border: '1px solid red'
  },
  list: {
    margin: '2vh 0vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    flexDirection: 'column',
    height: '50vh',
    overflow: 'auto',
    padding: '1vh 1vw'
  },
  item: {
    margin: '1vh 0vw',
  }
}

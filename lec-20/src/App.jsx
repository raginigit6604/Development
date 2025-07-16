// import React, { useEffect, useState } from 'react';
// import './index.css'; // 

// const Apps = () => {
//   const [data, setData] = useState([]);
//   const [text, setText] = useState('');

//   const getData = async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.in/api/products');
//       const res = await response.json();
//       console.log(res); // ✅ See your data
//       setData(res.products); // Or res, depending on structure
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const filteredproducts = data.filter((each)=>
//     each.title.toLowerCase().includes(text.toLowerCase())
// )

//   return (
//     <div className="p-6">
//       <input
//         type="text"
//         className="border-2 border-red-600 p-3 rounded-md"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       {data.map((each) => (
//         <p key={each.id} className="text-blue-500">
//           {each.title}
//         </p>
//       ))}
//     </div>
//   );
// };

// export default Apps;


// import React,{useEffect,useState} from 'react'

// const timeprogram = ()=>{
//     const[time,settime] = useState(0);
//     const [isRunning,setRunning] = useState(false);

//     useEffect(()=>{
//         let intervalId;
//         if(isRunning){
//             intervalId = setInterval(()=>{
//                 settime((prev)=prev+1);
//             },1000);
//         }
//     },[]);
//      const startAndStop = ()=>{
//         setRunning(!isRunning);
//      }

//     const resetInterval = ()=>{
//         setRunning(false);
//         settime(0);
//     };
    
//      const formatTime = (time)=>{
//         const hours = Math.floor(time/3600000);
//         const min = Math.floor(time%3600000) /60000;
//         const sec = Math.floor(time%60000)/1000;

//         return `${hours .toString.padStart(2,0)} : ${min.toString().padStart(2,0)} : `
//      }

//     return(
//     <div>
//         <h1></h1>
//         <button onClick={resetInterval}>Reset</button>
//         <button>{isRunning ? "Stop":"Start"}</button>
//     </div>
//     );
// }
// export default timeprogram;

// import React,{useState} from 'react';
// const Counter =()=>{
// const [cnt,setcnt] = useState(0);
// const increment = ()=>{
//   setcnt(cnt+1);
// }
// const decrement = () =>{
//   setcnt(cnt-1);
// }

// const reset = () =>{
//   setcnt(0);
// };

// return(
//   <div style={{textAlign:'center',marginTop:'50px'}}>
//     <h1>React Counter Program</h1>
//     <h2>Count: {cnt}</h2>
//     <button onClick={increment}>Increment</button>{' '}
//     <button onClick={decrement}>Decrement</button>{' '}
//     <button onClick={reset}>Reset</button>
//   </div>
// )
// };

// export default Counter;

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>✨ React Counter Program ✨</h1>
      <h2 style={styles.count}>{count}</h2>
      <div style={styles.buttonContainer}>
        <button style={{ ...styles.button, backgroundColor: '#4CAF50' }} onClick={increment}>+</button>
        <button style={{ ...styles.button, backgroundColor: '#f44336' }} onClick={decrement}>-</button>
        <button style={{ ...styles.button, backgroundColor: '#2196F3' }} onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  count: {
    fontSize: '4rem',
    margin: '30px 0',
    color: '#555',
    transition: 'all 0.3s ease',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  button: {
    fontSize: '1.5rem',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
};
export default Counter;

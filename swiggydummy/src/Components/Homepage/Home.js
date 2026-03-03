import { useState } from 'react';
import './Home.css'
const Home = (props)=>{
    const [count,setCount]=useState(0);
    const incrementCount = () => setCount(prev=>prev+1); 
    console.log(count);
    const decrementCount = () => setCount(prev=>prev-1); 
    console.log(count);
    const resetCount = ()=> setCount(0);
    
    return(
        <div>
            <h1>{props.heading}</h1>
            <h4><strong>{count}</strong></h4>
            <div className='btn-container'>
                <button onClick={incrementCount}>+</button>            
                <button onClick={resetCount}>Reset</button>            
                <button onClick={decrementCount}>-</button>            
            </div>
        </div>
    )
}
export default Home;
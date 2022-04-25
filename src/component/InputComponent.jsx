import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addLink } from '../features/linkSlice';


const InputComponent = () => {

  const [link, setLink] = useState('');
  

  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.loading.value);
  
  const handleClick = (e) => {
    e.preventDefault();
    if(!link) return;
    dispatch(addLink(link));
    setLink('');
  }

  return (
    <div className="form">
      <form>
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} required />
        <button type="submit" onClick={handleClick} >Submit</button>
      </form>
    </div>
  )
}

export default InputComponent
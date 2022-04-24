import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addLink } from './features/linkSlice';
import { setLoading } from './features/loadingSlice';
import axios from 'axios';

const InputComponent = () => {

  const [link, setLink] = useState('');
  

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.value);

  // const fetchData = async () => {
  //   try {
  //     dispatch(setLoading(true));
  //     console.log(loading);
  //     const res = await axios(`https://api.shrtco.de/v2/shorten?url=${link}`);
  //     dispatch(addLink(res.data.result.full_short_link));   
      
  //   } catch(err) {

  //   } finally {
  //     dispatch(setLoading(false));
  //     console.log(loading);
  //   }
  // }


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
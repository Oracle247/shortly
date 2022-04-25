import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
//import { linkSlice } from './features/linkSlice';

const LinkComponent = () => {

  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);

  const links = useSelector((state) => state.links.value);
  // const loading = useSelector((state) => state.loading.value);

  const fetchData = async () => {
    try {
      setLoading(true);
      console.log(loading);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${links}`);
      setLink(res.data.result.full_short_link);  
    } catch(err) {

    } finally {
      setLoading(false);
      console.log(loading);
    }
  }

  
  useEffect(() => {
    if(links) {
      fetchData();
    }
  }, [links]);

  if(loading) {
    return (
      <div className="loading">
        Loading...
      </div>
    )
  }
  
  return (
    <>
      {
        link && (
          <>
            <div className="shorten__link">{ link }</div>
            <CopyToClipboard text={link}>
              <button>Copy</button>
            </CopyToClipboard>
          </>
        )

      }
    </>
  )
}

export default LinkComponent
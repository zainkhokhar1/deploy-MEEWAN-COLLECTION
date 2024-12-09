
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
const usePreviousPath = () => {
    const location = useLocation();
    const [previousPath, setPreviousPath] = useState(null);
   useEffect(()=>{
    setPreviousPath(location.pathname);
   },[location])
    return previousPath;
}

export default usePreviousPath;
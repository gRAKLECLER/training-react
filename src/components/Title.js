import { useEffect } from 'react'

function Title({title}){
  useEffect(() => {
    document.title = title
  }, [title])

  return(
    <h1>{title}</h1>
  );
};

export default Title
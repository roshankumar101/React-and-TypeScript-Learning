import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {

  const [UserData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    setUserData(response.data);
  }

  useEffect(function(){
    getData()
  }, [index])

  let printUserData = <h3 className='font-bold text-md text-white h-screen flex justify-center items-center'>Loading...</h3>

  if(UserData.length > 0){
    printUserData = UserData.map(function(elem, idx){
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }





  return (
    <div className='w-full h-full p-5 pb-20 bg-black'>
      <div className='flex flex-wrap gap-5 justify-center pb-10'>
        {printUserData}
      </div>

      <div className='w-full flex justify-center items-center gap-5 absolute left-1/2 -translate-x-1/2'>
        <button className='bg-amber-500 text-black px-4 py-2 rounded-md active:scale-95 font-semibold text-md'
        style={{opacity: index==1 ? 0.2: 1, cursor: index==1 ? 'not-allowed': 'pointer'}}
        onClick={() => {
            if(index > 1){
              setUserData([]);
              setIndex(index - 1);
            }
          }
        }
        >Prev</button>

        <h4 className='font-semibold text-white'>Page {index}</h4>

        <button className='bg-amber-500 text-black px-4 py-2 rounded-md active:scale-95 font-semibold text-md'
        style={{opacity: index==5 ? 0.2: 1, cursor: index==5 ? 'not-allowed': 'pointer'}}
        onClick={() => {
            if(index < 5){
              setUserData([]);
              setIndex(index + 1);
            }
          }
        }
        >Next</button>
      </div>
    </div>
  )
}

export default App
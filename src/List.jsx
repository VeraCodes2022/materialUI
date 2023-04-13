import React,{useEffect,useState} from 'react';
function MyApp() {
  const [data,setData]=useState([])
  const [user,setUser]=useState([])
  // get API implement
  var url= "https://jsonplaceholder.typicode.com/comments" 
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setData(data.slice(0,50)))
        .catch(err => console.error(err))

    },[url])
// post and put API implement setUser(data)
  

    return (
        <div>
        <h1>Fetch method Api Call in React js with GET | PUT | POST</h1>
        {
            data.map(item=>(<li key={item.id}>
                <span>{item.name}</span>
                <span>{item.postId}</span>
                <span>{item.email}</span>
            </li>))
        }
        <div>
            <button>Submit</button>
        </div>
        {
            user.map(
                item=>(<li >

                </li>)
            )
        }
        </div>
    )
}

export default MyApp;
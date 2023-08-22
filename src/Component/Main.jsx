import React ,{useState,useEffect}from 'react';
import PostList from '../PostList';


function Main(){
    const[SearchText,setSearchText] = useState('');
    const [filteredPosts, setFilteredPosts]=useState([]);
    const [allPosts, setAllPosts] = useState([]);

    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response =>response.json())
        .then(data =>{
            setAllPosts(data);
            setFilteredPosts(data);
        });
    } ,[])



    const handleSearch = ()=>{
        const filtered = allPosts.filter(post =>
           post.tile.toLowerCase().include(SearchText.toLowerCase()) );
           setFilteredPosts(filtered);
    };
    return(

        <div className='main'>
            <input type="text" value={SearchText} onChange={e=>setSearchText(e.target.value)} placeholder='search text...' />
            <button onClick={handleSearch} > Search</button>
            <PostList posts= {filteredPosts}/>
        </div>
    )
}
export default Main;
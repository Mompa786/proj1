import React from 'react';
import Post from '../Post';

function PostList ({posts}){
    return(
        <div className='post-list'>
            {
                posts.map(post =>{
                    <Post key={post.id} title={post.title} body={post.body}/>
                })
            }
        </div>
    )
}
export default PostList;
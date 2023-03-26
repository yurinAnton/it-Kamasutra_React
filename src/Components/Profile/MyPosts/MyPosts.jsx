import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

   let postsElements = props.posts.map( p  => <Post post = {p.post} likesCount = {p.likesCount}/>);
   let newPostElement = React.createRef();//--реакт создает ссылку (ref), на новый элемент


   let onAddPost = () => {
      props.addPost();
   }

   let onPostChange = () => {
      let text = newPostElement.current.value; 
      props.updateNewPostText(text);
      
   }

   return (
<div className = {s.content}>
            
            <div className={s.postsBlock}>               
               <h3>My posts</h3>
               <div>
                  <div>
                     <textarea onChange={onPostChange} 
                     ref= {newPostElement} 
                     value= {props.newPostText}/>
                  </div>
                  
                  <div>
                     <button onClick= {onAddPost}>
                        Add post
                     </button>
                  </div>

               </div>

               <div className= {s.posts}>
                  {postsElements}
               </div>

            </div>
         </div>
    )
};

export default MyPosts;
import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        
                  <div className = {s.item}>
                     <div>
                      <img className = "img_avatar"
               src="https://img.icons8.com/color/452/avatar.png" />
            </div>
                     {props.post}
                        <div>
                        <span>
                           Like
                           </span> {props.likesCount}
                        </div>

                     </div>
    )
}

export default Post;
import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";


const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }


   return (
   <div>
           <div>
         <img className={s.imgContent} src="https://static5.depositphotos.com/1004999/458/i/600/depositphotos_4582193-stock-photo-beautiful-spring-park.jpg" />
           </div>

          <div className={s.descriptionBlock}>
              <img src={props.profile.photos.large}/>
             Ava + description
          </div>

   </div>
            )
            }

export default ProfileInfo;
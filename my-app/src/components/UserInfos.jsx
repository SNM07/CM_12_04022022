import React from 'react';


function UserInfos({name}) {

    return (  
          <div className='headerUserInfos'>
            <h1>Bonjour <span id="userNameTitle">{name}</span></h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </div>
    );
}

export default UserInfos;


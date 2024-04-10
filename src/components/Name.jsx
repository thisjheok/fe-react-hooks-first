import React, { useState } from 'react'

const Name = () => {
  const [name,setName] = useState('');
  const [nickName,setnickName] = useState('');

  const updateName = (e)=>{
    setName(e.target.value);
  }

  const updateNickName = (e)=>{
    setnickName(e.target.value);
  }

  return (
    <div className="name">
      <h>Name</h>
      <hr></hr>
      <input name="myName" placeholder="이름을 입력해주세요" onChange={updateName}/>
      <input name="nickName" placeholder="닉네임을 입력해주세요" onChange={updateNickName}/>
      <p>이름 {name}</p>
      <p>닉네임 {nickName}</p>
    </div>
  )
}

export default Name

//// 어른 사자의 길 배열 접근 

import React, {useState} from "react";

const Diary = () => {

  const [diary, setDiary] = useState(["", ""]);

  const handleClickreset = () => {
    setDiary(["",""]);
  }

  const handleClickfinish = () => {
    alert("제목:" + diary[0] + "\n내용:" + diary[1]);
  }
  
  const handleChangesubject = (e) => {
    setDiary([e.target.value, diary[1]]);
  }

  const handleChangecontent = (e) => {
    setDiary([diary[0], e.target.value]);
  }

  return (
    <div className = "diary">
      <input name = "subject" value = {diary[0]} placeholder = "제목을 입력해주세요" onChange = {handleChangesubject}/>
      <br />
      <textarea name = "content" value = {diary[1]} placeholder = "내용을 입력해주세요" onChange = {handleChangecontent}/>
      <br />
      <button onClick = {handleClickreset}> 초기화 </button>
      <br />
      <button onClick = {handleClickfinish}> 입력 완료 </button>
    </div>
  );
};

export default Diary;
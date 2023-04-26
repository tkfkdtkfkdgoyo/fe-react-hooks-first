import React, {useState} from "react";

const Name = () => {

  // 이곳에 useState 구문을 작성해주세요
  const [myName, setmyName] = useState("")
  const [nickName, setnickName] = useState("")

  const handleName = (e) => {
    // 이곳에 이름을 설정하도록 하는 코드를 작성해주세요
    setmyName(e.target.value);
  };

  const handleNickName = (e) => {
    setnickName(e.target.value)
    // 이곳에 닉네임을 설정하도록 하는 코드를 작성해주세요
  };

  return (
    <div className="name">
      <input name="myName" placeholder="이름을 입력해주세요" onChange={handleName} />
      <input name="nickName" placeholder="닉네임을 입력해주세요" onChange={handleNickName} />
      <p>이름: {myName === "" ? "아직 이름이 없습니다" : myName}</p>
      <p>닉네임: {nickName === ""? "아직 닉네임이 없습니다" : myName}</p>
    </div>
  );
};

export default Name;

import { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmemo } from "../modules/memo";

const Memo = () => {
  const memolist = useSelector((state) => state.memo.memolist);

  const [name, setName] = useState();
  const [text, setText] = useState();

  const dispatch = useDispatch();

  const addMemo = useCallback(() => {
    dispatch(addmemo({ name: name, text: text }));
  }, [dispatch, name, text]);

  return (
    <div>
      <h2>방명록을 작성해주세요</h2>
      <hr />
      이름
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={addMemo}>작성</button>
      <hr />
      <ul>
        {memolist.map((memo, i) => (
          <li key={i}>
            {memo.name} : {memo.text} {memo.month}/{memo.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Memo;

const initalState = {
  memolist: [
    {
      name: "green",
      text: "방명록을 작성했습니다",
      month: new Date().getMonth() + 1,
      date: new Date().getDate(),
    },
  ],
  date: new Date(),
};

export const addmemo = (memo) => ({ type: "addMemo", payload: memo });

function memo(state = initalState, action) {
  switch (action.type) {
    case "addMemo":
      const newMemo = {
        name: action.payload.name,
        text: action.payload.text,
        month: state.date.getMonth() + 1,
        date: state.date.getDate(),
      };
      const newMemoList = state.memolist.concat(newMemo);
      return { ...state, memolist: newMemoList };

    default:
      return state;
  }
}
export default memo;

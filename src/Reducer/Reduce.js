import data from "../Data/Data.json";

export const initialState = {
  data: data,
  content: {
    name: "",
    img: "",
    curentId: 0,
    showDate:false,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_BTN":
      const { curentId } = state.content;
      const { data } = state;

      var selectNext = 0;
      if (curentId === data.length - 1) {
        selectNext = data.length - 1;
      } else {
        selectNext = curentId + 1;
      }
      return {
        ...state,
        content: {
          ...state.content,
          curentId: selectNext,
        },
      };

    case "PREV_BTN":
      const curentNumber = state.content.curentId;

      var selectPrev = 0;

      if (curentNumber === 0) {
        console.log("3");
      } else {
        selectPrev = curentNumber - 1;
      }
      console.log(selectPrev);
      return {
        ...state,
        content: {
          ...state.content,
          curentId: selectPrev,
        },
      };
    case "CLICK":
      return {
        ...state,
        content: {
          ...state.content,
          curentId: action.payload,
        },
      };

    case "UPDATE_RIGHT":
      return{
        ...state,
        content :{...state.content,showDate: action.payload}
      }

    default:
      return state;
  }
};

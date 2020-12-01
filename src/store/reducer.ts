//import { isNullOrUndefined } from "util";

const initialState = {
  reviewData: {
    serviceId: null,
    faceId: null,
    answerList: [],
    userComment: null,
    mobile: null,
  },
  //answerList: [],
};
const reducer = (state = initialState, action) => {
  if (action.type === "UPDATEFACEID") {
    return {
      reviewData: {
        ...state.reviewData,
        faceId: action.value,
      },
    };
  }
  if (action.type === "UPDATEMOBILEANDSERVICE") {
    return {
      reviewData: {
        ...state.reviewData,
        mobile: action.value.mobile,
        serviceId: action.value.serviceId,
      },
    };
  }
  if (action.type === "UPDATEANSLIST") {
    return {
      reviewData: {
        ...state.reviewData,
        answerList: action.value,
      },
      //answerList: action.value,
    };
  }
  if (action.type === "UPDATEUSERCOMMENT") {
    return {
      reviewData: {
        ...state.reviewData,
        userComment: action.value,
      },
    };
  }
  if (action.type === "UPDATEMOBILE") {
    return {
      reviewData: {
        ...state.reviewData,
        mobile: action.value,
      },
    };
  }
  return state;
};
export default reducer;

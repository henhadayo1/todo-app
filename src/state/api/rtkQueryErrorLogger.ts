import { Middleware, isRejectedWithValue } from "@reduxjs/toolkit";

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    let message = "Internal server error ";
    if ("data" in action.payload) {
      message += (action.payload.data as { message: string }).message;
    } else if ("data" in action.error) {
      message += (action.error.data as { message: string }).message;
    } else {
      message += action.error.message;
    }
    console.log(message);
  }

  return next(action);
};

import { configureStore } from "@reduxjs/toolkit";
import headlines from "./headlines/headlines";

export default configureStore({
  reducer: {
    headlines,
  },
});

import { createSlice } from "@reduxjs/toolkit"
import { ToastProps } from "./index.types"

const initialState: ToastProps = {
  message: "",
  type: "error",
  show: false,
  align: "center",
}

const toast = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast(state, action) {
      state.align = action.payload.align || "center"
      state.message = action.payload.message
      state.type = action.payload.type
      state.show = true
    },
    hideToast(state) {
      state.show = initialState.show
    },
  },
})

export const { showToast, hideToast } = toast.actions
export default toast.reducer

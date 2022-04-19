import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recruiterService from "./recruiterService";

const initialState = {
  recruiter: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Fetch Recruiter
export const fetchRecruiter = createAsyncThunk(
  "recruiter/fetch",
  async (thunkAPI) => {
    try {
      return await recruiterService.fetchRecruiter();
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const recruiterSlice = createSlice({
  name: "recruiter",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecruiter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRecruiter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.recruiter = action.payload;
      })
      .addCase(fetchRecruiter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = recruiterSlice.actions;
export default recruiterSlice.reducer;

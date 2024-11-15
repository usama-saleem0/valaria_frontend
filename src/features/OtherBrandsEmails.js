import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../baseurl";

//create action
export const other_brands_email = createAsyncThunk(
  "other_brands_email",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      `${baseurl}/other_brands_email`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



export const other_brands_emailSlice = createSlice({
  name: "other_brands_email",
  initialState: {
    other_brands_emailData: [],
    loading: false,
    error: null,
    brandsData: [],
  },
  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(other_brands_email.pending, (state) => {
        state.loading = true;
      })
      .addCase(other_brands_email.fulfilled, (state, action) => {
        state.loading = false;
        state.other_brands_emailData = action.payload; // Assuming action.payload is an array
      })
      .addCase(other_brands_email.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
   
  },
});

export const { searchUser } = other_brands_emailSlice.actions;

export default other_brands_emailSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { getTeachers } from './operations';

const initialState = {
  teachers: [],
  totalTeachers: 29,
  isLoading: false,
  error: null,
  favorites:
    JSON.parse(localStorage.getItem('persist:favorites'))?.favorites ?? [],
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favorites.findIndex(
        card => card._id === action.payload._id
      );
      if (index === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTeachers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.teachers = [...state.teachers, ...action.payload];
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleFavorite } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;

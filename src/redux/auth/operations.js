import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

export const register = createAsyncThunk(
  'auth/register',
  async ({ value }, thunkAPI) => {
    const { name, email, password } = value;
    const auth = getAuth();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await updateProfile(user, {
        displayName: name,
      });
      return {
        user: {
          email: user.email,
          id: user.uid,
          name: user.displayName,
        },
        token: user.accessToken,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ value }, thunkAPI) => {
    const { email, password } = value;
    const auth = getAuth();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      return {
        user: {
          email: user.email,
          id: user.uid,
          name: user.displayName,
        },
        token: user.accessToken,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    const auth = getAuth();

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(user => {
          if (user) {
            resolve({
              email: user.email,
              id: user.uid,
              name: user.displayName,
              token: user.accessToken,
            });
          } else {
            reject('Unable to fetch user');
          }
        });
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk,  } from '@reduxjs/toolkit';
import authService from './../services/authService';

export const login = createAsyncThunk('auth/login', async ({ username, password, rememberMe }) => {
    try {
      const res = await authService.login(username, password, rememberMe);
        return res.data;
    } catch (error) {
      debugger
    }
  },
);

// export const createTutorial = createAsyncThunk('create', async ({ title, description }) => {
//     const res = await TutorialDataService.create({ title, description })
//     return res.data
//   },
// )

// export const retrieveTutorials = createAsyncThunk('retrieve', async () => {
//   const res = await TutorialDataService.getAll()
//   return res.data
// })

// export const updateTutorial = createAsyncThunk('update', async ({ id, data }) => {
//   const res = await TutorialDataService.update(id, data)
//   return res.data
// })

// export const deleteTutorial = createAsyncThunk('delete', async ({ id }) => {
//   await TutorialDataService.remove(id)
//   return { id }
// })

// export const deleteAllTutorials = createAsyncThunk('deleteAll', async () => {
//   const res = await TutorialDataService.removeAll()
//   return res.data
// })

// export const findTutorialsByTitle = createAsyncThunk('findByTitle', async ({ title }) => {
//   const res = await TutorialDataService.findByTitle(title)
//   return res.data
// })

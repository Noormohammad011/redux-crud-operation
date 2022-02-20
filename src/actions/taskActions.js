import axios from 'axios'
import {
  TASK_LIST_REQUEST,
  TASK_LIST_SUCCESS,
  TASK_LIST_FAIL,
  TASK_DETAILS_REQUEST,
  TASK_DETAILS_SUCCESS,
  TASK_DETAILS_FAIL,
  TASK_DELETE_REQUEST,
  TASK_DELETE_SUCCESS,
  TASK_DELETE_FAIL,
  TASK_CREATE_REQUEST,
  TASK_CREATE_SUCCESS,
  TASK_CREATE_FAIL,
  TASK_UPDATE_FAIL,
  TASK_UPDATE_SUCCESS,
  TASK_UPDATE_REQUEST,
} from '../constants/taskConstans'

export const listTasks = () => async (dispatch) => {
  try {
    dispatch({ type: TASK_LIST_REQUEST })

    const { data } = await axios.get(`http://localhost:5000/tasks`)

    dispatch({
      type: TASK_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TASK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TASK_DETAILS_REQUEST })

    const { data } = await axios.get(`http://localhost:5000/tasks/${id}`)

    dispatch({
      type: TASK_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TASK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TASK_DELETE_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    await axios.delete(`http://localhost:5000/tasks/${id}`, config)

    dispatch({
      type: TASK_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: TASK_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createTask = (task) => async (dispatch) => {
  try {
    dispatch({
      type: TASK_CREATE_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `http://localhost:5000/tasks`,
      task,
      config
    )

    dispatch({
      type: TASK_CREATE_SUCCESS,
      payload: data,
    })
    setTimeout(() => {
      window.location.reload()
    }, 500)
  } catch (error) {
    dispatch({
      type: TASK_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateTask = (task) => async (dispatch) => {
  try {
    dispatch({
      type: TASK_UPDATE_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.put(
      `http://localhost:5000/tasks/${task.id}`,
      task,
      config
    )

    dispatch({
      type: TASK_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TASK_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

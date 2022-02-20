import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { listDetails, updateTask } from '../actions/taskActions'

const UpdateTask = () => {
  const [text, setText] = useState('')


  const { taskId } = useParams()

  const taskDetails = useSelector((state) => state.taskDetails)
  const { loading, error, task } = taskDetails

  const taskUpdate = useSelector((state) => state.taskUpdate)
  const { success } = taskUpdate

  const dispatch = useDispatch()
  useEffect(() => {
    if (!task || task.id !== taskId) {
      dispatch(listDetails(taskId))
    } else {
      setText(task.text)
    }
  }, [dispatch, taskId, task.id])
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateTask({ id: task.id, text }))
  }

  return (
    <>
      <div className='container'>
        <h1 className='text-center my-5 text-uppercase'>Update Task</h1>
        <div className='row  sm:mx-auto'>
          <Link
            to='/'
            type='button'
            className='btn btn-outline-dark btn-sm w-25 my-5'
          >
            Go Back
          </Link>
        </div>
        {loading && <div>Loading...</div>}
        {error && <div>Error...</div>}
        {success && <div className='my-3'>Task Updated</div>}
        <form onSubmit={handleSubmit}>
          <div className='row mx-auto'>
            <div className='col'>
              <input
                type='text'
                className='form-control'
                placeholder='Task'
                aria-label='Task'
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <div className='col'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdateTask

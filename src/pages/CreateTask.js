import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { createTask } from '../actions/taskActions'
import { TASK_CREATE_RESET } from '../constants/taskConstans'

const CreateTask = () => {
  const [text, setText] = useState('')
  const taskCreate = useSelector((state) => state.taskCreate)
  const { loading, error, success } = taskCreate

  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: TASK_CREATE_RESET })

    if (success) {
      setText('')
      navigate(`/`)
    }
  }, [dispatch, navigate, success])
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createTask({ id: uuidv4(), text }))
  }

  return (
    <>
      <div className='container'>
        <h1 className='text-center my-5 text-uppercase'>Create Task</h1>
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

export default CreateTask

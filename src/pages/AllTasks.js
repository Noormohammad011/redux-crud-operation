import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, listTasks } from './../actions/taskActions'
import { Link } from 'react-router-dom'

const AllTasks = () => {
  const tasksList = useSelector((state) => state.tasksList)
  const { loading, error, tasks } = tasksList

  const taskDelete = useSelector((state) => state.taskDelete)
  const { success } = taskDelete

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listTasks())
  }, [dispatch, success])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteTask(id))
    }
  }
  return (
    <div className='container'>
      <h1 className='text-center my-5 text-uppercase'>All Tasks</h1>
      <div className='row  sm:mx-auto'>
        <Link
          to='/task'
          type='button'
          className='btn btn-outline-dark btn-sm w-25 my-5'
        >
          Add Task
        </Link>
      </div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : error ? (
        <h2>Error...</h2>
      ) : (
        <div className='row'>
          <div className='col table-responsive table-sm striped bordered'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Task</th>
                  <th scope='col'></th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.text}</td>

                    <td>
                      <Link
                        to={`/task/${task.id}/edit`}
                        className='btn btn-light mx-2'
                      >
                        <i className='fas fa-edit'></i>
                      </Link>

                      <button
                        type='button'
                        className='btn btn-danger'
                        onClick={() => deleteHandler(task.id)}
                      >
                        <i className='fas fa-trash'></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default AllTasks

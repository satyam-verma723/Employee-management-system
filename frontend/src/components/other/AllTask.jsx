import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData=useContext(AuthContext)

  return (
    <div className='p-5 rounded mt-5 h-48 overflow-auto'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5'>UserName</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active Task</h5>
            <h5 className='w-1/5'>Completed</h5>
            <h5 className='w-1/5'>Failed</h5>
        </div>
        <div className='h-[80%] overflow-auto'>
            {authData.employees.map(function(elem,idx){
                return <div key={idx} className='border-emerald-500 border-2 mb-2 py-2 px-4 flex justify-center'>
                 <h2  className='w-1/5'>{elem.firstName}</h2>
                <h3  className='w-1/5 text-blue-400'>{elem.taskCount.newTask}</h3>
                <h5 className='w-1/5 text-yellow-400'>{elem.taskCount.active}</h5>
                <h5  className='w-1/5 text-white '>{elem.taskCount.completed}</h5>
                <h5  className='w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
            </div>
            })}
        </div>
    </div>
  )
}

export default AllTask
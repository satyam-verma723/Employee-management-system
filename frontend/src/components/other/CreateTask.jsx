import React, { useState } from 'react'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [task, setTask] = useState({})

    const submitHandler = (e) => { 
        e.preventDefault(); 
        const newTask = {taskTitle,taskDescription,taskDate,category,assignTo,active:false,newTask:true,failed:false,completed:false};
        setTask(newTask);
        const data=JSON.parse(localStorage.getItem('employees'));

        data.forEach(function(elem){
            if(assignTo==elem.firstName){
                elem.tasks.push(newTask);
            }
        })
        localStorage.setItem('employees',JSON.stringify(data))
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');
    }
  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder="enter your task" />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input value={taskDate} onChange={(e)=>{setTaskDate(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="Date" placeholder='date'/>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                            <input value={assignTo} onChange={(e)=>{setAssignTo(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='employee name' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='design/dev etc' />
                        </div>
                    </div>
                    
                    <div className='w-2/5 flex flex-col items-start'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                            <textarea value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}} className=' w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" placeholder='desc' cols="30" rows="10">description</textarea>
                        </div>

                        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>
                    
                </form>
            </div>
  )
}

export default CreateTask
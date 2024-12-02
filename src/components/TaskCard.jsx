import { useNavigate } from "react-router-dom";
import { updateTask } from "../api/tasks";

function TaskCard({task}){
    const navigate = useNavigate()
    return(
        <div className="bg-zinc-950 p-4 hover:cursor-pointer hover:bg-gray-950" onClick={() => {
            navigate(`/tasks/${task._id}`)
        }}>
        <div className="flex justify-between">
        <h2 className="font-bold text-2xl">{task.title}</h2>
        <button
        onClick={async (e) => {
            e.stopPropagation()
            const res = await updateTask(task._id, {completed: !task.completed})
            if(res.status === 200){
                window.location.reload()
            }         
        }}
        >
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className={`size-6 ${task.completed ? 'text-green-500': ''}`}
            >
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
        </button>
        </div>
        <p className="text-slate-300">{task.description}</p>
        </div>
    )
}

export default TaskCard;
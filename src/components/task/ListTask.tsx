import { useEffect, useState } from 'react'
import OrqTask from './Task'
import type IOrqTodo from '../../models/interface';
import { getItem, LOCAL_STORAGE_KEY } from '../../services/Services';

const OrqListTask = () => {
    const [tasks, setTasks] = useState<IOrqTodo[]>([]);

    useEffect(() => {
        const storedTasks = getItem(LOCAL_STORAGE_KEY);
        console.log('Stored Tasks:', storedTasks);
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    return (
        <div className='orq-listTask'>
            {tasks && tasks.length > 0 ? (
                tasks.map((task) => (
                    <OrqTask
                        key={task.id}
                        tasks={task}
                    />
                ))
            ) : (
                <p>Nenhuma tarefa cadastrada</p>
            )}

        </div>
    )
}

export default OrqListTask

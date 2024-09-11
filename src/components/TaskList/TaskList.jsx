import { TaskListItem } from "./TaskListItem";

import { useAppContext } from "../../hooks";

import style from './TaskList.module.css';

const TaskList = () => {
    const { tasks } = useAppContext();

    return (
        <ul className={style.TaskList}>
            {!tasks.length && (
                <p>Não há tarefas cadastradas...</p>
            )}

            {tasks.map(item => 
            <TaskListItem 
            key={item.id} 
            id={item.id} 
            name={item.name}
            />)}
        </ul>
    );
};

export { TaskList };
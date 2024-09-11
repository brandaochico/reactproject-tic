import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) =>{
    const { children } = props;

    const [ creator, setCreator ] = useState('Chico');

    const [tasks, setTasks] = useState([
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
    ]);

    const addTask = (taskName) => {
        setTasks(curState => {
            const task = {
                id: curState.length + 1,
                name: taskName,
            }

            return [
                ...curState,
                task,
            ]
        });
    };

    const removeTask = (taskId) => {
        setTasks(curState => {
            const updatedTasks = curState.filter(task => task.id != taskId);

            return [
                ...updatedTasks,
            ]
        });
    };

    return(
        <AppContext.Provider value={{
            creator,
            tasks,
            addTask,
            removeTask,
        }}>
            {children}
        </AppContext.Provider>
    );
};
import { useAppContext } from "../../../hooks";

import { Button, BUTTON_TYPE } from "../../Button";

import style from './TaskListItem.module.css';

const TaskListItem = (props) => {
    const { id, name } = props;

    const { removeTask } = useAppContext();

    return (
        <li className={style.TaskListItem}>
            {name}
            <Button text="-" 
            type={BUTTON_TYPE.SECONDARY}
            onClick={() => removeTask(id)}
            />
        </li>
    );
};

export { TaskListItem };
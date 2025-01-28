import { Item } from "./Item";

export const ItemList = ({ tasks, onDeleteTask, onDoneTask, onEditTask }) => {
  return (
    <div className="item-list-container">
      {tasks?.length > 0 ? (
        tasks.map((task, index) => {
          return (
            <div
              data-testid="task"
              className="w-100 d-flex justify-content-center"
            >
              <Item
                key={index}
                task={task}
                onDoneTask={onDoneTask}
                onDeleteTask={onDeleteTask}
                onEditTask={onEditTask}
              />
            </div>
          );
        })
      ) : (
        <div data-testid="no-tasks">No Data Found</div>
      )}
    </div>
  );
};

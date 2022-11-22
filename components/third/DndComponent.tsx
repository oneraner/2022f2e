import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import NextImage from "next/image";
import leftCat from "../../public/image/thirdLeftCat.png";
import rightCat from "../../public/image/thirdRightCat.png";
import { nanoid } from "nanoid";
import React, { useState } from "react";

const noPointData = [
  {
    id: nanoid(),
    content: (
      <div className="text-[#FFF9F6] pt-4">
        <p className="text-center">會員系統</p>
        <p>(登入、註冊、權限管理)</p>
      </div>
    ),
    cat: "left",
  },
  {
    id: nanoid(),
    content: (
      <div className="text-[#2B2B2B] pt-4">
        <p>應徵者的線上履歷編輯器</p>
      </div>
    ),
    cat: "right",
  },
  {
    id: nanoid(),
    content: (
      <div className="text-[#FFF9F6] pt-4">
        <p className="text-center">前台職缺列表</p>
        <p>(職缺詳情、點擊應徵)</p>
      </div>
    ),
    cat: "left",
  },
  {
    id: nanoid(),
    content: (
      <div className="pt-4">
        <p>後台職缺管理功能</p>
        <p>(資訊上架下架、應徵者資料)</p>
      </div>
    ),
    cat: "right",
  },
];

export const DndComponent = () => {
  const [todoList, setTodoList] = useState(noPointData);
  const [priorityList, setPriorityList] = useState<any[]>([]);

  const onDragEnd = (event) => {
    const { source, destination } = event;
    if (
      !destination ||
      (source.index === destination.index &&
        source.droppableId === destination.droppid)
    )
      return;
    console.log("event", event);
    const sameFromTo = source.droppableId === destination.droppableId;
    if (sameFromTo) {
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todo">
        {(provided, _snapshot) => (
          <div className="w-[49%] bg-[#2B2B2B] rounded-[36px] mr-3">
            <ul
              className="flex flex-col items-center pt-12"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {todoList.map((todo, index) => (
                <React.Fragment key={index}>
                  <Draggable draggableId={todo.id} key={todo.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <li className="relative mb-4">
                          <NextImage
                            src={todo.cat === "left" ? leftCat : rightCat}
                            alt={todo.cat === "left" ? "leftCat" : "rightCat"}
                          />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            {todo.content}
                          </div>
                        </li>
                      </div>
                    )}
                  </Draggable>
                  {provided.placeholder}
                </React.Fragment>
              ))}
            </ul>
          </div>
        )}
      </Droppable>
      <div className="w-[49%] bg-[#2B2B2B] rounded-[36px] pb-6">
        <p className="text-[#FFFFFF] text-center pt-8 mb-8">
          產品代辦清單 Product Backlog
        </p>
        <Droppable droppableId="priorityMax">
          {(provided, _snapshot) => (
            <ul className="flex flex-col items-center px-14">
              <div
                className="w-full relative"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <li className="flex justify-center items-center mb-4 text-[#FFCB2D] border border-dashed border-[#FFCB2D] py-6 w-full rounded-[40px]">
                  優先度最高
                </li>
                <li className="flex justify-center items-center mb-4 text-[#FFCB2D] border border-dashed border-[#FFCB2D] py-6 w-full rounded-[40px]">
                  優先度高
                </li>
                <li className="flex justify-center items-center mb-4 text-[#FFCB2D] border border-dashed border-[#FFCB2D] py-6 w-full rounded-[40px]">
                  優先度中
                </li>
                <li className="flex justify-center items-center mb-4 text-[#FFCB2D] border border-dashed border-[#FFCB2D] py-6 w-full rounded-[40px]">
                  優先度低
                </li>
                <div className="absolute w-full -top-8 left-0">
                  {priorityList.map((priority, index) => (
                    <React.Fragment key={index}>
                      <Draggable
                        draggableId={priority.id}
                        key={priority.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <li className="relative mb-4">
                              <NextImage
                                src={
                                  priority.cat === "left" ? leftCat : rightCat
                                }
                                alt={
                                  priority.cat === "left"
                                    ? "leftCat"
                                    : "rightCat"
                                }
                              />
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                {priority.content}
                              </div>
                            </li>
                          </div>
                        )}
                      </Draggable>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default DndComponent;

import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import NextImage from "next/image";
import leftCat from "../../public/image/thirdLeftCat.png";
import rightCat from "../../public/image/thirdRightCat.png";
import { nanoid } from "nanoid";
import { useState } from "react";

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

const priorityData = [
  { id: nanoid(), content: "優先度最高" },
  { id: nanoid(), content: "優先度高" },
  { id: nanoid(), content: "優先度中" },
  { id: nanoid(), content: "優先度低" },
];

export const DndComponent = () => {
  const [todoList, setTodoList] = useState(noPointData);
  const [priorityList, setPriorityList] = useState(priorityData);

  return (
    <DragDropContext>
      <Droppable>
        {(provided, snapshot) => (
          <div className="w-[49%] bg-[#2B2B2B] rounded-[36px] pt-20 pb-8 mr-4">
            <ul className="flex flex-col items-center">
              {todoList.map((todo) => (
                <Draggable draggableId={nanoid()} key={nanoid()}>
                  {(provided, snapshot) => (
                    <li className="relative mb-4">
                      <NextImage
                        src={todo.cat === "left" ? leftCat : rightCat}
                        alt={todo.cat === "left" ? "leftCat" : "rightCat"}
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {todo.content}
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
          </div>
        )}
      </Droppable>
      <Droppable>
        {(provided, snapshot) => (
          <div className="w-[49%] bg-[#2B2B2B] rounded-[36px] ">
            <p className="text-[#FFFFFF] text-center pt-8 mb-4">產品代辦清單 Product Backlog</p>
            <ul className="flex flex-col items-center px-6">
              {priorityList.map((priority) => (
                <Draggable draggableId={nanoid()} key={nanoid()}>
                  {(provided, snapshot) => (
                    <li className="relative flex justify-center items-center mb-4 text-[#FFCB2D] border border-dashed border-[#FFCB2D] py-11 w-full rounded-[40px]">
                      {priority.content}
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DndComponent;

import React, { useState } from 'react';
    import { useDrag, useDrop } from 'react-dnd';

    const Item = ({ text, index, moveItem }) => {
      const [{ isDragging }, drag] = useDrag({
        type: 'ITEM',
        item: { index },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });

      const [, drop] = useDrop({
        accept: 'ITEM',
        hover: (draggedItem) => {
          if (draggedItem.index !== index) {
            moveItem(draggedItem.index, index);
            draggedItem.index = index;
          }
        },
      });

      return (
        <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }} className="p-2 mb-2 bg-light rounded">
          {text}
        </div>
      );
    };

    const Ordering = ({ question, onAnswer }) => {
      const [items, setItems] = useState(question.options);

      const moveItem = (fromIndex, toIndex) => {
        const newItems = [...items];
        const [movedItem] = newItems.splice(fromIndex, 1);
        newItems.splice(toIndex, 0, movedItem);
        setItems(newItems);
      };

      const handleSubmit = () => {
        const isCorrect = JSON.stringify(items) === JSON.stringify(question.answer);
        onAnswer(isCorrect);
      };

      return (
        <div>
          <h3 className="mb-4">{question.question}</h3>
          {items.map((item, index) => (
            <Item key={index} text={item} index={index} moveItem={moveItem} />
          ))}
          <button onClick={handleSubmit} className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      );
    };

    export default Ordering;

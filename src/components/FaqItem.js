import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-item__button" onClick={() => setOpen((prev) => !prev)}>
        <span>{item.question}</span>
        {open ? <Minus size={18} /> : <Plus size={18} />}
      </button>
      {open ? <p className="faq-item__answer">{item.answer}</p> : null}
    </div>
  );
}

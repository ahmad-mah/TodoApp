import { useCallback, useState } from 'react';

export default function useEditMode(initialText: string) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(initialText);

  const startEdit = useCallback(
    (text?: string) => {
      setEditText(text ?? initialText);
      setIsEditing(true);
    },
    [initialText]
  );

  const cancelEdit = useCallback(() => {
    setIsEditing(false);
    setEditText(initialText);
  }, [initialText]);

  const finishEdit = useCallback(() => setIsEditing(false), []);

  return { isEditing, editText, setEditText, startEdit, cancelEdit, finishEdit } as const;
}

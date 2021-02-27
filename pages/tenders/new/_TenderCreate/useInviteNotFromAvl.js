import { useState, useCallback } from 'react';

const uuid = () => Math.random().toString(16);

const makeDefaultItem = () => ({ uid: uuid(), id: null, companyName: '', email: '' });

const useInviteNotFromAvl = () => {
  const [list, setList] = useState([makeDefaultItem()]);

  const handleChange = useCallback(
    (uid, data) => setList(list.map(item => (item.uid === uid ? { ...item, ...data } : item))),
    [list],
  );

  const handleAdd = useCallback(() => setList([...list, makeDefaultItem()]), [list]);

  const handleRemove = useCallback(uid => setList(list.filter(item => item.uid !== uid)), [list]);

  const handleReset = useCallback(() => setList([]), []);

  return [
    list,
    {
      handleAdd,
      handleRemove,
      handleChange,
      handleReset,
    },
  ];
};

export default useInviteNotFromAvl;

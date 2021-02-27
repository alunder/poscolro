import { useCallback, useEffect, useState } from 'react';

const useSelectCheckbox = (listAll, listSelected = []) => {
  const [isSelectAll, setSelectAll] = useState(listSelected.length === listAll.length);
  const [selected, setSelected] = useState(listSelected);

  useEffect(() => {
    setSelectAll(false);
    setSelected([]);
  }, [listAll]);

  useEffect(() => {
    setSelectAll(selected.length === listAll.length);
  }, [selected, listAll]);

  const handleSelect = useCallback(
    id => {
      const isSelected = selected.includes(id);

      if (isSelected) {
        setSelected(selected.filter(v => v !== id));
      } else {
        setSelected([...selected, id]);
      }
    },
    [selected],
  );

  const handleSelectAll = useCallback(() => {
    if (isSelectAll) {
      setSelected([]);
    } else {
      setSelected(listAll.map(v => v.id));
    }
  }, [isSelectAll, list]);

  return [{ selected, isSelectAll }, handleSelect, handleSelectAll];
};

export default useSelectCheckbox;

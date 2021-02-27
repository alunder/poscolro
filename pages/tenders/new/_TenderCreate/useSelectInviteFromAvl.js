import { useCallback, useState } from 'react';
import { concat } from 'lodash';

const useSelectInviteFromAvl = () => {
  const [vendorsSelectedByAvl, setVendorsSelectedByAvlState] = useState({});
  const [selectedAvl, setSelectedAvlState] = useState(null);

  const setVendorsSelectedByAvl = useCallback((avlId, vendors) => {
    setVendorsSelectedByAvlState(prevState => ({
      ...prevState,
      [avlId]: vendors,
    }));
  }, []);

  const pushVendorSelectedByAvl = useCallback(
    (avlId, vendors) => {
      const selectedVendors = vendorsSelectedByAvl[avlId] || [];
      setVendorsSelectedByAvl(avlId, concat(selectedVendors, vendors));
    },
    [setVendorsSelectedByAvl, vendorsSelectedByAvl],
  );

  const removeVendorSelectedByAvl = useCallback(
    (avlId, vendors) => {
      setVendorsSelectedByAvlState({
        ...vendorsSelectedByAvl,
        [avlId]: vendorsSelectedByAvl[avlId].filter(id => !vendors.includes(id)),
      });
    },
    [vendorsSelectedByAvl],
  );

  const resetSelectVendor = useCallback(
    avlId => {
      setVendorsSelectedByAvlState({
        ...vendorsSelectedByAvl,
        [avlId]: [],
      });
    },
    [vendorsSelectedByAvl],
  );

  const setSelectedAvl = useCallback(id => {
    setSelectedAvlState(id);
  }, []);

  return [
    {
      vendorsSelectedByAvl,
      selectedAvl,
    },
    {
      pushVendorSelectedByAvl,
      removeVendorSelectedByAvl,
      setVendorsSelectedByAvl,
      setSelectedAvl,
      resetSelectVendor,
    },
  ];
};

export default useSelectInviteFromAvl;

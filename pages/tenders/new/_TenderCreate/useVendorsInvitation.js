import { useCallback, useState } from 'react';

const useVendorsInvitation = () => {
  const [inviteVendorsFromAvl, setInviteVendorsFromAvlState] = useState({});
  const [inviteVendorsNotFromAvl, setInviteVendorsNotFromAvlState] = useState([]);

  const setInviteVendorsFromAvl = useCallback(
    (avlId, listVendors) => {
      setInviteVendorsFromAvlState({
        ...inviteVendorsFromAvl,
        [avlId]: listVendors,
      });
    },
    [inviteVendorsFromAvl],
  );

  const setInviteVendorsNotFromAvl = useCallback(listVendors => {
    setInviteVendorsNotFromAvlState(listVendors);
  }, []);

  const removeInviteVendorFromAvl = useCallback(
    (avlId, vendorId) => {
      setInviteVendorsFromAvlState({
        ...inviteVendorsFromAvl,
        [avlId]: inviteVendorsFromAvl[avlId].filter(id => id !== vendorId),
      });
    },
    [inviteVendorsFromAvl],
  );

  const removeInviteVendorNotFromAvl = useCallback(
    vendorId => {
      setInviteVendorsNotFromAvlState(inviteVendorsNotFromAvl.filter(id => id !== vendorId));
    },
    [inviteVendorsNotFromAvl],
  );

  return [
    {
      inviteVendorsFromAvl,
      inviteVendorsNotFromAvl,
    },
    {
      setInviteVendorsFromAvl,
      setInviteVendorsNotFromAvl,
      removeInviteVendorFromAvl,
      removeInviteVendorNotFromAvl,
    },
  ];
};

export default useVendorsInvitation;

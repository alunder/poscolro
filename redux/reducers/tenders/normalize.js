export const normalizeCreteTender = tender => ({
  ...tender,
  tenderItemsIds: tender.tenderItems.map(item => item.id),
});

export const normalizeUpdateTender = tender => ({
  ...tender,
  tenderItemsIds: tender.tenderItems.map(item => item.id),
});

export const empty = value => {
  if (!value) return true;

  if (typeof value === 'object') return Object.keys(value).length === 0;

  if (Array.isArray(value)) return value.length === 0;

  return false;
};

export const emptyCategory = value => {
  if (!value || Object.keys(value).length === 0) return true;

  return (
    Object.keys(value.lv1).length === 0 && Object.keys(value.lv2).length === 0 && Object.keys(value.lv3).length === 0
  );
};

export const required = (message = 'Required') => value => (empty(value) ? message : false);

export const requiredCategory = (message = 'Required') => value => (emptyCategory(value) ? message : false);

export const checkValidate = validate => (name, value) =>
  (validate[name] || []).reduce((acc, item) => {
    if (!acc && item(value)) {
      return item(value);
    }

    return acc;
  }, null);

export default () => null;

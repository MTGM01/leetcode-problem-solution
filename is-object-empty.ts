type JSONValueIsEmpty = null | boolean | number | string | JSONValueIsEmpty[] | { [key: string]: JSONValueIsEmpty };
type Obj = Record<string, JSONValueIsEmpty> | JSONValueIsEmpty[]

function isEmpty(obj: Obj): boolean {
  if (Object.keys(obj).length === 0) {
    return true;
  }
  if (Array.isArray(obj) && obj.length === 0) {
    return true
  }
  return false;
};
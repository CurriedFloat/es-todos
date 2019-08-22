export function appendToArray(arr, item) {
  const copy = arr.slice();
  copy.push(item);
  return copy;
}

export function iterationCopy(src) {
  let target = {};
  for (let prop in src) {
    if (src.hasOwnProperty(prop)) {
      target[prop] = src[prop];
    }
  }
  return target;
}

export function updateObject(a, b) {
  const copy = iterationCopy(a);
  return Object.assign(copy, b);
}

export function removeById(list, id) {
  const listCopy = list.slice();
  for (var i = 0; i <= list.length; i++) {
    if (list[i].id === id) {
      listCopy.splice(i, 1);
      break;
    }
  }
  return listCopy;
}

export function updateById(list, id, obj) {
  const listCopy = list.slice();
  for (var i = 0; i <= listCopy.length; i++) {
    if (listCopy[i].id === id) {
      const a = listCopy[i];
      listCopy[i] = updateObject(a, obj);
      break;
    }
  }
  return listCopy;
}

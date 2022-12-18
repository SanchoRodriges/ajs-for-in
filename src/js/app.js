export default function orderByProps(obj, sort) {
  const names = [];
  const result = [];
  // если свойство не содержится в sort, то добавляем его в массив names
  for (const prop in obj) {
    if (!sort.includes(prop)) {
      names.push(prop);
    }
  }
  // сортируем names по алфавиту
  names.sort();
  // объединяем два массива с названиями свойств
  const sortNames = [...sort, ...names];
  // собираем массив объектов по названиям свойств
  for (const item of sortNames) {
    result.push({ [item]: obj[item] });
  }
  // возвращаем массив объектов
  return result;
}

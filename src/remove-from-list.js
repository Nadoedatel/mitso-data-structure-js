const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');  // Добавьте этот импорт
/**
 * Дан односвязный связный список целых чисел (l) и целое число (k),
 * удалите все элементы из списка l, содержащие значение k.
 *
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 */
module.exports = function removeKFromList(l, k) {
  // Создаем фиктивный узел для упрощения обработки головы списка
  let dummy = new ListNode(0);
  dummy.next = l;
  
  // Инициализируем указатель на текущий узел
  let current = dummy;

  // Проходим по списку, начиная с фиктивного узла
  while (current.next !== null) {
    if (current.next.value === k) {
      // Если нашли узел с значением k, пропускаем его
      current.next = current.next.next;
    } else {
      // Иначе переходим к следующему узлу
      current = current.next;
    }
  }

  // Возвращаем список, начиная с первого реального узла
  return dummy.next;
}

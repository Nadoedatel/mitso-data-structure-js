const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

module.exports = class Queue {
  constructor() {
    this.head = null; // указатель на начало очереди (первый элемент)
    this.tail = null; // указатель на конец очереди (последний элемент)
  }

  // Метод для получения связного списка
  getUnderlyingList() {
    return this.head;
  }

  // Метод для добавления элемента в очередь
  enqueue(value) {
    const newNode = new ListNode(value);
    
    if (this.tail) {
      // Если очередь не пуста, добавляем новый узел после хвоста
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      // Если очередь была пуста, новый элемент становится и головой, и хвостом
      this.head = newNode;
    }
  }

  // Метод для удаления и возврата первого элемента
  dequeue() {
    if (!this.head) {
      return null; // Очередь пуста
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      // Если после удаления элемент пуст, сбрасываем хвост
      this.tail = null;
    }

    return value;
  }
};

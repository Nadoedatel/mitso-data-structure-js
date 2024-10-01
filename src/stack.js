const { NotImplementedError } = require("../extensions/index.js");

module.exports = class Stack {
  constructor() {
    this.stack = []; // Инициализация пустого массива для хранения элементов стека
  }

  // Добавляет элемент на вершину стека
  push(element) {
    this.stack.push(element); // Используем метод push массива для добавления элемента
  }

  // Удаляет и возвращает элемент с вершины стека
  pop() {
    return this.stack.pop(); // Используем метод pop массива для удаления и возврата элемента
  }

  // Возвращает элемент с вершины стека, но не удаляет его
  peek() {
    return this.stack[this.stack.length - 1]; // Возвращаем последний элемент массива (вершину стека)
  }
};

const { NotImplementedError } = require("../extensions/index.js");

module.exports = class BloomFilter {
  constructor() {
    this.size = 18; // размер битового массива
    this.store = new Array(this.size).fill(0); // инициализация битового массива
  }

  /**
   * @param {string} item
   */
  insert(item) {
    const hashes = this.getHashValues(item);
    hashes.forEach(hash => {
      this.store[hash] = 1; // устанавливаем бит в 1
    });
  }

  /**
   * @param {string} item
   * @return {boolean}
   */
  mayContain(item) {
    const hashes = this.getHashValues(item);
    // Проверяем, все ли биты, соответствующие хешам, установлены в 1
    return hashes.every(hash => this.store[hash] === 1);
  }

  /**
   * Creates the data store for our filter.
   * @param {number} size
   * @return {Object}
   */
  createStore(size) {
    this.size = size;
    this.store = new Array(this.size).fill(0);
    return {
      getValue: index => this.store[index],
      setValue: (index, value) => { this.store[index] = value; },
    };
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash1(item) {
    let hash = 0;
    for (let i = 0; i < item.length; i++) {
      hash = (hash * 31 + item.charCodeAt(i)) % this.size; // простой множитель
    }
    return hash >= 0 ? hash : hash + this.size; // гарантируем неотрицательное значение
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash2(item) {
    let hash = 0;
    for (let i = 0; i < item.length; i++) {
      hash = (hash * 37 + item.charCodeAt(i)) % this.size; // другой простой множитель
    }
    return hash >= 0 ? hash : hash + this.size; // гарантируем неотрицательное значение
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash3(item) {
    let hash = 0;
    for (let i = 0; i < item.length; i++) {
      hash = (hash * 41 + item.charCodeAt(i)) % this.size; // ещё один простой множитель
    }
    return hash >= 0 ? hash : hash + this.size; // гарантируем неотрицательное значение
  }

  /**
   * Запускает все 3 хеш-функции и возвращает массив результатов.
   *
   * @param {string} item
   * @return {number[]}
   */
  getHashValues(item) {
    return [this.hash1(item), this.hash2(item), this.hash3(item)];
  }
};

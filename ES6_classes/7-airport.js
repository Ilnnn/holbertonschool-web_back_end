export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof code !== 'string') throw new TypeError('Code must be a string');

    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    this._code = val;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}

export class Token {
  private static _name = 'keks-auth-token';

  static get() {
    const token = localStorage.getItem(this._name);

    return token ?? '';
  }

  static save(token: string) {
    localStorage.setItem(this._name, token);
  }

  static drop() {
    localStorage.removeItem(this._name);
  }
}

export const formatDate = (date: string) => `${date.slice(8, 10)}.${date.slice(5, 7)}`;

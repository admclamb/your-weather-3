class StorageService {
  private storage: Storage;

  constructor(storageType: Storage) {
    this.storage = storageType;
  }

  /**
   * Get data from local storage.
   *
   * @param {string} key - Storage key
   */
  public get<T>(key: string): T | null {
    try {
      const foundItem = this.storage.getItem(key);
      return foundItem ? this.decodeJson(foundItem) : null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Set data to local storage.
   *
   * @param {string} key - Storage key
   * @param {any} value - Storage value
   */
  public set<T>(key: string, value: T): boolean {
    try {
      if (value) {
        this.storage.setItem(key, this.encodeJson<T>(value));
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  /**
   * Remove data from local storage.
   *
   * @param {string} key - Storage key
   */
  public remove(key: string): boolean {
    try {
      this.storage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Remove multiple data from local storage.
   *
   * @param {string[]} keys - Storage keys
   */
  public removeMultiple(keys: string[]): boolean {
    try {
      keys.forEach((key) => this.remove(key));
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Turn JSON into js native object
   *
   * @param {string} json
   */
  private decodeJson<T>(json: string): T {
    return JSON.parse(json);
  }

  /**
   * Turn js object into a JSON string
   *
   * @param {any} data
   */
  private encodeJson<T>(data: T): string {
    return JSON.stringify(data);
  }
}

const Storage = {
  session: new StorageService(sessionStorage),
  local: new StorageService(localStorage),
};

Object.freeze(Storage);
export default Storage;

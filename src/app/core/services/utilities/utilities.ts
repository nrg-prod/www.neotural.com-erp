export class Utils {
  constructor() {}

  static resetFields(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        obj[key] = "";
      }
    }
    return obj;
  }
}

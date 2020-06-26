import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "idFilter"
})
export class IdFilterPipe implements PipeTransform {
  transform(value: string[], ...args: any[]): any {
    if (value && value.length) {
      return value.filter(val => val !== "id");
    }
    return null;
  }
}

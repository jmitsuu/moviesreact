export function useDateConverter(param:string){
  let data = new Date(param);
let data2 = new Date(data.valueOf() - data.getTimezoneOffset() * 60000);
var dataBase = data2.toISOString().replace(/\.\d{3}Z$/, '');
return dataBase.replace("T", "    ")
}
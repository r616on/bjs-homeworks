function sleep(milliseconds) {
   let e = new Date().getTime() + milliseconds;
   while (new Date().getTime() <= e) { }
}
function sum(...args) {
   // Замедление на половину секунды.
   sleep(100); // Можно использовать другое значение замедления.
   return args.reduce((sum, arg) => {
      return sum += +arg;
   }, 0);
}
function compareArrays(arr1, arr2) {
   let a = 0;
   if (arr1.length > arr2.length) {
      a = arr1.every((element, index) => element === arr2[index]);
   } else {
      a = arr2.every((element, index) => element === arr1[index]);
   }
   return a
};
function memorize(fn, lim) {
   let memory = [
      { args: [3, 4], result: 7 },
   ];
   return function newFunc(...args) {  //
      const arr = [...args];
      const search = memory.find(element => compareArrays(element.args, arr))
      if (search != undefined) {
         return search.result
      } else {
         const result = fn(...args);
         memory.push({
            args: arr,
            result: result,
         })
         return result
      };

   };
};

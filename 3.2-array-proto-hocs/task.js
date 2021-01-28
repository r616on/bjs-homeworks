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
   if (memory.length > lim) {
      memory.shift()
   };
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
function testCase(testFunction) {
   const argument = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];
   console.time(testFunction);
   for (let i = 0; i <= 100; i++) {
      argument.forEach(element => testFunction(element))

      if (i === 100) {
         console.timeEnd(testFunction);
      }
   }

};

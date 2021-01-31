function sleep(milliseconds) {
   let e = new Date().getTime() + milliseconds;
   while (new Date().getTime() <= e) { }
}
function sum(...args) {
   // Замедление на половину секунды.
   //sleep(10); // Можно использовать другое значение замедления.
   return args.reduce((sum, arg) => {
      return sum += +arg;
   }, 0);
}
function compareArrays(arr1, arr2) {
   if (((arr1.length >= arr2.length) && (arr1.every((element, index) => element === arr2[index]))) || ((arr1.length < arr2.length) && (arr2.every((element, index) => element === arr1[index])))) {
      return true
   } else {
      return false
   }

};
function memorize(fn, lim) {
   let memory = [];

   return function newFunc(...args) {
      const search = memory.find(element => compareArrays(element.args, args))
      if (memory.length > lim) {
         memory.shift()
      };
      if (search) {
         // console.log("Результат из памяти")
         return search.result
      }
      const result = fn(...args);
      memory.push({
         args: args,
         result: result,
      })
      //console.log("Результат не из памяти")
      return result
   };
};
function testCase(testFunction) {
   const argument = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];
   console.time(testFunction);
   for (let i = 0; i <= 100; i++) {
      argument.forEach(element => testFunction(...element))
   };
   console.timeEnd(testFunction);

};

//testCase(sum);
//testCase(memorize(sum, 30))
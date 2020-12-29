
function getSolutions(a, b, c) {

   const d = b * b - 4 * a * c;
   if (d < 0) {
      return { D: d, roots: [] };
   } else if (d === 0) {
      const x1 = (-b) / 2 * a;
      return { D: d, roots: [x1] };
   } else if (d > 0) {
      const x1 = (-b + Math.sqrt(d)) / 2 * a;
      const x2 = (-b - Math.sqrt(d)) / 2 * a;
      return { D: d, roots: [x1, x2] };
   }

};
function showSolutionsMessage(a, b, c) {
   const result = getSolutions(a, b, c);
   console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
   console.log(`Значение дискриминанта: ${result.D}`);
   if (result.D < 0) {
      console.log("Уравнение не имеет вещественных корней");
   } else if (result.D === 0) {
      console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
   } else if (result.D > 0) {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
   };
};


function getAverageScore(data) {
   let newData = {};
   let average = 0;
   let i = 0;
   for (let prop in data) {
      let value = getAverageMark(data[prop]);
      newData[prop] = value;
      average = (average + value);
      i++;
   }
   if (i > 0) {
      average = average / i;
      newData.average = average;
      return newData;

   } else if (i <= 0) {
      newData.average = 0;
      return newData;
   }


};


function getAverageMark(marks) {
   let k = 0;
   if (marks.length > 0) {
      for (let i = 0; i < marks.length; i++) {
         k = k + marks[i];
      }
      return k / marks.length;
   } else {
      return 0
   }
};


function getPersonData(secretData) {
   let firstName, lastName;
   firstName = getDecodedValue(secretData.aaa);
   lastName = getDecodedValue(secretData.bbb);
   return { firstName, lastName }
};

function getDecodedValue(secret) {
   if (secret === 0) {
      return "Родриго"
   } else if (secret === 1) {
      return "Эмильо"
   };

}
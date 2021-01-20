//Задание №1

function parseCount(count) {
   const parsed = Number.parseInt(count, 10);
   if (isNaN(parsed)) {
      throw new Error("Невалидное значение");
   };
   return parsed;

};

function validateCount(x) {
   try {
      const count = parseCount(x);
      return count;
   } catch (e) {
      return e;
   };
}
//Задание №2
class Triangle {
   constructor(a, b, c) {
      if ((a + b) < c || (a + c) < b || (b + c) < a) {
         throw new Error("Треугольник с такими сторонами не существует");
      };
      this.a = a;
      this.b = b;
      this.c = c;
   }
   getPerimeter() {
      const p = this.a + this.b + this.c
      return p;
   };
   getArea() {
      const p = this.getPerimeter() / 2;
      let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      s = Math.round(s * 1000) / 1000;
      return s;
   };

}
function getTriangle(a, b, c) {
   try {
      return new Triangle(a, b, c);
   } catch (e) {
      const t = {
         getArea: function () {
            return "Ошибка! Треугольник не существует";
         },
         getPerimeter: function () {
            return "Ошибка! Треугольник не существует";
         },
      }
      return t;
   };
}

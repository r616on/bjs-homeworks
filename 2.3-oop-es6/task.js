
class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
   }
   fix() {
      this.state = this.state * 1.5;
   };

   set state(state) {
      if (state < 0) {
         this._state = 0
      } else if (state > 100) {
         this._state = 100;
      } else {
         this._state = state;
      }
   };
   get state() {
      return this._state
   };
};

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
   };

};

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
   };
};

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
   };
}
class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
   };
}
class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
   };
};

//Задание 2
class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   };

   addBook(book) {
      if (book.state > 30) {
         this.books.push(book);
      }
   };

   findBookBy(type, value) {
      this._findBookBy = null;
      for (let i = 0; i < this.books.length; i++) {
         for (let key in this.books[i]) {
            if (key === type) {
               if (this.books[i][key] === value) {
                  this._findBookBy = this.books[i];
               };
            };
         };
      };
      return this._findBookBy;
   };

   giveBookByName(bookName) {
      this._giveBookByName = null;
      for (let i = 0; i < this.books.length; i++) {
         if (this.books[i].name === bookName) {
            this._giveBookByName = this.books[i]
            this.books.splice(i, 1);
         };
      };
      return this._giveBookByName;
   };
};
//Задание №3
class StudentLog {
   constructor(name) {
      this.name = name;
      this.academicSubjects = {};
   }
   getName() {
      return this.name;
   };
   addGrade(grade, subject) {
      let k = 0;
      if (grade > 0 && grade < 6) {
         for (let key in this.academicSubjects) {
            if (key === subject) {
               k++;
            };
         };
         if (k === 1) {
            this.academicSubjects[subject].push(grade);
            return this.academicSubjects[subject].length;
         } else if (k === 0) {
            this.academicSubjects[subject] = [grade];
            return this.academicSubjects[subject].length;
         }
      } else {
         console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}" . Допускаются только числа от 1 до 5.`);
         if (k === 0) {
            return 0;
         } else {
            return this.academicSubjects[subject].length;
         };
      }
   };
   getAverageBySubject(subject) {
      let k = 0;
      for (let key in this.academicSubjects) {
         if (key === subject) {
            let summ = 0;
            k++;
            for (let i = 0; i < this.academicSubjects[subject].length; i++) {
               summ = summ + this.academicSubjects[subject][i];
            };
            return summ / this.academicSubjects[subject].length;
         };
      };
      if (k === 0) {
         return 0;
      };
   };
   getTotalAverage() {
      let totalSumm = 0, k = 0;
      for (let key in this.academicSubjects) {
         let summ = 0;
         k++;
         for (let i = 0; i < this.academicSubjects[key].length; i++) {
            summ = summ + this.academicSubjects[key][i];
         };
         summ = summ / this.academicSubjects[key].length;
         totalSumm = totalSumm + summ;
      };
      if (k > 0) {
         return totalSumm / k;
      } else if (k === 0) {
         return 0
      };

   }

}
const log = new StudentLog('Олег Никифоров');



console.log(log.getTotalAverage()); // 3,75
class AlarmClock {
   constructor(id) {
      this.alarmCollection = [];
      this.timerId = null;
   }
   addClock(time, callback, id) {
      if (!id) {
         throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
      };
      if (this.alarmCollection.find(element => element.id === id)) {
         console.error("ошибка")
         return 0
      } else {
         this.alarmCollection.push({
            time: time,
            callback: callback,
            id: id,
         })
      }
   };

   removeClock(id) {
      let iIdex = this.alarmCollection.findIndex(element => {
         if (element.id === id) {
            return true
         }
      });

      if (iIdex > -1) {
         this.alarmCollection.splice([iIdex], 1)
         return true
      }
      return false

   };

   getCurrentFormattedTime() {
      const data = new Date();
      let hour = data.getHours();
      if (hour < 10) {
         hour = `0${hour}`
      };
      let minutes = data.getMinutes();
      if (minutes < 10) {
         minutes = `0${minutes}`
      };
      return `${hour}:${minutes}`

   }

   start() {
      let curentTime = this.getCurrentFormattedTime();

      function checkClock(item) {
         if (item.time === curentTime) {
            item.callback();
         }
      }
      const func = () => {
         this.alarmCollection.forEach(item => {
            checkClock(item)
         });
      };

      if (!this.timerId) {
         this.timerId = setInterval(func, 1000);
      }

   }
   stop() {
      if (this.timerId = !null) {
         clearInterval(this.timerId);
         this.timerId = null;
      }
   }
   printAlarms() {
      this.alarmCollection.forEach(item => {
         console.log(`Будильник №${item.id} заведен на ${item.time} `)
      });
   }
   clearAlarms() {
      clearTimeout(this.timerId);
      this.alarmCollection = [];
   }
}
// let phoneAlarm = new AlarmClock();
// phoneAlarm.addClock("22:19", () => console.log("Пора вставать"), 1);
// phoneAlarm.addClock("22:18", () => { console.log("Пора вставать1") }, 2);
// console.log(phoneAlarm.alarmCollection);
// phoneAlarm.start();



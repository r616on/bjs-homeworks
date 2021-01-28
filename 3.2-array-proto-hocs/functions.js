console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
   const weaponsName = [];
   weapons.filter(weapons => weaponsName.push(weapons.name));
   return weaponsName;
};
function getCountReliableWeapons(durability) {
   const a = weapons.filter(weapons => weapons.initDurability > durability);
   return a.length;
};
function hasReliableWeapons(durability) {
   const a = weapons.filter(weapons => weapons.initDurability > durability);
   if (a.length < 1) {
      return 0
   } else {
      return 1
   }
};
function getReliableWeaponsNames(durability) {
   const weaponsName = [];
   const a = weapons.filter(weapons => {
      if (weapons.initDurability > durability) {
         weaponsName.push(weapons.name);
      }
   });
   return weaponsName;
};
function getTotalDamage() {
   let summ = 0;
   weapons.filter(weapons => summ = summ + weapons.attack);
   return summ;
};

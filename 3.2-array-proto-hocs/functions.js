console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
   return weapons.map(weapons => weapons.name);
};
function getCountReliableWeapons(durability) {
   return weapons.filter(weapons => weapons.initDurability > durability).length

};
function hasReliableWeapons(durability) {
   return weapons.some(weapons => weapons.initDurability > durability);

};
function getReliableWeaponsNames(durability) {
   return weapons.filter(weapons => weapons.initDurability > durability).map(weapons => weapons.name);
};
function getTotalDamage() {
   return weapons.reduce((total, weapons) => total + weapons.attack, 0)
};

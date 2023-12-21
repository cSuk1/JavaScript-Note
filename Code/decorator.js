// 装饰器函数
function addWeapon(target) {
    target.weapon = 'Sword';
}

@addWeapon
class Soldier { }

console.log(Soldier.weapon);
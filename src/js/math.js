import character from './character';

export default class MathCharacter extends character {
  set stoned(value) {
    this.isStoned = value;
  }

  get stoned() {
    return this.isStoned;
  }

  set availableAttack(distance) {
    this.distance = distance;
    let attack;
    if (this.distance <= 5) {
      attack = (this.attack - this.attack * 0.1 * (distance - 1));
      if (this.isStoned) {
        this.distAttack = attack - Math.log2(this.distance) * 5;
      } else {
        this.distAttack = attack;
      }
    } else {
      this.distAttack = 0;
    }
  }

  get availableAttack() {
    return this.distAttack;
  }
}
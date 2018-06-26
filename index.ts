import lodash from "lodash";
import * as utils from "./dependency";

interface Person {
  name: string;
  gangAffiliation: boolean;
}

class MophiaGame {
  players: Array<object>;

  constructor() {
    this.players = [
      { name: "Jake", gangAffiliation: true },
      { name: "Sarah", gangAffiliation: false },
      { name: "Matt", gangAffiliation: false }
    ];
  }
  async findMophia() {
    return await utils.find(this.players, person => {
      return person.gangAffiliation;
    });
  }
}

export default MophiaGame;

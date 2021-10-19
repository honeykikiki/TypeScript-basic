export type A = string | number;

export interface Card {
  att: number;
  hp: number;
  mine: boolean;
  field?: boolean;
  cost?: number;
  hero?: boolean;
}

export interface Player {
  hero: HTMLDivElement;
  deck: HTMLDivElement;
  field: HTMLDivElement;
  cost: HTMLDivElement;
  deckData: Sub[];
  heroData: Hero | null;
  fieldData: Sub[];
  chosenCard: HTMLDivElement | null; // 선택한 카드 DIV
  chosenCardData: Card | null; // 선택한 카드 data
}

export class Sub implements Card {
  public att: number;
  public hp: number;
  public field: boolean;
  public cost: number;
  public mine: boolean;
  constructor(mine: boolean) {
    this.att = Math.ceil(Math.random() * 5);
    this.hp = Math.ceil(Math.random() * 5);
    this.cost = Math.floor((this.att + this.hp) / 2);
    this.mine = mine;
    this.field = false;
  }
}

export class Hero implements Card {
  public att: number;
  public hp: number;
  public field: boolean;
  public mine: boolean;
  constructor(mine: boolean) {
    this.att = Math.ceil(Math.random() * 2);
    this.hp = Math.ceil(Math.random() * 5) + 25;
    this.mine = mine;
    this.field = true;
  }
}

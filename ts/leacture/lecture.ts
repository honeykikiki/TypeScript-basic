interface Card {
  att: number;
}

class Hero implements Card {
  public att: number;
  constructor() {
    this.att = 2;
  }
}

function People() {}

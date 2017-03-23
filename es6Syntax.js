'use strict';

class ClassA {
  constructor(p1) {
    this.p1 = p1 || 2;
  }

  f1() {
    return 7;
  }
}

class ClassB extends ClassA {
  constructor(p1) {
    super(p1);
    this.p2 = 'Hello';
  }

  f2(x) {
    return 2 * x;
  }
}

class ClassC extends ClassB {
  constructor(p1) {
    super(p1);
    this.p2 = 'Bye';
  }
}

class ClassD extends ClassC {
  constructor(p1) {
    super(p1);
    this.p4 = 7 * this.p1;
  }

  f2(x) {
    return 5 * super.f2(x);
  }

  f4(x) {
    return super.f1() + this.f2(x);
  }
}

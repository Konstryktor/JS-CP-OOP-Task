'use strict';

function inherits(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function ClassA(p1) {
  this.p1 = p1 || 2;
}

ClassA.prototype.f1 = function() {
  return 7;
}

function ClassB(p1) {
  ClassA.apply(this, arguments);
  this.p2 = 'Hello';
}

inherits(ClassB, ClassA);

ClassB.prototype.f2 = function(x) {
  return 2 * x;
}

function ClassC(p1) {
  ClassB.apply(this, arguments);
  this.p2 ='Bye';
}

inherits(ClassC, ClassB);

function ClassD(p1) {
  ClassC.apply(this, arguments);
  this.p4 = 7 * this.p1;
}

inherits(ClassD, ClassC);

ClassD.prototype.f2 = function(x) {
  return 5 * ClassB.prototype.f2.apply(this, arguments);
}

ClassD.prototype.f4 = function(x) {
  return this.f1() + this.f2(x);
}



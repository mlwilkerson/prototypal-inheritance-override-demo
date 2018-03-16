const parent = {
  alpha () {
    console.log('parent alpha')
  }
}

const child =  {
  alpha () {
    console.log('child alpha')
    super.alpha()
  }
}

Object.setPrototypeOf(child, parent);
child.alpha()

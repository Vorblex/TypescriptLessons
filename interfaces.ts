interface Rect {
  readonly id: string
  color?: string  // Unnecessury
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '121',
  size: {
    width: 40,
    height: 33
  }
}

const rect2: Rect = {
  id: '142',
  size: {
    width: 46,
    height: 23
  }
}

// rect2.id = '43' ---- Error -> is reasonly

rect2.color = 'f00'

const rect3 = {} as Rect
// Same as below == //
const rect4 = <Rect>{}

//=============================================================

// Interface Inherritance

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '531',
  size: {
    width: 64,
    height: 55
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

//=======================================================

interface IClock {
  time: Date
  setTime(data: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}

//==========================================

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}
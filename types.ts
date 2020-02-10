const isFetch: boolean = true
const isLoading: boolean = false

const int: number = 42
const num: number = 3e10

const message: string = 'Hello'

const numberArr: number[] = [1,3,5,8,13]
const numberArr2: Array<number> = [1,2,3,4]

const words: string[] = ['Hello', 'Alex']

// Tuple
const contact: [string, number] = ['Alex', 12345]

// Any
let variable: any = 42

variable = 'hello'

//===
function sayName(name: string): void {
  console.log(name);
}

sayName('Alex')

// Never
function throwErr(message: string): never {
  throw new Error(message)
}

function infinite(): never {
  while(true) {

  }
}

// Type
type Login = string
const login: Login = 'Admin'
//
type ID = string | number
const id: ID = 12
const id2: ID = '12'

//
type Some = string | null | undefined
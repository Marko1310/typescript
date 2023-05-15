function addTwo(num: number): number {
  return num + 2;
  //   return 'hello';
}

function getUpper(value: string) {
  return value.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);

getUpper('4');

signUpUser('1', '2', true);

loginUser('h', 'h@h.com');

function getValue(myVal: number): string | boolean {
  if (myVal > 5) {
    return true;
  }
  return '200 OK';
}

const getHello = (s: string): string => {
  return '';
};

const heroes = ['thor', 'spiderman', 'iroman'];
// const heroes = [1, 2, 3];

heroes.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  lastLogin: null | string;
  token: string | undefined;
};

let normal_user: User = {
  name: "Pratick",
  age: 24,
  isAdmin: false,
  lastLogin: null,
  token: undefined,
};

console.log(normal_user);

// function isEligible(age : number) : {
//     return age >= 18;
// }

function isEligible(age: number): boolean {
  return age >= 18;
}

console.log(isEligible(18));

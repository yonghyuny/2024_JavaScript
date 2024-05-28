const person = {
  name: `john`,
  age: 21,
  major: `computer`,
};

// const { name, major } = person; = 빼기
// const { name: realName, major: superMajor } = person; = 빼면서 별명

// realName // john

const person1 = {
  name: `Jenny`,
  address: {
    city: `bupyuong`,
    zipCode: 1004,
  },
};

const { address } = person1; // bupyuong, 1004

const {
  address: { zipCode: zip },
} = person1; // 1004

const { zipCode: zip1 } = person1.address; // 1004

const user = {
  username: `alice`,
  email: `alice@example.com`,
  details: {
    firstName: `alice`,
    lastName: `Doe`,
  },
};

const {
  details: { lastName: familyName },
} = user;

const { lastName: familyName1 } = user.details;

console.log(familyName1); //Doe

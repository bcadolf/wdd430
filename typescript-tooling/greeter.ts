class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleLetter: string,
    public lastName: string
  ) {
    this.fullName = `${firstName} ${middleLetter} ${lastName}`;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = new Student('Cool', 'E', 'Guy');

document.body.textContent = greeter(user);

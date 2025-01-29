function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

// Solution 1: Iterate through the array
for (const name of user) {
  console.log(greeter(name)); // Expected output: Hello, Jane User, Hello, John Smith
}

// Solution 2: Change greeter function to accept an array
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(', ');
}
console.log(greeterArray(user)); // Expected output: Hello, Jane User, John Smith

// Solution 3: Type assertion (generally not recommended unless you're certain of the type)
console.log(greeter(user.join(', ') as string)); // Expected output: Hello,Jane User,John Smith
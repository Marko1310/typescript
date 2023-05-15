const User = {
  name: 'Name',
  email: 'email',
  isActive: 'true',
};

// function createUser({ name: string, isPaid: boolean }) {}
let newUser = { name: 'john', isPaid: true, email: 'h@h.com' };
// createUser(newUser);

function createCourse(): { name: string; isPaid: boolean } {
  return { name: 'john', isPaid: true };
}

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: '', email: '', isActive: true };
}

createUser({ name: '', email: '', isActive: true });

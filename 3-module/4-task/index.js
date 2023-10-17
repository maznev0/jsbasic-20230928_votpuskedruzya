function showSalary(users, age) {
  let arr = [];
  for (let user of users) {
    if (user.age <= age) {
      arr.push(user.name + ', ' + user.balance);
    }
  }
  return arr.join('\n');
}

function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  
  friends.map(
    item => ul.innerHTML += `<li>${item.firstName} ${item.lastName}</li>`   
  );
  
  return ul;
}

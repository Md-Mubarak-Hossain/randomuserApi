// console.log('random.js')
const loadUser = () => {
    // console.log('loading random user')
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    const userContainers = document.getElementById('user-container');
    // console.log(users);
    for (const user of users) {
        // console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-div');
        userDiv.style.color = 'blue';
        userDiv.style.textAlign = 'center';
        userDiv.innerHTML = `
        <h2>User Name: ${user.name.first} ${user.name.last}</h2>
        <p>User email:${user.email}</p>
        <p>User location: ${user.location.city}</p>
        <p>User country: ${user.location.country}</p>
        `;
        userContainers.appendChild(userDiv);

    }
}

loadUser();
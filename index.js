const users = [
    { name: 'John Doe', age: 25 },
    { name: 'Alexander', age: 17 },
    { name: 'Nelson Mandela', age: 78 },
    { name: 'Mahatma Gandhi', age: 56 },
    { name: 'Nikol Tesla', age: 39 }
];

function sortArrayAndShowNames() {
    const sortedUsers = users.slice().sort((a, b) => a.age - b.age);
    const names = sortedUsers.map(user => user.name).join('\n');
    window.alert(`Sorted Names:\n${names}`);
}

function showThankYou() {
    const yourName = "Shiwanshi"; // Replace with your actual name
    window.alert(`Thank you for choosing mobile, ${yourName}!`);
}

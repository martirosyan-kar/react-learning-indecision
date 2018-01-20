const fullName = 'Kar Martirosyan';

const firstName = (fullName) => {
    return fullName.split(' ')[0];
}

const lastName = (fullName) => fullName.split(' ')[1];

console.log('firstName: ',firstName(fullName));
console.log('lastName: ',lastName(fullName));
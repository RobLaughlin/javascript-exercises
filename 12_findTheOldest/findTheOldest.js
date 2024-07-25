const findTheOldest = function(people) {
    const peopleAge = people.map(person => {
        let age = new Date().getFullYear() - person.yearOfBirth;
        if ("yearOfDeath" in person) {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        return {
            name: person.name,
            age: age
        }
    });

    peopleAge.sort((p1, p2) => 
        (p1.age - p2.age)
    );
    
    return peopleAge[peopleAge.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;

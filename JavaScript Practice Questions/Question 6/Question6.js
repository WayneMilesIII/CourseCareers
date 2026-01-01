// Determine the number of loyal friends each person has
// A loyal friend is defined as someone who considers you a friend back

function friends(people) 
{
    for (const person in people) {
        for (const otherPerson in people) {
            if (person !== otherPerson) {
                if (people[otherPerson].friends.includes(people[person].name)) {
                    if (!people[person].loyalFriendsCount) {
                        people[person].loyalFriendsCount = 0;
                    }
                    people[person].loyalFriendsCount++;
                }
            }
        }
    }
}

const people = {
    name: "Tim", friends: ['John', 'Sally'],
    name: "John", friends: ['Tim', 'Mike'],
    name: "Mike", friends: [],
    name: "Sally", friends: ['Tim']
}

friends(people); // should return { Tim: 2, John: 1, Mike: 0, Sally: 1 }
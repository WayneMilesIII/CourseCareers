// Determine the number of loyal friends each person has
// A loyal friend is defined as someone who considers you a friend back

function friends(people) 
{


    for (let i = 0; i < people.length; i++) 
    {
        console.log(people[i].name.name);
    }
}

// Each person has a name and a list of friends
// Will this create new objects for each person when there are duplicate names?
const people = [
    {name: "Tim", friends:[{name: "John"}, {name: "Mike"}]},
    {name: "John", friends:[{name: "Tim"}, {name: "Sally"}]},
    {name: "Mike", friends: [{name: ""}]},
    {name: "Sally",friends: [{name: "Tim"}]} 
]

friends(people);

/*  If a person is also a friend of another person, they are considered a loyal friend.
    For example, Tim has two friends: John and Mike.
    John considers Tim a friend back, but Mike does not.
    Therefore, Tim has one loyal friend: John.

    The function should return an object with the number of loyal friends for each person.  
*/
//console.log(friends(people)); // should return { Tim: 2, John: 1, Mike: 0, Sally: 1 }
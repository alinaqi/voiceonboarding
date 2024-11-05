export const getPersonDetails = (name: string) => {
  type Person = {
    position: string;
    company: string;
    joined: string;
    project: string;
  };

  const people: { [key: string]: Person } = {
    Kevin: {
      position: "CEO",
      company: "BookingKit",
      joined: "2 years ago",
      project: "redoing the entire website",
    },
  };

  const person = people[name];
  if (person) {
    return `${name} is ${person.position} of ${person.company}. He joined ${person.joined} and has been working on ${person.project}.`;
  } else {
    return `No information available for ${name}.`;
  }
};


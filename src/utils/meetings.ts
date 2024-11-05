export const getMeetingsForToday = () => {
  // Example meeting data
  const meetings = [
    {
      time: "4pm",
      person: "Kevin",
      company: "BookingKit",
      position: "CEO",
    },
  ];

  if (meetings.length > 0) {
    const meetingDetails = meetings.map(
      (meeting) =>
        `At ${meeting.time} you are meeting ${meeting.person} from ${meeting.company}. ${meeting.person} is the ${meeting.position} of ${meeting.company}.`
    ).join(" ");
    return `${meetingDetails} Otherwise, your day is free.`;
  } else {
    return "You have no meetings today.";
  }
};


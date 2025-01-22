type Leadership = {
    role: string;
    organization: string;
    dates: string;
    description: string[];
};

const leaderships = [
    {
        role: "Outreach Committee",
        organization: "Society of Hispanic Professional Engineers @ UIC",
        dates: "October 2024 - December 2024",
        description: [
            "• Contributed to organizing events and initiatives fostering community engagement and promoting STEM opportunities."
        ]
    },
    {
        role: "Vice President",
        organization: "Google Developers Group @ UIC",
        dates: "April 2023 - December 2024",
        description: [
            "• Directed, organized and monitored the implementation of meetings and events to enhance campus involvement.",
            "• Organized and presented a successful 'Welcome GBM' and 'Using GitHub for Project Collaboration' event, attended by over 20 participants."
        ]
    },
    {
        role: "Creative Head",
        organization: "Google Developers Group @ UIC",
        dates: "January 2023 - April 2023",
        description: [
            "• Fostered an open environment for students to learn/understand how to use GoogleTech applications.",
            "• Curated posters for advertising and slides for presentations using AdobeXD and Google Drawings.",
            "• Planned at least 1 event per month to get more students involved,10+ students have joined at each event.",
            "• Aided Communications/MarketingChair with planning to get projects/events done swiftly."
        ]
    },
    {
        role: "Mentorship Chair",
        organization: "Women in Computer Science @ UIC",
        dates: "January 2024 - April 2024",
        description: [
            "• Equipped mentors in our peer to peer mentor program with essential soft skills to build successful mentoring relationships.",
        ]
    },
    {
        role: "Community Relations Chair",
        organization: "Women in Computer Science @ UIC",
        dates: "August 2023 - April 2024",
        description: [
            "• Facilitated collaboration with Break Through Tech Chicago to provide valuable resources and support to our community members.",
            "• Established a peer-to-peer mentorship program and hosted the kick-off event 'Let's Talk' event, providing students with valuable soft skills training to navigate their academic journey."
        ]
    },
    {
        role: "Web Administrator",
        organization: "Women in Computer Science @ UIC",
        dates: "January 2023 - August 2023",
        description: [
            "• Supported and promoted women and non-binary people in computer science.",
            "• Updated the WiCS website/calendar every week with new events (WordPress, GoogleCal).",
            "• Administrated content on the WiCS Discord of 130+ members along side the social chair."
        ]
    }
];

// Group experiences by company
export const groupedLeaderships: { [key: string]: Leadership[] } = leaderships.reduce((acc, leadership) => {
    if (!acc[leadership.organization]) {
      acc[leadership.organization] = [];
    }
    acc[leadership.organization].push(leadership);
    return acc;
  }, {} as { [key: string]: Leadership[] });
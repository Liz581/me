type Experience = {
    company: string;
    position: string;
    dates: string;
    description: string[];
};


export const experiences = [
    {
        company: "Break Through Tech Chicago",
        position: "Student Assistant",
        dates: "September 2024 - December 2024",
        description: [
            "• Assisted in office operations by providing administrative support, coordinating communications, and maintaining office organization.",
        ],
    },
    {
        company: "UIC College of Engineering",
        position: "Teaching Assistant",
        dates: "September 2024 - December 2024",
        description: [
            "• Led 50+ students through weekly labs for the course CS100: Discovering Computer Science.",
            "• Provided 2+hrs weekly of office hours giving students 1 to 1 meetings and study/support sessions."
        ],
    },
    {
        company: "Chicago Tech Circle",
        position: "Quantum Research Intern",
        dates: "May 2024 - August 2024",
        description: [
            "• Contributed to the Quantum Foundry at Argonne National Laboratory in automating the production of diamond qubits for quantum applications with 5 undergrad interns.",
            "• Earned the Outstanding Undergraduate Poster Award at the 2024 Chicago Quantum Exchange.",
            "• Developed device drivers through virtual instrument software that remote controlled the electromagnetic etching hardware.",
            "• Utilized a machine learning library to detect un-etched membrane percentages throughout the etching process.",
            "• Integrated 15+ functions to provide proof of concept on a automated program for diamond etching.",
            "• Refined and debugged 8+ files of code while maintaining code structure."
        ],
    },
    {
        company: "Chicago Tech Circle",
        position: "Tech Consultant",
        dates: "January 2024 - April 2024",
        description: [
            "• Contributed to a hardware testing initiative for Zebra Technologies, a sensing/tracking company, with 5 undergrad students.",
            "• Utilized hardware troubleshooting to conduct research, employ social engineering techniques, develop comprehensive test cases, and propose solutions aligned with their business needs."
        ],
    },
    {
        company: "Break Through Tech Chicago",
        position: "Student Assistant",
        dates: "September 2023 - December 2023",
        description: [
            "• Actively represented BTTC at 10+ events, engaging as both worker and student to guide students on their journey within the chapter.",
            "• Increased summer program applicants by expanding outreach to partner student organizations' Discord servers.",
            "• Coordinated 1:1 meetings with student organizations to communicate on collaboration event goals."
        ],
    },
    {
        company: "UIC College of Engineering",
        position: "Teaching Assistant",
        dates: "January 2023 - April 2023",
        description: [
            "• Led 300+ students through weekly labs for the course CS211: Programming Practicum.",
            "• Graded 100+ student laboratory assignments to support the graduate teaching assistants.",
            "• Provided 10+hrs weekly of office hours giving students 1 to 1 meetings and study/support sessions.",
        ],
    },
    {
        company: "UIC College of Engineering",
        position: "Teaching Assistant",
        dates: "August 2022 - December 2022",
        description: [
            "• Led 70+ students through weekly labs for the course CS211: Programming Practicum.",
            "• Graded 50+ student laboratory assignments to support the graduate teaching assistants.",
            "• Provided 10+hrs weekly of office hours giving students 1 to 1 meetings and study/support sessions.",
        ],
    },
    {
        company: "UIC College of Engineering",
        position: "Research Mentor",
        dates: "August 2022 - December 2022",
        description: [
            "• Guided sophomore research groups in the Early Research Scholars Program in developing their own research topic and paper.",
            "• Coordinated meetings with 2 research groups to provide advice and assistance into their projects.",
        ],
    },
    {
        company: "UI Health",
        position: "Software Engineering Intern",
        dates: "May 2022 - July 2022",
        description: [
            "• Applied full-stack features to the 1-Search Platform to improve clinical search result performance.",
            "• Adjusted API call structure for a 50% reduction in search query response time.",
            "• Restructured the login/signup render to match the new platform layout to give a smoother user experience.",
            "• Implemented user-friendly filtering in the front-end, allowing users to refine search results.",
            "• Maintained uniform code formatting for back-end and front-end programs within 5 folders."
        ],
    },
    {
        company: "UIC College of Engineering",
        position: "Teaching Assistant",
        dates: "January 2022 - April 2022",
        description: [
            "• Led 200+ students through weekly labs for the course CS141: Program Design II.",
            "• Provided 10+hrs weekly of office hours giving students 1 to 1 meetings and study/support sessions."
        ],
    },
    {
        company: "UIC College of Engineering",
        position: "Teaching Assistant",
        dates: "August 2021 - December 2021",
        description: [
            "• Led 90+ students through weekly labs for the course CS100: Discovering Computer Science.",
            "• Graded 90+ student laboratory assignments to support the graduate teaching assistants.",
            "• Provided 5+hrs weekly of office hours giving students 1 to 1 meetings and study/support sessions."
        ]
    },
    {
        company: "UIC College of Engineering",
        position: "Research Intern",
        dates: "May 2021 - August 2021",
        description: [
            "• Researched the logistics of running a prediction market for trading and political polls.",
            "• Analyzed and discussed existing prediction model literature for possible political models.",
        ],
    },
];


// Group experiences by company
export const groupedExperiences: { [key: string]: Experience[] } = experiences.reduce((acc, experience) => {
    if (!acc[experience.company]) {
      acc[experience.company] = [];
    }
    acc[experience.company].push(experience);
    return acc;
  }, {} as { [key: string]: Experience[] });
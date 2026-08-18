export interface AssignmentFile {
  name: string;
  url: string;
  type: 'pdf' | 'video' | 'image';
}

export interface AssignmentTab {
  id: string;
  title: string;
  objective?: string;
  problemStatement?: string;
  theory?: string;
  engineeringConcepts?: string[];
  content?: string;
}

export interface Assignment {
  id: number;
  title: string;
  description: string;
  fullContent?: string;
  category: 'Assignment' | 'Project' | 'Activity';
  date: string;
  type: 'pdf' | 'video' | 'image' | 'mixed';
  thumbnail: string;
  files: AssignmentFile[];
  tabs?: AssignmentTab[];
}

export const assignments: Assignment[] = [
  {
    id: 1,
    title: "My Commitment to a Sustainable Future",
    description: "A personal commitment toward environmental sustainability and responsible use of technology.",
    category: "Activity",
    date: "2026-07-29",
    type: "image",
    thumbnail: "/assets/assignments/assignment-01/pledge.webp",
    files: [
      {
        name: "Sustainable Future Pledge Card",
        url: "/assets/assignments/assignment-01/pledge.webp",
        type: "image"
      }
    ],
    tabs: [
      {
        id: "overview",
        title: "Overview",
        objective: "Make a personal commitment toward environmental sustainability and responsible use of technology.",
        problemStatement: "Through the \"My Commitment to a Sustainable Future\" pledge, I committed to using technology wisely, reducing waste, conserving natural resources, and disposing of e-waste responsibly.",
        theory: "Sustainable engineering begins with responsible personal choices, extending device lifetime, reducing consumption, and recycling e-waste through proper channels.",
        engineeringConcepts: [
          "Design for extended device lifetime",
          "Responsible consumer electronics use",
          "E-waste disposal through authorized recycling",
          "Sustainable behavior change in engineering practice"
        ]
      },
      {
        id: "outcomes",
        title: "Outcomes",
        content: "- Diverted 4 legacy copper cables to certified electronic collection drop-boxes.\n- Achieved an estimated 10% reduction in computing power footprint by managing device sleep profiles and charger use.\n- Established a baseline awareness of physical recycling tracks and personal engineering responsibility."
      }
    ]
  },
  {
    id: 2,
    title: "Carbon Footprint Calculation",
    description: "Calculation of annual household carbon emissions comparing results against national and global benchmarks.",
    category: "Activity",
    date: "2026-08-05",
    type: "image",
    thumbnail: "/assets/assignments/assignment-02/carbon.jpeg",
    files: [
      {
        name: "Carbon Footprint Comparison Chart",
        url: "/assets/assignments/assignment-02/carbon.jpeg",
        type: "image"
      }
    ],
    tabs: [
      {
        id: "overview",
        title: "Overview",
        objective: "Calculate annual household carbon footprint using a carbon footprint calculator.",
        problemStatement: "The result showed a total annual emission of 13 tonnes of CO2 compared with an India average of 7 tonnes and a world average of 19 tonnes.",
        theory: "Carbon footprint calculations reveal how electricity, transport, food, and daily consumption contribute to greenhouse gas emissions.",
        engineeringConcepts: [
          "Carbon accounting for household activity",
          "Emission factor analysis",
          "Breakdown of electricity, transport, and food emissions",
          "Comparisons to regional and global averages"
        ]
      },
      {
        id: "outcomes",
        title: "Outcomes",
        content: "- Established a household emission baseline of 13 tonnes of CO2.\n- Identified that food is the main and big source of carbon discharge in my house."
      }
    ]
  },
  {
    id: 3,
    title: "E-Waste Collection and Segregation Activity",
    description: "Practical activity focused on identifying, sorting, and preparing discarded electronic items for responsible recycling.",
    category: "Activity",
    date: "2026-08-12",
    type: "image",
    thumbnail: "/assets/assignments/assignment-03/ewaste-segregation.webp",
    files: [
      {
        name: "E-Waste Segregation Activity",
        url: "/assets/assignments/assignment-03/ewaste-segregation.webp",
        type: "image"
      }
    ],
    tabs: [
      {
        id: "overview",
        title: "Overview",
        objective: "Identify common electronic waste items and understand how they should be segregated before recycling or disposal.",
        problemStatement: "Improper mixing of electronic waste with regular household waste can expose people and the environment to hazardous materials and can also reduce the recovery of reusable components.",
        theory: "E-waste management starts with collection, identification, segregation, safe storage, and transfer to authorized recycling or recovery channels.",
        engineeringConcepts: [
          "Source segregation of electronic waste",
          "Identification of reusable and recyclable components",
          "Safe handling and temporary storage",
          "Responsible transfer to authorized recycling channels"
        ]
      },
      {
        id: "outcomes",
        title: "Outcomes",
        content: "- Identified common obsolete electronic items and separated them from general waste.\n- Understood why batteries, cables, circuit boards, and other electronic components require separate handling.\n- Improved awareness of practical steps involved in responsible e-waste disposal."
      }
    ]
  }
];

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
    thumbnail: "/assets/assignments/assignment-01/pledge.webp", // Replace with your uploaded image
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
      /*{
        id: "methodology",
        title: "Methodology",
        content: "To implement this commitment, I established a personal check-list for active daily device use:\n1. Audit household electronics: Gather and log all obsolete hardware items currently in storage.\n2. Apply sleep profiles: Configure idle sleep timers on laptop and monitor screens to turn off in under 10 minutes.\n3. Segment chargers: Group accessory chargers and cables in dedicated compartments, committing to utilize them fully before purchasing upgrades."
      },*/
      /*{
        id: "observations",
        title: "Observations",
        content: "- Accessories and charging bricks constitute the largest number of duplicate/redundant electronic items in the household.\n- Standby electricity settings (phantom loads) accounts for a constant, small leakage of power on standard chargers when plugged in without a device.\n- Access to authorized e-waste sorting bins in residential zones is very limited, requiring active driving to collection hubs."
      },*/
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
    thumbnail: "/assets/assignments/assignment-02/carbon.jpeg", // Replace with /assets/assignments/assignment-02/carbon.webp when you upload your screenshot
    files: [
      {
        name: "Carbon Footprint Comparison Chart",
        url: "/assets/assignments/assignment-02/carbon.jpeg", // Replace with /assets/assignments/assignment-02/carbon.webp when you upload your screenshot
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
  }
];

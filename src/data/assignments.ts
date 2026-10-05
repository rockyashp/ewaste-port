export interface AssignmentFile {
  name: string;
  url: string;
  type: 'pdf' | 'video' | 'image' | 'link';
}

export interface AssignmentReflection {
  question: string;
  answer: string;
}

export interface AssignmentTab {
  id: string;
  title: string;
  objective?: string;
  problemStatement?: string;
  theory?: string;
  engineeringConcepts?: string[];
  content?: string;
  reflections?: AssignmentReflection[];
}

export interface Assignment {
  id: number;
  title: string;
  description: string;
  fullContent?: string;
  category: 'Assignment' | 'Project' | 'Activity';
  date: string;
  type: 'pdf' | 'video' | 'image' | 'mixed' | 'link';
  thumbnail: string;
  files: AssignmentFile[];
  tabs?: AssignmentTab[];
  externalUrl?: string;
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
    title: "Video Based Quiz",
    description: "Activity focused on how much I understood the ewaste recycling.",
    category: "Activity",
    date: "2026-08-12",
    type: "image",
    thumbnail: "/assets/assignments/assignment-03/video.jpeg",
    files: [
      {
        name: "Video Based Quiz",
        url: "/assets/assignments/assignment-03/video.jpeg",
        type: "image"
      }
    ],
    tabs: [
      {
        id: "overview",
        title: "Overview",
        objective: "Assess comprehension and practical retention of e-waste recycling principles through interactive video evaluation.",
        problemStatement: "Evaluating knowledge of safe electronic disassembly, hazardous material handling, and circular resource recovery pathways.",
        theory: "Audio-visual learning reinforces engineering awareness regarding global e-waste dumping hotspots and industrial recycling technologies.",
        engineeringConcepts: [
          "Interactive comprehension testing",
          "Visual e-waste sorting identification",
          "Industrial material recycling workflows"
        ]
      },
      {
        id: "outcomes",
        title: "Outcomes",
        content: "Demonstrated strong grasp of e-waste categories, recycling mandates, and hazardous component isolation techniques."
      }
    ]
  },
  {
    id: 6,
    title: "Device Anatomy",
    description: "Exploring the internal components of an electronic device and understanding how hardware composition connects to resource use, repairability and eventual e-waste generation.",
    category: "Activity",
    date: "2026-08-20",
    type: "image",
    thumbnail: "/assets/assignments/assignment-06/DeviceA.webp",
    files: [
      {
        name: "Device Teardown & Component Breakdown",
        url: "/assets/assignments/assignment-06/DeviceA.webp",
        type: "image"
      }
    ],
    tabs: [
      {
        id: "overview",
        title: "Overview",
        objective: "To physically examine and understand the intricate internal composition of everyday electronic devices, identifying valuable materials and potential hazards to comprehend the complexity of electronic recycling.",
        problemStatement: "Modern consumer electronics are engineered with extreme density, blending silicon, copper, rare earth elements, and toxic compounds into tightly glued assemblies that hinder disassembly.",
        theory: "Sustainable hardware design is rooted in Design for Disassembly (DfD) and the Circular Economy. When devices function as sealed 'black boxes', material separation becomes energy-intensive and causes high resource loss during standard shredder operations.",
        engineeringConcepts: [
          "Design for Disassembly (DfD) & modularity",
          "Material intensity & hardware composition (copper, silicon, polymers)",
          "Urban mining and rare earth element recovery",
          "Hazardous substance containment in consumer electronics",
          "Physical recycling separation vs. shredding limitations"
        ]
      },
      {
        id: "learnings",
        title: "What I Learned",
        content: "By examining the internal components, I realized the sheer complexity of modern electronics. I saw firsthand how densely packed materials like copper, silicon, and various plastics are integrated. It became clear why recycling is not just a matter of crushing devices but requires sophisticated separation techniques.\n\nI learned to identify components that hold rare earth metals and those that contain hazardous substances, making the theoretical concepts of urban mining and toxic e-waste extremely tangible. This hands-on experience fundamentally shifted my view of a smartphone from a single object to a complex assembly of global resources."
      },
      {
        id: "sustainability",
        title: "Sustainability Connection",
        content: "This activity directly connects to SDG 12 (Responsible Consumption and Production) by highlighting the material intensity of our devices. It underscores the importance of the Circular Economy, where understanding a product's anatomy is the first step toward better design for repairability and material recovery."
      },
      {
        id: "reflection",
        title: "Reflection",
        reflections: [
          {
            question: "What surprised me?",
            answer: "I was surprised by how difficult it is to separate different materials; many components are glued or soldered together in ways that actively prevent easy recycling."
          },
          {
            question: "What challenge did I face?",
            answer: "Identifying specific micro-components without specialized documentation was challenging, illustrating the 'black box' nature of modern hardware."
          },
          {
            question: "What will I do differently?",
            answer: "I will now prioritize purchasing devices with higher repairability scores and modular designs that allow for easier component replacement."
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "E-Waste Data Analysis",
    description: "Analyzing country-wise e-waste generation and recycling performance to identify recycling leaders, laggards, and gaps in e-waste management using data visualization.",
    category: "Activity",
    date: "2026-09-10",
    type: "link",
    thumbnail: "/assets/assignments/assignment-07/analysis.jpg",
    externalUrl: "https://ewaste-data-visualization-yashp.streamlit.app/",
    files: [
      {
        name: "E-Waste Intelligence · Streamlit",
        url: "https://ewaste-data-visualization-yashp.streamlit.app/",
        type: "link"
      }
    ],
    tabs: [
      {
        id: "overview",
        title: "Overview",
        objective: "Analyze country-wise e-waste generation and recycling performance to identify recycling leaders, laggards, and gaps in e-waste management using data visualization.",
        problemStatement: "Transforming country-level e-waste data into meaningful insights by comparing waste generation, recycling quantities, and recycling rates across countries.",
        theory: "Data visualization and statistical analysis enable environmental data to be interpreted effectively, revealing patterns in e-waste generation, recycling efficiency, and disparities in waste management practices.",
        engineeringConcepts: [
          "Statistical analysis of e-waste generation and recycling data",
          "Recycling rate and material diversion analysis",
          "Comparative analysis of country-wise e-waste management",
          "Interactive dashboard development for environmental data visualization"
        ]
      },
      {
        id: "platform-link",
        title: "Streamlit App",
        content: "Explore the live interactive Streamlit web dashboard to inspect country-wise metrics, comparative charts, recycling rate distributions, and global management gaps in real time."
      }
    ]
  }
];

// Mock data for Koushik Raju S R's Portfolio

const personalInfo = {
  name: "Koushik Raju S R",
  title: "Software Developer | Tester | Tech Lead",
  typewriterText: ["I build.", "I test.", "I solve.", "I lead."],
  email: "koushikrajusr@gmail.com",
  phone: "+91 9972072644",
  linkedin: "https://linkedin.com/in/koushikraju", // CHANGE THIS: Update with actual LinkedIn URL
  github: "https://github.com/koushikraju", // CHANGE THIS: Update with actual GitHub URL
  education: "BCA Graduate",
  experience: "8+ Months",
  projectCount: "3+ Projects"
};

const skills = [
  { name: "HTML5", level: 90, category: "frontend" },
  { name: "CSS3", level: 85, category: "frontend" },
  { name: "JavaScript", level: 88, category: "frontend" },
  { name: "ReactJS", level: 85, category: "frontend" },
  { name: "MySQL", level: 80, category: "database" },
  { name: "MongoDB", level: 75, category: "database" },
  { name: "AWS", level: 78, category: "cloud" },
  { name: "Jest", level: 82, category: "testing" },
  { name: "Manual Testing", level: 88, category: "testing" }
];

const projects = [
  {
    id: 1,
    title: "Library Management System",
    description: "A comprehensive library management solution with user authentication, book cataloging, and automated fine calculations. Features include book reservation, search functionality, and admin dashboard.",
    techStack: ["ReactJS", "MySQL", "Node.js", "Express"],
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    demoLink: "#", // CHANGE THIS: Add actual demo link
    githubLink: "#", // CHANGE THIS: Add actual GitHub repository link
    category: "Full Stack"
  },
  {
    id: 2,
    title: "AWS Hosting Project",
    description: "Deployed and managed scalable web applications on AWS infrastructure. Implemented CI/CD pipelines, configured EC2 instances, S3 storage, and CloudFront for optimal performance.",
    techStack: ["AWS EC2", "S3", "CloudFront", "Route53", "Linux"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    demoLink: "#", // CHANGE THIS: Add actual demo link
    githubLink: "#", // CHANGE THIS: Add actual GitHub repository link
    category: "Cloud"
  },
  {
    id: 3,
    title: "Blockchain Mobile Shop Application",
    description: "An innovative e-commerce platform for mobile devices leveraging blockchain technology for secure transactions. Features decentralized payment processing and product authenticity verification.",
    techStack: ["Blockchain", "ReactJS", "Solidity", "Web3.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    demoLink: "#", // CHANGE THIS: Add actual demo link
    githubLink: "#", // CHANGE THIS: Add actual GitHub repository link
    category: "Blockchain"
  }
];

const experience = [
  {
    id: 1,
    company: "Exar",
    position: "Jr Software Tester",
    duration: "Present",
    responsibilities: [
      "Manual testing of web applications ensuring quality standards",
      "Jest automation for unit and integration testing",
      "ReactJS development for frontend components",
      "Bug tracking and documentation"
    ],
    color: "#00D4FF"
  },
  {
    id: 2,
    company: "Omkar Hospital",
    position: "Technical Team Lead",
    duration: "Previous",
    responsibilities: [
      "Managed and maintained hospital websites",
      "Database handling and optimization",
      "Developed staff management systems",
      "Led technical team and coordinated projects"
    ],
    color: "#A855F7"
  }
];

const services = [
  {
    id: 1,
    title: "Build Websites",
    description: "Create modern, responsive, and high-performance web applications tailored to your needs.",
    icon: "code"
  },
  {
    id: 2,
    title: "Test Applications",
    description: "Comprehensive testing services including manual and automated testing to ensure quality.",
    icon: "bug"
  },
  {
    id: 3,
    title: "Optimize Performance",
    description: "Enhance application speed, efficiency, and user experience through expert optimization.",
    icon: "zap"
  },
  {
    id: 4,
    title: "Lead Technical Teams",
    description: "Guide and manage development teams to deliver projects successfully and on time.",
    icon: "users"
  }
];

const contactMethods = [
  {
    icon: "mail",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "cyan"
  },
  {
    icon: "phone",
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: "purple"
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "Connect with me",
    href: personalInfo.linkedin,
    color: "blue"
  },
  {
    icon: "github",
    label: "GitHub",
    value: "View my work",
    href: personalInfo.github,
    color: "gray"
  }
];
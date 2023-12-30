/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Portfolio | Joshua Puglielli",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Joshua Puglielli Portfolio",
    type: "website",
    url: "http://joshuapuglielli.com/",
  },
};

//Home Page
const greeting = {
  title: "Joshua Puglielli",
  subTitle:
    "ML, data, and software engineer.\nDriven by a passion for learning.",
  resumeLink:
    "https://drive.google.com/file/d/1Arxwpy9qYyJuBcWSIaMph8Dzzdy2w6sO/view?usp=drive_link",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/JoshPugli",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/joshua-puglielli-1b8303228/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:jdpuglielli@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/joshpugli/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skillsLeft = {
  data: [
    {
      title: "AI & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "• Demonstrated expertise in ML Classification, Regression, and NLP, coupled with extensive experience in training complex models and integrating Large Language Model (LLM) APIs in a professional production setting.",
        "• Delivered commercial sensitive big data analysis programs using Python, Numpy, and Pandas",
        "• Demonstrated deep conceptual knowledge in ML and data analysis, successfully applying these principles to architect and refine sophisticated algorithms and models",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "devicon:keras",
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos:tensorflow",
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "devicon:scikitlearn",
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "spaCy",
          fontAwesomeClassname: "simple-icons:spacy",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "• Building responsive application front ends using React, HTML, CSS, Bootstrap, TypeScript & JavaScript",
        "• Developing mobile applications using Java in conjunction with android studio",
        "• Creating application backends using Django and Django Rest Framework",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "devicon:typescript",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "vscode-icons:file-type-django",
        },
        {
          skillName: "Django Rest Framework",
          fontAwesomeClassname: "devicon:djangorest",
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "devicon:androidstudio",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Digital Ocean",
          fontAwesomeClassname: "devicon:digitalocean",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "• Professionally deployed data pipelines on cloud using AWS Lambda and S3",
        "• Experience creating highly available, scalable, and secure cloud infrastructure with IAC technologies",
        "• Hosting and maintaining websites and mobile applications on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "devicon:terraform",
          style: {},
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {},
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "OS, Systems Programming & Software Tools",
      fileName: "CloudInfraImg",
      skills: [
        "• Extensive experience with git and version control",
        "• Deep knowledge of shell scripting and CICD to automate tasks",
        "• Worked with projects to create file storage systems, threading libraries, paging algorithms, and HTTP servers in C & C++",
        "• Knowlege of both Windows and Linux operating systems and CLI tools",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "devicon:c",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "C++",
          fontAwesomeClassname: "devicon:cplusplus",
          style: {},
        },

        {
          skillName: "Linux",
          fontAwesomeClassname: "devicon:linux",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Windows",
          fontAwesomeClassname: "ri:windows-fill",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "git",
          fontAwesomeClassname: "la:git",
          style: {
            color: "",
          },
        },
        {
          skillName: "CLI",
          fontAwesomeClassname: "grommet-icons:cli",
          style: {
            color: "#",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "• Designing highly attractive user interface for mobile and web applications",
    //     "• Customizing logo designs and building logos from scratch",
    //     "• Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Toronto",
      subtitle:
        "Honors Bachelor of Science in Computer Science and Mathematics",
      logo_path: "uoft.png",
      alt_name: "IIITDM Kurnool",
      duration: "2020 - 2024",
      descriptions: [
        "• GPA 3.74/4.00.",
        "• Current Research: As part of a research team led by Professor Joseph Jay Williams, I am leveraging machine learning, HCI principles, and data analysis to optimize online learning. Our project focuses on personalizing student learning experiences by analyzing study habits and behavioral patterns, developing algorithms for tailored educational interventions, and establishing a feedback loop for continuous improvement. ",
        "• Awards include Dean's List Scholar (3x), Innis College Exceptional Achievement Award (3x)",
      ],
    },
    {
      title: "University of Wisconsin-Madison",
      subtitle: "UNHS Student",
      logo_path: "Wisconsin_Badgers_logo.svg.png",
      alt_name: "Indiana University Bloomington",
      duration: "2019 - 2020",
      descriptions: [
        "• GPA 4.00/4.00.",
        "• Took class in advanced calculus",
        "• Led study group of 20 college students.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Developer - Associate (WIP)",
      subtitle:
        "- Many thanks to Stephane Maarek for his excellent course on the subject",
      logo_path: "aws.png",
      certificate_link:
        "https://aws.amazon.com/certification/certified-developer-associate/",
      alt_name: "AWS",
      color_code: "#fff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship, Freelance and Partnership",
  description:
    "As an experienced ML Engineer, Full Stack Developer, and Data Engineer, I've contributed to a wide array of projects that span both emerging startups and established corporations. My code is actively deployed in commercial applications. Beyond formal roles, I've also engaged in project-based collaborations with startups in the Robotics and Consulting sectors, where I've applied my skills in application development and AI.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Data Engineer Intern",
          company: "SteelEye Ltd.",
          company_url: "https://www.steel-eye.com/",
          logo_path: "se.png",
          duration: "May 2022 - Aug 2022",
          location: "New York, USA",
          description:
            "Worked with massive quantites of sensitive customer data in a production development stream, utilizing AWS, Python, Pandas, and NLP in order to improve surveillance and reporting across several metrics to ensure financial compliance for institutional clients. Additionally worked to streamline and improve efficiency of existing codebase, while greatly expanding testing suite.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Freelance",
      experiences: [
        {
          title: "ML & Full Stack Engineer",
          company: "IncrementOne",
          company_url: "https://www.incrementone.com/",
          logo_path: "incone.png",
          duration: "January 2023 - Present",
          location: "Vancouver, Canada",
          description:
            "As the lead ML & Full Stack Engineer at IncrementOne, I led the development of a full stack agile assessment app, and developed an ML tool suite, improving efficiency by 40-100% for clients like the Royal Bank of Canada and the Government of Canada. My work included pioneering an AI Agile Team Lead Assistant and revamping the Team Benchmark application, supporting over 30,000 users and contributing to an expected annual revenue increase of $200,000.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Partnerships",
      experiences: [
        {
          title: "ML Project Engineer",
          company: "Acrylic Robotics",
          company_url: "https://acrylicrobotics.ca/",
          logo_path: "acrylic.jpeg",
          duration: "August 2023 - August 2023",
          location: "Montreal, Canada",
          description:
            "Collaborated with Acrylic Robotics on an innovative art creation project, applying machine learning and algorithmic optimization techniques. Implemented a K-means clustering algorithm to condense the color palette required for art production, achieving visual fidelity with fewer resources. Developed a brush stroke optimization program leveraging A* and greedy approximation algorithms, which minimized color switches and reduced overall painting time by an estimated 90% or more. (More on these projects on projects page!)",
        },
        {
          title: "Student Partner",
          company: "Throught Leadership Branding Club",
          company_url: "https://thoughtleadershipbranding.club/",
          logo_path: "tlbco.jpeg",
          duration: "September 2022 - December 2022",
          location: "Toronto, Canada",
          description:
            "Created an MVP that would allow users to easily access and evaluate audio events from various social audio platforms. In order to achieve this, we utilized React, MongoDB, and Django to develop a system that would collect audio events and present them to the user in a organized manner, enabling them to make informed decisions about which events to attend (More on the project on projects page!).",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of vast variety of frameworks, languages, and concepts. I am always working on something new, so check back often to see what I'm up to!",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skillsLeft,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  skills,
  contactPageData,
};

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

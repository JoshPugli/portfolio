/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Joshua's Portfolio",
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
    "I'm a software engineer based in Toronto, ON with a passion for developing innovative applications and learning new technologies.",
  resumeLink:
    "https://drive.google.com/file/d/1KPHHgG4UelMBOYp1byg4fGTLMklLtjSG/view?usp=sharing",
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
  {
    name: "Instagram",
    link: "https://www.instagram.com/joshpugli/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skillsLeft = {
  data: [
    {
      title: "AI & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "• Delivered commercial data analysis code using Python and Pandas",
        "• Professional experience with sensitive big data analysis",
        "• Experience of working with ML Classification, Regression, and NLP projects",
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
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "• Building responsive application front ends using React, HTML5, CSS3, Bootstrap and JavaScript",
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
        "• Hosting and maintaining websites and mobile applications on virtual machine instances along with integration of databases",
        "• Experience wokring within highly available and scalable cloud infrastructure",
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
        "• Cabable of writing shell scripts to automate tasks",
        "• Worked with projects to create file storage systems, threading libraries, paging algorithms, and HTTP servers in C",
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
        "Honors Bachelor of Science; Computer Science and Math, specializing in AI",
      logo_path: "uoft.png",
      alt_name: "IIITDM Kurnool",
      duration: "2020 - 2024",
      descriptions: [
        "• GPA 3.72/4.00.",
        "• Classes of note include Operating Systems, Data Structures and Analysis, Advanced Linear Algebra, Software Design, Web Programming, Software Engineering, Machine Learning, and Artificial Intelligence, among others.",
        "• Awards include Dean's List Scholar x2, Innis College Exceptional Achievement Award (2x)",
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
        "• Took class in advanced calculus, led study group of 20 college students.",
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
    "I have worked with a few evolving startups as a full stack developer, as well as with an established company as a Data Engineer. My work is currently being used in commercial settings, and I take pride in my ability to deliver high quality code in a timely manner.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internship",
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
            "Worked with large quantites of sensitive customer data in a production development stream, utilizing AWS, Python, Pandas, and NLP in order to improve surveillance and reporting across several metrics to ensure financial compliance for institutional clients. Additionally worked to streamline and improve efficiency of existing codebase, while greatly expanding testing suite.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Freelance",
      experiences: [
        {
          title: "Software Engineer",
          company: "IncrementOne",
          company_url: "https://www.incrementone.com/",
          logo_path: "incone.png",
          duration: "January 2023 - Present",
          location: "Vancouver, Canada",
          description:
            "Member of development team working to create a commercial web application written with React and Django REST framework, suited for +30,000 users and projected to generate $200k in revenue. Worked to develop and implement a REST API, as well as a React frontend, while also working to improve existing codebase and streamline development process.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Partnership",
      experiences: [
        {
          title: "Student Partner",
          company: "Throught Leadership Branding Club",
          company_url: "https://thoughtleadershipbranding.club/",
          logo_path: "tlbco.jpeg",
          duration: "September 2022 - December 2022",
          location: "Toronto, Canada",
          description:
            "Created an MVP that would allow users to easily access and evaluate audio events from various social audio platforms. In order to achieve this, we utilized React, MongoDB, and Django to develop a system that would collect audio events and present them to the user in a organized manner, enabling them to make informed decisions about which events to attend.",
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
    "My projects make use of vast variety of frameworks and languages. I have worked on Machine Learning, Web Development, and Software Development projects. I am always working on something new, so check back often to see what I'm up to!",
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
  contactPageData,
};

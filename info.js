let info = {
  name: "Ronyell Henrique",
  status: "Software Engineer",
  logo_name: "Ronyell Henrique",
  flat_picture: require("./src/assets/potrait.jpg"),
  background: require("./src/assets/designs/bg.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: true
    }
  },
  description:
    "I have a degree in Software Engineering from the University of Brasília and I am interested in Software Development, Web Development, Software Architecture and related areas. <br><br> I started in the technology area when I was a teenager, even without knowing that I was manipulating javascript, html and css I used them to make adjustments in an RPG blog. After that I took a technical course where I learned basic computer and programming concepts and realized that this is what I wanted to do.",
  links: {
    linkedin: "https://www.linkedin.com/in/ronyell",
    github: "https://github.com/ronyell",
    twitter: "https://twitter.com/RonyellHenrique",
    facebook: "https://www.facebook.com/ronyellhenrique",
  },
  education: [
    {
      name: "University of Brasilia",
      place: "Brazil",
      date: "Mar, 2015 - Dez, 2019",
      degree: "Bachelors in Software Engineering",
      description:
        "Graduated from University of Brasilia, Brasilia with a bachelors degree in Software Engineering.",
      skills: [
        "Software Architecture",
        "Software Engineering",
        "Quality",
        "Agile",
        "Database",
        "OS",
        "Data Structure",
        "Computer Network",
      ]
    },
    {
      name: "Escola Técnica de Brasilia",
      place: "Brazil",
      date: "Aug, 2013 - Dez, 2014",
      degree: "Computer Technician",
      description:
        "Started, but did not finish, computer technician at the Escola Técnica de Brasilia.",
      skills: [
        "Database",
        "Computer Architecture",
        "Technical Drawing",
      ]
    }
  ],
  professional: [
    {
      name: "International Business Machines Corporation - IBM",
      date: "Mar, 2022 - Present",
      position: "Research Assistant; Full Stack Developer",
      description:
        "Work in Progress (WIP)",
      skills: []
    },
    {
      name: "Cofidential",
      date: "Jun, 2019 - Mar, 2022",
      position: "Full Stack Web Developer",
      description:
        "First I worked as a backend developer, then I became a fullstack developer solving front-end and back-end issues.",
      skills: ["Security", "Computer Network", "Elastic Search", "Python", "Django", "Flask", "Javascript", "Vue"]
    },
    {
      name: "The Pilgrim App",
      date: "Jan, 2019 - Dez, 2019",
      position: "Back-End Developer",
      description:
        "Worked as a developer, developing API, file encryption and parser development.",
      skills: ["Python", "Django"]
    },
    {
      name: "Information Technology - Research and Application Center - ITRAC",
      date: "Jan, 2018 - Mar, 2019",
      position: "Research Assistant; Full Stack Developer",
      description:
        "Worked as Quality Assurance (QA) testing public services after that I worked developing a tool for pricing services.",
      skills: ["Postgres", "Java", "Python", "Java Script", "Spring", "Django", "Angular"]
    },
  ],
  skills: [
    {
      title: "Languages",
      info: [
        "Python",
        "Javascript",
        "Java",
        "Typescript",
        "C",
        "C++",
        "SQL",
      ],
      icon: "fa fa-code"
    },
    {
      title: "Web Technologies",
      info: ["Django", "Flask", "Spring", "Node", "Vue", "React", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Databases",
      info: ["Postgres", "MySQL", "MongoDB", "Elastic Search"],
      icon: "fa fa-database"
    },
    {
      title: "Proccess",
      info: [
        "Agile", "Scrum", "Jira", "Kanban", "Extreme programming","RUP"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "Tools",
      info: ["AWS", "Docker", "docker-compose", "Kubernets"],
      icon: "fas fa-tools"
    },
    {
      title: "Operating Systems",
      info: [
        "MacOS",
        "Ubuntu",
        "Windows",
        "Android",
      ],
      icon: "fa fa-desktop"
    },
  ],
  portfolio: [
    {
      name: "Missao Nascente",
      pictures: [
        {
          img: require("./src/assets/portfolio/missao_nascente.png")
        },
      ],
      technologies: ["Java", "Android", "SQlite"],
      category: "Mobile",
      date: "2016",
      visit: "https://github.com/fga-gpp-mds/2016.2-MissaoNascente",
      description:
        "Mobile application to make the visits to the Trail named “Trilha da Nascente do Córrego Cabeça de Veado”, located in the Botanic Garden of Brasilia, more fun and complete. This project was done in a college course using the rup process for half of the project and the agile process for the other half."
    },
    {
      name: "Receituario Medico",
      pictures: [
        {
          img: require("./src/assets/portfolio/receituario.png")
        },
      ],
      technologies: ["Python", "Django", "JQuery", "Postgres", "Docker", "CI/CD"],
      category: "Web App",
      date: "2017",
      visit: "https://github.com/fga-eps-mds/2017.2-Receita-Mais",
      description:
        "Project that aims to help doctors prescribe prescriptions and monitor patients. This project was done in a college course using the rup process for half of the project and the agile process for the other half."
    },
    {
      name: "Coda+",
      pictures: [
        {
          img: require("./src/assets/portfolio/codamais.png")
        },
      ],
      technologies: ["Python", "Django", "Postgres", "CI/CD"],
      category: "Web App",
      date: "2017",
      visit: "https://github.com/CodaMais/CodaMais",
      description:
        "Project that aims to help beginner programmers with logic and algorithms on a web platform. This project was done in a college course using the agile process."
    },
    {
      name: "Conspiracy",
      pictures: [
        {
          img: require("./src/assets/portfolio/conspiracy.png")
        },
      ],
      technologies: ["C++", "SDL", "cmake"],
      category: "Game",
      date: "2017",
      visit: "https://github.com/IJE-Valhalla/Conspiracy",
      description:
        "Game based on conspiracy theory. It was a project carried out during a game class at the University of Brasilia. It involved a multidisciplinary team of computing, design and music."
    },
    {
      name: "GibbLauncher",
      pictures: [
        {
          img: "https://avatars.githubusercontent.com/u/43285690?s=400&u=84b52ac26d78283a04b738aca1d02be6ef548f52&v=4"
        },
      ],
      technologies: ["Python", "Flask", "Kotlin", "Android"],
      category: "Embedded & Mobile",
      date: "2018",
      visit: "https://github.com/Gibb-Launcher",
      description:
        "Mobile and embedded system with the objective of controlling a launcher and mapping and traking of projectiles. It was a multidisciplinary project where students from energy engineering, electronics engineering, aerospace engineering, automotive engineering and software engineering worked together."
    },
    {
      name: "Ferramenta de Precificação",
      pictures: [
        {
          img: require("./src/assets/portfolio/gov_br.svg")
        },
      ],
      technologies: ["Java", "Javascript","Python", "Spring", "Angular", "Django", ],
      category: "Web App",
      date: "2018",
      visit: "",
      description: "Mobile and embedded system with the objective of controlling a launcher and mapping and tracking of projectiles. It was a multidisciplinary project where students from energy engineering, electronics engineering, aerospace engineering, automotive engineering and software engineering worked together."
    },
    {
      name: "The Pilgrim App",
      pictures: [
        {
          img: require("./src/assets/portfolio/pilgrim.png")
        },
      ],
      technologies: ["Python", "Django", "Postgres", "Cassandra", "AWS", "CI/CD", "Firebase"],
      category: "Back-End",
      date: "2019",
      visit: "https://thepilgrim.app/",
      description:
        "Christian content system like ebooks, audiobooks, courses and articles. With the application for consumption of products and an e-commerce for purchases."
    },
  ],
};

export default info;

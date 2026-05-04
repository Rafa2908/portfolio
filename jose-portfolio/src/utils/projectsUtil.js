const projects = [
  {
    id: 1,
    name: "Unity Jam: Live Music Event App",
    slug: "unity-jam",
    description:
      "An R&B live event web app for discovering and booking local music experiences.",
    stack: ["reactjs", "nodejs", "postgres"],
    preview: "/livejam-home-page.gif",
    github:
      "https://github.com/Rafa2908/Project-3---Virtual-Community-Space.git",
    problem:
      "Music fans had no dedicated platform to discover and track local R&B live events in one place.",
    whatIBuilt:
      "Built a full-stack event platform with user authentication, event browsing, and a booking system backed by a relational PostgreSQL database.",
    challenges:
      "Debugged SSL configuration and environment variable loading issues in ES modules, and resolved React Router parameter mismatches in dynamic routes.",
  },
  {
    id: 2,
    name: "TorqueLab: Car Customization App",
    slug: "torquelab",
    description:
      "A car customization and showcase platform for automotive enthusiasts.",
    stack: ["reactjs", "nodejs", "postgres"],
    preview: "/torquelab-home-page.gif",
    github: "https://github.com/Rafa2908/Project-4---DIY-Delight.git",
    problem:
      "Car enthusiasts lacked a dedicated space to build, customize, and share their dream vehicle configurations.",
    whatIBuilt:
      "Developed a full-stack app featuring a car customization flow, user profiles, and a showcase feed where users can share their builds.",
    challenges:
      "Designed a flexible data model to handle the many variations of car configurations while keeping queries efficient.",
  },
  {
    id: 3,
    name: "iKicks: Sneaker Store App",
    slug: "ikicks",
    description:
      "A sneaker marketplace for buying and selling limited edition kicks.",
    stack: ["reactjs", "nodejs", "mongodb"],
    preview: "/ikicks-home-page.gif",
    github: "https://github.com/Rafa2908/iKicks.git",
    problem:
      "Sneakerheads needed a focused marketplace experience built specifically around limited edition culture.",
    whatIBuilt:
      "Built a marketplace with product listings, search and filter functionality, and a cart and checkout flow.",
    challenges:
      "Handled inventory edge cases and concurrent cart updates to avoid overselling limited stock items.",
  },
  {
    id: 4,
    name: "Buylo: Ecommerce App",
    slug: "buylo",
    description:
      "A full-stack e-commerce platform built collaboratively with a team of four engineers.",
    stack: ["reactjs", "nodejs", "postgres"],
    preview: "/buylo-home-page.gif",
    github:
      "https://github.com/WEB103-Pod-11-capstone/web103_finalproject_pod11.git",
    problem:
      "A team project simulating a real-world e-commerce engineering workflow with production-level Git practices.",
    whatIBuilt:
      "Served as the backend engineer — built JWT authentication, cart logic, order processing with database transactions, and admin-only CRUD endpoints. Each feature was developed on a local branch and merged to main via pull requests and code review.",
    challenges:
      "Coordinating backend contracts with frontend teammates, managing merge conflicts, and ensuring database transactions were atomic to prevent order inconsistencies.",
  },
  {
    id: 5,
    name: "Nova: Social Media App",
    slug: "nova",
    description:
      "A social media app for sharing moments and connecting with others in real time.",
    stack: ["reactjs", "python", "mysql"],
    preview: "/nova-home-page.gif",
    github: "https://github.com/Rafa2908/Nova.git",
    problem:
      "Wanted to explore building a social platform with a Python backend and a relational database from scratch.",
    whatIBuilt:
      "Built a social media app with user authentication, post creation, a follow system, and a dynamic feed powered by a Flask REST API and MySQL database.",
    challenges:
      "Designing the feed query efficiently using joins and aggregates across a relational schema, and bridging a React frontend with a Python backend.",
  },
];

export default projects;

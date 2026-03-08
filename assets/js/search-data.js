// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Find details for each of my projects below",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Find an overview of my experience below",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-what-software-skills-i-had-to-learn-as-a-mechanical-engineer-in-robotics-and-controls-summary",
        
          title: "What software skills I had to learn as a mechanical engineer in robotics...",
        
        description: "An overview of the self taught skills I recommend mechanical engineers who are interested in the robotics field learn.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Learning-Robotics-as-an-ME/";
          
        },
      },{id: "books-brave-new-world",
          title: 'Brave New World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Brave-New-World/";
            },},{id: "books-dune",
          title: 'Dune',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/DUNE-MESSIAH/";
            },},{id: "books-dune",
          title: 'Dune',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/DUNE/";
            },},{id: "books-enders-game",
          title: 'Enders Game',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Enders-Game/";
            },},{id: "books-how-to-win-friends-amp-influence-people",
          title: 'How To Win Friends &amp;amp; Influence People',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/HOW-TO-WIN-FRIENDS/";
            },},{id: "books-modern-robotics",
          title: 'Modern Robotics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/modern_robotics/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-robotic-manipulators-3-degree-of-freedom-robotic-arm",
          title: 'Robotic Manipulators, 3 Degree of freedom robotic arm',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3freemanip/";
            },},{id: "projects-an-analysis-of-dubin-s-vehicle-and-the-traveling-salesman-problem",
          title: 'An Analysis of Dubin’s Vehicle and the Traveling Salesman Problem',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Dubins/";
            },},{id: "projects-smart-door-lock-amp-garage-junior-level-mechatronics",
          title: 'Smart Door Lock &amp;amp; Garage - Junior Level Mechatronics',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Mechatronics/";
            },},{id: "projects-interceptor-missile-guidance-through-reinforcement-learning",
          title: 'Interceptor Missile Guidance through Reinforcement Learning',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ReinforcementLearningMissile/";
            },},{id: "projects-senior-design-practicum-jet-impingement-server-cooling",
          title: 'Senior Design Practicum - Jet Impingement Server Cooling',
          description: "year long research project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Senior_Design/";
            },},{id: "projects-non-linear-feedback-linearization-for-missile-control",
          title: 'Non-Linear Feedback Linearization for Missile Control',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/non_lin_missile/";
            },},{id: "projects-m-s-thesis-in-robotic-welding",
          title: 'M.S. Thesis in Robotic Welding',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/weldthesis/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%79%70%72%6F%65%6E%67%69%6E%65%65%72%69%6E%67@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rayproengineering", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rayproengineering", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

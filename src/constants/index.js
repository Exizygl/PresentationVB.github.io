import {
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    php,
    sql,
    sass,
    eura,
    M2i,
    Simplon,
  
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "A propos",
    },
    {
      id: "work",
      title: "Expérience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React",
      icon: reactjs,
    },
    {
      title: "Redux",
      icon: redux,
    },
    {
      title: "NodeJs",
      icon: nodejs,
    },
    {
      title: "Mongodb",
      icon: mongodb
    },
    {
      title: "PHP",
      icon: php,
    },
    {
      title: "SQL",
      icon: sql,
    },
    {
      title: "SASS",
      icon: sass,
    },
    {
      title: "Tailwind ",
      icon: tailwind,
    },
    {
      title: "git",
      icon: git,
    },
    {
      title: "html 5",
      icon: html,
    },
    {
      title: "css 3",
      icon: css,
    },
    {
      title: "javascript",
      icon: javascript,
    },
    
  ];
  const experiences = [
    {
      title: "Titre professionnel Concepteur Developpeur d'applications ",
      company_name: "Simplon",
      icon: Simplon,
      iconBg: "#383E56",
      date: "2024-2025",
      points: [
        "Formation pour obtenir le titre de Titre professionnel Concepteur Developpeur d'applications",
        "Alternance a un rythme de 1 une semaine formation, 3 semaines en entreprises",
        "Passage devant un jury pour confirmer l'acquisition du diplome",
        
      ],
    },
    {
      title: "Stage developpeur web",
      company_name: "M2i",
      icon: M2i,
      iconBg: "#383E56",
      date: "April 2022 - Mai 2023",
      points: [
        "Développement de l'application de gestion de l'inventaire des différents agences en PHP",
        "Participer a des réunions pour lister les besoins du client, ainsi que poser les questions permettant de récupérer les informations nessésaire au projet",
        "Maquetage de l'application ainsi que de la création de la base de donnée ",
        "Réunion pour suivre l'avancé de l'application et et avoir un premiere avie du client sur l'application",
      ],
    },
    {
      title: "Développeur Full stack",
      company_name: "Incubateur",
      icon: eura,
      iconBg: "#E6DEDD",
      date: "Juin 2022 - oct 2023",
      points: [
        "Création d'un site avec React et nodeJS suivant un cahier des charges",
        "Développemnt en équipe suivant la méthode scrum sur un rythme de 2 semaines.",
        "Participation à des code review pour expliqué le code anisi que donner des conseils.",
        "Repartir les taches dans un trello ainsi qu'assigné les taches pour le sprint",
        "Voici le site: https://trade-corner.onrender.com"
      ],
    },
    {
      title: "titre developpeur web/web mobile",
      company_name: "M2i",
      icon: M2i,
      iconBg: "#383E56",
      date: "Dec 2022 - Mai 2023",
      points: [
        "Formation pour obtenir le titre de Titre professionnel Developpeur web/web Mobile (Bac +2)",
        "Validation d'un module frot et un module back",
        "Passage devant un jury pour confirmer l'acquisition du diplome",
        
      ],
    },
  ];
  
  export { services, experiences};
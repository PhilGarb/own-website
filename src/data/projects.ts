export type Project = {
  title: string;
  techs: string[];
  link?: string;
  nda?: boolean;
};

const projects: Project[] = [
  {
    title: "Mioto",
    techs: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
    link: "https://mioto.app/",
  },
  {
    title: "Design System for corporate tech team",
    techs: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    nda: true,
  },
  {
    title: "Compliance Checking Tool",
    techs: ["React", "TypeScript"],
    nda: true,
  },
  {
    title: "Vacation Home Booking Website",
    techs: ["Gatsby", "JavaScript", "GraphQL", "Tailwind CSS", "Stripe"],
    link: "https://ferienwohnung-vogtland.com",
  },
];

export default projects;

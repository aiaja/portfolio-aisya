export type Tech = {
  name: string;
  icon: string;
  category: "framework" | "language" | "tool";
};

export const techStack: Tech[] = [
{ 
  name: "Next.js", 
  icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  category: "framework" 
},  { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", category: "framework" },
  { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png", category: "language" },
  { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png", category: "language" },
  { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png", category: "framework" },
  { name: "HTML/CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png", category: "language" },
  { name: "Figma", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIEyfClNU0SVPqlWPYBvqUG3JjBr-Orm3dw&s", category: "tool" },
  { name: "Git", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png", category: "tool" },
  { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png", category: "framework" },
  { name: "Shadcn UI", icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4", category: "tool" },
  { name: "PHP", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png", category: "language" },
{
    name: "Java",
    icon: "https://dev.java/assets/images/java-logo-vector.png",
    category: "language",
  },];
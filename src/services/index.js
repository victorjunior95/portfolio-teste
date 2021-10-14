const PORTFOLIO_API = 'https://gitconnected.com/v1/portfolio/victorjunior95'

export const fetchDataPortfolio = async () => {
  const result = await fetch(PORTFOLIO_API)
    .then((response) => response.json());
  return result;
};

//  export const fetchAboutMe = async () => {
//   const { basics, skills } = await fetch(PORTFOLIO_API)
//   .then((response) => response.json());
//   const result = [ basics, skills ] // basics: objeto, skills: array de objetos
// return result;
// };

//  export const fetchProjects = async () => {
//   const { projects } = await fetch(PORTFOLIO_API)
//   .then((response) => response.json());
//   const result = projects // array de objetos
// return result;
// };

//  export const fetchContact = async () => {
//   const { basics } = await fetch(PORTFOLIO_API)
//   .then((response) => response.json());
//   const result = basics.phone
// return result;
// };

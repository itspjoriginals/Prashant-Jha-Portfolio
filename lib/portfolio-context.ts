import { about, experienceItems, meta, projectItems, skills } from './portfolio-data';

const buildPortfolioSummary = () => {
  const experienceSummary = experienceItems
    .map(
      (item) => `- ${item.role} at ${item.company} (${item.duration}, ${item.location}) with focus on ${item.highlights.join(' ')}`
    )
    .join('\n');

  const projectSummary = projectItems
    .map(
      (project) =>
        `- ${project.name}: ${project.description} Tech: ${project.tech.join(', ')}. Key highlights: ${project.highlights.join(' ')}.`
    )
    .join('\n');

  const skillSummary = skills
    .map((group) => `- ${group.title}: ${group.items.join(', ')}.`)
    .join('\n');

  return [
    `Name: ${meta.name}`,
    `Role: ${meta.role}`,
    `Headline: ${meta.headline}`,
    `Location: ${meta.location}`,
    `Email: ${meta.email}`,
    `Phone: ${meta.phone}`,
    `GitHub: ${meta.github}`,
    `LinkedIn: ${meta.linkedin}`,
    '',
    `About: ${about.summary}`,
    ...about.points.map((point) => `- ${point}`),
    '',
    'Experience:',
    experienceSummary,
    '',
    'Projects:',
    projectSummary,
    '',
    'Skills:',
    skillSummary
  ].join('\n');
};

export const portfolioContext = buildPortfolioSummary();

export const assistantInstruction = `You are Prashant Kumar Jha's portfolio assistant. Answer visitor questions based only on Prashant's portfolio data. Do not invent new facts, technologies, companies, or achievements. If the question is not covered in the portfolio context, respond with: "I don’t have that information in Prashant’s portfolio context yet." Keep answers concise, helpful, recruiter-friendly, and professional.`;

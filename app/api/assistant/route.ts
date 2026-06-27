import { NextRequest } from 'next/server';
import { assistantInstruction, portfolioContext } from '@/lib/portfolio-context';
import { about, experienceItems, meta, projectItems, skills } from '@/lib/portfolio-data';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

function buildFallbackAnswer(question: string) {
  const normalizedQuestion = question.toLowerCase();

  if (/(experience|work|job|company|role|career|background)/.test(normalizedQuestion)) {
    const latestRole = experienceItems[0];
    return `Prashant has worked as ${latestRole.role} at ${latestRole.company} and previously contributed at ${experienceItems[1].company} and ${experienceItems[2].company}.`;
  }

  if (/(project|projects|portfolio)/.test(normalizedQuestion)) {
    const names = projectItems.slice(0, 3).map((project) => project.name).join(', ');
    return `His featured projects include ${names}.`;
  }

  if (/(skill|skills|stack|tech|technology|tools)/.test(normalizedQuestion)) {
    const featuredSkills = skills.flatMap((group) => group.items).slice(0, 10).join(', ');
    return `His toolkit includes ${featuredSkills}.`;
  }

  if (/(contact|email|phone|linkedin|github|reach|hire)/.test(normalizedQuestion)) {
    return `You can reach Prashant at ${meta.email} or connect with him on LinkedIn: ${meta.linkedin}.`;
  }

  if (/(who|about|intro|summary)/.test(normalizedQuestion)) {
    return `${meta.name} is a ${meta.role} based in ${meta.location}. ${about.summary}`;
  }

  return `I can help with Prashant’s background, experience, projects, skills, and contact details.`;
}

export async function POST(request: NextRequest) {
  const { question } = await request.json();
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ answer: buildFallbackAnswer(question) }), { status: 200 });
  }

  const payload = {
    system_instruction: {
      parts: [{ text: assistantInstruction }]
    },
    contents: [
      {
        role: 'user',
        parts: [{ text: `Portfolio context:\n${portfolioContext}\n\nQuestion: ${question}` }]
      }
    ],
    generationConfig: {
      temperature: 0.3,
      maxOutputTokens: 500
    }
  };

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const text = await response.text();
      return new Response(JSON.stringify({ answer: buildFallbackAnswer(question) }), { status: 200 });
    }

    const data = await response.json();
    const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    return new Response(JSON.stringify({ answer: answer || buildFallbackAnswer(question) }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch {
    return new Response(JSON.stringify({ answer: buildFallbackAnswer(question) }), { status: 200 });
  }
}

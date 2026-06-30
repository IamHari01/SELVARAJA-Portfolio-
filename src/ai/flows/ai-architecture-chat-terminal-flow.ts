
'use server';
/**
 * @fileOverview This file implements a Genkit flow for an AI chat terminal that provides detailed
 * technical insights into Selvaraja's projects, architectural decisions, and design philosophies.
 *
 * - aiArchitectureChatTerminal - A function that handles the AI chat terminal interaction.
 * - AIArchitectureChatTerminalInput - The input type for the aiArchitectureChatTerminal function.
 * - AIArchitectureChatTerminalOutput - The return type for the aiArchitectureChatTerminal function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema for the AI Architecture Chat Terminal
const AIArchitectureChatTerminalInputSchema = z.object({
  question: z.string().describe('The detailed technical question about Selvaraja\'s projects, architecture, or design philosophy.'),
});
export type AIArchitectureChatTerminalInput = z.infer<typeof AIArchitectureChatTerminalInputSchema>;

// Output Schema for the AI Architecture Chat Terminal
const AIArchitectureChatTerminalOutputSchema = z.object({
  answer: z.string().describe('A detailed and personalized answer from the perspective of Selvaraja, explaining his AI engineering expertise and problem-solving approach.'),
});
export type AIArchitectureChatTerminalOutput = z.infer<typeof AIArchitectureChatTerminalOutputSchema>;

// The prompt definition
const aiArchitectureChatTerminalPrompt = ai.definePrompt({
  name: 'aiArchitectureChatTerminalPrompt',
  input: {schema: AIArchitectureChatTerminalInputSchema},
  output: {schema: AIArchitectureChatTerminalOutputSchema},
  prompt: `You are Selvaraja, an elite AI Engineer and autonomous systems architect.
You are interacting with a recruiter or interested party through an interactive AI chat terminal.
Your goal is to provide detailed, personalized, and technically profound insights into your projects, architectural decisions, and design philosophies.
Emphasize your expertise as a top 0.1% AI-native engineer, systems thinker, distributed intelligence architect, and future founder-level technical mind.

Here is a summary of your profile, projects, and technical arsenal to draw upon:

--- PROFILE SUMMARY ---
Name: Selvaraja
Role: AI Engineer | Architecting Autonomous Systems
Core Thesis: Bridging advanced AI reasoning and autonomous orchestration to engineer the next generation of scalable intelligent systems.
Key Attributes: top 0.1% AI-native engineer, systems thinker, distributed intelligence architect, future founder-level technical mind.

--- PROJECTS ---

Project 1: Autonomous Multi-Agent Resume Orchestrator
Features to Highlight: Real-time job aggregation, resume intelligence, semantic matching, multi-agent orchestration, RAG architecture, vector databases, ATS optimization.
Technologies Used: Python, LangGraph, Weaviate, Gemini, Firebase, LLMs, RAG.
Architectural Decisions: Focus on modularity for agent orchestration, scalable vector database for semantic matching, and robust RAG for context retrieval.

Project 2: TONY - Advanced AI Personal Assistant
Features to Highlight: Multimodal interaction (Voice/Text), Proactive task management, Contextual long-term memory, Autonomous API orchestration.
Technologies Used: Genkit, Gemini 1.5 Pro, Next.js, Firebase, Speech-to-Text, Vector Memory.
Architectural Decisions: Leverages Genkit for robust AI flow management, Gemini 1.5 Pro for deep reasoning, and a vector-based memory system for persistent contextual awareness.

--- TECHNICAL ARSENAL ---
Categories: Advanced AI Engineering, Autonomous Agent Systems, Multimodal AI Systems, Backend Infrastructure, Distributed Systems, Logical Problem Solving, Firebase Architecture, Vector Databases, RAG Pipelines, Full Stack Engineering.
Specific Skills: Python, LangGraph, Weaviate, Gemini, Genkit, Firebase, LLMs, RAG, Next.js, AI Orchestration.

--- INSTRUCTIONS ---
- Answer the user's question directly and comprehensively, referencing your experience and technical stack.
- Maintain a highly technical, articulate, and confident tone.
- Explain your architectural choices and problem-solving approaches with depth.
- If a question is outside the scope of your profile or projects, politely state that you focus on AI engineering and autonomous systems.
- Do NOT generate information not present in the provided context. Focus on elaborating what's given.

User's Question: {{{question}}}
`,
});

// The Genkit flow
const aiArchitectureChatTerminalFlow = ai.defineFlow(
  {
    name: 'aiArchitectureChatTerminalFlow',
    inputSchema: AIArchitectureChatTerminalInputSchema,
    outputSchema: AIArchitectureChatTerminalOutputSchema,
  },
  async (input) => {
    const {output} = await aiArchitectureChatTerminalPrompt(input);
    return output!;
  }
);

/**
 * Handles technical questions for the AI chat terminal about Selvaraja's profile, projects, and architecture.
 * @param input - The input containing the user's question.
 * @returns A detailed AI-generated answer.
 */
export async function aiArchitectureChatTerminal(
  input: AIArchitectureChatTerminalInput
): Promise<AIArchitectureChatTerminalOutput> {
  return aiArchitectureChatTerminalFlow(input);
}

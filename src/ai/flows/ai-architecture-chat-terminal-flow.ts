
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
Emphasize your expertise as a top 0.1% AI-native engineer, systems thinker, and distributed intelligence architect.

Here is a summary of your profile, projects, and technical arsenal to draw upon:

--- PROFILE SUMMARY ---
Name: Selvaraja
Role: AI Engineer | Architecting Autonomous Systems
Core Thesis: Bridging advanced AI reasoning and autonomous orchestration to engineer the next generation of scalable intelligent systems.
Key Attributes: top 0.1% AI-native engineer, systems thinker, distributed intelligence architect.

--- PROJECTS ---

Project 1 (Flagship): K8 CHAT - Enterprise Kubernetes AI Assistant
Features to Highlight: Kubernetes-domain RAG system built with Jina AI embeddings, Qdrant vector DB, Reciprocal Rank Fusion (RRF), and Jina reranking.
Metrics: Achieved 86.67% Recall@10, 0.852 NDCG@5, 94.5% faithfulness, and 91.0% answer relevancy (measured with Ragas).
Performance Optimization: Identified and resolved 3.29s Jina embedding and 1.02s Qdrant cold-query bottlenecks; implemented HTTP connection pooling and LRU caching to achieve 47.8ms warm-cache response latency.

Project 2: NEXUS - Multi-Agentic Resume Intelligence
Features to Highlight: AI-powered ATS resume scanner, profile matching against live job postings, custom skill-gap recommendations.
Performance Optimization: Built a two-stage matching engine with Upstash Redis caching, reducing processing latency under 2.5 seconds with 99.9% availability.

--- TECHNICAL ARSENAL ---
Languages: Python, SQL, Java
LLM & Prompting: OpenAI, Google Gemini, Groq, Prompt Engineering, Structured Output, Observability
RAG & Retrieval: Qdrant, Jina AI Embeddings, Semantic Search, Hybrid Search, Re-ranking, RAG
AI Frameworks: LangChain, LangGraph, Genkit, Agentic AI
Evaluation & Safety: Ragas, Hallucination Detection, Groundedness
ML/DL: Scikit-learn, XGBoost, PyTorch, TensorFlow, Transformers, Feature Engineering, HuggingFace
Backend & Infrastructure: FastAPI, REST APIs, Celery, Docker, Kubernetes, Upstash Redis, Portkey, Postgres
Cloud & Tools: AWS, Git, Streamlit

--- INSTRUCTIONS ---
- Answer the user's question directly and comprehensively, referencing your experience and technical stack.
- Maintain a highly technical, articulate, and confident tone.
- Explain your architectural choices and problem-solving approaches with depth.
- Focus on the logic-driven multi-agent systems and proactive AI orchestration.
- Do NOT generate information not present in the provided context.

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

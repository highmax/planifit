---
description: Rule to keep README.md updated when important changes are made
---

# Rule: Always Keep README.md Updated
When you make a significant change to the project that affects how future developers will interact with or set up the project, you MUST update the `README.md` file to document it. All updates to `README.md` must be written in **English**.

## Types of changes that trigger a README update include:
- **Core Libraries**: Adding major dependencies (e.g., next-intl, TanStack React Query, Zustand, Tailwind).
- **Testing**: Adding testing suites or tools, including the commands required to run tests (e.g., Jest, Cypress, Playwright).
- **Scripts & Commands**: Adding important scripts to `package.json` (e.g., migrations, formatting, seeding, build steps).
- **Environment Setup**: Adding new required environment variables (also update `.env.example`).
- **Project Structure**: Introducing new key directories or architectural patterns (e.g., `/features`, `/graphql`, `/services`).
- **Infrastructure/Database**: Changes to external services like Supabase, Prisma schema updates, or running local containers (Docker).
- **Deployment Guidelines**: Changes in how the project is built or deployed (e.g., Vercel, Netlify).

## Guidelines:
- All additions must be written in clear, professional English.
- Keep explanations concise and developer-friendly.
- Use code blocks for commands.

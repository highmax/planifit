---
description: Rule to enforce Conventional Commits convention for all commit messages.
---

# Rule: Commit Message Convention

When generating, proposing, or writing commit messages for this project, you MUST strictly follow the **Conventional Commits** format. All commit messages MUST be written in **English**.

## Format
`<type>[optional scope]: <description>`

## 1. Allowed Categories (Types)
You must use one of the following categories to prefix the commit message:
- **feat:** A new feature for the user or application.
- **fix:** A bug fix.
- **chore:** Routine tasks, maintenance, dependency updates, or tool configurations that don't modify the source code or tests.
- **refactor:** A code change that neither fixes a bug nor adds a feature (e.g., restructuring code, renaming variables).
- **docs:** Changes to documentation only (e.g., updating the README).
- **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- **test:** Adding missing tests or correcting existing tests.
- **perf:** A code change that improves performance.
- **build:** Changes that affect the build system or external dependencies.
- **ci:** Changes to CI configuration files and scripts.

## 2. Description Rules
- The description must immediately follow the type/scope and a colon + space (e.g., `feat: add user authentication`).
- Keep it **concise but descriptive**. It should be long enough to clearly explain *what* the change does, usually under 50-70 characters.
- Use the imperative, present tense ("add feature" not "added feature" or "adds feature").
- Do not capitalize the first letter of the description.
- Do not use a period (`.`) at the end of the description.

## 3. Language
- **All commit messages MUST be exactly in English.**

## Examples
- `feat: implement dark mode toggle in the navbar`
- `fix: resolve crash when user submits empty form`
- `chore: update next-intl dependency to latest version`
- `refactor: extract button logic into a reusable component`
- `docs: add instructions for running e2e tests to README`

---
description: Rule to enforce Unit and Integration Testing standards.
---

# Rule: Testing Guidelines

When writing, proposing, or reviewing tests for this project, you MUST adhere to the following testing standards and stack (**Vitest + Testing Library**).

All test descriptions (`describe`, `it`, `test`) and files MUST be written in **English**.

## 1. Unit Tests (Vitest + Testing Library)
You MUST create Unit Tests for the following cases:

- **UI Components:** Test rendering, user interactions (e.g., clicks, typing), and behavior across different states (e.g., `disabled`, `loading`, `error`, `success`).
- **Custom Hooks:** Test internal state logic, side effects, and re-renders independently of UI components.
- **Utilities / Helpers:** Ensure pure functions behave correctly for various inputs and edge cases (e.g., data formatting, validation logic, transformations).
- **Zod Schemas:** Write explicit tests to confirm that schemas accept correct input shapes and reject invalid inputs.

## 2. Integration Tests (Vitest)
You MUST create Integration Tests for the following instances:

- **API Routes (`route.ts`):** Validate end-to-end endpoint logic, ensuring correct JSON responses, valid HTTP status codes, and proper error handling.
- **Server Actions:** Test server-side business logic, database operations, and ensure correct data is returned or mutated.

## General Guidelines
- Validate behavior from the user's perspective (e.g., prioritize `getByRole` over testing implementation details).
- All new logically significant features, components, or bug fixes MUST include corresponding tests.

# AGENTS.md — HairDay

## Role
You are a frontend developer specialized in React and TypeScript, working on the HairDay project (appointment scheduler for a hair salon / barbershop).

## Goal
Build a responsive appointment scheduler faithful to the provided Figma: a sidebar to create appointments (date, time slots, client name, "Agendar" button) and a daily agenda grouped by Morning / Afternoon / Night.

## Stack
- React 19 + Vite + TypeScript (`.tsx` for components).
- Plain CSS (global tokens in `src/index.css`, one CSS file per component group).
- Icons: `@phosphor-icons/react`. Font: Catamaran (Google Fonts).
- No backend, API, database or auth. Data lives in React state.

## Design tokens (from Figma)
- Yellow: `#DBC170` (light), `#B8952E`, `#846F2E` (dark).
- Grays: 100 `#F5F4F5`, 200 `#B2AFB6`, 300 `#98959D`, 400 `#7A767F`, 500 `#3E3C41`, 600 `#2E2C30`, 700 `#232225`, 800 `#19181B`, 900 `#050505`.
- Typography (Catamaran): Title Lg 32/24 bold, Title Md 16/24 bold, Title Sm 14/20 bold, Text Md 16/24 regular, Text Sm 14/20 regular.

## Rules
- Create small reusable components with typed props (`type XProps = {...}`).
- Type appointment data: `Appointment { id, clientName, date, time }`.
- Use React state (`useState`). Never mutate state directly; use `filter`, spread, `map`.
- Use `filter()` (by date), `reduce()` (group by period) and `map()` (render).
- Always show appointments by date and time period, sorted ascending by time.
- Empty period message, exactly: "Você ainda não tem agendamentos cadastrados nesse período."
- Validate the form: name, date and time are required; show a simple message.
- Keep code simple and readable for beginners; comment non-obvious logic.
- No extra libraries unless really needed.

## Folder organization
```
src/
  components/   # ScheduleSidebar, AppointmentForm, TimeSlots, AppointmentList, PeriodSection, AppointmentItem, DateField, Logo
  constants/    # periods and time slots
  types/        # Appointment, Period types
  utils/        # grouping helpers
  App.tsx       # owns the appointments state
```

## Workflow
1. Read the Figma and explain the next small task.
2. Check React/TypeScript documentation using Context7 before using an API you are unsure about.
3. Implement one board task at a time; one commit per task.
4. Test interactions using Playwright (add, delete, change date, empty states, validation, mobile layout, console errors).
5. Explain what changed and how to verify it.

## Commits
- Commits must be authored by the repository owner (use the configured `git user.name`/`user.email`).
- Do not add AI co-author or attribution trailers.

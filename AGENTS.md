
You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## Development Style Guidelines

- When analyzing or generating code for this project, prioritize **simplicity and Developer Experience (DX)** over architectural complexity.
- Organize code like a book: declare functions, methods, and helpers in the same order they are used. If a() calls b() and b() calls c(), then a must appear first, followed by b, then c, so the code can be read top-down without jumping around.

## Domain Driven Design (DDD) Principles

- Use Domain-Driven Design (DDD) as the main architectural approach for the frontend.
- Structure the app into three main layers: Presentation, Application (including Domain), and Infrastructure.
- Keep the Presentation layer focused only on UI concerns (components, views, pages, UI state, and user interactions).
- Prevent the Presentation layer from knowing implementation details of APIs, storage, or external services.
- Place all business rules, entities, value objects, and domain logic inside the Domain area of the Application layer.
- Use the Application layer to orchestrate use cases, coordinate domain logic, and expose application services to the Presentation layer.
- Ensure the Application layer depends only on abstractions, never on concrete infrastructure implementations.
- Put all external concerns (APIs, HTTP clients, storage, SDKs, third-party services) in the Infrastructure layer.
- Implement adapters in Infrastructure that fulfill the interfaces defined in the Application/Domain layer.
- Make dependencies flow inward: Infrastructure → Application → Domain, never the other way around.
- Allow multiple data sources by swapping Infrastructure adapters without changing Presentation or Domain logic.
- Use DTOs or mappers only at the boundaries between Infrastructure and Application.
- Keep domain models independent from UI frameworks, HTTP formats, or persistence details.
- Favor explicit use cases over generic services in the Application layer.
- Design features around business concepts, not technical layers.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain
- Use clean code
- Organize the code as if it were a book: keep each thing close to where it is used.
- Use SOLID principles
- Follow Sonar-recommended guidelines.
- Write all code in English, except for user-facing texts, which must remain in Spanish.
- Do not add comments to the code.
- Always follow Hexagonal Architecture (Ports and Adapters). The core domain must be framework-agnostic and contain only business logic. External concerns (UI, databases, APIs, frameworks, libraries) must be implemented as adapters and must depend on the core, never the other way around.
- All class properties and methods MUST explicitly declare an access modifier (private, protected, or public) and MUST evaluate the use of readonly; implicit public members are not allowedexcept in life-cycle hooks (ngOnInit, ngOnDestroy, etc.) and getter & setter methods.
- Prefer implicit, expressive type conversions: use the unary + operator instead of Number() for numeric coercion, and always use template literals (`...`) instead of string concatenation or String() to ensure consistent, readable, and predictable data normalization across the codebase.

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.
- File naming: Do not use suffixes like .component.ts, .service.ts, .module.ts, etc. Filenames should be clean and intention-based (e.g., user.ts, auth.ts, dashboard.ts) and their role should be inferred from folder structure and context, not from the filename itself.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.
- Do not write arrow functions in templates (they are not supported).
- Prefer self-closing tags for components and elements without content (e.g. <app-icon />, <img />, <input />). Avoid unnecessary opening and closing tags when no inner content is required.

## Styles

- Prefer utility-first CSS using Tailwind CSS framework.

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

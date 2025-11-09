# Frontend Architecture Plan
## Project: Calculator Page Redesign

### 1. Component Structure
```
app/
  calculator/
    page.tsx
    CalculatorClient.tsx
components/calculator/
  Display.tsx
  Key.tsx
  Keypad.tsx
  OperatorPad.tsx
  ActionBar.tsx
  LayoutFrame.tsx
hooks/
  useCalculator.ts
  useKeyboard.ts
styles/
  theme.css
```

### 2. Tailwind Theme Tokens
Add to `tailwind.config.ts`:
```ts
colors: {
  surface: { DEFAULT: 'rgba(15,23,42,0.6)', ring: '#34d399' },
  key: { base: '#0b1220', hover: '#111827', operator: '#22d3ee', action: '#f59e0b', equal: '#34d399' },
},
backdropBlur: { xs: '2px' },
boxShadow: { glass: '0 10px 30px rgba(0,0,0,.25)', soft: '0 2px 8px rgba(0,0,0,.25)' }
```

### 3. Accessibility & Keyboard Map
- Roles/labels: `role="button"`, `aria-label`
- Key bindings: digits, operators, Enter, Backspace, Escape
- Focus rings and prefers-reduced-motion supported

### 4. Hooks
**useCalculator.ts** — manages expression/result.  
**useKeyboard.ts** — binds keyboard events safely.

### 5. Responsiveness
- 4-column grid, auto-fit layout
- Hit areas ≥44px, no overflow ≤360px width

### 6. Quality Gates
- Unit tests for key logic
- Axe & Lighthouse audits
- Visual regression for breakpoints

### 7. Integration Steps
1. Implement new components
2. Wire Tailwind tokens
3. Replace page.tsx with CalculatorClient
4. Validate accessibility & performance


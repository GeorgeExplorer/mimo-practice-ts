# Mimo Practices TypeScript

A TypeScript practice repository for solving Codewars challenges based on topics learned in the Mimo app.

## 🚀 Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm

### Installation
```bash
npm install
```

## 📁 Project Structure

```
src/
├── fundamentals/    # Basic programming concepts
├── arrays/          # Array manipulation challenges
├── strings/         # String processing challenges
├── functions/       # Function-related challenges
├── objects/         # Object manipulation challenges
└── algorithms/      # Algorithm challenges

templates/           # Template files for new challenges
```

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📝 Adding a New Challenge

1. Copy the template files from `templates/` directory
2. Rename the files to match your challenge name
3. Place them in the appropriate topic folder (e.g., `src/arrays/`)
4. Implement your solution in the `.ts` file
5. Write tests in the `.test.ts` file
6. Run `npm test` to verify your solution

### Example

```typescript
// src/arrays/findMax.ts
export function findMax(numbers: number[]): number {
  return Math.max(...numbers);
}

// src/arrays/findMax.test.ts
import { findMax } from './findMax';

describe('findMax', () => {
  it('should find the maximum number', () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
  });
});
```

## 📚 Example Challenges

The repository includes example solutions:
- **Multiply** (`src/fundamentals/multiply.ts`) - Basic multiplication
- **Reverse String** (`src/strings/reverseString.ts`) - String reversal
- **Sum Array** (`src/arrays/sumArray.ts`) - Array summation

## 🎯 Topics Covered

- Fundamentals (variables, operators, control flow)
- Arrays (manipulation, iteration, methods)
- Strings (processing, manipulation)
- Functions (parameters, return values, arrow functions)
- Objects (properties, methods)
- Algorithms (sorting, searching, optimization)

## 🔧 Configuration

- **TypeScript**: `tsconfig.json`
- **Jest**: `jest.config.js`
- **Package**: `package.json`

## 📊 Testing

This project uses Jest with ts-jest for testing TypeScript code. All test files should end with `.test.ts` or `.spec.ts`.

Happy coding! 🎉

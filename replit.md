# Mimo Practices TypeScript

## Overview
A TypeScript practice repository for solving Codewars challenges based on topics learned in the Mimo app. This project provides an organized structure with testing support using Jest for validating solutions.

**Project Type:** Learning/Practice Repository  
**Language:** TypeScript  
**Testing Framework:** Jest with ts-jest  
**Created:** November 20, 2025

## Recent Changes
- **2025-11-20**: Initial project setup
  - Configured TypeScript with strict mode
  - Set up Jest testing framework
  - Created organized folder structure by topic (fundamentals, arrays, strings, functions, objects, algorithms)
  - Added template files for new challenges
  - Included 3 example solved challenges with tests
  - Configured workflow for running tests

## Project Architecture

### Directory Structure
```
src/
├── fundamentals/    # Basic programming concepts
├── arrays/          # Array manipulation challenges
├── strings/         # String processing challenges
├── functions/       # Function-related challenges
├── objects/         # Object manipulation challenges
└── algorithms/      # Algorithm challenges

templates/           # Template files for quickly starting new challenges
```

### Configuration Files
- **tsconfig.json**: TypeScript compiler configuration with strict mode enabled
- **jest.config.js**: Jest testing configuration with ts-jest preset
- **package.json**: Project dependencies and npm scripts

### Testing
- All tests run automatically via Jest
- Test files use `.test.ts` or `.spec.ts` suffix
- Run tests with `npm test` command
- Workflow configured to run tests automatically

## Example Challenges Included
1. **Multiply** (fundamentals) - Basic number multiplication
2. **Reverse String** (strings) - String reversal using split, reverse, join
3. **Sum Array** (arrays) - Array summation using reduce

## User Preferences
- Using TypeScript for type safety and better IDE support
- Organized by topic/concept rather than difficulty level
- Separate test files for each challenge
- Template-based approach for quick challenge setup

## Next Steps
- Add more solved challenges as practice continues
- Organize challenges by Mimo topics or Codewars difficulty
- Consider adding a progress tracker or challenge log

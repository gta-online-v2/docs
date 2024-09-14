---
sidebar_position: 5
---

# Code Norms

Welcome to the code norms page for **GTA:O 2.0 for FiveM**. Adhering to these coding standards ensures that our project remains clean, maintainable, and scalable. Below are the guidelines that all contributors are expected to follow.

## General Guidelines

- **Readability**
  Code should be easy to read and understand. Use meaningful names for variables, functions, and other identifiers to make the code self-explanatory.

- **Consistent Formatting**
  Follow a consistent formatting style throughout the codebase to improve readability and maintainability.

- **Commenting**
  Write clear and concise comments where necessary. Use comments to explain the purpose of complex code sections, but avoid redundant comments.

- **Error Handling**
  Handle errors gracefully. Use appropriate mechanisms for error handling and ensure that error messages are informative.

## Naming Conventions

- **Variables**
  Use Hungarian notation for variable names:
  - **`s`** for strings (e.g., `sPlayerName`, `sLevelDescription`)
  - **`i`** for integers (e.g., `iPlayerScore`, `iMaxLevel`)
  - **`b`** for booleans (e.g., `bIsActive`, `bHasBonus`)
  - **`f`** for floating-point numbers (e.g., `fSpeed`, `fAccuracy`)
  - **`v`** for vector (e.g., `vPlayerPosition`, `vHeistStartingPoint`)
  - **`o`** for object (e.g., `oBoxProp`, `oBankDoor`)
  - **`e`** for entity (e.g., `ePlayerVehicle`, `eMerryweatherHelicopter`)
  - **`p`** for player object (e.g., `pTargettingPlayer`, `pSessionHost`)
  - **`fc`** for anonymous function (e.g., `fcCallback`)
  - **`th`** for thread/coroutine (e.g., `thWaiting`)


- **Functions**
  Use Hungarian notation for function names:
  - **`get`** for getters (e.g., `getPlayerScore()`, `getLevelInfo()`)
  - **`set`** for setters (e.g., `setPlayerName()`, `setMaxLevel()`)

- **Constants**
  Use UPPER_CASE with underscores for constants (e.g., `MAX_PLAYERS`, `DEFAULT_SCORE`).

- **Classes and Modules**
  Use PascalCase for class names and module names (e.g., `PlayerManager`, `GameSettings`).

## Code Structure

- **File Organization**
  Organize code into logical files and directories. Group related functions and classes into modules or files that reflect their functionality.

- **Function Length**
  Keep functions short and focused on a single task. Ideally, functions should be no longer than 50 lines of code.

- **Indentation**
  Use consistent indentation (e.g., 4 spaces per indentation level) to enhance code readability.

- **Lines per File**
  Aim for a maximum of 200 lines per file. If a file exceeds this length, consider refactoring it into smaller modules.

## Formatting and Style

- **Quotes**
  Use double quotes for strings, except for single characters where single quotes are preferred.

- **String Formatting**
  Use `string.format` for string formatting instead of concatenation.

- **Spacing**
  Follow strict spacing guidelines:
  - Use a single space after commas, colons, and semicolons.
  - Do not include spaces before parentheses and braces.

## Error Handling and Validation

- **Input Validation**
  Validate all user inputs and ensure that inputs meet expected formats and ranges.

- **Error Messages**
  Provide clear and actionable error messages to help users understand and resolve issues.

## Code Reviews

- **Peer Review**
  All code changes should be reviewed by at least one other developer before merging.

- **Approval**
  Ensure that code reviews are thorough and that feedback is addressed before approval.

## Version Control

- **Commit Messages**
  Write descriptive commit messages that explain the changes made. Follow a consistent format for commit messages (e.g., `[TYPE] Short description`).

- **Branching Strategy**
  Use feature branches for new development and bugfix branches for addressing issues. Merge changes to the main branch through pull requests after code review.

By adhering to these norms, we ensure that our codebase remains high-quality, consistent, and easy to manage. Thank you for your cooperation and commitment to maintaining these standards.

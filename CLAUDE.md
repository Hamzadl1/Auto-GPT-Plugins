# CLAUDE.md - Auto-GPT-Plugins

## Project Overview

Auto-GPT-Plugins is a plugin repository for [Auto-GPT](https://github.com/Significant-Gravitas/Auto-GPT). The project is in early/pre-development stage and serves as the designated home for community and official plugins that extend Auto-GPT's capabilities.

- **Language**: Python
- **License**: MIT
- **Author**: Toran Bruce Richards (2023)

## Repository Structure

```
Auto-GPT-Plugins/
├── .gitignore       # Standard Python .gitignore
├── LICENSE          # MIT License
├── README.md        # Project overview (placeholder)
└── CLAUDE.md        # This file
```

The repository is currently a scaffold awaiting plugin implementations. No source code, build configuration, or test infrastructure exists yet.

## Development Guidelines

### Python Conventions

- Follow PEP 8 style guidelines
- Use type hints for function signatures
- Target Python 3.8+ compatibility (aligned with Auto-GPT)

### Git Workflow

- Create feature branches for new plugins or changes
- Write clear, descriptive commit messages
- Keep commits focused and atomic

### Plugin Development (Future)

When plugins are added, each plugin should:
- Be self-contained in its own directory
- Include its own README with usage instructions
- Include unit tests
- Declare its dependencies explicitly
- Follow the plugin interface defined by Auto-GPT

## Build & Test Commands

No build system or test infrastructure is configured yet. When added:
- Expect `pytest` for testing
- Expect `pip install -r requirements.txt` for dependencies

## Key Files

| File | Purpose |
|------|---------|
| `README.md` | Project description and usage instructions |
| `.gitignore` | Standard Python gitignore (byte-compiled files, venvs, coverage, etc.) |
| `LICENSE` | MIT License |

## Notes for AI Assistants

- This is a **pre-development repository** - do not assume any existing code structure beyond what is present
- The `.gitignore` is configured for Python projects (covers `__pycache__`, `.env`, virtual environments, test artifacts, distribution files)
- No CI/CD, linting, or formatting configuration exists yet
- Any new infrastructure (tests, linting, packaging) should be added incrementally as plugins are developed

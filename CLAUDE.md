# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Application
```bash
uv run python main.py
```

### Package Management
```bash
# Install dependencies
uv sync

# Add new package
uv add <package-name>

# Remove package
uv remove <package-name>

# Update dependencies
uv lock --upgrade
```

### Python Environment
```bash
# Run Python with project environment
uv run python

# Run with specific module
uv run -m <module-name>

# Install additional packages for development
uv add --dev <package-name>
```

## Project Architecture

This is a simple Python project using uv for dependency management with SuperClaude as the main dependency.

### Project Structure
- `main.py` - Entry point with basic hello world functionality
- `pyproject.toml` - Project configuration and dependencies
- `uv.lock` - Locked dependency versions
- `.venv/` - Virtual environment (managed by uv)

### Dependencies
- **SuperClaude (>=3.0.0.2)** - Main project dependency
- Uses Python >= 3.8

### Key Features
- Modern Python packaging with uv
- Minimal project structure
- SuperClaude integration ready
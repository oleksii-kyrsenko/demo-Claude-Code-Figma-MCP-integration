# Claude Code + Figma MCP Integration

A demo project showcasing integration between [Claude Code](https://claude.ai/code) and Figma via the Model Context Protocol (MCP).

## Overview

This project demonstrates how to connect Claude Code to Figma using an MCP server, enabling AI-assisted design workflows — inspect components, generate code from designs, and automate design tasks directly from the terminal.

## Prerequisites

- [Claude Code](https://claude.ai/code) installed
- Figma account with a personal access token
- Node.js 18+

## Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd demo-Claude-Code-Figma-MCP-integration
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   # Add your Figma personal access token to .env
   ```

4. Add the MCP server to Claude Code:
   ```bash
   claude mcp add figma
   ```

## Usage

_Usage instructions will be added as the project develops._

## License

MIT — see [LICENSE](LICENSE).

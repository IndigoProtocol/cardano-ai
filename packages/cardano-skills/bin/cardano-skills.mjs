#!/usr/bin/env node

import { execSync } from "node:child_process";

// ---------------------------------------------------------------------------
// ANSI helpers
// ---------------------------------------------------------------------------
const RESET = "\x1B[0m";
const BOLD = "\x1B[1m";
const DIM = "\x1B[38;5;102m";
const CYAN = "\x1B[36m";
const GREEN = "\x1B[32m";
const RED = "\x1B[31m";

const COLORS = [
  "\x1B[38;5;33m",
  "\x1B[38;5;39m",
  "\x1B[38;5;45m",
  "\x1B[38;5;51m",
  "\x1B[38;5;87m",
  "\x1B[38;5;51m",
  "\x1B[38;5;45m",
  "\x1B[38;5;39m",
  "\x1B[38;5;33m",
  "\x1B[38;5;39m",
  "\x1B[38;5;45m",
  "\x1B[38;5;51m",
];

const LOGO = [
  " ██████╗ █████╗ ██████╗ ██████╗  █████╗ ███╗   ██╗ ██████╗ ",
  "██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗████╗  ██║██╔═══██╗",
  "██║     ███████║██████╔╝██║  ██║███████║██╔██╗ ██║██║   ██║",
  "██║     ██╔══██║██╔══██╗██║  ██║██╔══██║██║╚██╗██║██║   ██║",
  "╚██████╗██║  ██║██║  ██║██████╔╝██║  ██║██║ ╚████║╚██████╔╝",
  " ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ",
  "      █████╗ ██╗                                              ",
  "     ██╔══██╗██║                                              ",
  "     ███████║██║                                              ",
  "     ██╔══██║██║                                              ",
  "     ██║  ██║██║                                              ",
  "     ╚═╝  ╚═╝╚═╝                                              ",
];

// ---------------------------------------------------------------------------
// Banner
// ---------------------------------------------------------------------------
function showBanner() {
  console.log();
  LOGO.forEach((line, i) => {
    console.log(`${COLORS[i % COLORS.length]}${line}${RESET}`);
  });
  console.log();
  console.log(`  ${BOLD}${CYAN}Cardano AI${RESET}  ${DIM}\u2014 Wallet skills for AI agents${RESET}`);
  console.log();
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
showBanner();

console.log(`${DIM}Delegating to skills CLI...${RESET}`);
console.log();

try {
  execSync("npx -y skills add IndigoProtocol/cardano-ai", {
    stdio: "inherit",
  });
  console.log();
  console.log(`${GREEN}${BOLD}Done!${RESET} Cardano skills installed successfully.`);
  console.log();
} catch (err) {
  console.error(`${RED}Failed to install skills.${RESET}`);
  console.error(`${DIM}You can install manually: npx skills add IndigoProtocol/cardano-ai${RESET}`);
  process.exit(1);
}

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const registryPath = join(root, "ecosystem", "registry.json");
const examplesDir = join(root, "examples");

const allowedTypes = new Set([
  "sdk",
  "runtime",
  "transport",
  "adapter",
  "tool",
  "integration",
  "example",
]);

const allowedStatuses = new Set(["official", "community", "experimental"]);
const requiredFields = [
  "name",
  "type",
  "description",
  "url",
  "license",
  "maintainer",
  "status",
];

const errors = [];

function fail(message) {
  errors.push(message);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateRegistry(registry) {
  if (registry === null || typeof registry !== "object" || Array.isArray(registry)) {
    fail("registry.json must contain a JSON object");
    return;
  }

  if (registry.version !== 1) {
    fail("registry.json must set version to 1");
  }

  if (!Array.isArray(registry.entries)) {
    fail("registry.json must contain an entries array");
    return;
  }

  const seen = new Set();

  registry.entries.forEach((entry, index) => {
    const label = `entries[${index}]`;

    if (entry === null || typeof entry !== "object" || Array.isArray(entry)) {
      fail(`${label} must be an object`);
      return;
    }

    for (const field of requiredFields) {
      if (!isNonEmptyString(entry[field])) {
        fail(`${label}.${field} must be a non-empty string`);
      }
    }

    if (isNonEmptyString(entry.name)) {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.name)) {
        fail(`${label}.name must be lowercase kebab-case`);
      }
      if (seen.has(entry.name)) {
        fail(`${label}.name duplicates "${entry.name}"`);
      }
      seen.add(entry.name);
    }

    if (isNonEmptyString(entry.type) && !allowedTypes.has(entry.type)) {
      fail(`${label}.type must be one of ${[...allowedTypes].join(", ")}`);
    }

    if (isNonEmptyString(entry.status) && !allowedStatuses.has(entry.status)) {
      fail(`${label}.status must be one of ${[...allowedStatuses].join(", ")}`);
    }

    if (isNonEmptyString(entry.url)) {
      try {
        const url = new URL(entry.url);
        if (url.protocol !== "https:") {
          fail(`${label}.url must use https`);
        }
      } catch {
        fail(`${label}.url must be a valid URL`);
      }
    }

    if (entry.language !== undefined && !isNonEmptyString(entry.language)) {
      fail(`${label}.language must be a non-empty string when present`);
    }
  });
}

function validateExamples() {
  if (!existsSync(examplesDir)) {
    return;
  }

  for (const entry of readdirSync(examplesDir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith(".")) {
      continue;
    }

    const readme = join(examplesDir, entry.name, "README.md");
    if (!existsSync(readme)) {
      fail(`examples/${entry.name} is missing README.md`);
    }
  }
}

let registry;
try {
  registry = JSON.parse(readFileSync(registryPath, "utf8"));
} catch (error) {
  console.error(`Failed to read ecosystem/registry.json: ${error.message}`);
  process.exit(1);
}

validateRegistry(registry);
validateExamples();

if (errors.length > 0) {
  console.error("Validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Validated ${registry.entries.length} ecosystem entries.`);

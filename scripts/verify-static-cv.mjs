import { readFileSync } from 'node:fs';

const defaultCvArtifactPath = 'dist/dpardox/browser/cv/index.html';
const requiredFragments = [
  '<html lang="es"',
  '<title>Donovan Pardo · Senior Angular Developer</title>',
  '<meta name="description" content="CV de Donovan Pardo, Senior Angular Developer con liderazgo técnico hands-on.">',
  '<link rel="canonical" href="https://dpardox.com/cv">',
  'Currículum profesional',
  'Noviembre de 2017',
  'Marzo de 2016',
  'Octubre de 2012',
];

verifyStaticCv();

function verifyStaticCv() {
  const cvArtifactPath = process.argv[2] ?? defaultCvArtifactPath;
  const cvArtifact = readFileSync(cvArtifactPath, 'utf8');

  for (const requiredFragment of requiredFragments) {
    if (cvArtifact.includes(requiredFragment)) continue;

    throw new Error(`Static CV artifact is missing: ${requiredFragment}`);
  }

  if (cvArtifact.includes('Page not found · GitHub Pages')) {
    throw new Error('Static CV artifact contains the GitHub Pages not-found response.');
  }

  console.log(`Static CV artifact verified at ${cvArtifactPath}.`);
}

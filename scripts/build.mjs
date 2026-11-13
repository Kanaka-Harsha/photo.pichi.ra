import { spawn } from 'node:child_process';

const env = { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' };

function runCmd(args) {
  return new Promise((resolve, reject) => {
    const cp = spawn('npx', ['astro', ...args], { stdio: 'inherit', shell: true, env });
    cp.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Astro command failed with exit code ${code}`));
    });
  });
}

try {
  console.log('Running typecheck (astro check)...');
  await runCmd(['check']);
  console.log('Building static production site (astro build)...');
  await runCmd(['build']);
  console.log('Build complete successfully.');
} catch (err) {
  console.error(err);
  process.exit(1);
}

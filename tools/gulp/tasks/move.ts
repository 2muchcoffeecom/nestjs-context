import { dest, src, task } from 'gulp';
import { join } from 'path';
import { samplePath } from '../config';
import { getDirs } from '../util/task-helpers';

/**
 * Moves the compiled nest files into the `samples/*` dirs.
 */
function move() {
  const samplesDirs = getDirs(samplePath);
  const distFiles = src(['node_modules/@2muchcoffee/**/*']);

  return samplesDirs.reduce(
    (distFile, dir) => distFile.pipe(dest(join(dir, '/node_modules/@2muchcoffee'))),
    distFiles,
  );
}

task('move', move);

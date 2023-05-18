import type { ChildProcess } from 'child_process';
import { spawn } from 'child_process';
import { projectRoot } from './paths';

export const withTaskName = <T>(name: string, fn: T): T & { displayName: string } =>
  Object.assign(fn as T & { displayName: string }, { displayName: name });

export const run = async(command: string): Promise<void> => {
  return new Promise<void>((resolve) => {
    const [cmd, ...args] = command.split(' ');

    const app: ChildProcess = spawn(cmd, args, {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true
    });
    app.on('close', resolve);
  });
};

export const pathRewriter = (format: string) => {
  return (id: string): string => {
    id = id.replace(/@dk-plus/g, `dk-plus/${format}`);
    return id;
  };
};

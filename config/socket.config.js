import { io } from 'socket.io-client';
import { envs } from './envs';

export const socket = io(envs.DEV);
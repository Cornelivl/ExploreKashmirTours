import { createTRPCReact } from '@trpc/react-query';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

import type { AppRouter } from '@repo/api';

// Create the tRPC client with explicit type annotation
export const trpc = createTRPCReact<AppRouter>();

// Types for input and output
export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;

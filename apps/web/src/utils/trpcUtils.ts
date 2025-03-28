// This file contains type definitions to assist with tRPC in a monorepo setup
import type { AppRouter } from '@repo/api';
import type { createTRPCReact } from '@trpc/react-query';

// Export the type of the tRPC client
export type TRPCClient = ReturnType<typeof createTRPCReact<AppRouter>>; 
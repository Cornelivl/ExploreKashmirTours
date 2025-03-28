import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@repo/api';
import type { TRPCClient } from './trpcUtils';

// Create the tRPC client with type annotation to avoid reference errors
export const trpc: TRPCClient = createTRPCReact<AppRouter>();

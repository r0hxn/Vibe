import { projectsRouter } from '@/modules/projects/procedures';
import { createTRPCRouter } from '../init';
import { messagesRouter } from '@/modules/messages/procedures';

export const appRouter = createTRPCRouter({
    messages: messagesRouter,
    projects: projectsRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;
import { authMiddleware } from '@/middlewares/auth.middleware.ts'
import { authRoutes } from '@/modules/auth/routes/auth.routes.ts'
import { clientsRoutes } from '@/modules/clients/routes/clients.routes.ts'
import type { RouteRecordTyped } from '@/types/core/router/router.model.ts'

export const routes: RouteRecordTyped[] = [
	{
		path: '',
		meta: {
			middleware: [authMiddleware],
		},
		component: () => import('@/components/layout/AppLayout.vue'),
		children: [
			{
				path: '',
				name: 'index',
				props: {},
				redirect: {
					name: 'clients-overview',
				},
			},
			/**
			 * Authenticated routes
			 */
			...clientsRoutes,
		],
	},
	/**
	 * Unauthenticated routes
	 */
	...authRoutes,
	{
		path: '/:catchAll(.*)',
		name: '404',
		redirect: {
			name: 'index',
		},
	},
]

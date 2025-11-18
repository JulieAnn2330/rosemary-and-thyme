export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.CQAw4Yba.js",app:"_app/immutable/entry/app.CDxZs6Zf.js",imports:["_app/immutable/entry/start.CQAw4Yba.js","_app/immutable/chunks/CW0a1ec6.js","_app/immutable/chunks/BY9jl7ad.js","_app/immutable/chunks/Bcz0RvV-.js","_app/immutable/chunks/CnrV899X.js","_app/immutable/chunks/0J_xpCIS.js","_app/immutable/chunks/DVxofn1X.js","_app/immutable/chunks/T5ekKZSH.js","_app/immutable/entry/app.CDxZs6Zf.js","_app/immutable/chunks/Bcz0RvV-.js","_app/immutable/chunks/CnrV899X.js","_app/immutable/chunks/0J_xpCIS.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BY9jl7ad.js","_app/immutable/chunks/DVxofn1X.js","_app/immutable/chunks/T5ekKZSH.js","_app/immutable/chunks/Hih84pwi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/recipes",
				pattern: /^\/api\/recipes\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/recipes/_server.ts.js'))
			},
			{
				id: "/api/recipes/[id]",
				pattern: /^\/api\/recipes\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: __memo(() => import('./entries/endpoints/api/recipes/_id_/_server.ts.js'))
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/recipes",
				pattern: /^\/recipes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/recipes/new",
				pattern: /^\/recipes\/new\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

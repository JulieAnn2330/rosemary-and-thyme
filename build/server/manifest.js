const manifest = (() => {
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
		client: {start:"_app/immutable/entry/start.DFo10Ve1.js",app:"_app/immutable/entry/app.CGQnUgWd.js",imports:["_app/immutable/entry/start.DFo10Ve1.js","_app/immutable/chunks/D4ApS8ik.js","_app/immutable/chunks/CD5xyplM.js","_app/immutable/chunks/ACnDxm1I.js","_app/immutable/chunks/Cwp81dEq.js","_app/immutable/chunks/Wq_yPFHN.js","_app/immutable/chunks/BnNVR4vu.js","_app/immutable/entry/app.CGQnUgWd.js","_app/immutable/chunks/ACnDxm1I.js","_app/immutable/chunks/Cwp81dEq.js","_app/immutable/chunks/Wq_yPFHN.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CD5xyplM.js","_app/immutable/chunks/BnNVR4vu.js","_app/immutable/chunks/H9urRHzg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DO39fkxI.js')),
			__memo(() => import('./chunks/1-BGBIoZ8y.js')),
			__memo(() => import('./chunks/3-DkHWuP1z.js')),
			__memo(() => import('./chunks/4-9JJ6Pri6.js')),
			__memo(() => import('./chunks/5-BP4ywLji.js')),
			__memo(() => import('./chunks/6-DkxevHDD.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/api/recipes",
				pattern: /^\/api\/recipes\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-pEz9EmzU.js'))
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/recipes",
				pattern: /^\/recipes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/recipes/new",
				pattern: /^\/recipes\/new\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
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

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map

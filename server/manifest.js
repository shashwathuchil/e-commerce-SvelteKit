const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "e-commerce-SvelteKit/_app",
	assets: new Set(["favicon.svg","images/headphones.jpg","images/smartwatch.jpg","images/speaker.jpg"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.CiiKahXZ.js",app:"_app/immutable/entry/app.TeSXaJn8.js",imports:["_app/immutable/entry/start.CiiKahXZ.js","_app/immutable/chunks/DfoeBrMH.js","_app/immutable/chunks/H5JPiC5a.js","_app/immutable/chunks/CjJuquWN.js","_app/immutable/chunks/C2VKwU6q.js","_app/immutable/chunks/Bf1z0gfN.js","_app/immutable/entry/app.TeSXaJn8.js","_app/immutable/chunks/CjJuquWN.js","_app/immutable/chunks/C2VKwU6q.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/H5JPiC5a.js","_app/immutable/chunks/Bf1z0gfN.js","_app/immutable/chunks/D0Ox_JdE.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Dxi2lEDo.js')),
			__memo(() => import('./chunks/1-CePEnIVq.js')),
			__memo(() => import('./chunks/2-q9066LhU.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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

const base = "/e-commerce-SvelteKit";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map

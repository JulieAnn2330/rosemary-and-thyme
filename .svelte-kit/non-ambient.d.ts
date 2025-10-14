
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/recipes" | "/api/test" | "/app" | "/login" | "/recipes" | "/recipes/new" | "/signup";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/api": Record<string, never>;
			"/api/recipes": Record<string, never>;
			"/api/test": Record<string, never>;
			"/app": Record<string, never>;
			"/login": Record<string, never>;
			"/recipes": Record<string, never>;
			"/recipes/new": Record<string, never>;
			"/signup": Record<string, never>
		};
		Pathname(): "/" | "/api" | "/api/" | "/api/recipes" | "/api/recipes/" | "/api/test" | "/api/test/" | "/app" | "/app/" | "/login" | "/login/" | "/recipes" | "/recipes/" | "/recipes/new" | "/recipes/new/" | "/signup" | "/signup/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}
export const manifest = {
	appDir: "_app",
	assets: new Set(["drop_down_arrow.png","hall-pass-preview.png","hall_pass_bubble.png","hamburgermenu.png","iPhone-bg-top.png","iPhone-bg.png","indeed-logo.png","linkedin-logo.png","logo.png","logozoom.png","me.png","natura-preview.png","natura_bubble.png","twitter-logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-fea77118.js","imports":["_app/immutable/start-fea77118.js","_app/immutable/chunks/index-9af51e0a.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 2
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

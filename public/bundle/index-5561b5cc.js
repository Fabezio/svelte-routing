
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as validate_slots, e as element, f as add_location, h as insert_dev, n as noop, l as detach_dev } from './main-55816986.js';

/* src/pages/index.svelte generated by Svelte v3.24.0 */

const file = "src/pages/index.svelte";

function create_fragment(ctx) {
	let h1;

	const block = {
		c: function create() {
			h1 = element("h1");
			h1.textContent = "Home page";
			add_location(h1, file, 4, 0, 23);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Pages> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Pages", $$slots, []);
	return [];
}

class Pages extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Pages",
			options,
			id: create_fragment.name
		});
	}
}

export default Pages;
//# sourceMappingURL=index-5561b5cc.js.map

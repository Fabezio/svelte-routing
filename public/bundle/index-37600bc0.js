
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, a as validate_slots, g as globals, e as element, b as space, t as text, f as add_location, h as insert_dev, j as append_dev, k as set_data_dev, n as noop, l as detach_dev } from './main-af2a533f.js';

/* src/pages/index.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/pages/index.svelte";

function create_fragment(ctx) {
	let h1;
	let t1;
	let p;
	let t2;

	const block = {
		c: function create() {
			h1 = element("h1");
			h1.textContent = "Home page";
			t1 = space();
			p = element("p");
			t2 = text(/*$window*/ ctx[0]);
			add_location(h1, file, 4, 0, 45);
			add_location(p, file, 5, 0, 64);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t2);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$window*/ 1) set_data_dev(t2, /*$window*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p);
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

function instance($$self, $$props, $$invalidate) {
	let $window;
	validate_store(window, "window");
	component_subscribe($$self, window, $$value => $$invalidate(0, $window = $$value));
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Pages> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Pages", $$slots, []);
	$$self.$capture_state = () => ({ $window });
	 console.log(window);
	return [$window];
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
//# sourceMappingURL=index-37600bc0.js.map

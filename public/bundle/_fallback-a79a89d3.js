
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, a as validate_slots, r as route, g as globals, e as element, b as space, t as text, f as add_location, h as insert_dev, j as append_dev, k as set_data_dev, n as noop, l as detach_dev } from './main-be3f93be.js';

/* src/pages/_fallback.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/pages/_fallback.svelte";

function create_fragment(ctx) {
	let h1;
	let t1;
	let p;
	let t2;
	let code;
	let t3_value = /*$route*/ ctx[0].leftover + "";
	let t3;
	let t4;

	const block = {
		c: function create() {
			h1 = element("h1");
			h1.textContent = "404: missing";
			t1 = space();
			p = element("p");
			t2 = text("The path ");
			code = element("code");
			t3 = text(t3_value);
			t4 = text(" was not found.");
			add_location(h1, file, 5, 0, 97);
			add_location(code, file, 6, 12, 131);
			add_location(p, file, 6, 0, 119);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t2);
			append_dev(p, code);
			append_dev(code, t3);
			append_dev(p, t4);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$route*/ 1 && t3_value !== (t3_value = /*$route*/ ctx[0].leftover + "")) set_data_dev(t3, t3_value);
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
	let $route;
	validate_store(route, "route");
	component_subscribe($$self, route, $$value => $$invalidate(0, $route = $$value));
	console.log("route", $route);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Fallback> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Fallback", $$slots, []);
	$$self.$capture_state = () => ({ route, $route });
	return [$route];
}

class Fallback extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Fallback",
			options,
			id: create_fragment.name
		});
	}
}

export default Fallback;
//# sourceMappingURL=_fallback-a79a89d3.js.map


(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, a as validate_slots, r as route, g as globals, b as create_component, e as space, f as element, t as text, h as add_location, m as mount_component, j as insert_dev, k as append_dev, l as set_data_dev, n as transition_in, o as transition_out, p as destroy_component, q as detach_dev } from './main-cbb6e346.js';
import { H as Head } from './Head-e11e4926.js';

/* src/pages/_fallback.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/pages/_fallback.svelte";

function create_fragment(ctx) {
	let head;
	let t0;
	let p;
	let t1;
	let code;
	let t2_value = /*$route*/ ctx[0].leftover + "";
	let t2;
	let t3;
	let current;

	head = new Head({
			props: { head: "404: missing" },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(head.$$.fragment);
			t0 = space();
			p = element("p");
			t1 = text("The path ");
			code = element("code");
			t2 = text(t2_value);
			t3 = text(" was not found.");
			add_location(code, file, 9, 12, 206);
			add_location(p, file, 9, 0, 194);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(head, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t1);
			append_dev(p, code);
			append_dev(code, t2);
			append_dev(p, t3);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*$route*/ 1) && t2_value !== (t2_value = /*$route*/ ctx[0].leftover + "")) set_data_dev(t2, t2_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(head.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(head.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(head, detaching);
			if (detaching) detach_dev(t0);
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
	$$self.$capture_state = () => ({ route, Head, $route });
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
//# sourceMappingURL=_fallback-9e9cea7e.js.map

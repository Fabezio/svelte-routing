
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as validate_slots, e as space, f as element, t as text, u as attr_dev, h as add_location, j as insert_dev, k as append_dev, l as set_data_dev, w as noop, q as detach_dev } from './main-7567bf57.js';

/* src/Head.svelte generated by Svelte v3.24.0 */

const file = "src/Head.svelte";

function create_fragment(ctx) {
	let title_value;
	let t0;
	let h1;
	let t2;
	let h2;
	let t3;
	document.title = title_value = "Svelte Routing Examples - " + /*head*/ ctx[0];

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			h1.textContent = "Svelte Routing Examples";
			t2 = space();
			h2 = element("h2");
			t3 = text(/*head*/ ctx[0]);
			attr_dev(h1, "class", "svelte-o8emum");
			add_location(h1, file, 8, 0, 133);
			attr_dev(h2, "class", "svelte-o8emum");
			add_location(h2, file, 9, 0, 166);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t3);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*head*/ 1 && title_value !== (title_value = "Svelte Routing Examples - " + /*head*/ ctx[0])) {
				document.title = title_value;
			}

			if (dirty & /*head*/ 1) set_data_dev(t3, /*head*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(h2);
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
	let { head = "page title" } = $$props;
	const writable_props = ["head"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Head> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Head", $$slots, []);

	$$self.$set = $$props => {
		if ("head" in $$props) $$invalidate(0, head = $$props.head);
	};

	$$self.$capture_state = () => ({ head });

	$$self.$inject_state = $$props => {
		if ("head" in $$props) $$invalidate(0, head = $$props.head);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [head];
}

class Head extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { head: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Head",
			options,
			id: create_fragment.name
		});
	}

	get head() {
		throw new Error("<Head>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set head(value) {
		throw new Error("<Head>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Head as H };
//# sourceMappingURL=Head-74c48667.js.map

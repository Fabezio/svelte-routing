
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as validate_slots, b as space, e as element, t as text, f as add_location, h as insert_dev, j as append_dev, k as set_data_dev, n as noop, l as detach_dev, y as create_component, z as mount_component, B as transition_in, C as transition_out, D as destroy_component } from './main-06afde50.js';

/* src/Head.svelte generated by Svelte v3.24.0 */

const file = "src/Head.svelte";

function create_fragment(ctx) {
	let title_value;
	let t0;
	let h1;
	let t1;
	document.title = title_value = /*head*/ ctx[0];

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text(/*head*/ ctx[0]);
			add_location(h1, file, 8, 0, 107);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*head*/ 1 && title_value !== (title_value = /*head*/ ctx[0])) {
				document.title = title_value;
			}

			if (dirty & /*head*/ 1) set_data_dev(t1, /*head*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
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

/* src/pages/about.svelte generated by Svelte v3.24.0 */

function create_fragment$1(ctx) {
	let head;
	let current;

	head = new Head({
			props: { head: "About", page: true },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(head.$$.fragment);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(head, target, anchor);
			current = true;
		},
		p: noop,
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
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("About", $$slots, []);
	$$self.$capture_state = () => ({ Head });
	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment$1.name
		});
	}
}

export default About;
//# sourceMappingURL=about-f1b05335.js.map

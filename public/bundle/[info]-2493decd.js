
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as validate_slots, x as url, b as create_component, m as mount_component, n as transition_in, o as transition_out, p as destroy_component } from './main-d9000cab.js';
import { H as Head } from './Head-01460ac6.js';

/* src/pages/blog/[slug]/[info].svelte generated by Svelte v3.24.0 */

function create_fragment(ctx) {
	let head;
	let current;

	head = new Head({
			props: { head: /*info*/ ctx[0] },
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
		p: function update(ctx, [dirty]) {
			const head_changes = {};
			if (dirty & /*info*/ 1) head_changes.head = /*info*/ ctx[0];
			head.$set(head_changes);
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
	let { info } = $$props;
	const writable_props = ["info"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Binfou5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Binfou5D", $$slots, []);

	$$self.$set = $$props => {
		if ("info" in $$props) $$invalidate(0, info = $$props.info);
	};

	$$self.$capture_state = () => ({ url, Head, info });

	$$self.$inject_state = $$props => {
		if ("info" in $$props) $$invalidate(0, info = $$props.info);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [info];
}

class U5Binfou5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { info: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Binfou5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*info*/ ctx[0] === undefined && !("info" in props)) {
			console.warn("<U5Binfou5D> was created without expected prop 'info'");
		}
	}

	get info() {
		throw new Error("<U5Binfou5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set info(value) {
		throw new Error("<U5Binfou5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Binfou5D;
//# sourceMappingURL=[info]-2493decd.js.map

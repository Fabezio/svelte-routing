
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, a as validate_slots, b as create_component, e as space, f as element, t as text, z as attr_dev, h as add_location, m as mount_component, j as insert_dev, k as append_dev, n as transition_in, o as transition_out, p as destroy_component, q as detach_dev } from './main-90965aed.js';
import { H as Head } from './Head-7cfd9711.js';

/* src/pages/blog/[slug]/index.svelte generated by Svelte v3.24.0 */
const file = "src/pages/blog/[slug]/index.svelte";

function create_fragment(ctx) {
	let head;
	let t0;
	let a;
	let t1;
	let a_href_value;
	let current;

	head = new Head({
			props: { head: /*slug*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(head.$$.fragment);
			t0 = space();
			a = element("a");
			t1 = text("see more");
			attr_dev(a, "href", a_href_value = /*$url*/ ctx[1](`blog/`));
			add_location(a, file, 10, 0, 168);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(head, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, a, anchor);
			append_dev(a, t1);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const head_changes = {};
			if (dirty & /*slug*/ 1) head_changes.head = /*slug*/ ctx[0];
			head.$set(head_changes);

			if (!current || dirty & /*$url*/ 2 && a_href_value !== (a_href_value = /*$url*/ ctx[1](`blog/`))) {
				attr_dev(a, "href", a_href_value);
			}
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
			if (detaching) detach_dev(a);
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
	let $url;
	validate_store(url, "url");
	component_subscribe($$self, url, $$value => $$invalidate(1, $url = $$value));
	let { slug } = $$props;
	const writable_props = ["slug"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bslugu5D", $$slots, []);

	$$self.$set = $$props => {
		if ("slug" in $$props) $$invalidate(0, slug = $$props.slug);
	};

	$$self.$capture_state = () => ({ Head, slug, $url });

	$$self.$inject_state = $$props => {
		if ("slug" in $$props) $$invalidate(0, slug = $$props.slug);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [slug, $url];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { slug: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*slug*/ ctx[0] === undefined && !("slug" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'slug'");
		}
	}

	get slug() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
//# sourceMappingURL=index-07194af2.js.map


(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as validate_slots, u as url, e as element, b as space, t as text, f as add_location, p as attr_dev, h as insert_dev, j as append_dev, n as noop, l as detach_dev } from './main-e8a7b0a6.js';

/* src/pages/blog/index.svelte generated by Svelte v3.24.0 */
const file = "src/pages/blog/index.svelte";

function create_fragment(ctx) {
	let h1;
	let t1;
	let li;
	let t2;
	let li_href_value;

	const block = {
		c: function create() {
			h1 = element("h1");
			h1.textContent = "Blog page";
			t1 = space();
			li = element("li");
			t2 = text("machin");
			add_location(h1, file, 5, 0, 81);
			attr_dev(li, "href", li_href_value = url(path));
			add_location(li, file, 7, 0, 101);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, li, anchor);
			append_dev(li, t2);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(li);
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
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Blog", $$slots, []);
	$$self.$capture_state = () => ({ url });
	return [];
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment.name
		});
	}
}

export default Blog;
//# sourceMappingURL=index-3e77ae30.js.map

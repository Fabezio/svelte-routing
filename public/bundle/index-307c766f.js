
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, a as validate_slots, u as url, g as globals, e as element, b as space, t as text, f as add_location, p as attr_dev, h as insert_dev, j as append_dev, n as noop, l as detach_dev } from './main-26188d03.js';

/* src/pages/blog/index.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/pages/blog/index.svelte";

function create_fragment(ctx) {
	let h1;
	let t1;
	let a0;
	let t2;
	let a0_href_value;
	let br0;
	let t3;
	let a1;
	let t4;
	let a1_href_value;
	let br1;
	let t5;
	let a2;
	let t6;
	let a2_href_value;

	const block = {
		c: function create() {
			h1 = element("h1");
			h1.textContent = "Blog page";
			t1 = space();
			a0 = element("a");
			t2 = text("machin");
			br0 = element("br");
			t3 = space();
			a1 = element("a");
			t4 = text("truc");
			br1 = element("br");
			t5 = space();
			a2 = element("a");
			t6 = text("bidule");
			add_location(h1, file, 6, 0, 103);
			attr_dev(a0, "href", a0_href_value = /*$url*/ ctx[0]("blog/machin"));
			add_location(a0, file, 8, 0, 123);
			add_location(br0, file, 8, 40, 163);
			attr_dev(a1, "href", a1_href_value = /*$url*/ ctx[0]("blog/truc"));
			add_location(a1, file, 9, 0, 168);
			add_location(br1, file, 9, 36, 204);
			attr_dev(a2, "href", a2_href_value = /*$url*/ ctx[0]("blog/bidule"));
			add_location(a2, file, 10, 0, 209);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, a0, anchor);
			append_dev(a0, t2);
			insert_dev(target, br0, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, a1, anchor);
			append_dev(a1, t4);
			insert_dev(target, br1, anchor);
			insert_dev(target, t5, anchor);
			insert_dev(target, a2, anchor);
			append_dev(a2, t6);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$url*/ 1 && a0_href_value !== (a0_href_value = /*$url*/ ctx[0]("blog/machin"))) {
				attr_dev(a0, "href", a0_href_value);
			}

			if (dirty & /*$url*/ 1 && a1_href_value !== (a1_href_value = /*$url*/ ctx[0]("blog/truc"))) {
				attr_dev(a1, "href", a1_href_value);
			}

			if (dirty & /*$url*/ 1 && a2_href_value !== (a2_href_value = /*$url*/ ctx[0]("blog/bidule"))) {
				attr_dev(a2, "href", a2_href_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(a0);
			if (detaching) detach_dev(br0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(a1);
			if (detaching) detach_dev(br1);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(a2);
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
	component_subscribe($$self, url, $$value => $$invalidate(0, $url = $$value));
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Blog", $$slots, []);
	$$self.$capture_state = () => ({ url, $url });
	 console.log(url);
	return [$url];
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
//# sourceMappingURL=index-307c766f.js.map


(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, a as validate_slots, x as url, g as globals, b as create_component, e as space, f as element, t as text, z as attr_dev, h as add_location, m as mount_component, j as insert_dev, k as append_dev, n as transition_in, o as transition_out, p as destroy_component, q as detach_dev } from './main-8660e262.js';
import { H as Head } from './Head-91da5a7d.js';

/* src/pages/blog/index.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/pages/blog/index.svelte";

function create_fragment(ctx) {
	let head;
	let t0;
	let a0;
	let t1;
	let a0_href_value;
	let br0;
	let t2;
	let a1;
	let t3;
	let a1_href_value;
	let br1;
	let t4;
	let a2;
	let t5;
	let a2_href_value;
	let current;

	head = new Head({
			props: { head: "Blog page" },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(head.$$.fragment);
			t0 = space();
			a0 = element("a");
			t1 = text("machin");
			br0 = element("br");
			t2 = space();
			a1 = element("a");
			t3 = text("truc");
			br1 = element("br");
			t4 = space();
			a2 = element("a");
			t5 = text("bidule");
			attr_dev(a0, "href", a0_href_value = /*$url*/ ctx[0]("blog/machin"));
			add_location(a0, file, 9, 0, 169);
			add_location(br0, file, 9, 40, 209);
			attr_dev(a1, "href", a1_href_value = /*$url*/ ctx[0]("blog/truc"));
			add_location(a1, file, 10, 0, 214);
			add_location(br1, file, 10, 36, 250);
			attr_dev(a2, "href", a2_href_value = /*$url*/ ctx[0]("blog/bidule"));
			add_location(a2, file, 11, 0, 255);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(head, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, a0, anchor);
			append_dev(a0, t1);
			insert_dev(target, br0, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, a1, anchor);
			append_dev(a1, t3);
			insert_dev(target, br1, anchor);
			insert_dev(target, t4, anchor);
			insert_dev(target, a2, anchor);
			append_dev(a2, t5);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*$url*/ 1 && a0_href_value !== (a0_href_value = /*$url*/ ctx[0]("blog/machin"))) {
				attr_dev(a0, "href", a0_href_value);
			}

			if (!current || dirty & /*$url*/ 1 && a1_href_value !== (a1_href_value = /*$url*/ ctx[0]("blog/truc"))) {
				attr_dev(a1, "href", a1_href_value);
			}

			if (!current || dirty & /*$url*/ 1 && a2_href_value !== (a2_href_value = /*$url*/ ctx[0]("blog/bidule"))) {
				attr_dev(a2, "href", a2_href_value);
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
			if (detaching) detach_dev(a0);
			if (detaching) detach_dev(br0);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(a1);
			if (detaching) detach_dev(br1);
			if (detaching) detach_dev(t4);
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
	$$self.$capture_state = () => ({ url, Head, $url });
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
//# sourceMappingURL=index-d72f08d4.js.map

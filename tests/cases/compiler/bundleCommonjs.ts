// @module: commonjs
// @outFile: bundleCommonjs_bundle.js
// @bundle: bundleCommonjs_file1

// @Filename: bundleCommonjs_file0.ts
export class Foo {
	static CONSTANT = "Foo";
}

export default function assert(value: boolean) {
	if (!value) throw new Error("Assertion failed!");
}


// @Filename: bundleCommonjs_file1.ts
import {Foo, default as assert} from "./bundleCommonjs_file0";
assert(Foo.CONSTANT === "Foo");

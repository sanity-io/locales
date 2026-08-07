---
"@sanity/locale-be-by": patch
"@sanity/locale-ca-es": patch
"@sanity/locale-cs-cz": patch
"@sanity/locale-da-dk": patch
"@sanity/locale-de-de": patch
"@sanity/locale-es-es": patch
"@sanity/locale-fi-fi": patch
"@sanity/locale-fr-fr": patch
"@sanity/locale-hr-hr": patch
"@sanity/locale-hu-hu": patch
"@sanity/locale-is-is": patch
"@sanity/locale-it-it": patch
"@sanity/locale-ja-jp": patch
"@sanity/locale-ka-ge": patch
"@sanity/locale-kn-in": patch
"@sanity/locale-ko-kr": patch
"@sanity/locale-nb-no": patch
"@sanity/locale-nl-nl": patch
"@sanity/locale-nn-no": patch
"@sanity/locale-pl-pl": patch
"@sanity/locale-pt-br": patch
"@sanity/locale-pt-pt": patch
"@sanity/locale-ro-ro": patch
"@sanity/locale-ru-kz": patch
"@sanity/locale-sv-se": patch
"@sanity/locale-th-th": patch
"@sanity/locale-tr-tr": patch
"@sanity/locale-uk-ua": patch
"@sanity/locale-vi-vn": patch
"@sanity/locale-zh-hans": patch
"@sanity/locale-zh-hant": patch
---

Modernize the build and release toolchain: build with `@sanity/pkg-utils` v12, publish only `dist` to npm (no more `src` or `CHANGELOG.md` in the tarball), declare `engines.node` matching the oldest supported `sanity` release, add `publishConfig.exports`, and ship content-hashed chunks instead of `_chunks-es`/`_chunks-cjs` folders.

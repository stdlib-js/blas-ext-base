# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-01-20)

<section class="packages">

### Packages

<section class="package" id="blas-ext-base-unreleased">

#### [@stdlib/blas/ext/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base)

<details>

<section class="features">

##### Features

-   [`0eac1eb`](https://github.com/stdlib-js/stdlib/commit/0eac1ebde891ba75b8c4939119a6c4b7c88ceed8) - update namespace TypeScript declarations [(#4809)](https://github.com/stdlib-js/stdlib/pull/4809)
-   [`e661213`](https://github.com/stdlib-js/stdlib/commit/e66121352ef767cdb87d19e938b1eccf7970fa3a) - update namespace TypeScript declarations [(#4706)](https://github.com/stdlib-js/stdlib/pull/4706)
-   [`1a202e3`](https://github.com/stdlib-js/stdlib/commit/1a202e3605b10cd01bf9654f8356c72c5c8a8186) - update namespace TypeScript declarations [(#3916)](https://github.com/stdlib-js/stdlib/pull/3916)
-   [`a64ea86`](https://github.com/stdlib-js/stdlib/commit/a64ea86886d159e09b37e8591fc53d9944618204) - update namespace TypeScript declarations [(#3371)](https://github.com/stdlib-js/stdlib/pull/3371)
-   [`9818fa6`](https://github.com/stdlib-js/stdlib/commit/9818fa6dd8c90e045a147bfd1ba83cb1f693d17b) - update namespace TypeScript declarations [(#3259)](https://github.com/stdlib-js/stdlib/pull/3259)
-   [`d649da5`](https://github.com/stdlib-js/stdlib/commit/d649da5c2f30c5cb459d6c43215ce6066f5c7483) - update namespace TypeScript declarations [(#3243)](https://github.com/stdlib-js/stdlib/pull/3243)
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)
-   [`8dead56`](https://github.com/stdlib-js/stdlib/commit/8dead56dd7d25624eb7619ccb785111cf678f09d) - update namespace TypeScript declarations [(#2181)](https://github.com/stdlib-js/stdlib/pull/2181 )

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`0eac1eb`](https://github.com/stdlib-js/stdlib/commit/0eac1ebde891ba75b8c4939119a6c4b7c88ceed8): remove `dmax`

    -   To migrate, users should access `dmax` via the `stats/strided` namespace.

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-cfill-unreleased">

#### [@stdlib/blas/ext/base/cfill](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/cfill)

<details>

<section class="features">

##### Features

-   [`f446206`](https://github.com/stdlib-js/stdlib/commit/f4462062a216ceb2131121cbb299525b6b3b17ff) - add C `ndarray` API and refactor `blas/ext/base/zfill` [(#2962)](https://github.com/stdlib-js/stdlib/pull/2962)
-   [`226a6d8`](https://github.com/stdlib-js/stdlib/commit/226a6d802c38bfc6c4fb2afe7453fb1767103034) - add C `ndarray` API to `blas/ext/base/cfill` [(#2925)](https://github.com/stdlib-js/stdlib/pull/2925)
-   [`7e11338`](https://github.com/stdlib-js/stdlib/commit/7e11338ae6642c1389e51557262710bd6ebe44aa) - add `blas/ext/base/zfill` [(#2907)](https://github.com/stdlib-js/stdlib/pull/2907)
-   [`fadff3a`](https://github.com/stdlib-js/stdlib/commit/fadff3a44660678d9ccce8bb101f579ca1913a64) - add `blas/ext/base/cfill` [(#2901)](https://github.com/stdlib-js/stdlib/pull/2901)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`5467341`](https://github.com/stdlib-js/stdlib/commit/54673410322991eb15e9c48c2e6f43912cec3b44) - update C function names in `blas/ext/base/cfill` to prevent name collisions [(#2943)](https://github.com/stdlib-js/stdlib/pull/2943)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dapx-unreleased">

#### [@stdlib/blas/ext/base/dapx](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dapx)

<details>

<section class="features">

##### Features

-   [`a187bfc`](https://github.com/stdlib-js/stdlib/commit/a187bfc1f71912625823d786f7b1234b224b323d) - add C `ndarray` API and refactor `blas/ext/base/dapx` [(#2929)](https://github.com/stdlib-js/stdlib/pull/2929)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`e4de24f`](https://github.com/stdlib-js/stdlib/commit/e4de24f1e086063876214e73f1f6b659dc624eb1) - resolve bugs in addon.c files

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`02cbff3`](https://github.com/stdlib-js/stdlib/commit/02cbff35d876dcea7efd41794f414c7df5eddca4): - `c_dapx()` renamed to `stdlib_strided_dapx()`

    -   - `c_dapx_ndarray()` renamed to `stdlib_strided_dapx_ndarray()`
        All downstream usage of the old `c_dapx*` symbols must be updated to use the new symbols.

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1464](https://github.com/stdlib-js/stdlib/issues/1464)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dapxsum-unreleased">

#### [@stdlib/blas/ext/base/dapxsum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dapxsum)

<details>

<section class="features">

##### Features

-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954)
-   [`dc08755`](https://github.com/stdlib-js/stdlib/commit/dc08755be693a93f1cef11bc0fe13d30829c9392) - add C `ndarray` API and refactor `blas/ext/base/dapxsum` [(#2946)](https://github.com/stdlib-js/stdlib/pull/2946)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dapxsumkbn-unreleased">

#### [@stdlib/blas/ext/base/dapxsumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dapxsumkbn)

<details>

<section class="features">

##### Features

-   [`f1fa458`](https://github.com/stdlib-js/stdlib/commit/f1fa458db16484f740ca8a80095231a31831226b) - add `blas/ext/base/dapxsumkbn-wasm` [(#3204)](https://github.com/stdlib-js/stdlib/pull/3204)
-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954)
-   [`dc08755`](https://github.com/stdlib-js/stdlib/commit/dc08755be693a93f1cef11bc0fe13d30829c9392) - add C `ndarray` API and refactor `blas/ext/base/dapxsum` [(#2946)](https://github.com/stdlib-js/stdlib/pull/2946)
-   [`bc3a86b`](https://github.com/stdlib-js/stdlib/commit/bc3a86bd7570b474ee165594dbb48e389f68fa60) - add C `ndarray` API and refactor `blas/ext/base/dapxsumkbn` [(#2930)](https://github.com/stdlib-js/stdlib/pull/2930)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`3d9c97f`](https://github.com/stdlib-js/stdlib/commit/3d9c97f44999496954f47fac902e4d67aed03425) - add `math/base/speical/abs` in manifest.json of `blas/ext/base/dapxsumkbn` [(#4732)](https://github.com/stdlib-js/stdlib/pull/4732)
-   [`e3bf989`](https://github.com/stdlib-js/stdlib/commit/e3bf9895394d9a4c3db621a8c0491fc18a0fd1ba) - update build configurations and add missing include

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dapxsumkbn-wasm-unreleased">

#### [@stdlib/blas/ext/base/dapxsumkbn-wasm](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dapxsumkbn-wasm)

<details>

<section class="features">

##### Features

-   [`f1fa458`](https://github.com/stdlib-js/stdlib/commit/f1fa458db16484f740ca8a80095231a31831226b) - add `blas/ext/base/dapxsumkbn-wasm` [(#3204)](https://github.com/stdlib-js/stdlib/pull/3204)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dapxsumkbn2-unreleased">

#### [@stdlib/blas/ext/base/dapxsumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dapxsumkbn2)

<details>

<section class="features">

##### Features

-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954)
-   [`2bcce62`](https://github.com/stdlib-js/stdlib/commit/2bcce6265ac56f754e447c3898b74f58710ea4a6) - add C `ndarray` API and refactor `blas/ext/base/dapxsumkbn2` [(#2948)](https://github.com/stdlib-js/stdlib/pull/2948)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dapxsumors-unreleased">

#### [@stdlib/blas/ext/base/dapxsumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dapxsumors)

<details>

<section class="features">

##### Features

-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954)
-   [`bc97fa9`](https://github.com/stdlib-js/stdlib/commit/bc97fa994dbd0e671613e9633a551cdae30fa621) - add C `ndarray` API and refactor `blas/ext/base/dapxsumors` [(#2934)](https://github.com/stdlib-js/stdlib/pull/2934)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dapxsumpw-unreleased">

#### [@stdlib/blas/ext/base/dapxsumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dapxsumpw)

<details>

<section class="features">

##### Features

-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954)
-   [`829713b`](https://github.com/stdlib-js/stdlib/commit/829713b1fd6081cafa25133ac90931d8ba911b5e) - add C `ndarray` API and refactor `blas/ext/base/dapxsumpw` [(#2937)](https://github.com/stdlib-js/stdlib/pull/2937)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dasumpw-unreleased">

#### [@stdlib/blas/ext/base/dasumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dasumpw)

<details>

<section class="features">

##### Features

-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954)
-   [`6fd2e23`](https://github.com/stdlib-js/stdlib/commit/6fd2e23eb246789e43b311eabe9f2fac532175b7) - add C `ndarray` API and refactor `blas/ext/base/dasumpw` [(#2949)](https://github.com/stdlib-js/stdlib/pull/2949)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dcusum-unreleased">

#### [@stdlib/blas/ext/base/dcusum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dcusum)

<details>

<section class="features">

##### Features

-   [`5774557`](https://github.com/stdlib-js/stdlib/commit/5774557e951cb1ae566fc0587cbf03d47b067620) - add C `ndarray` API and refactor `blas/ext/base/dcusumors`
-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`d583804`](https://github.com/stdlib-js/stdlib/commit/d583804fb1d05b8ac4d40e1e897f8682c71e0e2b) - resolve bugs in addon.c

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1471](https://github.com/stdlib-js/stdlib/issues/1471)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dcusumkbn-unreleased">

#### [@stdlib/blas/ext/base/dcusumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dcusumkbn)

<details>

<section class="features">

##### Features

-   [`5774557`](https://github.com/stdlib-js/stdlib/commit/5774557e951cb1ae566fc0587cbf03d47b067620) - add C `ndarray` API and refactor `blas/ext/base/dcusumors`
-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954)
-   [`62a5c3a`](https://github.com/stdlib-js/stdlib/commit/62a5c3ad48fc4b0d2757ecea35ae7893ae452ea6) - add C `ndarray` API and refactor `blas/ext/base/dcusumkbn` [(#2951)](https://github.com/stdlib-js/stdlib/pull/2951)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dcusumkbn2-unreleased">

#### [@stdlib/blas/ext/base/dcusumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dcusumkbn2)

<details>

<section class="features">

##### Features

-   [`5774557`](https://github.com/stdlib-js/stdlib/commit/5774557e951cb1ae566fc0587cbf03d47b067620) - add C `ndarray` API and refactor `blas/ext/base/dcusumors`
-   [`c4172be`](https://github.com/stdlib-js/stdlib/commit/c4172be96f0316ab213bbfe63b9678141a80709e) - add C `ndarray` API and refactor `blas/ext/base/dcusumkbn2` [(#2958)](https://github.com/stdlib-js/stdlib/pull/2958)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`e4de24f`](https://github.com/stdlib-js/stdlib/commit/e4de24f1e086063876214e73f1f6b659dc624eb1) - resolve bugs in addon.c files

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dcusumors-unreleased">

#### [@stdlib/blas/ext/base/dcusumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dcusumors)

<details>

<section class="features">

##### Features

-   [`5774557`](https://github.com/stdlib-js/stdlib/commit/5774557e951cb1ae566fc0587cbf03d47b067620) - add C `ndarray` API and refactor `blas/ext/base/dcusumors`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`04f59a2`](https://github.com/stdlib-js/stdlib/commit/04f59a288780ff5cbaf8516db4122cbb870ced1b) - **fblas/ext/base/dcusumors:** change from `int64` to `double` [(#2085)](https://github.com/stdlib-js/stdlib/pull/2085)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dcusumpw-unreleased">

#### [@stdlib/blas/ext/base/dcusumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dcusumpw)

<details>

<section class="features">

##### Features

-   [`3bd3f48`](https://github.com/stdlib-js/stdlib/commit/3bd3f480c66a81bc012efd838cef6e0cbda52870) - add C `ndarray` API and refactor `blas/ext/base/dcusumpw` [(#2981)](https://github.com/stdlib-js/stdlib/pull/2981)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1475](https://github.com/stdlib-js/stdlib/issues/1475)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dfill-unreleased">

#### [@stdlib/blas/ext/base/dfill](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dfill)

<details>

<section class="features">

##### Features

-   [`f446206`](https://github.com/stdlib-js/stdlib/commit/f4462062a216ceb2131121cbb299525b6b3b17ff) - add C `ndarray` API and refactor `blas/ext/base/zfill` [(#2962)](https://github.com/stdlib-js/stdlib/pull/2962)
-   [`040a335`](https://github.com/stdlib-js/stdlib/commit/040a33583774b120b5e486a072cff397fdb1d273) - add a C `ndarray` API, refactor, and clean-up

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`1f49ad9`](https://github.com/stdlib-js/stdlib/commit/1f49ad98dfcee0a15a8bd3873508f2eaedd88807) - update C function names in `blas/ext/base/dfill` to prevent name collisions [(#2944)](https://github.com/stdlib-js/stdlib/pull/2944)
-   [`caf0ebb`](https://github.com/stdlib-js/stdlib/commit/caf0ebb5e542074f2f2ad61f12a6c12221b124ea) - update build configurations and fix argument extraction

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1434](https://github.com/stdlib-js/stdlib/issues/1434)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnanasum-unreleased">

#### [@stdlib/blas/ext/base/dnanasum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnanasum)

<details>

<section class="features">

##### Features

-   [`ea7b344`](https://github.com/stdlib-js/stdlib/commit/ea7b34499a4847bd917e120595a0c677fe8bddb9) - add C `ndarray` API and refactor `blas/ext/base/dnanasum` [(#2984)](https://github.com/stdlib-js/stdlib/pull/2984)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnanasumors-unreleased">

#### [@stdlib/blas/ext/base/dnanasumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnanasumors)

<details>

<section class="features">

##### Features

-   [`6fe012e`](https://github.com/stdlib-js/stdlib/commit/6fe012ee17be4a3fad36642041770de4693ef5a3) - add C `ndarray` API and refactor `blas/ext/base/dnanasumors` [(#2982)](https://github.com/stdlib-js/stdlib/pull/2982)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#3073](https://github.com/stdlib-js/stdlib/issues/3073)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnannsum-unreleased">

#### [@stdlib/blas/ext/base/dnannsum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnannsum)

<details>

<section class="features">

##### Features

-   [`045a348`](https://github.com/stdlib-js/stdlib/commit/045a348d16c6bf78a9ebfb31c1c74de5536e37ea) - add C `ndarray` API and refactor `blas/ext/base/dnannsum` [(#3197)](https://github.com/stdlib-js/stdlib/pull/3197)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnannsumkbn-unreleased">

#### [@stdlib/blas/ext/base/dnannsumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnannsumkbn)

<details>

<section class="features">

##### Features

-   [`f9fa434`](https://github.com/stdlib-js/stdlib/commit/f9fa434610b42939102b9f87eda61c3706a06a12) - add C `ndarray` API and refactor `blas/ext/base/dnannsumkbn` [(#2988)](https://github.com/stdlib-js/stdlib/pull/2988)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#3201](https://github.com/stdlib-js/stdlib/issues/3201)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnannsumkbn2-unreleased">

#### [@stdlib/blas/ext/base/dnannsumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnannsumkbn2)

<details>

<section class="features">

##### Features

-   [`f0ecdad`](https://github.com/stdlib-js/stdlib/commit/f0ecdad9731cd40ae9047a87981d2688693e54dc) - add C `ndarray` API and refactor `blas/ext/base/dnannsumkbn2` [(#2990)](https://github.com/stdlib-js/stdlib/pull/2990)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#3186](https://github.com/stdlib-js/stdlib/issues/3186)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnannsumors-unreleased">

#### [@stdlib/blas/ext/base/dnannsumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnannsumors)

<details>

<section class="features">

##### Features

-   [`af8d471`](https://github.com/stdlib-js/stdlib/commit/af8d471a7e01113f814a78fc411c7949b69ca1f3) - add C `ndarray` API and refactor `blas/ext/base/dnannsumors` [(#2991)](https://github.com/stdlib-js/stdlib/pull/2991)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`898b50d`](https://github.com/stdlib-js/stdlib/commit/898b50d8d705bdf6a55db8cf1858ea1e1d257c35) - fix includes and types

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#3253](https://github.com/stdlib-js/stdlib/issues/3253)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnannsumpw-unreleased">

#### [@stdlib/blas/ext/base/dnannsumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnannsumpw)

<details>

<section class="features">

##### Features

-   [`ec233ec`](https://github.com/stdlib-js/stdlib/commit/ec233ec9cadd6f17a72dafa5e79b7eeee5a821eb) - add C `ndarray` API and refactor `blas/ext/base/dnannsumpw` [(#2994)](https://github.com/stdlib-js/stdlib/pull/2994)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`e4de24f`](https://github.com/stdlib-js/stdlib/commit/e4de24f1e086063876214e73f1f6b659dc624eb1) - resolve bugs in addon.c files

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnansum-unreleased">

#### [@stdlib/blas/ext/base/dnansum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnansum)

<details>

<section class="features">

##### Features

-   [`796d76a`](https://github.com/stdlib-js/stdlib/commit/796d76a43a378cd5496e4222baac2bde1658e6da) - add C `ndarray` API and refactor `blas/ext/base/dnansum` [(#3052)](https://github.com/stdlib-js/stdlib/pull/3052)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`73e863a`](https://github.com/stdlib-js/stdlib/commit/73e863a31c1d25d63a26c6a3be93e745e8396d19) - address undeclared identifier

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnansumkbn-unreleased">

#### [@stdlib/blas/ext/base/dnansumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnansumkbn)

<details>

<section class="features">

##### Features

-   [`371a494`](https://github.com/stdlib-js/stdlib/commit/371a49427e62050eb23947678b66aa529ee3890b) - add C `ndarray` API and refactor `blas/ext/base/dnansumkbn` [(#2996)](https://github.com/stdlib-js/stdlib/pull/2996)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#3046](https://github.com/stdlib-js/stdlib/issues/3046)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnansumkbn2-unreleased">

#### [@stdlib/blas/ext/base/dnansumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnansumkbn2)

<details>

<section class="features">

##### Features

-   [`dc4b7b1`](https://github.com/stdlib-js/stdlib/commit/dc4b7b138a07ebbc5250fd7580ca758db7803875) - add C `ndarray` API and refactor `blas/ext/base/dnansumkbn2` [(#3000)](https://github.com/stdlib-js/stdlib/pull/3000)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#3074](https://github.com/stdlib-js/stdlib/issues/3074)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnansumors-unreleased">

#### [@stdlib/blas/ext/base/dnansumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnansumors)

<details>

<section class="features">

##### Features

-   [`7df5877`](https://github.com/stdlib-js/stdlib/commit/7df58771f61965f3c819af3ea3b9376fedd86a86) - add C `ndarray` API and refactor `blas/ext/base/dnansumors` [(#3001)](https://github.com/stdlib-js/stdlib/pull/3001)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#3075](https://github.com/stdlib-js/stdlib/issues/3075)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnansumpw-unreleased">

#### [@stdlib/blas/ext/base/dnansumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnansumpw)

<details>

<section class="features">

##### Features

-   [`14021a5`](https://github.com/stdlib-js/stdlib/commit/14021a537b3f627a4ff0b3228b78d0433a6eb562) - add C `ndarray` API and refactor `blas/ext/base/dnansumpw` [(#3202)](https://github.com/stdlib-js/stdlib/pull/3202)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-drev-unreleased">

#### [@stdlib/blas/ext/base/drev](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/drev)

<details>

<section class="features">

##### Features

-   [`ee9a830`](https://github.com/stdlib-js/stdlib/commit/ee9a8300ba0f24dabe4b7b67ffb3bbe94f251b36) - add C `ndarray` API and refactor `blas/ext/base/drev` [(#3071)](https://github.com/stdlib-js/stdlib/pull/3071)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`07514b1`](https://github.com/stdlib-js/stdlib/commit/07514b1f40412bc50348fe6a5c9a85c26f3c3675) - update build configurations

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1488](https://github.com/stdlib-js/stdlib/issues/1488)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsapxsum-unreleased">

#### [@stdlib/blas/ext/base/dsapxsum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsapxsum)

<details>

<section class="features">

##### Features

-   [`6ae3c11`](https://github.com/stdlib-js/stdlib/commit/6ae3c11e5494f6e5750638535b46454e3e325b6e) - add C `ndarray` API and refactor `blas/ext/base/dsapxsum` [(#3225)](https://github.com/stdlib-js/stdlib/pull/3225)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`4458c49`](https://github.com/stdlib-js/stdlib/commit/4458c49e9901bdd83048c773b8cacc6361b8729b) - extract the scalar constant as a float in `blas/ext/base/dsapxsum` [(#3254)](https://github.com/stdlib-js/stdlib/pull/3254)
-   [`e4de24f`](https://github.com/stdlib-js/stdlib/commit/e4de24f1e086063876214e73f1f6b659dc624eb1) - resolve bugs in addon.c files

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsapxsumpw-unreleased">

#### [@stdlib/blas/ext/base/dsapxsumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsapxsumpw)

<details>

<section class="features">

##### Features

-   [`b4c3fc8`](https://github.com/stdlib-js/stdlib/commit/b4c3fc8f5a8a1edeb82564db8b840b902ed1b5cd) - add C `ndarray` API and refactor `blas/ext/base/dsapxsumpw` [(#3083)](https://github.com/stdlib-js/stdlib/pull/3083)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`bff0533`](https://github.com/stdlib-js/stdlib/commit/bff0533b91d79f305e1918e0faa597ca3c98f2ca) - extract the scalar constant as a float in `blas/ext/base/dsapxsumpw` [(#3255)](https://github.com/stdlib-js/stdlib/pull/3255)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsnannsumors-unreleased">

#### [@stdlib/blas/ext/base/dsnannsumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsnannsumors)

<details>

<section class="features">

##### Features

-   [`a341f85`](https://github.com/stdlib-js/stdlib/commit/a341f857ab541502a4e2b0b4b805c41e68e46fd6) - add C `ndarray` API and refactor `blas/ext/base/dsnannsumors` [(#3086)](https://github.com/stdlib-js/stdlib/pull/3086)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`898b50d`](https://github.com/stdlib-js/stdlib/commit/898b50d8d705bdf6a55db8cf1858ea1e1d257c35) - fix includes and types

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsnansum-unreleased">

#### [@stdlib/blas/ext/base/dsnansum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsnansum)

<details>

<section class="features">

##### Features

-   [`5c40302`](https://github.com/stdlib-js/stdlib/commit/5c4030282872bb10818edea642da92bad5f6dfdc) - add C `ndarray` API and refactor `blas/ext/base/dsnansum` [(#3268)](https://github.com/stdlib-js/stdlib/pull/3268)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsnansumors-unreleased">

#### [@stdlib/blas/ext/base/dsnansumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsnansumors)

<details>

<section class="features">

##### Features

-   [`7809a85`](https://github.com/stdlib-js/stdlib/commit/7809a85b47556362c61182b4f08563014dcb598a) - add C `ndarray` API and refactor `blas/ext/base/dsnansumors` [(#3246)](https://github.com/stdlib-js/stdlib/pull/3246)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsnansumpw-unreleased">

#### [@stdlib/blas/ext/base/dsnansumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsnansumpw)

<details>

<section class="features">

##### Features

-   [`de75f04`](https://github.com/stdlib-js/stdlib/commit/de75f0465fdaa762112195f16f6334b121204664) - add C `ndarray` API and refactor `blas/ext/base/dsnansumpw` [(#3262)](https://github.com/stdlib-js/stdlib/pull/3262)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsort2ins-unreleased">

#### [@stdlib/blas/ext/base/dsort2ins](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsort2ins)

<details>

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1496](https://github.com/stdlib-js/stdlib/issues/1496)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dssum-unreleased">

#### [@stdlib/blas/ext/base/dssum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dssum)

<details>

<section class="features">

##### Features

-   [`f78ae7b`](https://github.com/stdlib-js/stdlib/commit/f78ae7b4ed12879282a4e9c20e6c7b5baf2d6e39) - add C `ndarray` API and refactor `blas/ext/base/dssum` [(#4262)](https://github.com/stdlib-js/stdlib/pull/4262)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`327d765`](https://github.com/stdlib-js/stdlib/commit/327d76545afdbdcaa80664d945919ab79b9fb1d0) - use correct variable names and fix configuration file
-   [`80fb571`](https://github.com/stdlib-js/stdlib/commit/80fb5712491212f6a24adc12e76c72781a1a422c) - remove trailing commas
-   [`fbb34de`](https://github.com/stdlib-js/stdlib/commit/fbb34debfe94725c767866c47607520918ef9d84) - update build configuration and remove unnecessary cast

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dssumors-unreleased">

#### [@stdlib/blas/ext/base/dssumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dssumors)

<details>

<section class="features">

##### Features

-   [`5a3d324`](https://github.com/stdlib-js/stdlib/commit/5a3d324e7e80752fad34d120df3e6c85636f20c5) - add C `ndarray` API and refactor `blas/ext/base/dssumors` [(#3396)](https://github.com/stdlib-js/stdlib/pull/3396)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dssumpw-unreleased">

#### [@stdlib/blas/ext/base/dssumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dssumpw)

<details>

<section class="features">

##### Features

-   [`a04a9e3`](https://github.com/stdlib-js/stdlib/commit/a04a9e31780bfb285f51dba041da0c07b905a30d) - add C `ndarray` API and refactor `blas/ext/base/dssumpw` [(#3528)](https://github.com/stdlib-js/stdlib/pull/3528)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsum-unreleased">

#### [@stdlib/blas/ext/base/dsum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsum)

<details>

<section class="features">

##### Features

-   [`e373bc9`](https://github.com/stdlib-js/stdlib/commit/e373bc91929cd46d5ed9a520cef9bfd5dcbb04c9) - add C `ndarray` API and refactor `blas/ext/base/dsum` [(#4312)](https://github.com/stdlib-js/stdlib/pull/4312)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1504](https://github.com/stdlib-js/stdlib/issues/1504)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsumkbn-unreleased">

#### [@stdlib/blas/ext/base/dsumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsumkbn)

<details>

<section class="features">

##### Features

-   [`bcc704d`](https://github.com/stdlib-js/stdlib/commit/bcc704dd3fcb478859932dbb4909f50f3a401608) - add C `ndarray` API and refactor `blas/ext/base/dsumkbn` [(#3530)](https://github.com/stdlib-js/stdlib/pull/3530)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsumkbn2-unreleased">

#### [@stdlib/blas/ext/base/dsumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsumkbn2)

<details>

<section class="features">

##### Features

-   [`94c28dd`](https://github.com/stdlib-js/stdlib/commit/94c28dd762780658f66507d0912e35bdcbcff573) - add C `ndarray` API and refactor `blas/ext/base/dsumkbn2` [(#4316)](https://github.com/stdlib-js/stdlib/pull/4316)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1506](https://github.com/stdlib-js/stdlib/issues/1506)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsumors-unreleased">

#### [@stdlib/blas/ext/base/dsumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsumors)

<details>

<section class="features">

##### Features

-   [`a13b924`](https://github.com/stdlib-js/stdlib/commit/a13b924cf236742b407bb6dc137eef194fdfd88f) - add C `ndarray` API and refactor `blas/ext/base/dsumors` [(#4320)](https://github.com/stdlib-js/stdlib/pull/4320)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsumpw-unreleased">

#### [@stdlib/blas/ext/base/dsumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsumpw)

<details>

<section class="features">

##### Features

-   [`074b9a1`](https://github.com/stdlib-js/stdlib/commit/074b9a191c77d297bab5cb51cf82a727a650fe58) - add C `ndarray` API and refactor `blas/ext/base/dsumpw` [(#4329)](https://github.com/stdlib-js/stdlib/pull/4329)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gfill-unreleased">

#### [@stdlib/blas/ext/base/gfill](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gfill)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`e09860d`](https://github.com/stdlib-js/stdlib/commit/e09860df82de288c68c2e90f9ac8727caba3d7fd) - update type definitions to support accessor arrays

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gfill-by-unreleased">

#### [@stdlib/blas/ext/base/gfill-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gfill-by)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gsumors-unreleased">

#### [@stdlib/blas/ext/base/gsumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gsumors)

<details>

<section class="features">

##### Features

-   [`1fa205c`](https://github.com/stdlib-js/stdlib/commit/1fa205cc4a6002a53be6fda15006749a0e18eeec) - add support for accessor arrays

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sapx-unreleased">

#### [@stdlib/blas/ext/base/sapx](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sapx)

<details>

<section class="features">

##### Features

-   [`2ea4452`](https://github.com/stdlib-js/stdlib/commit/2ea4452fa0f63499be526f392fa7fdd647d1a9b5) - add C `ndarray` API and refactor `blas/ext/base/sapx` [(#4696)](https://github.com/stdlib-js/stdlib/pull/4696)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`2ea4452`](https://github.com/stdlib-js/stdlib/commit/2ea4452fa0f63499be526f392fa7fdd647d1a9b5): rename `c_sapx` to `stdlib_strided_sapx`

    -   To migrate, users should replace all instances of `c_sapx` with `stdlib_strided_sapx`.

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1509](https://github.com/stdlib-js/stdlib/issues/1509)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sapxsum-unreleased">

#### [@stdlib/blas/ext/base/sapxsum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sapxsum)

<details>

<section class="features">

##### Features

-   [`036fccd`](https://github.com/stdlib-js/stdlib/commit/036fccd5c53531a64ca81e8c4c0818d5f03ac411) - add C `ndarray` API and refactor `blas/ext/base/sapxsum` [(#4812)](https://github.com/stdlib-js/stdlib/pull/4812)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`aabe731`](https://github.com/stdlib-js/stdlib/commit/aabe7310272e138b7ae69a9297832aa7fcb21ef1) - update variable name and define `status` type
-   [`1fce730`](https://github.com/stdlib-js/stdlib/commit/1fce730e287d8688956b801feb547ebb6a237756) - use correct include path
-   [`1fde962`](https://github.com/stdlib-js/stdlib/commit/1fde962b77faff072bd6296e1fbde207ad02cbe6) - use correct dependencies in manifest file

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1510](https://github.com/stdlib-js/stdlib/issues/1510)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sapxsumkbn-unreleased">

#### [@stdlib/blas/ext/base/sapxsumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sapxsumkbn)

<details>

<section class="features">

##### Features

-   [`3d551c4`](https://github.com/stdlib-js/stdlib/commit/3d551c499345de88a1e897c26977cde8d5f263a9) - add C `ndarray` API and refactor `blas/ext/base/sapxsumkbn` [(#4714)](https://github.com/stdlib-js/stdlib/pull/4714)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1511](https://github.com/stdlib-js/stdlib/issues/1511)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sapxsumkbn2-unreleased">

#### [@stdlib/blas/ext/base/sapxsumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sapxsumkbn2)

<details>

<section class="features">

##### Features

-   [`04950f3`](https://github.com/stdlib-js/stdlib/commit/04950f32082d53f9dc2fa114c3885a69c02e3246) - add C `ndarray` API and refactor `blas/ext/base/sapxsumkbn2` [(#4730)](https://github.com/stdlib-js/stdlib/pull/4730)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`2222d50`](https://github.com/stdlib-js/stdlib/commit/2222d505c97a6c4f8acf89bdb3aae6f504589e04) - update include path and refactor addon
-   [`898b50d`](https://github.com/stdlib-js/stdlib/commit/898b50d8d705bdf6a55db8cf1858ea1e1d257c35) - fix includes and types

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sapxsumors-unreleased">

#### [@stdlib/blas/ext/base/sapxsumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sapxsumors)

<details>

<section class="features">

##### Features

-   [`a393090`](https://github.com/stdlib-js/stdlib/commit/a3930905a569573b8861d59e2a0b09e3f80a9831) - add C `ndarray` API and refactor `blas/ext/base/sapxsumors` [(#4746)](https://github.com/stdlib-js/stdlib/pull/4746)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`cc8daaf`](https://github.com/stdlib-js/stdlib/commit/cc8daaf165f6426ba2b1d7edd68ff3e8f3d74478) - update include path
-   [`898b50d`](https://github.com/stdlib-js/stdlib/commit/898b50d8d705bdf6a55db8cf1858ea1e1d257c35) - fix includes and types

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sapxsumpw-unreleased">

#### [@stdlib/blas/ext/base/sapxsumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sapxsumpw)

<details>

<section class="features">

##### Features

-   [`7aa7851`](https://github.com/stdlib-js/stdlib/commit/7aa785142a77891dfa757fb0981966345a3b65f9) - add C `ndarray` API and refactor `blas/ext/base/sapxsumpw` [(#4747)](https://github.com/stdlib-js/stdlib/pull/4747)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1514](https://github.com/stdlib-js/stdlib/issues/1514)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sasumpw-unreleased">

#### [@stdlib/blas/ext/base/sasumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sasumpw)

<details>

<section class="features">

##### Features

-   [`8582e3f`](https://github.com/stdlib-js/stdlib/commit/8582e3f3ab1f6bb233df00cafe362954fefe24de) - add C `ndarray` API and refactor `blas/ext/base/sasumpw` [(#4764)](https://github.com/stdlib-js/stdlib/pull/4764)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-scusum-unreleased">

#### [@stdlib/blas/ext/base/scusum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/scusum)

<details>

<section class="features">

##### Features

-   [`6641a29`](https://github.com/stdlib-js/stdlib/commit/6641a29ca92ada4779b1a55d5c681cf375eae791) - add C `ndarray` API and refactor `blas/ext/base/scusum` [(#4799)](https://github.com/stdlib-js/stdlib/pull/4799)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`bcf58bb`](https://github.com/stdlib-js/stdlib/commit/bcf58bbc808831edd9993072d47bb1bfdd9fb1a6) - resolve bugs in addon.c
-   [`de9ca6a`](https://github.com/stdlib-js/stdlib/commit/de9ca6a375bffa0683dde68a81da5922edd3d9c2) - update manifest.json

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1516](https://github.com/stdlib-js/stdlib/issues/1516)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-scusumkbn-unreleased">

#### [@stdlib/blas/ext/base/scusumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/scusumkbn)

<details>

<section class="features">

##### Features

-   [`aca04f8`](https://github.com/stdlib-js/stdlib/commit/aca04f8b4bd9c850d9b66a253647bac5b84c63fb) - add C `ndarray` API and refactor `blas/ext/base/scusumkbn` [(#4782)](https://github.com/stdlib-js/stdlib/pull/4782)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1517](https://github.com/stdlib-js/stdlib/issues/1517)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-scusumkbn2-unreleased">

#### [@stdlib/blas/ext/base/scusumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/scusumkbn2)

<details>

<section class="features">

##### Features

-   [`3ca8ed8`](https://github.com/stdlib-js/stdlib/commit/3ca8ed8f2fb388fcf6890322f6f880c30fd6094e) - add C `ndarray` API and refactor `blas/ext/base/scusumkbn2` [(#4788)](https://github.com/stdlib-js/stdlib/pull/4788)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-scusumors-unreleased">

#### [@stdlib/blas/ext/base/scusumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/scusumors)

<details>

<section class="features">

##### Features

-   [`a1edb83`](https://github.com/stdlib-js/stdlib/commit/a1edb830ac6e7bb3297bddd7b5bcd4e34a51eee3) - add C `ndarray` API and refactor `blas/ext/base/scusumors` [(#4813)](https://github.com/stdlib-js/stdlib/pull/4813)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`23fba1c`](https://github.com/stdlib-js/stdlib/commit/23fba1c12a6ed102c00e7831aeb8cde2be56cff0) - update build configuration

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-scusumpw-unreleased">

#### [@stdlib/blas/ext/base/scusumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/scusumpw)

<details>

<section class="features">

##### Features

-   [`6560077`](https://github.com/stdlib-js/stdlib/commit/6560077508ae3c79fbe9ba1e2f90ec6f5e610db8) - add C `ndarray` API and refactor `blas/ext/base/scusumpw` [(#4814)](https://github.com/stdlib-js/stdlib/pull/4814)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`4d9c326`](https://github.com/stdlib-js/stdlib/commit/4d9c326d71d640f99f696a29c7f257961c1484b3) - update build configuration

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sdsapxsum-unreleased">

#### [@stdlib/blas/ext/base/sdsapxsum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sdsapxsum)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`e4de24f`](https://github.com/stdlib-js/stdlib/commit/e4de24f1e086063876214e73f1f6b659dc624eb1) - resolve bugs in addon.c files

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sdsapxsumpw-unreleased">

#### [@stdlib/blas/ext/base/sdsapxsumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sdsapxsumpw)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`37a6dfc`](https://github.com/stdlib-js/stdlib/commit/37a6dfcc48019b5b72fb885fd7d6565b5e928b1a) - address typo
-   [`a0ee397`](https://github.com/stdlib-js/stdlib/commit/a0ee397c28267c3a8234c81d1eda673e74ca26f0) - update dependencies and update documentation

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sfill-unreleased">

#### [@stdlib/blas/ext/base/sfill](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sfill)

<details>

<section class="features">

##### Features

-   [`f446206`](https://github.com/stdlib-js/stdlib/commit/f4462062a216ceb2131121cbb299525b6b3b17ff) - add C `ndarray` API and refactor `blas/ext/base/zfill` [(#2962)](https://github.com/stdlib-js/stdlib/pull/2962)
-   [`fd41e1b`](https://github.com/stdlib-js/stdlib/commit/fd41e1bd1dc6b7c351702bdbf95978b343215b0b) - add C `ndarray` API to `blas/ext/base/sfill` [(#2923)](https://github.com/stdlib-js/stdlib/pull/2923)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`9d55639`](https://github.com/stdlib-js/stdlib/commit/9d55639aa76472d280ee6c613cd338ee16552cd6) - update C function names in `blas/ext/base/sfill` to prevent name collisions [(#2945)](https://github.com/stdlib-js/stdlib/pull/2945)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-snansumkbn2-unreleased">

#### [@stdlib/blas/ext/base/snansumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/snansumkbn2)

<details>

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1530](https://github.com/stdlib-js/stdlib/issues/1530)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-snansumors-unreleased">

#### [@stdlib/blas/ext/base/snansumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/snansumors)

<details>

<section class="features">

##### Features

-   [`c351e4b`](https://github.com/stdlib-js/stdlib/commit/c351e4b399c6d5c791e46db4cdfba9ce762d9548) - add C `ndarray` API and refactor `blas/ext/base/snansumors` [(#3955)](https://github.com/stdlib-js/stdlib/pull/3955)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-snansumpw-unreleased">

#### [@stdlib/blas/ext/base/snansumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/snansumpw)

<details>

<section class="features">

##### Features

-   [`e3efb84`](https://github.com/stdlib-js/stdlib/commit/e3efb84a0ec88f76fa2a799252da98165fcd7d4d) - add C `ndarray` API and refactor `blas/ext/base/snansumpw` [(#3353)](https://github.com/stdlib-js/stdlib/pull/3353)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-srev-unreleased">

#### [@stdlib/blas/ext/base/srev](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/srev)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`3cf3d00`](https://github.com/stdlib-js/stdlib/commit/3cf3d00039ee92c03e3a181c00fe621555162fbd) - update build configurations

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1533](https://github.com/stdlib-js/stdlib/issues/1533)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssort2hp-unreleased">

#### [@stdlib/blas/ext/base/ssort2hp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssort2hp)

<details>

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1534](https://github.com/stdlib-js/stdlib/issues/1534)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssort2ins-unreleased">

#### [@stdlib/blas/ext/base/ssort2ins](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssort2ins)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`898b50d`](https://github.com/stdlib-js/stdlib/commit/898b50d8d705bdf6a55db8cf1858ea1e1d257c35) - fix includes and types

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssort2sh-unreleased">

#### [@stdlib/blas/ext/base/ssort2sh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssort2sh)

<details>

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1536](https://github.com/stdlib-js/stdlib/issues/1536)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssumkbn-unreleased">

#### [@stdlib/blas/ext/base/ssumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssumkbn)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`2d5c522`](https://github.com/stdlib-js/stdlib/commit/2d5c52271193b9a11ae43ea362dd51bd8f402de8) - update build configurations

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1541](https://github.com/stdlib-js/stdlib/issues/1541)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssumkbn2-unreleased">

#### [@stdlib/blas/ext/base/ssumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssumkbn2)

<details>

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1542](https://github.com/stdlib-js/stdlib/issues/1542)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssumors-unreleased">

#### [@stdlib/blas/ext/base/ssumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssumors)

<details>

<section class="features">

##### Features

-   [`1f596cb`](https://github.com/stdlib-js/stdlib/commit/1f596cb9bd3a26c2a7a82ab578d460f88df8dea5) - add C `ndarray` API and refactor `blas/ext/base/ssumors` [(#3891)](https://github.com/stdlib-js/stdlib/pull/3891)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`4b27189`](https://github.com/stdlib-js/stdlib/commit/4b27189934e9d43d64d9438fcd94ef788eb9432b) - update build configurations
-   [`61bba7a`](https://github.com/stdlib-js/stdlib/commit/61bba7abbae8924dc615773a7e74daf920570c19) - update include path
-   [`78f03b5`](https://github.com/stdlib-js/stdlib/commit/78f03b5b21b82ba088a3fac0275faa6cf24e81ac) - use correct package names
-   [`bea0904`](https://github.com/stdlib-js/stdlib/commit/bea0904866d0e36557d9e72d8922833517dae522) - update dependencies

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssumpw-unreleased">

#### [@stdlib/blas/ext/base/ssumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssumpw)

<details>

<section class="features">

##### Features

-   [`c83f108`](https://github.com/stdlib-js/stdlib/commit/c83f10824d14d8c0290b68a5f5bcedbdc2c52c6d) - add C `ndarray` API and refactor `blas/ext/base/ssumpw` [(#3285)](https://github.com/stdlib-js/stdlib/pull/3285)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`fcedaac`](https://github.com/stdlib-js/stdlib/commit/fcedaac9fd61fd81a1aa6d522ed2c29b21465259) - update the return type and remove unnecessary branches/tests in `blas/ext/base/ssumpw` [(#3321)](https://github.com/stdlib-js/stdlib/pull/3321)
-   [`c7f7ea9`](https://github.com/stdlib-js/stdlib/commit/c7f7ea9c2008f55462da45c9bd641add72670872) - update build configurations

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1544](https://github.com/stdlib-js/stdlib/issues/1544)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-zfill-unreleased">

#### [@stdlib/blas/ext/base/zfill](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/zfill)

<details>

<section class="features">

##### Features

-   [`f446206`](https://github.com/stdlib-js/stdlib/commit/f4462062a216ceb2131121cbb299525b6b3b17ff) - add C `ndarray` API and refactor `blas/ext/base/zfill` [(#2962)](https://github.com/stdlib-js/stdlib/pull/2962)
-   [`7e11338`](https://github.com/stdlib-js/stdlib/commit/7e11338ae6642c1389e51557262710bd6ebe44aa) - add `blas/ext/base/zfill` [(#2907)](https://github.com/stdlib-js/stdlib/pull/2907)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`2ea4452`](https://github.com/stdlib-js/stdlib/commit/2ea4452fa0f63499be526f392fa7fdd647d1a9b5): rename `c_sapx` to `stdlib_strided_sapx`

    -   To migrate, users should replace all instances of `c_sapx` with `stdlib_strided_sapx`.

-   [`0eac1eb`](https://github.com/stdlib-js/stdlib/commit/0eac1ebde891ba75b8c4939119a6c4b7c88ceed8): remove `dmax`

    -   To migrate, users should access `dmax` via the `stats/strided` namespace.

-   [`02cbff3`](https://github.com/stdlib-js/stdlib/commit/02cbff35d876dcea7efd41794f414c7df5eddca4): - `c_dapx()` renamed to `stdlib_strided_dapx()`

    -   - `c_dapx_ndarray()` renamed to `stdlib_strided_dapx_ndarray()`
        All downstream usage of the old `c_dapx*` symbols must be updated to use the new symbols.

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 28 issues were closed in this release:

[#1434](https://github.com/stdlib-js/stdlib/issues/1434), [#1464](https://github.com/stdlib-js/stdlib/issues/1464), [#1471](https://github.com/stdlib-js/stdlib/issues/1471), [#1475](https://github.com/stdlib-js/stdlib/issues/1475), [#1488](https://github.com/stdlib-js/stdlib/issues/1488), [#1496](https://github.com/stdlib-js/stdlib/issues/1496), [#1504](https://github.com/stdlib-js/stdlib/issues/1504), [#1506](https://github.com/stdlib-js/stdlib/issues/1506), [#1509](https://github.com/stdlib-js/stdlib/issues/1509), [#1510](https://github.com/stdlib-js/stdlib/issues/1510), [#1511](https://github.com/stdlib-js/stdlib/issues/1511), [#1514](https://github.com/stdlib-js/stdlib/issues/1514), [#1516](https://github.com/stdlib-js/stdlib/issues/1516), [#1517](https://github.com/stdlib-js/stdlib/issues/1517), [#1530](https://github.com/stdlib-js/stdlib/issues/1530), [#1533](https://github.com/stdlib-js/stdlib/issues/1533), [#1534](https://github.com/stdlib-js/stdlib/issues/1534), [#1536](https://github.com/stdlib-js/stdlib/issues/1536), [#1541](https://github.com/stdlib-js/stdlib/issues/1541), [#1542](https://github.com/stdlib-js/stdlib/issues/1542), [#1544](https://github.com/stdlib-js/stdlib/issues/1544), [#3046](https://github.com/stdlib-js/stdlib/issues/3046), [#3073](https://github.com/stdlib-js/stdlib/issues/3073), [#3074](https://github.com/stdlib-js/stdlib/issues/3074), [#3075](https://github.com/stdlib-js/stdlib/issues/3075), [#3186](https://github.com/stdlib-js/stdlib/issues/3186), [#3201](https://github.com/stdlib-js/stdlib/issues/3201), [#3253](https://github.com/stdlib-js/stdlib/issues/3253)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 37 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Ahmed Atwa
-   Aleksandr
-   Athan Reines
-   Bryan Elee
-   Golden Kumar
-   Gunj Joshi
-   Gururaj Gurram
-   HarshaNP
-   Jaimin Godhani
-   Krishnendu Das
-   Lovelin Dhoni J B
-   Muhammad Haris
-   Naveen Kumar
-   Neeraj Pathak
-   Philipp Burckhardt
-   Pranav Goswami
-   Pranjal Jha
-   Pratik Singh
-   Praveen Kumar
-   Priyansh Prajapati
-   Priyanshu Agarwal
-   Raunak Kumar Gupta
-   Rutam Kathale
-   Saurabh Singh
-   Shivam Ahir
-   Shubh Mehta
-   Sivam Das
-   Snehil Shah
-   Soumajit Chatterjee
-   Suraj Kumar
-   Tirtadwipa Manunggal
-   Utkarsh Raj
-   Varad Gupta
-   Xiaochuan Ye
-   Yaswanth Kosuru
-   rainn

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`c33e77a`](https://github.com/stdlib-js/stdlib/commit/c33e77afcecf3ff1290791f4e521ad240b0500b7) - **docs:** update namespace table of contents [(#4819)](https://github.com/stdlib-js/stdlib/pull/4819) _(by stdlib-bot)_
-   [`20b9402`](https://github.com/stdlib-js/stdlib/commit/20b940262ef8f8f01a640a481636808f5213e039) - **docs:** update namespace TypeScript declaration comments [(#4817)](https://github.com/stdlib-js/stdlib/pull/4817) _(by stdlib-bot)_
-   [`6560077`](https://github.com/stdlib-js/stdlib/commit/6560077508ae3c79fbe9ba1e2f90ec6f5e610db8) - **feat:** add C `ndarray` API and refactor `blas/ext/base/scusumpw` [(#4814)](https://github.com/stdlib-js/stdlib/pull/4814) _(by Muhammad Haris, Athan Reines)_
-   [`2ea4452`](https://github.com/stdlib-js/stdlib/commit/2ea4452fa0f63499be526f392fa7fdd647d1a9b5) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sapx` [(#4696)](https://github.com/stdlib-js/stdlib/pull/4696) _(by Muhammad Haris, Athan Reines)_
-   [`036fccd`](https://github.com/stdlib-js/stdlib/commit/036fccd5c53531a64ca81e8c4c0818d5f03ac411) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sapxsum` [(#4812)](https://github.com/stdlib-js/stdlib/pull/4812) _(by Muhammad Haris)_
-   [`a1edb83`](https://github.com/stdlib-js/stdlib/commit/a1edb830ac6e7bb3297bddd7b5bcd4e34a51eee3) - **feat:** add C `ndarray` API and refactor `blas/ext/base/scusumors` [(#4813)](https://github.com/stdlib-js/stdlib/pull/4813) _(by Muhammad Haris)_
-   [`0eac1eb`](https://github.com/stdlib-js/stdlib/commit/0eac1ebde891ba75b8c4939119a6c4b7c88ceed8) - **feat:** update namespace TypeScript declarations [(#4809)](https://github.com/stdlib-js/stdlib/pull/4809) _(by stdlib-bot)_
-   [`21c2f38`](https://github.com/stdlib-js/stdlib/commit/21c2f3822dd61cce49ec0e38ea0add2b91006162) - **docs:** update namespace table of contents [(#4811)](https://github.com/stdlib-js/stdlib/pull/4811) _(by stdlib-bot)_
-   [`c1d2e88`](https://github.com/stdlib-js/stdlib/commit/c1d2e88ef9f39de380cc3f561cb905e013f00587) - **test:** update test-cases for stride handling in `blas/ext/base/gapxsum` [(#4801)](https://github.com/stdlib-js/stdlib/pull/4801) _(by Muhammad Haris)_
-   [`984dc38`](https://github.com/stdlib-js/stdlib/commit/984dc3890e96494a37e085efc4ee0d2bd09ad9bd) - **refactor:** update `blas/ext/base/gcusumkbn2` to follow current project conventions [(#4436)](https://github.com/stdlib-js/stdlib/pull/4436) _(by Muhammad Haris)_
-   [`897aa61`](https://github.com/stdlib-js/stdlib/commit/897aa61d3548b7dceec551b64dd353d506bb307b) - **refactor:** update `blas/ext/base/gcusum` to follow current project conventions [(#4435)](https://github.com/stdlib-js/stdlib/pull/4435) _(by Muhammad Haris, Athan Reines)_
-   [`c0a0110`](https://github.com/stdlib-js/stdlib/commit/c0a0110f91f4b6f2bef48d73c3a539d03f9dec9c) - **refactor:** update `blas/ext/base/gcusumpw` to follow current project conventions [(#4551)](https://github.com/stdlib-js/stdlib/pull/4551) _(by Muhammad Haris, Athan Reines)_
-   [`3d551c4`](https://github.com/stdlib-js/stdlib/commit/3d551c499345de88a1e897c26977cde8d5f263a9) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sapxsumkbn` [(#4714)](https://github.com/stdlib-js/stdlib/pull/4714) _(by Muhammad Haris, stdlib-bot)_
-   [`ffc3cf0`](https://github.com/stdlib-js/stdlib/commit/ffc3cf0d42d14e1f1d9de30577bb0bb80603be29) - **refactor:** update `blas/ext/base/gsumkbn` to follow current project conventions [(#4677#pullrequestreview-2560395620)](https://github.com/stdlib-js/stdlib/pull/4677#pullrequestreview-2560395620) _(by Muhammad Haris)_
-   [`678f294`](https://github.com/stdlib-js/stdlib/commit/678f294c5f9cc5b9e89b38e1e6e1736d3c4b621c) - **refactor:** update `blas/ext/base/gapxsum` to follow current project conventions [(#4348)](https://github.com/stdlib-js/stdlib/pull/4348) _(by Muhammad Haris, Athan Reines)_
-   [`8e4ef81`](https://github.com/stdlib-js/stdlib/commit/8e4ef81d340f7a9ab87b23569f05496ff070f8cb) - **refactor:** update `blas/ext/base/gapx` to follow current project conventions [(#4347)](https://github.com/stdlib-js/stdlib/pull/4347) _(by Muhammad Haris)_
-   [`4cc5a5b`](https://github.com/stdlib-js/stdlib/commit/4cc5a5b0170c928b2663858eddf9f24190c703f1) - **refactor:** update `blas/ext/base/gasumpw` to follow current project conventions [(#4384)](https://github.com/stdlib-js/stdlib/pull/4384) _(by Muhammad Haris)_
-   [`69e8243`](https://github.com/stdlib-js/stdlib/commit/69e82436345b2556a4e494fca32a038735af0afa) - **refactor:** update `blas/ext/base/gapxsumpw` to follow current project conventions [(#4382)](https://github.com/stdlib-js/stdlib/pull/4382) _(by Muhammad Haris)_
-   [`64846e4`](https://github.com/stdlib-js/stdlib/commit/64846e48c83b76227004369d36654c59d6f76aae) - **refactor:** update `blas/ext/base/gapxsumkbn2` to follow current project conventions [(#4378)](https://github.com/stdlib-js/stdlib/pull/4378) _(by Muhammad Haris, Athan Reines)_
-   [`04c416e`](https://github.com/stdlib-js/stdlib/commit/04c416e031e2655eb6303e1aeda40a460dab4134) - **refactor:** update `blas/ext/base/gapxsumors` to follow current project conventions [(#4381)](https://github.com/stdlib-js/stdlib/pull/4381) _(by Muhammad Haris, Athan Reines)_
-   [`6641a29`](https://github.com/stdlib-js/stdlib/commit/6641a29ca92ada4779b1a55d5c681cf375eae791) - **feat:** add C `ndarray` API and refactor `blas/ext/base/scusum` [(#4799)](https://github.com/stdlib-js/stdlib/pull/4799) _(by Muhammad Haris)_
-   [`1fa205c`](https://github.com/stdlib-js/stdlib/commit/1fa205cc4a6002a53be6fda15006749a0e18eeec) - **feat:** add support for accessor arrays _(by Athan Reines)_
-   [`e09860d`](https://github.com/stdlib-js/stdlib/commit/e09860df82de288c68c2e90f9ac8727caba3d7fd) - **fix:** update type definitions to support accessor arrays _(by Athan Reines)_
-   [`c217016`](https://github.com/stdlib-js/stdlib/commit/c217016730b128f5a0beb06e28f28d671040ab97) - **refactor:** update `blas/ext/base/gfill-by` to follow current project conventions [(#4553)](https://github.com/stdlib-js/stdlib/pull/4553) _(by Muhammad Haris, Athan Reines)_
-   [`b5162a4`](https://github.com/stdlib-js/stdlib/commit/b5162a4e01171af062b711f4be105a4e4a24fb8b) - **refactor:** update `blas/ext/base/gfill` to follow current project conventions [(#4552)](https://github.com/stdlib-js/stdlib/pull/4552) _(by Muhammad Haris)_
-   [`fb901fb`](https://github.com/stdlib-js/stdlib/commit/fb901fb3b51f47c79c0fae95afe75be9cb198b2a) - **docs:** update namespace table of contents [(#4796)](https://github.com/stdlib-js/stdlib/pull/4796) _(by stdlib-bot)_
-   [`22a3dcf`](https://github.com/stdlib-js/stdlib/commit/22a3dcfe916b7f5c979d6ee93045d37add5d685d) - **docs:** update namespace TypeScript declaration comments [(#4794)](https://github.com/stdlib-js/stdlib/pull/4794) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7aa7851`](https://github.com/stdlib-js/stdlib/commit/7aa785142a77891dfa757fb0981966345a3b65f9) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sapxsumpw` [(#4747)](https://github.com/stdlib-js/stdlib/pull/4747) _(by Muhammad Haris, Athan Reines)_
-   [`04950f3`](https://github.com/stdlib-js/stdlib/commit/04950f32082d53f9dc2fa114c3885a69c02e3246) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sapxsumkbn2` [(#4730)](https://github.com/stdlib-js/stdlib/pull/4730) _(by Muhammad Haris, Athan Reines)_
-   [`aca04f8`](https://github.com/stdlib-js/stdlib/commit/aca04f8b4bd9c850d9b66a253647bac5b84c63fb) - **feat:** add C `ndarray` API and refactor `blas/ext/base/scusumkbn` [(#4782)](https://github.com/stdlib-js/stdlib/pull/4782) _(by Muhammad Haris)_
-   [`8582e3f`](https://github.com/stdlib-js/stdlib/commit/8582e3f3ab1f6bb233df00cafe362954fefe24de) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sasumpw` [(#4764)](https://github.com/stdlib-js/stdlib/pull/4764) _(by Muhammad Haris, Athan Reines)_
-   [`3ca8ed8`](https://github.com/stdlib-js/stdlib/commit/3ca8ed8f2fb388fcf6890322f6f880c30fd6094e) - **feat:** add C `ndarray` API and refactor `blas/ext/base/scusumkbn2` [(#4788)](https://github.com/stdlib-js/stdlib/pull/4788) _(by Muhammad Haris, Athan Reines)_
-   [`318ba82`](https://github.com/stdlib-js/stdlib/commit/318ba8201aedcc62f9717c216666964414be0864) - **docs:** update related packages sections [(#4784)](https://github.com/stdlib-js/stdlib/pull/4784) _(by stdlib-bot)_
-   [`efadfe5`](https://github.com/stdlib-js/stdlib/commit/efadfe575cea2d97f30b2994691c5a7c43e8d838) - **bench:** refactor array generation _(by Athan Reines)_
-   [`3d97ce8`](https://github.com/stdlib-js/stdlib/commit/3d97ce8fc13ec47c60a4698ba2668e6330c125ea) - **bench:** measure performance on generic arrays _(by Athan Reines)_
-   [`88696eb`](https://github.com/stdlib-js/stdlib/commit/88696ebda08b52c7a5e2a64680c75e3c5b113792) - **docs:** update require path _(by Athan Reines)_
-   [`46e3e8c`](https://github.com/stdlib-js/stdlib/commit/46e3e8c0bfaae55d9bf70763c6af5bff7094076b) - **docs:** update require path _(by Athan Reines)_
-   [`22cd928`](https://github.com/stdlib-js/stdlib/commit/22cd9281bd0197a555ad3c577665bbb15696119e) - **docs:** update require path _(by Athan Reines)_
-   [`dfb4d35`](https://github.com/stdlib-js/stdlib/commit/dfb4d358b0ff1905f34f0a1552feeac26e9f88ba) - **docs:** update namespace table of contents [(#4760)](https://github.com/stdlib-js/stdlib/pull/4760) _(by stdlib-bot)_
-   [`5ef1f55`](https://github.com/stdlib-js/stdlib/commit/5ef1f55b06a5ba1c096eb0ad6b07287344266bec) - **docs:** update related packages sections [(#4757)](https://github.com/stdlib-js/stdlib/pull/4757) _(by stdlib-bot)_
-   [`6028758`](https://github.com/stdlib-js/stdlib/commit/6028758df442105f1ac0d4240450c96cf3ad4032) - **docs:** update namespace TypeScript declaration comments [(#4758)](https://github.com/stdlib-js/stdlib/pull/4758) _(by stdlib-bot, Philipp Burckhardt)_
-   [`a393090`](https://github.com/stdlib-js/stdlib/commit/a3930905a569573b8861d59e2a0b09e3f80a9831) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sapxsumors` [(#4746)](https://github.com/stdlib-js/stdlib/pull/4746) _(by Muhammad Haris, Athan Reines)_
-   [`02cbff3`](https://github.com/stdlib-js/stdlib/commit/02cbff35d876dcea7efd41794f414c7df5eddca4) - **refactor:** update `blas/ext/base/dapx` to follow current project conventions [(#4737)](https://github.com/stdlib-js/stdlib/pull/4737) _(by Muhammad Haris)_
-   [`3d9c97f`](https://github.com/stdlib-js/stdlib/commit/3d9c97f44999496954f47fac902e4d67aed03425) - **fix:** add `math/base/speical/abs` in manifest.json of `blas/ext/base/dapxsumkbn` [(#4732)](https://github.com/stdlib-js/stdlib/pull/4732) _(by Aayush Khanna)_
-   [`e661213`](https://github.com/stdlib-js/stdlib/commit/e66121352ef767cdb87d19e938b1eccf7970fa3a) - **feat:** update namespace TypeScript declarations [(#4706)](https://github.com/stdlib-js/stdlib/pull/4706) _(by stdlib-bot)_
-   [`cff470f`](https://github.com/stdlib-js/stdlib/commit/cff470f9608165100c8c122fce70c40b1af864ec) - **docs:** update namespace table of contents (#4708) _(by stdlib-bot, Planeshifter)_
-   [`ea9e425`](https://github.com/stdlib-js/stdlib/commit/ea9e42538dd6342bf5c02c2d7c68aa1eae3b15d6) - **refactor:** update `blas/ext/base/grev` to follow current project conventions [(#4659)](https://github.com/stdlib-js/stdlib/pull/4659) _(by Muhammad Haris)_
-   [`53c0427`](https://github.com/stdlib-js/stdlib/commit/53c0427db5f49ab6209c55941ff15270a3569d44) - **refactor:** update `blas/ext/base/gcusumors` to follow current project conventions [(#4453)](https://github.com/stdlib-js/stdlib/pull/4453) _(by Muhammad Haris, Athan Reines)_
-   [`09b5945`](https://github.com/stdlib-js/stdlib/commit/09b5945ae5fedad2de3f3154c599868b8414967d) - **docs:** update namespace TypeScript declaration comments [(#4691)](https://github.com/stdlib-js/stdlib/pull/4691) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ba7f732`](https://github.com/stdlib-js/stdlib/commit/ba7f7328fc7fe6e2049f79421f152303daa1f290) - **docs:** update namespace table of contents [(#4693)](https://github.com/stdlib-js/stdlib/pull/4693) _(by stdlib-bot, Philipp Burckhardt)_
-   [`bb638df`](https://github.com/stdlib-js/stdlib/commit/bb638df38852d5ba3e341e9d607a0900a5d55723) - **refactor:** update `blas/ext/base/gnannsumkbn` to follow current project conventions [(#4631)](https://github.com/stdlib-js/stdlib/pull/4631) _(by Muhammad Haris)_
-   [`0639c11`](https://github.com/stdlib-js/stdlib/commit/0639c11f0aac69a249c9710c9031e4f9cec14f62) - **refactor:** update `blas/ext/base/gsumkbn2` to follow current project conventions [(#4678)](https://github.com/stdlib-js/stdlib/pull/4678) _(by Muhammad Haris)_
-   [`c36f0e7`](https://github.com/stdlib-js/stdlib/commit/c36f0e73214c70c686defbaf5adc2d3e86a6595b) - **refactor:** update `blas/ext/base/gsumors` to follow current project conventions [(#4679)](https://github.com/stdlib-js/stdlib/pull/4679) _(by Muhammad Haris)_
-   [`dbade8e`](https://github.com/stdlib-js/stdlib/commit/dbade8ed06df1ad8cef3ecf6c1f1f729ad62a53c) - **refactor:** update `blas/ext/base/gsumpw` to follow current project conventions [(#4680)](https://github.com/stdlib-js/stdlib/pull/4680) _(by Muhammad Haris)_
-   [`76642bf`](https://github.com/stdlib-js/stdlib/commit/76642bf477c7431527bdeef8b979e92e8d93e6bb) - **docs:** update namespace table of contents [(#4658)](https://github.com/stdlib-js/stdlib/pull/4658) _(by stdlib-bot)_
-   [`1d7a2df`](https://github.com/stdlib-js/stdlib/commit/1d7a2dfcb1cb9bae13f6ecd63aca3c4741433d29) - **docs:** update namespace TypeScript declarations [(#4656)](https://github.com/stdlib-js/stdlib/pull/4656) _(by stdlib-bot)_
-   [`074b9a1`](https://github.com/stdlib-js/stdlib/commit/074b9a191c77d297bab5cb51cf82a727a650fe58) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsumpw` [(#4329)](https://github.com/stdlib-js/stdlib/pull/4329) _(by Muhammad Haris)_
-   [`21006f2`](https://github.com/stdlib-js/stdlib/commit/21006f2b89ee26106054fb7895792c09f1f3fc7e) - **docs:** fix examples require path for `blas/ext/base/gnansumpw` [(#4642)](https://github.com/stdlib-js/stdlib/pull/4642) _(by Muhammad Haris)_
-   [`0892e11`](https://github.com/stdlib-js/stdlib/commit/0892e116e96a8145f6d566e58bc6cff0d20ae3f2) - **refactor:** update `blas/ext/base/gnansumors` to follow current project conventions [(#4640)](https://github.com/stdlib-js/stdlib/pull/4640) _(by Muhammad Haris, Athan Reines)_
-   [`a6a0193`](https://github.com/stdlib-js/stdlib/commit/a6a019330f3ef2ab111a56dc060f232bf6716e32) - **refactor:** update `blas/ext/base/gnansum` to follow current project conventions [(#4639)](https://github.com/stdlib-js/stdlib/pull/4639) _(by Muhammad Haris, Athan Reines)_
-   [`86d1379`](https://github.com/stdlib-js/stdlib/commit/86d1379bcadc1736b92d507ce6ea03c58c24b1d3) - **refactor:** update `blas/ext/base/gnansumpw` to follow current project conventions [(#4641)](https://github.com/stdlib-js/stdlib/pull/4641) _(by Muhammad Haris)_
-   [`2cd9a7e`](https://github.com/stdlib-js/stdlib/commit/2cd9a7e46e14388370c455983f91d6ef949bf3a4) - **refactor:** update `blas/ext/base/gnansumkbn2` to follow current project conventions [(#4634)](https://github.com/stdlib-js/stdlib/pull/4634) _(by Muhammad Haris)_
-   [`e7febbb`](https://github.com/stdlib-js/stdlib/commit/e7febbb12a07c4040dcef0710f0efee4a4f38797) - **refactor:** update `blas/ext/base/gnansumkbn` to follow current project conventions [(#4632)](https://github.com/stdlib-js/stdlib/pull/4632) _(by Muhammad Haris)_
-   [`a13b924`](https://github.com/stdlib-js/stdlib/commit/a13b924cf236742b407bb6dc137eef194fdfd88f) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsumors` [(#4320)](https://github.com/stdlib-js/stdlib/pull/4320) _(by Muhammad Haris, Athan Reines)_
-   [`563a4f8`](https://github.com/stdlib-js/stdlib/commit/563a4f826ab757636ae08094fc6f62746042da4b) - **docs:** update related packages sections [(#4594)](https://github.com/stdlib-js/stdlib/pull/4594) _(by stdlib-bot)_
-   [`f231799`](https://github.com/stdlib-js/stdlib/commit/f231799e1d40cfff7ceb79a6074166a08c4ba072) - **docs:** update related packages sections [(#4545)](https://github.com/stdlib-js/stdlib/pull/4545) _(by stdlib-bot)_
-   [`3cd2abf`](https://github.com/stdlib-js/stdlib/commit/3cd2abf7c694c28a32c13b4702d2e12dced5cc36) - **docs:** update namespace table of contents [(#4489)](https://github.com/stdlib-js/stdlib/pull/4489) _(by stdlib-bot)_
-   [`133c539`](https://github.com/stdlib-js/stdlib/commit/133c5394889b68952968cd6f4ff192f9692deb9f) - **docs:** update namespace TypeScript declaration comments [(#4487)](https://github.com/stdlib-js/stdlib/pull/4487) _(by stdlib-bot, Philipp Burckhardt)_
-   [`d0c4941`](https://github.com/stdlib-js/stdlib/commit/d0c49411dbdee17017f411ca1c2d1acd0e4ccca9) - **refactor:** update `blas/ext/base/gapxsumkbn` to follow current project conventions [(#4358)](https://github.com/stdlib-js/stdlib/pull/4358) _(by Muhammad Haris, Athan Reines)_
-   [`464e2cc`](https://github.com/stdlib-js/stdlib/commit/464e2cc9a3bb6430d7397db2e70c62b0ca275f09) - **refactor:** update `blas/ext/base/gcusumkbn` to follow current project conventions [(#4412)](https://github.com/stdlib-js/stdlib/pull/4412) _(by Muhammad Haris, Athan Reines)_
-   [`090e47b`](https://github.com/stdlib-js/stdlib/commit/090e47b8d61456a35d74abcb39467e107d34ebe5) - **style:** remove decimals _(by Athan Reines)_
-   [`94c28dd`](https://github.com/stdlib-js/stdlib/commit/94c28dd762780658f66507d0912e35bdcbcff573) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsumkbn2` [(#4316)](https://github.com/stdlib-js/stdlib/pull/4316) _(by Muhammad Haris, Athan Reines)_
-   [`b6ba484`](https://github.com/stdlib-js/stdlib/commit/b6ba4845ebbddc5d2b76fb24e4ac036e2ef35102) - **docs:** update namespace table of contents [(#4448)](https://github.com/stdlib-js/stdlib/pull/4448) _(by stdlib-bot)_
-   [`c7ef80e`](https://github.com/stdlib-js/stdlib/commit/c7ef80ec0563a02728f398d31ccd05bc91055cdc) - **docs:** update namespace TypeScript declarations [(#4446)](https://github.com/stdlib-js/stdlib/pull/4446) _(by stdlib-bot)_
-   [`e373bc9`](https://github.com/stdlib-js/stdlib/commit/e373bc91929cd46d5ed9a520cef9bfd5dcbb04c9) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsum` [(#4312)](https://github.com/stdlib-js/stdlib/pull/4312) _(by Muhammad Haris, Athan Reines, stdlib-bot)_
-   [`99388d1`](https://github.com/stdlib-js/stdlib/commit/99388d1aeabe238c519707b8e08843a4bdeb04d4) - **test:** fix grammar in descriptions _(by Athan Reines)_
-   [`9000841`](https://github.com/stdlib-js/stdlib/commit/9000841dbe1534a4b1984975068101a641383840) - **style:** fix decimals _(by Athan Reines)_
-   [`f78ae7b`](https://github.com/stdlib-js/stdlib/commit/f78ae7b4ed12879282a4e9c20e6c7b5baf2d6e39) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dssum` [(#4262)](https://github.com/stdlib-js/stdlib/pull/4262) _(by Muhammad Haris)_
-   [`cb750b6`](https://github.com/stdlib-js/stdlib/commit/cb750b6d8686990b958c9f62905dd236c86f98c6) - **docs:** fix C examples in `blas/ext/base/dsumkbn` [(#4315)](https://github.com/stdlib-js/stdlib/pull/4315) _(by Muhammad Haris)_
-   [`a6f3921`](https://github.com/stdlib-js/stdlib/commit/a6f3921560705503dcb5ee2575dd2f11417f58fb) - **docs:** update related packages sections [(#4242)](https://github.com/stdlib-js/stdlib/pull/4242) _(by stdlib-bot, Athan Reines)_
-   [`dfc908c`](https://github.com/stdlib-js/stdlib/commit/dfc908c6bc6fd95ec99c86e3b5c13b6fc7a0cf81) - **docs:** update namespace TypeScript declarations [(#4243)](https://github.com/stdlib-js/stdlib/pull/4243) _(by stdlib-bot)_
-   [`9228eef`](https://github.com/stdlib-js/stdlib/commit/9228eef3aea9350937b07e9c8a5fd33145ee45d6) - **docs:** update namespace table of contents [(#4245)](https://github.com/stdlib-js/stdlib/pull/4245) _(by stdlib-bot)_
-   [`c351e4b`](https://github.com/stdlib-js/stdlib/commit/c351e4b399c6d5c791e46db4cdfba9ce762d9548) - **feat:** add C `ndarray` API and refactor `blas/ext/base/snansumors` [(#3955)](https://github.com/stdlib-js/stdlib/pull/3955) _(by Snehil Shah, Athan Reines)_
-   [`f9fce59`](https://github.com/stdlib-js/stdlib/commit/f9fce5904d09fc2f61c1d7c21d26e59f7de17420) - **docs:** update related packages sections [(#4212)](https://github.com/stdlib-js/stdlib/pull/4212) _(by stdlib-bot)_
-   [`cc8daaf`](https://github.com/stdlib-js/stdlib/commit/cc8daaf165f6426ba2b1d7edd68ff3e8f3d74478) - **fix:** update include path _(by Athan Reines)_
-   [`d3d3d14`](https://github.com/stdlib-js/stdlib/commit/d3d3d14939ac77ab7d5a4476551108f8ff1c3f1f) - **docs:** update related packages sections [(#4149)](https://github.com/stdlib-js/stdlib/pull/4149) _(by stdlib-bot, Philipp Burckhardt)_
-   [`62364f6`](https://github.com/stdlib-js/stdlib/commit/62364f62ea823a3b52c2ad25660ecd80c71f8f36) - **style:** fix C comment alignment _(by Philipp Burckhardt)_
-   [`2ea848b`](https://github.com/stdlib-js/stdlib/commit/2ea848b62b686e1e9d861f7df25ece23a7d80798) - **style:** update to use tabs for indentation _(by Philipp Burckhardt)_
-   [`6a0d6b8`](https://github.com/stdlib-js/stdlib/commit/6a0d6b861f8e2079a501ca4e46a9175440eedb46) - **style:** update to use tabs for indentation _(by Philipp Burckhardt)_
-   [`2222d50`](https://github.com/stdlib-js/stdlib/commit/2222d505c97a6c4f8acf89bdb3aae6f504589e04) - **fix:** update include path and refactor addon _(by Athan Reines)_
-   [`c322b66`](https://github.com/stdlib-js/stdlib/commit/c322b6647751b73a9d0fe12bf5665e8e2243d4ca) - **docs:** update related packages sections [(#4070)](https://github.com/stdlib-js/stdlib/pull/4070) _(by stdlib-bot, Philipp Burckhardt)_
-   [`8bf8285`](https://github.com/stdlib-js/stdlib/commit/8bf8285aba0ecbd00ae145c4c5c098cd28135814) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`32deb11`](https://github.com/stdlib-js/stdlib/commit/32deb11c6a2453748d8db9554b6bb3fdb73a077f) - **docs:** update related packages sections [(#3976)](https://github.com/stdlib-js/stdlib/pull/3976) _(by stdlib-bot)_
-   [`b20a9e6`](https://github.com/stdlib-js/stdlib/commit/b20a9e616e5d04cfc3e5bc71bd557e15af738050) - **docs:** update related packages sections [(#3936)](https://github.com/stdlib-js/stdlib/pull/3936) _(by stdlib-bot)_
-   [`0e887d5`](https://github.com/stdlib-js/stdlib/commit/0e887d567344c8a31a382266389022ec26f2bcca) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`ff25e13`](https://github.com/stdlib-js/stdlib/commit/ff25e1324e1507cc076078e82badce7fdf7915f6) - **docs:** remove excess whitespace _(by Philipp Burckhardt)_
-   [`1a202e3`](https://github.com/stdlib-js/stdlib/commit/1a202e3605b10cd01bf9654f8356c72c5c8a8186) - **feat:** update namespace TypeScript declarations [(#3916)](https://github.com/stdlib-js/stdlib/pull/3916) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ef82c21`](https://github.com/stdlib-js/stdlib/commit/ef82c2133cc2cb955eb1fc73da0209eda97de59a) - **docs:** update namespace table of contents [(#3918)](https://github.com/stdlib-js/stdlib/pull/3918) _(by stdlib-bot, Philipp Burckhardt)_
-   [`bcc704d`](https://github.com/stdlib-js/stdlib/commit/bcc704dd3fcb478859932dbb4909f50f3a401608) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsumkbn` [(#3530)](https://github.com/stdlib-js/stdlib/pull/3530) _(by Muhammad Haris, Athan Reines)_
-   [`f2db85a`](https://github.com/stdlib-js/stdlib/commit/f2db85a9d8d46f224f61b0d6da9bbb36cff2b8c0) - **bench:** update benchmarks in `blas/ext/base/ssumpw` according to project conventions [(#3903)](https://github.com/stdlib-js/stdlib/pull/3903) _(by Snehil Shah)_
-   [`0c9faed`](https://github.com/stdlib-js/stdlib/commit/0c9faedab42d5b816921487891de6aef305aa54f) - **docs:** update namespace table of contents [(#3902)](https://github.com/stdlib-js/stdlib/pull/3902) _(by stdlib-bot, Philipp Burckhardt)_
-   [`1c2b313`](https://github.com/stdlib-js/stdlib/commit/1c2b3137c2a54cf42deb3c8d0a1b50afc41f99ac) - **docs:** update namespace TypeScript declarations [(#3900)](https://github.com/stdlib-js/stdlib/pull/3900) _(by stdlib-bot, Philipp Burckhardt)_
-   [`2825b42`](https://github.com/stdlib-js/stdlib/commit/2825b42e8cd7483d15dfed1c6b389bfcb86d7ca0) - **docs:** update related packages sections [(#3898)](https://github.com/stdlib-js/stdlib/pull/3898) _(by stdlib-bot)_
-   [`1f596cb`](https://github.com/stdlib-js/stdlib/commit/1f596cb9bd3a26c2a7a82ab578d460f88df8dea5) - **feat:** add C `ndarray` API and refactor `blas/ext/base/ssumors` [(#3891)](https://github.com/stdlib-js/stdlib/pull/3891) _(by Snehil Shah)_
-   [`5cb36ef`](https://github.com/stdlib-js/stdlib/commit/5cb36ef4c6f8158585ac88867a8dec21ed3fa372) - **docs:** update related packages sections [(#3890)](https://github.com/stdlib-js/stdlib/pull/3890) _(by stdlib-bot)_
-   [`a04a9e3`](https://github.com/stdlib-js/stdlib/commit/a04a9e31780bfb285f51dba041da0c07b905a30d) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dssumpw` [(#3528)](https://github.com/stdlib-js/stdlib/pull/3528) _(by Muhammad Haris, Athan Reines)_
-   [`5a3d324`](https://github.com/stdlib-js/stdlib/commit/5a3d324e7e80752fad34d120df3e6c85636f20c5) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dssumors` [(#3396)](https://github.com/stdlib-js/stdlib/pull/3396) _(by Muhammad Haris, Athan Reines)_
-   [`cf7d38a`](https://github.com/stdlib-js/stdlib/commit/cf7d38ae3e7bce92cf47778f7b1c3da731121d77) - **docs:** update related packages sections [(#3527)](https://github.com/stdlib-js/stdlib/pull/3527) _(by stdlib-bot)_
-   [`bf5643f`](https://github.com/stdlib-js/stdlib/commit/bf5643fb1a3f32a60903d8e210f71571e609119f) - **docs:** update related packages sections [(#3404)](https://github.com/stdlib-js/stdlib/pull/3404) _(by stdlib-bot)_
-   [`ac06419`](https://github.com/stdlib-js/stdlib/commit/ac06419c2a8358dfd80818823f571077eb58958e) - **docs:** update related packages sections [(#3387)](https://github.com/stdlib-js/stdlib/pull/3387) _(by stdlib-bot)_
-   [`1aae203`](https://github.com/stdlib-js/stdlib/commit/1aae2038eda97d6d0cc6460b96c56d797d2ccbc8) - **docs:** update namespace table of contents [(#3373)](https://github.com/stdlib-js/stdlib/pull/3373) _(by stdlib-bot, Philipp Burckhardt)_
-   [`a64ea86`](https://github.com/stdlib-js/stdlib/commit/a64ea86886d159e09b37e8591fc53d9944618204) - **feat:** update namespace TypeScript declarations [(#3371)](https://github.com/stdlib-js/stdlib/pull/3371) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7e8187a`](https://github.com/stdlib-js/stdlib/commit/7e8187a766886c2fb9cdc356cf781f0a1802172c) - **docs:** update related packages sections [(#3368)](https://github.com/stdlib-js/stdlib/pull/3368) _(by stdlib-bot)_
-   [`1b5ac87`](https://github.com/stdlib-js/stdlib/commit/1b5ac87b89851e816807a61dd1ef29c5989b838b) - **refactor:** update `stride` handling and function documentation for `blas/ext/base/dapxsumors` [(#3247)](https://github.com/stdlib-js/stdlib/pull/3247) _(by Muhammad Haris)_
-   [`5364192`](https://github.com/stdlib-js/stdlib/commit/536419208fcd2b06d9b24526c6b2ec73dc7ef736) - **refactor:** update `stride` handling and function documentation for `blas/ext/base/dapxsumpw` [(#3248)](https://github.com/stdlib-js/stdlib/pull/3248) _(by Muhammad Haris)_
-   [`e3efb84`](https://github.com/stdlib-js/stdlib/commit/e3efb84a0ec88f76fa2a799252da98165fcd7d4d) - **feat:** add C `ndarray` API and refactor `blas/ext/base/snansumpw` [(#3353)](https://github.com/stdlib-js/stdlib/pull/3353) _(by Snehil Shah)_
-   [`ff80d7d`](https://github.com/stdlib-js/stdlib/commit/ff80d7db842f8b1d35213fde391bb7b5f063ac42) - **refactor:** update `stride` handling and function documentation for `blas/ext/base/dasumpw` [(#3362)](https://github.com/stdlib-js/stdlib/pull/3362) _(by Muhammad Haris)_
-   [`fcedaac`](https://github.com/stdlib-js/stdlib/commit/fcedaac9fd61fd81a1aa6d522ed2c29b21465259) - **fix:** update the return type and remove unnecessary branches/tests in `blas/ext/base/ssumpw` [(#3321)](https://github.com/stdlib-js/stdlib/pull/3321) _(by Muhammad Haris)_
-   [`d7058bc`](https://github.com/stdlib-js/stdlib/commit/d7058bca74f0b2ad6a94d422209e51a23a331a0d) - **test:** add opts _(by Philipp Burckhardt)_
-   [`09ed5c5`](https://github.com/stdlib-js/stdlib/commit/09ed5c519986aee270ed1f59c13e83cc442c87e6) - **test:** add missing tests _(by Philipp Burckhardt)_
-   [`d5575ad`](https://github.com/stdlib-js/stdlib/commit/d5575ad0b379e52fa4e6cc33149f6c7f36152060) - **docs:** update namespace TypeScript declarations [(#3305)](https://github.com/stdlib-js/stdlib/pull/3305) _(by stdlib-bot, Philipp Burckhardt)_
-   [`166b3e1`](https://github.com/stdlib-js/stdlib/commit/166b3e195f2617a79ef26185d47cfe20257cfcfb) - **docs:** update namespace table of contents [(#3307)](https://github.com/stdlib-js/stdlib/pull/3307) _(by stdlib-bot, Philipp Burckhardt)_
-   [`c83f108`](https://github.com/stdlib-js/stdlib/commit/c83f10824d14d8c0290b68a5f5bcedbdc2c52c6d) - **feat:** add C `ndarray` API and refactor `blas/ext/base/ssumpw` [(#3285)](https://github.com/stdlib-js/stdlib/pull/3285) _(by Snehil Shah)_
-   [`9818fa6`](https://github.com/stdlib-js/stdlib/commit/9818fa6dd8c90e045a147bfd1ba83cb1f693d17b) - **feat:** update namespace TypeScript declarations [(#3259)](https://github.com/stdlib-js/stdlib/pull/3259) _(by stdlib-bot, Philipp Burckhardt)_
-   [`2bbeaab`](https://github.com/stdlib-js/stdlib/commit/2bbeaab8c9acb98f125e05ee49d8413d76dadf5e) - **docs:** update namespace table of contents [(#3290)](https://github.com/stdlib-js/stdlib/pull/3290) _(by stdlib-bot, Philipp Burckhardt)_
-   [`5c40302`](https://github.com/stdlib-js/stdlib/commit/5c4030282872bb10818edea642da92bad5f6dfdc) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsnansum` [(#3268)](https://github.com/stdlib-js/stdlib/pull/3268) _(by Muhammad Haris)_
-   [`9d47d0e`](https://github.com/stdlib-js/stdlib/commit/9d47d0e141eaa5705b242eb84a2c34a94d61e462) - **test:** add tests to `blas/ext/base/dnannsumors` [(#3266)](https://github.com/stdlib-js/stdlib/pull/3266) _(by Saurabh Singh, Athan Reines)_
-   [`153d5f4`](https://github.com/stdlib-js/stdlib/commit/153d5f41f8402b84cd2929dc4cffc7b35c614d21) - **docs:** update namespace table of contents [(#3277)](https://github.com/stdlib-js/stdlib/pull/3277) _(by stdlib-bot, Philipp Burckhardt)_
-   [`3b3d051`](https://github.com/stdlib-js/stdlib/commit/3b3d051f432384bf94048076bc62355cd00745ef) - **docs:** fix incorrect punctuation in function description for `blas/ext/base/dsnansumpw` [(#3273)](https://github.com/stdlib-js/stdlib/pull/3273) _(by Muhammad Haris)_
-   [`de75f04`](https://github.com/stdlib-js/stdlib/commit/de75f0465fdaa762112195f16f6334b121204664) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsnansumpw` [(#3262)](https://github.com/stdlib-js/stdlib/pull/3262) _(by Muhammad Haris, Philipp Burckhardt)_
-   [`755b053`](https://github.com/stdlib-js/stdlib/commit/755b053d5b7d5cbd675c060afc1ee049e431fdde) - **docs:** add missing header in `blas/ext/base/dsnannsumors` [(#3263)](https://github.com/stdlib-js/stdlib/pull/3263) _(by Muhammad Haris)_
-   [`a39d0f3`](https://github.com/stdlib-js/stdlib/commit/a39d0f372c70df837af84d321fa0b9b3d61f453b) - **refactor:** update `offset` handling and function documentation for `blas/ext/base/dnannsumors` [(#3252)](https://github.com/stdlib-js/stdlib/pull/3252) _(by Muhammad Haris)_
-   [`4458c49`](https://github.com/stdlib-js/stdlib/commit/4458c49e9901bdd83048c773b8cacc6361b8729b) - **fix:** extract the scalar constant as a float in `blas/ext/base/dsapxsum` [(#3254)](https://github.com/stdlib-js/stdlib/pull/3254) _(by Muhammad Haris)_
-   [`bff0533`](https://github.com/stdlib-js/stdlib/commit/bff0533b91d79f305e1918e0faa597ca3c98f2ca) - **fix:** extract the scalar constant as a float in `blas/ext/base/dsapxsumpw` [(#3255)](https://github.com/stdlib-js/stdlib/pull/3255) _(by Muhammad Haris)_
-   [`5ac82aa`](https://github.com/stdlib-js/stdlib/commit/5ac82aa10cd4472fac182be8f6a9954e8d1263f4) - **docs:** update namespace table of contents [(#3261)](https://github.com/stdlib-js/stdlib/pull/3261) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7809a85`](https://github.com/stdlib-js/stdlib/commit/7809a85b47556362c61182b4f08563014dcb598a) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsnansumors` [(#3246)](https://github.com/stdlib-js/stdlib/pull/3246) _(by Muhammad Haris)_
-   [`1ea5a78`](https://github.com/stdlib-js/stdlib/commit/1ea5a786066c959ee3560a58ca884ffe1fa6a4de) - **docs:** remove stray character in `blas/ext/base/dapx` documentation [(#3250)](https://github.com/stdlib-js/stdlib/pull/3250) _(by Muhammad Haris)_
-   [`d649da5`](https://github.com/stdlib-js/stdlib/commit/d649da5c2f30c5cb459d6c43215ce6066f5c7483) - **feat:** update namespace TypeScript declarations [(#3243)](https://github.com/stdlib-js/stdlib/pull/3243) _(by stdlib-bot, Philipp Burckhardt)_
-   [`6ae3c11`](https://github.com/stdlib-js/stdlib/commit/6ae3c11e5494f6e5750638535b46454e3e325b6e) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsapxsum` [(#3225)](https://github.com/stdlib-js/stdlib/pull/3225) _(by Muhammad Haris)_
-   [`16d48af`](https://github.com/stdlib-js/stdlib/commit/16d48af4bbe9dade8ca3f9e323db29ec75c4924f) - **refactor:** update `stride` handling and function documentation for `blas/ext/base/dapxsumkbn2` [(#3227)](https://github.com/stdlib-js/stdlib/pull/3227) _(by Muhammad Haris)_
-   [`9c913e5`](https://github.com/stdlib-js/stdlib/commit/9c913e504f964aa729ec1f19abbaae30174ddbd8) - **docs:** update descriptions of the function and its parameters in `blas/ext/base/dapx` [(#3226)](https://github.com/stdlib-js/stdlib/pull/3226) _(by Muhammad Haris)_
-   [`f1fa458`](https://github.com/stdlib-js/stdlib/commit/f1fa458db16484f740ca8a80095231a31831226b) - **feat:** add `blas/ext/base/dapxsumkbn-wasm` [(#3204)](https://github.com/stdlib-js/stdlib/pull/3204) _(by Snehil Shah, Athan Reines, stdlib-bot)_
-   [`ec233ec`](https://github.com/stdlib-js/stdlib/commit/ec233ec9cadd6f17a72dafa5e79b7eeee5a821eb) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnannsumpw` [(#2994)](https://github.com/stdlib-js/stdlib/pull/2994) _(by Muhammad Haris, Athan Reines, stdlib-bot)_
-   [`045a348`](https://github.com/stdlib-js/stdlib/commit/045a348d16c6bf78a9ebfb31c1c74de5536e37ea) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnannsum` [(#3197)](https://github.com/stdlib-js/stdlib/pull/3197) _(by Muhammad Haris, stdlib-bot)_
-   [`243fe3d`](https://github.com/stdlib-js/stdlib/commit/243fe3d7fb26729eba74c461daab5b89e9c66c32) - **test:** add tests to `blas/ext/base/dnannsumkbn` [(#3218)](https://github.com/stdlib-js/stdlib/pull/3218) _(by Saurabh Singh)_
-   [`4eb9aea`](https://github.com/stdlib-js/stdlib/commit/4eb9aea88656f98ba3f65075b4a7cb3335284716) - **refactor:** replace `fabs` with `stdlib_base_abs` in C implementation of `blas/ext/base/dapxsumkbn` [(#3214)](https://github.com/stdlib-js/stdlib/pull/3214) _(by Muhammad Haris, stdlib-bot)_
-   [`49f4678`](https://github.com/stdlib-js/stdlib/commit/49f46785af07e358a254308f25b80c6b6779ae48) - **chore:** update docs and tests of `blas/ext/base/dapxsum` [(#3213)](https://github.com/stdlib-js/stdlib/pull/3213) _(by Muhammad Haris)_
-   [`f4009fd`](https://github.com/stdlib-js/stdlib/commit/f4009fd28715c51637c80513a1bf5b3b91784e7a) - **refactor:** update docs and handling of zero stride in `blas/ext/base/dapxsumkbn` [(#3212)](https://github.com/stdlib-js/stdlib/pull/3212) _(by Muhammad Haris)_
-   [`14021a5`](https://github.com/stdlib-js/stdlib/commit/14021a537b3f627a4ff0b3228b78d0433a6eb562) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnansumpw` [(#3202)](https://github.com/stdlib-js/stdlib/pull/3202) _(by Muhammad Haris)_
-   [`b6a2b0b`](https://github.com/stdlib-js/stdlib/commit/b6a2b0b27dc8cc1e9fc02d9679a3ce468cf49b9d) - **docs:** update namespace table of contents [(#3192)](https://github.com/stdlib-js/stdlib/pull/3192) _(by stdlib-bot, Philipp Burckhardt)_
-   [`297cdff`](https://github.com/stdlib-js/stdlib/commit/297cdffbf14b0f7cd87b0455b00d4a4fbf3b6cc3) - **test:** add tests to blas/ext/base/dnannsumbn2 [(#3205)](https://github.com/stdlib-js/stdlib/pull/3205) _(by Saurabh Singh, Philipp Burckhardt)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_
-   [`f9fa434`](https://github.com/stdlib-js/stdlib/commit/f9fa434610b42939102b9f87eda61c3706a06a12) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnannsumkbn` [(#2988)](https://github.com/stdlib-js/stdlib/pull/2988) _(by Muhammad Haris)_
-   [`b4c3fc8`](https://github.com/stdlib-js/stdlib/commit/b4c3fc8f5a8a1edeb82564db8b840b902ed1b5cd) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsapxsumpw` [(#3083)](https://github.com/stdlib-js/stdlib/pull/3083) _(by Muhammad Haris, Athan Reines, stdlib-bot)_
-   [`bc9016d`](https://github.com/stdlib-js/stdlib/commit/bc9016d5f3a7e304851e2d2ca88cce6b7d3ae7e1) - **docs:** update parameter descriptions and add missing header in C example [(#3187)](https://github.com/stdlib-js/stdlib/pull/3187) _(by Muhammad Haris)_
-   [`15d040c`](https://github.com/stdlib-js/stdlib/commit/15d040c67472ca6ffb9b3ff9414e39f907ca8294) - **refactor:** remove unnecessary variable declaration [(#3185)](https://github.com/stdlib-js/stdlib/pull/3185) _(by Muhammad Haris)_
-   [`3bdf9dc`](https://github.com/stdlib-js/stdlib/commit/3bdf9dc95f583863afe2dc2d89d553c4996d123c) - **test:** add tests to `blas/ext/base/dnanasumors` [(#3104)](https://github.com/stdlib-js/stdlib/pull/3104) _(by Neeraj Pathak, Athan Reines, stdlib-bot)_
-   [`7f76495`](https://github.com/stdlib-js/stdlib/commit/7f76495810ffc554f5c8ef36d2458f6dfd1c31f2) - **test:** add tests to `blas/ext/base/dnanasum` [(#3056)](https://github.com/stdlib-js/stdlib/pull/3056) _(by Saurabh Singh, Athan Reines, stdlib-bot)_
-   [`22b7505`](https://github.com/stdlib-js/stdlib/commit/22b75056694840ce79b3493940e442672bab96c6) - **refactor:** update `offset` handling and function documentation for `blas/ext/base/dsnannsumors` [(#3129)](https://github.com/stdlib-js/stdlib/pull/3129) _(by Muhammad Haris, stdlib-bot)_
-   [`cb425f9`](https://github.com/stdlib-js/stdlib/commit/cb425f9efa61a4f81ebf2154f132ebe1f125ae19) - **refactor:** remove explicit cast and update function parameter description in `blas/ext/base/drev` [(#3127)](https://github.com/stdlib-js/stdlib/pull/3127) _(by Muhammad Haris)_
-   [`f80e82f`](https://github.com/stdlib-js/stdlib/commit/f80e82fac77275db101aaa28f61eebd7024e2c9f) - **refactor:** update `offset` handling and function parameter description for `blas/ext/base/dnannsumkbn2` [(#3123)](https://github.com/stdlib-js/stdlib/pull/3123) _(by Muhammad Haris)_
-   [`fca01a0`](https://github.com/stdlib-js/stdlib/commit/fca01a0a8a63b87834a8beb6a4a698b8c6f7699e) - **test:** achieve 100% test coverage for `blas/ext/base/dnansumkbn2` [(#3105)](https://github.com/stdlib-js/stdlib/pull/3105) _(by Neeraj Pathak)_
-   [`f0ecdad`](https://github.com/stdlib-js/stdlib/commit/f0ecdad9731cd40ae9047a87981d2688693e54dc) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnannsumkbn2` [(#2990)](https://github.com/stdlib-js/stdlib/pull/2990) _(by Muhammad Haris)_
-   [`ee9a830`](https://github.com/stdlib-js/stdlib/commit/ee9a8300ba0f24dabe4b7b67ffb3bbe94f251b36) - **feat:** add C `ndarray` API and refactor `blas/ext/base/drev` [(#3071)](https://github.com/stdlib-js/stdlib/pull/3071) _(by Muhammad Haris)_
-   [`a341f85`](https://github.com/stdlib-js/stdlib/commit/a341f857ab541502a4e2b0b4b805c41e68e46fd6) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsnannsumors` [(#3086)](https://github.com/stdlib-js/stdlib/pull/3086) _(by Muhammad Haris)_
-   [`af8d471`](https://github.com/stdlib-js/stdlib/commit/af8d471a7e01113f814a78fc411c7949b69ca1f3) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnannsumors` [(#2991)](https://github.com/stdlib-js/stdlib/pull/2991) _(by Muhammad Haris)_
-   [`796d76a`](https://github.com/stdlib-js/stdlib/commit/796d76a43a378cd5496e4222baac2bde1658e6da) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnansum` [(#3052)](https://github.com/stdlib-js/stdlib/pull/3052) _(by Muhammad Haris)_
-   [`02735b4`](https://github.com/stdlib-js/stdlib/commit/02735b4090dddd143b4845f4f1916f8d73b3ef19) - **test:** achieve 100% test coverage for `blas/ext/base/dnansumors` [(#3087)](https://github.com/stdlib-js/stdlib/pull/3087) _(by Gururaj Gurram, Philipp Burckhardt)_
-   [`cc6362b`](https://github.com/stdlib-js/stdlib/commit/cc6362bffb6dbff54c3dd69257dfcb2dd7d372f4) - **test:** achieve 100% test coverage for `blas/ext/base/dnansumkbn` [(#3051)](https://github.com/stdlib-js/stdlib/pull/3051) _(by Muhammad Haris)_
-   [`dc4b7b1`](https://github.com/stdlib-js/stdlib/commit/dc4b7b138a07ebbc5250fd7580ca758db7803875) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnansumkbn2` [(#3000)](https://github.com/stdlib-js/stdlib/pull/3000) _(by Muhammad Haris, Athan Reines, Philipp Burckhardt)_
-   [`371a494`](https://github.com/stdlib-js/stdlib/commit/371a49427e62050eb23947678b66aa529ee3890b) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnansumkbn` [(#2996)](https://github.com/stdlib-js/stdlib/pull/2996) _(by Muhammad Haris, Athan Reines)_
-   [`fdd3963`](https://github.com/stdlib-js/stdlib/commit/fdd3963096904e999191e354dede1ca59461adc2) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`7df5877`](https://github.com/stdlib-js/stdlib/commit/7df58771f61965f3c819af3ea3b9376fedd86a86) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnansumors` [(#3001)](https://github.com/stdlib-js/stdlib/pull/3001) _(by Muhammad Haris, Athan Reines)_
-   [`efbff47`](https://github.com/stdlib-js/stdlib/commit/efbff479674b3a3941278a245dedda41baf137a3) - **refactor:** `blas/ext/base/snansumkbn2` according to current project conventions [(#3002)](https://github.com/stdlib-js/stdlib/pull/3002) _(by Gururaj Gurram, Gururaj Gurram, Philipp Burckhardt)_
-   [`ea7b344`](https://github.com/stdlib-js/stdlib/commit/ea7b34499a4847bd917e120595a0c677fe8bddb9) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnanasum` [(#2984)](https://github.com/stdlib-js/stdlib/pull/2984) _(by Muhammad Haris, Athan Reines)_
-   [`6fe012e`](https://github.com/stdlib-js/stdlib/commit/6fe012ee17be4a3fad36642041770de4693ef5a3) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnanasumors` [(#2982)](https://github.com/stdlib-js/stdlib/pull/2982) _(by Muhammad Haris, Athan Reines)_
-   [`3bd3f48`](https://github.com/stdlib-js/stdlib/commit/3bd3f480c66a81bc012efd838cef6e0cbda52870) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusumpw` [(#2981)](https://github.com/stdlib-js/stdlib/pull/2981) _(by Muhammad Haris, Athan Reines)_
-   [`f446206`](https://github.com/stdlib-js/stdlib/commit/f4462062a216ceb2131121cbb299525b6b3b17ff) - **feat:** add C `ndarray` API and refactor `blas/ext/base/zfill` [(#2962)](https://github.com/stdlib-js/stdlib/pull/2962) _(by Muhammad Haris, Athan Reines)_
-   [`5774557`](https://github.com/stdlib-js/stdlib/commit/5774557e951cb1ae566fc0587cbf03d47b067620) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusumors` _(by Muhammad Haris, Athan Reines)_
-   [`cf62100`](https://github.com/stdlib-js/stdlib/commit/cf62100c3ef0fe8318291d861f7db73ff3acec33) - **refactor:** update `blas/ext/base/dsort2ins` to follow current project conventions [(#2961)](https://github.com/stdlib-js/stdlib/pull/2961) _(by Aayush Khanna, Philipp Burckhardt)_
-   [`c1552d8`](https://github.com/stdlib-js/stdlib/commit/c1552d85dee747d03a1d0c152566e79ad08470df) - **refactor:** update `blas/ext/base/ssort2hp` to follow current project conventions [(#2960)](https://github.com/stdlib-js/stdlib/pull/2960) _(by Aayush Khanna, Philipp Burckhardt)_
-   [`b57ae2e`](https://github.com/stdlib-js/stdlib/commit/b57ae2e52609433b1d07e0384a1c724a7308f401) - **refactor:** updated `blas/ext/base/ssort2sh` to follow current project conventions [(#2957)](https://github.com/stdlib-js/stdlib/pull/2957) _(by Aayush Khanna, Philipp Burckhardt)_
-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954) _(by Muhammad Haris)_
-   [`c4172be`](https://github.com/stdlib-js/stdlib/commit/c4172be96f0316ab213bbfe63b9678141a80709e) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusumkbn2` [(#2958)](https://github.com/stdlib-js/stdlib/pull/2958) _(by Muhammad Haris, Athan Reines)_
-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - **fix:** remove unused imports from TS declaration file _(by Philipp Burckhardt)_
-   [`08f9c1a`](https://github.com/stdlib-js/stdlib/commit/08f9c1af6dee1cc36cda84b10230500e75d53ff5) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`62a5c3a`](https://github.com/stdlib-js/stdlib/commit/62a5c3ad48fc4b0d2757ecea35ae7893ae452ea6) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusumkbn` [(#2951)](https://github.com/stdlib-js/stdlib/pull/2951) _(by Muhammad Haris, Athan Reines)_
-   [`6fd2e23`](https://github.com/stdlib-js/stdlib/commit/6fd2e23eb246789e43b311eabe9f2fac532175b7) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dasumpw` [(#2949)](https://github.com/stdlib-js/stdlib/pull/2949) _(by Muhammad Haris, Athan Reines)_
-   [`2bcce62`](https://github.com/stdlib-js/stdlib/commit/2bcce6265ac56f754e447c3898b74f58710ea4a6) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapxsumkbn2` [(#2948)](https://github.com/stdlib-js/stdlib/pull/2948) _(by Muhammad Haris)_
-   [`dc08755`](https://github.com/stdlib-js/stdlib/commit/dc08755be693a93f1cef11bc0fe13d30829c9392) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapxsum` [(#2946)](https://github.com/stdlib-js/stdlib/pull/2946) _(by Muhammad Haris, Athan Reines)_
-   [`9d55639`](https://github.com/stdlib-js/stdlib/commit/9d55639aa76472d280ee6c613cd338ee16552cd6) - **fix:** update C function names in `blas/ext/base/sfill` to prevent name collisions [(#2945)](https://github.com/stdlib-js/stdlib/pull/2945) _(by Muhammad Haris)_
-   [`1f49ad9`](https://github.com/stdlib-js/stdlib/commit/1f49ad98dfcee0a15a8bd3873508f2eaedd88807) - **fix:** update C function names in `blas/ext/base/dfill` to prevent name collisions [(#2944)](https://github.com/stdlib-js/stdlib/pull/2944) _(by Muhammad Haris)_
-   [`5467341`](https://github.com/stdlib-js/stdlib/commit/54673410322991eb15e9c48c2e6f43912cec3b44) - **fix:** update C function names in `blas/ext/base/cfill` to prevent name collisions [(#2943)](https://github.com/stdlib-js/stdlib/pull/2943) _(by Muhammad Haris)_
-   [`829713b`](https://github.com/stdlib-js/stdlib/commit/829713b1fd6081cafa25133ac90931d8ba911b5e) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapxsumpw` [(#2937)](https://github.com/stdlib-js/stdlib/pull/2937) _(by Muhammad Haris, Athan Reines)_
-   [`bc97fa9`](https://github.com/stdlib-js/stdlib/commit/bc97fa994dbd0e671613e9633a551cdae30fa621) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapxsumors` [(#2934)](https://github.com/stdlib-js/stdlib/pull/2934) _(by Muhammad Haris, Athan Reines)_
-   [`bc3a86b`](https://github.com/stdlib-js/stdlib/commit/bc3a86bd7570b474ee165594dbb48e389f68fa60) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapxsumkbn` [(#2930)](https://github.com/stdlib-js/stdlib/pull/2930) _(by Muhammad Haris, Athan Reines)_
-   [`a187bfc`](https://github.com/stdlib-js/stdlib/commit/a187bfc1f71912625823d786f7b1234b224b323d) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapx` [(#2929)](https://github.com/stdlib-js/stdlib/pull/2929) _(by Muhammad Haris, Athan Reines)_
-   [`e4de24f`](https://github.com/stdlib-js/stdlib/commit/e4de24f1e086063876214e73f1f6b659dc624eb1) - **fix:** resolve bugs in addon.c files _(by Philipp Burckhardt)_
-   [`6e9f42e`](https://github.com/stdlib-js/stdlib/commit/6e9f42e4c912485d9896eaa16c88b70fd3688e97) - **docs:** harmonize list formatting in repl.txt and ensure starting newline _(by Philipp Burckhardt)_
-   [`0b47144`](https://github.com/stdlib-js/stdlib/commit/0b47144318f7b9c00a6015d57ff5a8fd0256eac4) - **refactor:** update `blas/ext/base/ssortins` to follow current project conventions _(by Aayush Khanna, Philipp Burckhardt)_
-   [`226a6d8`](https://github.com/stdlib-js/stdlib/commit/226a6d802c38bfc6c4fb2afe7453fb1767103034) - **feat:** add C `ndarray` API to `blas/ext/base/cfill` [(#2925)](https://github.com/stdlib-js/stdlib/pull/2925) _(by Muhammad Haris, Athan Reines)_
-   [`e454c91`](https://github.com/stdlib-js/stdlib/commit/e454c91ae2af928b61effcddadb31548758f8675) - **chore:** improve code style and conditionals _(by Philipp Burckhardt)_
-   [`898b50d`](https://github.com/stdlib-js/stdlib/commit/898b50d8d705bdf6a55db8cf1858ea1e1d257c35) - **fix:** fix includes and types _(by Philipp Burckhardt)_
-   [`7e366ae`](https://github.com/stdlib-js/stdlib/commit/7e366ae8bd41439be0e99e958d1c3fbb1b7dd0c2) - **chore:** update package.json descriptions _(by Philipp Burckhardt)_
-   [`fd41e1b`](https://github.com/stdlib-js/stdlib/commit/fd41e1bd1dc6b7c351702bdbf95978b343215b0b) - **feat:** add C `ndarray` API to `blas/ext/base/sfill` [(#2923)](https://github.com/stdlib-js/stdlib/pull/2923) _(by Muhammad Haris, Athan Reines)_
-   [`6ae1c10`](https://github.com/stdlib-js/stdlib/commit/6ae1c10d70d86520a0c915864440ef6e8d255a21) - **docs:** rename parameter _(by Athan Reines)_
-   [`7eb1266`](https://github.com/stdlib-js/stdlib/commit/7eb12667e2052db9fc1e678bf0cc2082e2993aec) - **docs:** rename parameters _(by Athan Reines)_
-   [`040a335`](https://github.com/stdlib-js/stdlib/commit/040a33583774b120b5e486a072cff397fdb1d273) - **feat:** add a C `ndarray` API, refactor, and clean-up _(by Athan Reines)_
-   [`d9580f5`](https://github.com/stdlib-js/stdlib/commit/d9580f56677f81425930dad6a0ed65c71f665314) - **refactor:** reduce code duplication in `blas/ext/base/sfill` [(#2916)](https://github.com/stdlib-js/stdlib/pull/2916) _(by Muhammad Haris)_
-   [`ed44fee`](https://github.com/stdlib-js/stdlib/commit/ed44feecb9eaa5e0849d1a533e5415624d0aa338) - **style:** use imperative in package.json description and end with period _(by Philipp Burckhardt)_
-   [`7e11338`](https://github.com/stdlib-js/stdlib/commit/7e11338ae6642c1389e51557262710bd6ebe44aa) - **feat:** add `blas/ext/base/zfill` [(#2907)](https://github.com/stdlib-js/stdlib/pull/2907) _(by Muhammad Haris, Athan Reines)_
-   [`fadff3a`](https://github.com/stdlib-js/stdlib/commit/fadff3a44660678d9ccce8bb101f579ca1913a64) - **feat:** add `blas/ext/base/cfill` [(#2901)](https://github.com/stdlib-js/stdlib/pull/2901) _(by Muhammad Haris, Athan Reines)_
-   [`3e80682`](https://github.com/stdlib-js/stdlib/commit/3e80682320d42a999f428fcf3d30e6711b6b9b89) - **refactor:** update implementation for `blas/ext/base/sdsnansumpw` _(by Yaswanth Kosuru, Philipp Burckhardt)_
-   [`c6bf7de`](https://github.com/stdlib-js/stdlib/commit/c6bf7de53b6ab8c44263cee7fdf1cdfe2815864d) - **refactor:** update implementation for `blas/ext/base/sapxsumors` _(by Yaswanth Kosuru, Philipp Burckhardt)_
-   [`7cc8bb9`](https://github.com/stdlib-js/stdlib/commit/7cc8bb9a96147bb94fe8cfddc180a6ec535fc368) - **refactor:** update `blas/ext/base/dsnannsumors` _(by HarshaNP, Philipp Burckhardt)_
-   [`e9f4e07`](https://github.com/stdlib-js/stdlib/commit/e9f4e0759a14b8da93d4e0837b886d8ed56bc696) - **refactor:** update `blas/ext/base/dsnansumpw` to follow current conventions _(by Yaswanth Kosuru, Philipp Burckhardt)_
-   [`aabe731`](https://github.com/stdlib-js/stdlib/commit/aabe7310272e138b7ae69a9297832aa7fcb21ef1) - **fix:** update variable name and define `status` type _(by Athan Reines)_
-   [`1fce730`](https://github.com/stdlib-js/stdlib/commit/1fce730e287d8688956b801feb547ebb6a237756) - **fix:** use correct include path _(by Philipp Burckhardt)_
-   [`1fde962`](https://github.com/stdlib-js/stdlib/commit/1fde962b77faff072bd6296e1fbde207ad02cbe6) - **fix:** use correct dependencies in manifest file _(by Philipp Burckhardt)_
-   [`272ae7a`](https://github.com/stdlib-js/stdlib/commit/272ae7ac5c576c68cfab1b6e304c86407faa20cd) - **docs:** remove comment _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`659f752`](https://github.com/stdlib-js/stdlib/commit/659f752db18317bf5fc237fdbcad0d74b61e1ed9) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`e87d921`](https://github.com/stdlib-js/stdlib/commit/e87d921d5c2b73b2cd3bf7cd78ff503bd2fd49d7) - **refactor:** update `blas/ext/base/dsort2hp` to follow current project conventions _(by Jaimin Godhani, Athan Reines, Philipp Burckhardt)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_
-   [`919f75a`](https://github.com/stdlib-js/stdlib/commit/919f75a1fca3f5ff92bb3eda07dde5544f3c3fb7) - **refactor:** update `blas/ext/base/snansum` to follow current project convention _(by Xiaochuan Ye, Philipp Burckhardt)_
-   [`a5eebd0`](https://github.com/stdlib-js/stdlib/commit/a5eebd0cb3a562c48c4b924d246b7cefd2f09a10) - **docs:** update namespace TypeScript declaration documentation [(#2217)](https://github.com/stdlib-js/stdlib/pull/2217) _(by stdlib-bot, Philipp Burckhardt)_
-   [`e82767d`](https://github.com/stdlib-js/stdlib/commit/e82767d20039fb9ca057a5ec424a6fa361db3fec) - **refactor:** update `blas/ext/base/dsortins` to follow current project conventions _(by Shubh Mehta, Philipp Burckhardt)_
-   [`f1b1fce`](https://github.com/stdlib-js/stdlib/commit/f1b1fce972a5ba22f5305f4dca346496accfa80d) - **refactor:** update `blas/ext/ssort2ins` to follow current project conventions _(by Varad Gupta, Philipp Burckhardt)_
-   [`6bcf620`](https://github.com/stdlib-js/stdlib/commit/6bcf620230cce2cb888dfe6d1353e49aadf31471) - **refactor:** update `blas/ext/base/dsortsh` to follow current project conventions _(by Tirtadwipa Manunggal, Philipp Burckhardt)_
-   [`900ccd7`](https://github.com/stdlib-js/stdlib/commit/900ccd7dd8eeee7bd7b6525ddab7323c10a50ebc) - **refactor:** update `blas/ext/base/dsorthp` to follow current project conventions _(by Shubh Mehta, Philipp Burckhardt)_
-   [`2ca4ab3`](https://github.com/stdlib-js/stdlib/commit/2ca4ab3fecb7cb81e96af90866185a7a17bb230e) - **refactor:** update `blas/ext/base/ssortsh` to follow current project conventions _(by Sivam Das, Philipp Burckhardt)_
-   [`11ef4bd`](https://github.com/stdlib-js/stdlib/commit/11ef4bd6b94d05687951525526fe7cd46a28ed08) - **docs:** update namespace TypeScript declarations [(#2210)](https://github.com/stdlib-js/stdlib/pull/2210) _(by stdlib-bot, Philipp Burckhardt)_
-   [`726cca7`](https://github.com/stdlib-js/stdlib/commit/726cca7d78896f87428818a08ac788e5f3ed5be0) - **refactor:** update `blas/ext/base/ssorthp` to follow current project conventions _(by Naveen Kumar, Praveen Kumar, Philipp Burckhardt)_
-   [`73e863a`](https://github.com/stdlib-js/stdlib/commit/73e863a31c1d25d63a26c6a3be93e745e8396d19) - **fix:** address undeclared identifier _(by Athan Reines)_
-   [`7699cd7`](https://github.com/stdlib-js/stdlib/commit/7699cd7cbc8de2c41b0609bb7772c05708f54809) - **build:** fix config _(by Athan Reines)_
-   [`21b83ed`](https://github.com/stdlib-js/stdlib/commit/21b83ed04421d96fa92c30fecb31077544ad5038) - **build:** fix config _(by Athan Reines)_
-   [`16b15a8`](https://github.com/stdlib-js/stdlib/commit/16b15a8bbbdc0ae212c20f9ba72f62feac88375f) - **build:** fix build config _(by Athan Reines)_
-   [`47ee818`](https://github.com/stdlib-js/stdlib/commit/47ee81892a3dbff28898593e535875f866d922ac) - **build:** fix build config _(by Athan Reines)_
-   [`f2da861`](https://github.com/stdlib-js/stdlib/commit/f2da861137486a776999be1166e6f6c84b8e52fd) - **build:** fix missing deps _(by Athan Reines)_
-   [`69fef11`](https://github.com/stdlib-js/stdlib/commit/69fef117ec8cd23b4db353a0070c2275b26fd9ca) - **build:** fix missing field _(by Athan Reines)_
-   [`a4a1e2a`](https://github.com/stdlib-js/stdlib/commit/a4a1e2a97e9e3e3eaa4d7eb8df69395c927d6a96) - **build:** fix missing configurations _(by Athan Reines)_
-   [`1021465`](https://github.com/stdlib-js/stdlib/commit/10214653aa66b14a7e96321c6db689c2375467e9) - **build:** fix missing deps _(by Athan Reines)_
-   [`4be9ab5`](https://github.com/stdlib-js/stdlib/commit/4be9ab5479119a898317c19f382a733729487308) - **build:** fix missing deps _(by Athan Reines)_
-   [`c90db88`](https://github.com/stdlib-js/stdlib/commit/c90db889bead68b46c38541eba2925b921819d38) - **build:** update config _(by Athan Reines)_
-   [`ef57ac7`](https://github.com/stdlib-js/stdlib/commit/ef57ac7c106908bab550f97430d132b0e57d16cd) - **build:** fix missing deps _(by Athan Reines)_
-   [`eba97ba`](https://github.com/stdlib-js/stdlib/commit/eba97bab6149fd8664c58d0c850c70d32b5c1f9d) - **build:** fix missing default task _(by Athan Reines)_
-   [`ceb4943`](https://github.com/stdlib-js/stdlib/commit/ceb494351d42c2505e559a2c8aad9a120c76d0db) - **docs:** remove comments _(by Athan Reines)_
-   [`d583804`](https://github.com/stdlib-js/stdlib/commit/d583804fb1d05b8ac4d40e1e897f8682c71e0e2b) - **fix:** resolve bugs in addon.c _(by Philipp Burckhardt)_
-   [`bcf58bb`](https://github.com/stdlib-js/stdlib/commit/bcf58bbc808831edd9993072d47bb1bfdd9fb1a6) - **fix:** resolve bugs in addon.c _(by Philipp Burckhardt)_
-   [`b3051ee`](https://github.com/stdlib-js/stdlib/commit/b3051eece13a0ef20b0ff0df0c95e0c0ef3ace48) - **test:** fix number of elements _(by Philipp Burckhardt)_
-   [`be25162`](https://github.com/stdlib-js/stdlib/commit/be25162ff647ef83bdc4938dc28c0a30d15b02e6) - **refactor:** update `blas/ext/base/dnannsumkbn` to follow current project conventions _(by Shubh Mehta, Philipp Burckhardt)_
-   [`0f07a02`](https://github.com/stdlib-js/stdlib/commit/0f07a02fb8a7b51ef6ca35644a845b369cf5a683) - **refactor:** update `blas/ext/base/dnannsumkbn2` to follow current project conventions _(by Varad Gupta, Philipp Burckhardt)_
-   [`de9ca6a`](https://github.com/stdlib-js/stdlib/commit/de9ca6a375bffa0683dde68a81da5922edd3d9c2) - **fix:** update manifest.json _(by Philipp Burckhardt)_
-   [`8d66a07`](https://github.com/stdlib-js/stdlib/commit/8d66a07b8e4058e8459f45180281653c5622ca40) - **refactor:** update `blas/ext/base/ssum` to follow current project conventions _(by Raunak Kumar Gupta, Pranav Goswami, Philipp Burckhardt)_
-   [`f0cd892`](https://github.com/stdlib-js/stdlib/commit/f0cd892874105f78bd2eff263cdec03905c69bfd) - **refactor:** update `blas/ext/base/dnanasum` to follow current project conventions _(by Raunak Kumar Gupta, Philipp Burckhardt)_
-   [`430a72b`](https://github.com/stdlib-js/stdlib/commit/430a72b28eac37834cfb1b002078fbe372d656b7) - **refactor:** update `blas/ext/base/dnannsumpw` to follow current project conventions _(by Naveen Kumar, Philipp Burckhardt)_
-   [`0f917bd`](https://github.com/stdlib-js/stdlib/commit/0f917bd3d395be1828ce69b763d5fe9d220306e5) - **refactor:** update `blas/ext/base/snansumkbn` to follow current project conventions _(by Priyansh Prajapati, Philipp Burckhardt)_
-   [`8dead56`](https://github.com/stdlib-js/stdlib/commit/8dead56dd7d25624eb7619ccb785111cf678f09d) - **feat:** update namespace TypeScript declarations [(#2181)](https://github.com/stdlib-js/stdlib/pull/2181 ) _(by stdlib-bot, Philipp Burckhardt)_
-   [`a7f3e44`](https://github.com/stdlib-js/stdlib/commit/a7f3e4462eacec13b65535bfe4a39aa57a6a94cc) - **refactor:** update `blas/ext/base/sfill` to follow current projects conventions _(by Priyanshu Agarwal, Athan Reines, Pranav Goswami, Philipp Burckhardt)_
-   [`118791f`](https://github.com/stdlib-js/stdlib/commit/118791f7f5962aab921f28e52826236b16fe1d80) - **refactor:** update `blas/ext/base/dnannsumors` to follow current project conventions _(by Shubh Mehta, Philipp Burckhardt)_
-   [`326479a`](https://github.com/stdlib-js/stdlib/commit/326479a0533ad89929eac59ad1b122cd8cd9cc5f) - **refactor:** update `blas/ext/base/snansumors` to follow current project conventions _(by Pratik Singh, Philipp Burckhardt)_
-   [`67e80eb`](https://github.com/stdlib-js/stdlib/commit/67e80ebd10c9a8b86fbf2f86ce1781015ce305ef) - **refactor:** update `blas/ext/base/dnansumors` follow current project conventions _(by Utkarsh Raj, Philipp Burckhardt)_
-   [`a65a14a`](https://github.com/stdlib-js/stdlib/commit/a65a14a9835be9bbae33c52607c537e761270ea2) - **refactor:** update `blas/ext/base/dnannsum` to follow current project conventions _(by Golden Kumar, Philipp Burckhardt)_
-   [`a5e27be`](https://github.com/stdlib-js/stdlib/commit/a5e27be21761ddb12f722eef6490a3958cb7d7bb) - **refactor:** update `blas/ext/base/sdssumpw` to follow current project conventions _(by Pranjal Jha, Philipp Burckhardt)_
-   [`c13b428`](https://github.com/stdlib-js/stdlib/commit/c13b4282c1566c301c26b3b65ee054862f244ab5) - **refactor:** update `blas/ext/base/sdssum` to follow current project conventions _(by rainn, Philipp Burckhardt)_
-   [`a0d8ed6`](https://github.com/stdlib-js/stdlib/commit/a0d8ed6fb23dddd6b674ebde3013026dd5d8ad7d) - **refactor:** update `blas/ext/base/dssumors` to follow current project conventions _(by Jaimin Godhani, Philipp Burckhardt)_
-   [`f478364`](https://github.com/stdlib-js/stdlib/commit/f47836421fb3f8e6bc9f2288d7a7dc4c546ce465) - **refactor:** update `blas/ext/base/snansumpw` to follow current projects conventions _(by Priyanshu Agarwal, Philipp Burckhardt)_
-   [`8f355fa`](https://github.com/stdlib-js/stdlib/commit/8f355faa09a8b077bbd01b0d74878f3aede80ccb) - **refactor:** update `blas/ext/base/dsumkbn` to follow current project conventions _(by Muhammad Haris, Philipp Burckhardt)_
-   [`87c4933`](https://github.com/stdlib-js/stdlib/commit/87c49335a289723224215f4bb2056a479dfca9b5) - **refactor:** update `blas/ext/base/dssumpw` to follow current project conventions _(by Soumajit Chatterjee, Philipp Burckhardt)_
-   [`3dfd403`](https://github.com/stdlib-js/stdlib/commit/3dfd40366cd676b27dc76dbd7e0278cb5189a10d) - **refactor:** update `blas/ext/base/dsumpw` to follow current project conventions _(by Utkarsh Raj, Philipp Burckhardt)_
-   [`ab3615f`](https://github.com/stdlib-js/stdlib/commit/ab3615f734d7d91d7f5fcac06e21e35c961a3e8b) - **refactor:** update `blas/ext/base/dsnansumors` to follow current project conventions _(by Utkarsh Raj, Philipp Burckhardt)_
-   [`d2ec36e`](https://github.com/stdlib-js/stdlib/commit/d2ec36e08a3c0c1bbe8c3d10d7ea28d833a42a30) - **refactor:** update `blas/ext/base/dsnansum` to follow current project conventions _(by Shubh Mehta, Pranav Goswami, Philipp Burckhardt)_
-   [`436b897`](https://github.com/stdlib-js/stdlib/commit/436b897c512749bb9e8c89dff5b283a16d0dba7e) - **refactor:** update `blas/ext/base/dnanasumors` to follow current project conventions _(by Shubh Mehta, Philipp Burckhardt)_
-   [`c6703d9`](https://github.com/stdlib-js/stdlib/commit/c6703d9c7a7ecec2dd4f4b17fea3dfba7d9ed396) - **refactor:** update `blas/ext/base/sdsnansum` to follow current project convention _(by Aleksandr, Athan Reines, Philipp Burckhardt)_
-   [`0244027`](https://github.com/stdlib-js/stdlib/commit/0244027e1e2c0ceb1cd8ae1808196c24fa77b142) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_
-   [`3080f03`](https://github.com/stdlib-js/stdlib/commit/3080f032a477cbd046b4201d7ffdd407c9d93816) - **chore:** fix by filling arrays with NaNs again _(by Philipp Burckhardt)_
-   [`87ccb3b`](https://github.com/stdlib-js/stdlib/commit/87ccb3b64743af368613a66232d66701715db235) - **refactor:** update `blas/ext/base/dnansumpw` to follow current project conventions _(by Utkarsh Raj, Philipp Burckhardt)_
-   [`47cc515`](https://github.com/stdlib-js/stdlib/commit/47cc5154b1535d8d200f6cb3f6a776c282fb2711) - **refactor:** update `blas/ext/base/dcusumkbn` to follow current project conventions _(by Krishnendu Das, Pranav Goswami, Athan Reines)_
-   [`04f59a2`](https://github.com/stdlib-js/stdlib/commit/04f59a288780ff5cbaf8516db4122cbb870ced1b) - **fix(fblas/ext/base/dcusumors):** change from `int64` to `double` [(#2085)](https://github.com/stdlib-js/stdlib/pull/2085) _(by Krishnendu Das)_
-   [`8897a7d`](https://github.com/stdlib-js/stdlib/commit/8897a7db5c2d9be36132fd95cbe789906d01243a) - **refactor:** update `blas/ext/base/dcusumpw` to follow current project conventions [(#2084)](https://github.com/stdlib-js/stdlib/pull/2084) _(by Krishnendu Das)_
-   [`b9f2025`](https://github.com/stdlib-js/stdlib/commit/b9f20258c101c9c53379d0704085ab0def1f1831) - **refactor:** update `blas/ext/base/dapxsum` to follow current project conventions _(by Ahmed Atwa, Athan, Philipp Burckhardt)_
-   [`a70e23d`](https://github.com/stdlib-js/stdlib/commit/a70e23d3b79c108d39c8b19392172f4776c9b043) - **refactor:** update `blas/ext/base/dasumpw` to follow current project conventions _(by Utkarsh Raj, Philipp Burckhardt)_
-   [`a9016c6`](https://github.com/stdlib-js/stdlib/commit/a9016c65a013cbabcf819c0733c05c59618d198c) - **refactor:** update `blas/ext/base/dnansumkbn` to follow current project conventions _(by Suraj Kumar)_
-   [`6246c5d`](https://github.com/stdlib-js/stdlib/commit/6246c5dcbe7163afe809a80ce221a712ea56772d) - **refactor:** update `blas/ext/base/dnansumkbn2` to follow current project conventions _(by Suraj Kumar, Philipp Burckhardt)_
-   [`7ba3296`](https://github.com/stdlib-js/stdlib/commit/7ba32967b87867957b1198cbcd5c2248235739fe) - **refactor:** update `blas/ext/base/dapxsumkbn2` to follow current project conventions _(by Suraj Kumar)_
-   [`16fabbd`](https://github.com/stdlib-js/stdlib/commit/16fabbd608ff5f4058b34e78d4e6109820bcd6b6) - **refactor:** update `blas/ext/base/dsapxsumpw` to follow current project conventions _(by Shivam Ahir, Philipp Burckhardt)_
-   [`71a78a5`](https://github.com/stdlib-js/stdlib/commit/71a78a5c3323c0025ecd05ca4afe7dc685f1faf5) - **refactor:** update `blas/ext/base/dcusumkbn2` to follow current project conventions _(by Varad Gupta, Philipp Burckhardt)_
-   [`8729504`](https://github.com/stdlib-js/stdlib/commit/872950417a5cd40b5e360c2bc123f007dafc3257) - **refactor:** update `blas/ext/base/dapxsumors` to follow current project conventions  _(by Shivam Ahir, Philipp Burckhardt)_
-   [`f1c46cd`](https://github.com/stdlib-js/stdlib/commit/f1c46cd7aed96dafc8b6fd7ea2a45927062b9fcd) - **refactor:** update `blas/ext/base/sasumpw` to follow current project conventions _(by Shivam Ahir, Philipp Burckhardt)_
-   [`8e8b47c`](https://github.com/stdlib-js/stdlib/commit/8e8b47cf5e52ef7543b99c3004075457316c611d) - **refactor:** `blas/ext/base/sapxsumkbn2` to follow current project conventions _(by Shivam Ahir, Philipp Burckhardt)_
-   [`f5dbe2d`](https://github.com/stdlib-js/stdlib/commit/f5dbe2dafe99f775e23ff16efbccd70e2ee50c66) - **refactor:** update `blas/ext/base/dsumors` to follow current project conventions _(by Shivam Ahir, Philipp Burckhardt)_
-   [`fd8b214`](https://github.com/stdlib-js/stdlib/commit/fd8b2148f3fe49e20a05f1663dec2e1a8f95b3bb) - **refactor:** update `blas/ext/base/dapxsumpw` to follow current project conventions _(by Shivam Ahir, Philipp Burckhardt)_
-   [`9b2ca2c`](https://github.com/stdlib-js/stdlib/commit/9b2ca2ce1281165deebb28310a8e1c73ff409245) - **refactor:** update `blas/ext/base/scusumkbn` to follow current project conventions [(#2012)](https://github.com/stdlib-js/stdlib/pull/2012) _(by Varad Gupta, Athan Reines, Philipp Burckhardt)_
-   [`f36cfab`](https://github.com/stdlib-js/stdlib/commit/f36cfab3875404fd9c58b6e2a6fedca5e04cb4d9) - **chore:** update package meta data [(#2014)](https://github.com/stdlib-js/stdlib/pull/2014) _(by stdlib-bot)_
-   [`30b95a8`](https://github.com/stdlib-js/stdlib/commit/30b95a8aa9e71f21f802c6eae85e61ff280cc499) - **refactor:** update `blas/ext/base/sapxsumpw` to follow current project conventions [(#1962)](https://github.com/stdlib-js/stdlib/pull/1962) _(by Bryan Elee)_
-   [`7c81bdd`](https://github.com/stdlib-js/stdlib/commit/7c81bdde0a34609a9e471d8d6fd14fd884482ed8) - **refactor:** update `blas/ext/base/dsumkbn2` to follow current project conventions [(#1995)](https://github.com/stdlib-js/stdlib/pull/1995 ) _(by Tirtadwipa Manunggal)_
-   [`743fd05`](https://github.com/stdlib-js/stdlib/commit/743fd055452a87d9e6d610534d9e40022d0e8235) - **refactor:** update `blas/ext/base/scusumkbn2` to follow current project conventions _(by Muhammad Haris, Philipp Burckhardt)_
-   [`37a6dfc`](https://github.com/stdlib-js/stdlib/commit/37a6dfcc48019b5b72fb885fd7d6565b5e928b1a) - **fix:** address typo _(by Athan Reines)_
-   [`a0ee397`](https://github.com/stdlib-js/stdlib/commit/a0ee397c28267c3a8234c81d1eda673e74ca26f0) - **fix:** update dependencies and update documentation _(by Athan Reines)_
-   [`f2b3fbc`](https://github.com/stdlib-js/stdlib/commit/f2b3fbce785af74072804639f615612560475202) - **refactor:** update `blas/ext/base/sapxsumkbn` to follow current project conventions [(#1895)](https://github.com/stdlib-js/stdlib/pull/1895) _(by Golden Kumar, Athan Reines)_
-   [`2fafc74`](https://github.com/stdlib-js/stdlib/commit/2fafc7432d42b9935ddf0e7c110af10ba7b5e4bd) - **refactor:** update `blas/ext/base/ssumkbn2` to follow current project conventions [(#1873)](https://github.com/stdlib-js/stdlib/pull/1873) _(by Varad Gupta, Athan Reines)_
-   [`d70b5c2`](https://github.com/stdlib-js/stdlib/commit/d70b5c2412d631ed577a3f9c7cd22457302385e3) - **refactor:** update `blas/ext/base/dsum` to follow current project conventions [(#1807)](https://github.com/stdlib-js/stdlib/pull/1807) _(by Rutam Kathale, Athan Reines)_
-   [`e3bf989`](https://github.com/stdlib-js/stdlib/commit/e3bf9895394d9a4c3db621a8c0491fc18a0fd1ba) - **fix:** update build configurations and add missing include _(by Athan Reines)_
-   [`7b29fe4`](https://github.com/stdlib-js/stdlib/commit/7b29fe431c795281b725bff2cc0911dda20c112c) - **refactor:** update `blas/ext/base/dapxsumkbn` to follow current project conventions _(by Suraj Kumar, Pranav, Philipp Burckhardt)_
-   [`079d639`](https://github.com/stdlib-js/stdlib/commit/079d6397cd66bcc13c4a83ba609796f94fe8f0ff) - **refactor:** update `blas/ext/base/sdsapxsumpw` to follow current project conventions _(by Jaimin Godhani, Pranav, Athan Reines)_
-   [`6f75d45`](https://github.com/stdlib-js/stdlib/commit/6f75d45b0ecbfa5bf67de8cd1a5e382ecf0515d7) - **refactor:** update `blas/ext/base/dsapxsum` to follow current project conventions _(by Golden Kumar, Philipp Burckhardt)_
-   [`aebb788`](https://github.com/stdlib-js/stdlib/commit/aebb78837a956e9a9035c0dcb13c82cd89dbfddd) - **refactor:** update `blas/ext/base/sdsapxsum` to follow current project conventions _(by Golden Kumar, Athan Reines)_
-   [`6f7cbb6`](https://github.com/stdlib-js/stdlib/commit/6f7cbb68f9c25352a8b6a1fe4ee361d4e532aab5) - **refactor:** remove explicit cast _(by Athan Reines)_
-   [`1852b1e`](https://github.com/stdlib-js/stdlib/commit/1852b1e1609d09a425ea0fc50397ce871e01a5d0) - **refactor:** remove explicit cast _(by Athan Reines)_
-   [`b42059b`](https://github.com/stdlib-js/stdlib/commit/b42059b2ed67d896332b671ff0d26a09fe75883d) - **refactor:** remove explicit cast _(by Athan Reines)_
-   [`327d765`](https://github.com/stdlib-js/stdlib/commit/327d76545afdbdcaa80664d945919ab79b9fb1d0) - **fix:** use correct variable names and fix configuration file _(by Athan Reines)_
-   [`80fb571`](https://github.com/stdlib-js/stdlib/commit/80fb5712491212f6a24adc12e76c72781a1a422c) - **fix:** remove trailing commas _(by Athan Reines)_
-   [`e4f0dcd`](https://github.com/stdlib-js/stdlib/commit/e4f0dcd53e364d25d1a598e20ed25dd73cf547e7) - **refactor:** update `blas/ext/base/sapx` to follow current project conventions [(#1824)](https://github.com/stdlib-js/stdlib/pull/1824) _(by Bryan Elee, Athan Reines)_
-   [`f25615d`](https://github.com/stdlib-js/stdlib/commit/f25615d97bcda98cc45f3f4ada2ce4404b4c61ef) - **style:** fix indentation _(by Athan Reines)_
-   [`fbb34de`](https://github.com/stdlib-js/stdlib/commit/fbb34debfe94725c767866c47607520918ef9d84) - **fix:** update build configuration and remove unnecessary cast _(by Athan Reines)_
-   [`8e4990d`](https://github.com/stdlib-js/stdlib/commit/8e4990df5507a997e5187f1fa05087add35a97db) - **docs:** update namespace TypeScript declarations [(#1975)](https://github.com/stdlib-js/stdlib/pull/1975) _(by stdlib-bot, Athan Reines)_
-   [`1c4fd83`](https://github.com/stdlib-js/stdlib/commit/1c4fd83fa51544ade218820397796afb02f8c1f0) - **refactor:** update `blas/ext/base/sapxsum` to follow current project conventions [(#1850)](https://github.com/stdlib-js/stdlib/pull/1850) _(by Gunj Joshi, Athan Reines, Pranav Goswami)_
-   [`0d2528e`](https://github.com/stdlib-js/stdlib/commit/0d2528ece212fef00cf6c641c298d174b3c3ba04) - **refactor:** update `blas/ext/base/dapx` to follow current project conventions [(#1954)](https://github.com/stdlib-js/stdlib/pull/1954) _(by Naveen Kumar, Athan Reines)_
-   [`23fba1c`](https://github.com/stdlib-js/stdlib/commit/23fba1c12a6ed102c00e7831aeb8cde2be56cff0) - **fix:** update build configuration _(by Athan Reines)_
-   [`4d9c326`](https://github.com/stdlib-js/stdlib/commit/4d9c326d71d640f99f696a29c7f257961c1484b3) - **fix:** update build configuration _(by Athan Reines)_
-   [`f95e706`](https://github.com/stdlib-js/stdlib/commit/f95e706ed33176af97b5ac72fe06d86931838354) - **refactor:** update `blas/ext/base/scusumpw` to follow current project conventions _(by Bryan Elee, Pranav, Philipp Burckhardt)_
-   [`548f903`](https://github.com/stdlib-js/stdlib/commit/548f903780b33e672074ce77fdaceae672679ef6) - **refactor:** update `blas/ext/base/scusumors` _(by Bryan Elee, Philipp Burckhardt)_
-   [`5ca58c5`](https://github.com/stdlib-js/stdlib/commit/5ca58c52062ee83fc9f29167a7a25c85970ea1fe) - **refactor:** update `blas/ext/base/scusum` to follow current project conventions [(#1864)](https://github.com/stdlib-js/stdlib/pull/1864) _(by Golden Kumar, Athan Reines)_
-   [`1f6eec9`](https://github.com/stdlib-js/stdlib/commit/1f6eec9ea6ed451c65a8cddea93dac70e8d1196c) - **refactor:** update `blas/ext/base/dcusum` to follow current project conventions [(#1867)](https://github.com/stdlib-js/stdlib/pull/1867) _(by Golden Kumar, Athan Reines)_
-   [`9dce525`](https://github.com/stdlib-js/stdlib/commit/9dce525e1d8c0efc375ef5a255ce356cc671de28) - **refactor:** update `blas/ext/base/dnansum` to follow current project conventions _(by Golden Kumar, Pranav)_
-   [`fba1b9f`](https://github.com/stdlib-js/stdlib/commit/fba1b9f1b85152ba9a5867b927abcd31d8f5982e) - **refactor:** update `blas/ext/base/dssum` to follow current projects conventions _(by Golden Kumar, Pranav)_
-   [`2d5c522`](https://github.com/stdlib-js/stdlib/commit/2d5c52271193b9a11ae43ea362dd51bd8f402de8) - **fix:** update build configurations _(by Athan Reines)_
-   [`caf0ebb`](https://github.com/stdlib-js/stdlib/commit/caf0ebb5e542074f2f2ad61f12a6c12221b124ea) - **fix:** update build configurations and fix argument extraction _(by Athan Reines)_
-   [`c7f7ea9`](https://github.com/stdlib-js/stdlib/commit/c7f7ea9c2008f55462da45c9bd641add72670872) - **fix:** update build configurations _(by Athan Reines)_
-   [`07514b1`](https://github.com/stdlib-js/stdlib/commit/07514b1f40412bc50348fe6a5c9a85c26f3c3675) - **fix:** update build configurations _(by Athan Reines)_
-   [`3cf3d00`](https://github.com/stdlib-js/stdlib/commit/3cf3d00039ee92c03e3a181c00fe621555162fbd) - **fix:** update build configurations _(by Athan Reines)_
-   [`c81e201`](https://github.com/stdlib-js/stdlib/commit/c81e2014d3b65f8f3ee1ad34a7c2ea08537becc8) - **refactor:** update `blas/ext/base/drev` to follow current project conventions [(#1839)](https://github.com/stdlib-js/stdlib/pull/1839) _(by Rutam Kathale, Athan Reines, Pranav Goswami)_
-   [`4b27189`](https://github.com/stdlib-js/stdlib/commit/4b27189934e9d43d64d9438fcd94ef788eb9432b) - **fix:** update build configurations _(by Athan Reines)_
-   [`61bba7a`](https://github.com/stdlib-js/stdlib/commit/61bba7abbae8924dc615773a7e74daf920570c19) - **fix:** update include path _(by Athan Reines)_
-   [`78f03b5`](https://github.com/stdlib-js/stdlib/commit/78f03b5b21b82ba088a3fac0275faa6cf24e81ac) - **fix:** use correct package names _(by Athan Reines)_
-   [`bea0904`](https://github.com/stdlib-js/stdlib/commit/bea0904866d0e36557d9e72d8922833517dae522) - **fix:** update dependencies _(by Athan Reines)_
-   [`98b0775`](https://github.com/stdlib-js/stdlib/commit/98b077561e30e6a99c7e3523e6782b007f8f5e9e) - **refactor:** update `blas/ext/base/ssumkbn` to follow current project conventions [(#1741)](https://github.com/stdlib-js/stdlib/pull/1741) _(by Snehil Shah, Athan Reines)_
-   [`16fda9a`](https://github.com/stdlib-js/stdlib/commit/16fda9aaf8c2dca876866729caca692f32856c51) - **docs:** update namespace TypeScript declarations [(#1707)](https://github.com/stdlib-js/stdlib/pull/1707) _(by stdlib-bot, Athan Reines)_
-   [`7c23a54`](https://github.com/stdlib-js/stdlib/commit/7c23a540fa9286c4ff1d7ec8411d56fc977fba82) - **refactor:** update `blas/ext/base/srev` to follow current project conventions [(#1700)](https://github.com/stdlib-js/stdlib/pull/1700) _(by Snehil Shah)_
-   [`ef026dc`](https://github.com/stdlib-js/stdlib/commit/ef026dce8372e35dca6057e58e593d084da9a05b) - **refactor:** update `blas/ext/base/ssumors`  to follow current project conventions _(by Lovelin Dhoni J B, Athan Reines, Philipp Burckhardt)_
-   [`412acd6`](https://github.com/stdlib-js/stdlib/commit/412acd6244c7712b84bfc9d9ebd138e7f43bd659) - **refactor:** update `blas/ext/base/ssumpw` to follow current project conventions [(#1673)](https://github.com/stdlib-js/stdlib/pull/1673) _(by Lovelin Dhoni J B, Athan Reines)_
-   [`3163201`](https://github.com/stdlib-js/stdlib/commit/31632017d48d98b52623397755fe880b08eb1cb4) - **docs:** update namespace TypeScript declarations [(#1676)](https://github.com/stdlib-js/stdlib/pull/1676) _(by stdlib-bot, Athan Reines)_
-   [`2675d58`](https://github.com/stdlib-js/stdlib/commit/2675d586a0877f212edf6231b529fdc9047cd694) - **refactor:** update `blas/ext/base/dfill` to follow current project conventions [(#1455)](https://github.com/stdlib-js/stdlib/pull/1455) _(by Snehil Shah, Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-25)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-15)

<section class="packages">

### Packages

</section>

<!-- /.packages -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`18c2502`](https://github.com/stdlib-js/stdlib/commit/18c250220e23aa825b05ec5898927ea6b261ca43) - **docs:** update related packages sections [(#1303)](https://github.com/stdlib-js/stdlib/pull/1303) _(by stdlib-bot)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`bf038c4`](https://github.com/stdlib-js/stdlib/commit/bf038c45a43a91dfdcdf5f69240e1ebc782ea8d6) - **docs:** update related packages sections [(#1168)](https://github.com/stdlib-js/stdlib/pull/1168) _(by stdlib-bot)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`8a4ff0f`](https://github.com/stdlib-js/stdlib/commit/8a4ff0fe8c4ff2d4763387c206974857f782e069) - **docs:** update links _(by Athan Reines)_
-   [`3086382`](https://github.com/stdlib-js/stdlib/commit/30863820908ec486d87c7a7c81071d7abdc6b06b) - **docs:** fix links _(by Athan Reines)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`ac78ce0`](https://github.com/stdlib-js/stdlib/commit/ac78ce0b1ec7b3178eb955d4eeb7d3a3753a3561) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`df3c9b3`](https://github.com/stdlib-js/stdlib/commit/df3c9b368d8a3dd7dd38f8768deb53c2a780c055) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="packages">

### Packages

<section class="package" id="blas-ext-base-v0.1.0">

#### [@stdlib/blas/ext/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dapx-v0.1.0">

#### [@stdlib/blas/ext/base/dapx](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dapx)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dapxsum-v0.1.0">

#### [@stdlib/blas/ext/base/dapxsum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dapxsum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dapxsumkbn-v0.1.0">

#### [@stdlib/blas/ext/base/dapxsumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dapxsumkbn)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dapxsumkbn2-v0.1.0">

#### [@stdlib/blas/ext/base/dapxsumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dapxsumkbn2)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dapxsumors-v0.1.0">

#### [@stdlib/blas/ext/base/dapxsumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dapxsumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dapxsumpw-v0.1.0">

#### [@stdlib/blas/ext/base/dapxsumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dapxsumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dasumpw-v0.1.0">

#### [@stdlib/blas/ext/base/dasumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dasumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dcusum-v0.1.0">

#### [@stdlib/blas/ext/base/dcusum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dcusum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dcusumkbn-v0.1.0">

#### [@stdlib/blas/ext/base/dcusumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dcusumkbn)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dcusumkbn2-v0.1.0">

#### [@stdlib/blas/ext/base/dcusumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dcusumkbn2)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dcusumors-v0.1.0">

#### [@stdlib/blas/ext/base/dcusumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dcusumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dcusumpw-v0.1.0">

#### [@stdlib/blas/ext/base/dcusumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dcusumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dfill-v0.1.0">

#### [@stdlib/blas/ext/base/dfill](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dfill)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnanasum-v0.1.0">

#### [@stdlib/blas/ext/base/dnanasum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnanasum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnanasumors-v0.1.0">

#### [@stdlib/blas/ext/base/dnanasumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnanasumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnannsum-v0.1.0">

#### [@stdlib/blas/ext/base/dnannsum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnannsum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnannsumkbn-v0.1.0">

#### [@stdlib/blas/ext/base/dnannsumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnannsumkbn)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnannsumkbn2-v0.1.0">

#### [@stdlib/blas/ext/base/dnannsumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnannsumkbn2)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnannsumors-v0.1.0">

#### [@stdlib/blas/ext/base/dnannsumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnannsumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnannsumpw-v0.1.0">

#### [@stdlib/blas/ext/base/dnannsumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnannsumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnansum-v0.1.0">

#### [@stdlib/blas/ext/base/dnansum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnansum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnansumkbn-v0.1.0">

#### [@stdlib/blas/ext/base/dnansumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnansumkbn)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnansumkbn2-v0.1.0">

#### [@stdlib/blas/ext/base/dnansumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnansumkbn2)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnansumors-v0.1.0">

#### [@stdlib/blas/ext/base/dnansumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnansumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dnansumpw-v0.1.0">

#### [@stdlib/blas/ext/base/dnansumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dnansumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-drev-v0.1.0">

#### [@stdlib/blas/ext/base/drev](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/drev)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsapxsum-v0.1.0">

#### [@stdlib/blas/ext/base/dsapxsum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsapxsum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsapxsumpw-v0.1.0">

#### [@stdlib/blas/ext/base/dsapxsumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsapxsumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsnannsumors-v0.1.0">

#### [@stdlib/blas/ext/base/dsnannsumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsnannsumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsnansum-v0.1.0">

#### [@stdlib/blas/ext/base/dsnansum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsnansum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsnansumors-v0.1.0">

#### [@stdlib/blas/ext/base/dsnansumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsnansumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsnansumpw-v0.1.0">

#### [@stdlib/blas/ext/base/dsnansumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsnansumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsort2hp-v0.1.0">

#### [@stdlib/blas/ext/base/dsort2hp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsort2hp)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsort2ins-v0.1.0">

#### [@stdlib/blas/ext/base/dsort2ins](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsort2ins)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsort2sh-v0.1.0">

#### [@stdlib/blas/ext/base/dsort2sh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsort2sh)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsorthp-v0.1.0">

#### [@stdlib/blas/ext/base/dsorthp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsorthp)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsortins-v0.1.0">

#### [@stdlib/blas/ext/base/dsortins](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsortins)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsortsh-v0.1.0">

#### [@stdlib/blas/ext/base/dsortsh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsortsh)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dssum-v0.1.0">

#### [@stdlib/blas/ext/base/dssum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dssum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dssumors-v0.1.0">

#### [@stdlib/blas/ext/base/dssumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dssumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dssumpw-v0.1.0">

#### [@stdlib/blas/ext/base/dssumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dssumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsum-v0.1.0">

#### [@stdlib/blas/ext/base/dsum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsumkbn-v0.1.0">

#### [@stdlib/blas/ext/base/dsumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsumkbn)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsumkbn2-v0.1.0">

#### [@stdlib/blas/ext/base/dsumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsumkbn2)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsumors-v0.1.0">

#### [@stdlib/blas/ext/base/dsumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-dsumpw-v0.1.0">

#### [@stdlib/blas/ext/base/dsumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/dsumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gapx-v0.1.0">

#### [@stdlib/blas/ext/base/gapx](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gapx)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gapxsum-v0.1.0">

#### [@stdlib/blas/ext/base/gapxsum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gapxsum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gapxsumkbn-v0.1.0">

#### [@stdlib/blas/ext/base/gapxsumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gapxsumkbn)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gapxsumkbn2-v0.1.0">

#### [@stdlib/blas/ext/base/gapxsumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gapxsumkbn2)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gapxsumors-v0.1.0">

#### [@stdlib/blas/ext/base/gapxsumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gapxsumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gapxsumpw-v0.1.0">

#### [@stdlib/blas/ext/base/gapxsumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gapxsumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gasumpw-v0.1.0">

#### [@stdlib/blas/ext/base/gasumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gasumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gcusum-v0.1.0">

#### [@stdlib/blas/ext/base/gcusum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gcusum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gcusumkbn-v0.1.0">

#### [@stdlib/blas/ext/base/gcusumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gcusumkbn)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gcusumkbn2-v0.1.0">

#### [@stdlib/blas/ext/base/gcusumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gcusumkbn2)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gcusumors-v0.1.0">

#### [@stdlib/blas/ext/base/gcusumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gcusumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gcusumpw-v0.1.0">

#### [@stdlib/blas/ext/base/gcusumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gcusumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gfill-v0.1.0">

#### [@stdlib/blas/ext/base/gfill](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gfill)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`e75f7b8`](https://github.com/stdlib-js/stdlib/commit/e75f7b8bad22e572742076f4f0cabcf491cb616d) - update import paths for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gfill-by-v0.1.0">

#### [@stdlib/blas/ext/base/gfill-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gfill-by)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`c1a2754`](https://github.com/stdlib-js/stdlib/commit/c1a27540e7832f4c73543f81916a678a7d8b33a9) - add missing `this` parameter
-   [`e75f7b8`](https://github.com/stdlib-js/stdlib/commit/e75f7b8bad22e572742076f4f0cabcf491cb616d) - update import paths for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gnannsumkbn-v0.1.0">

#### [@stdlib/blas/ext/base/gnannsumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gnannsumkbn)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gnansum-v0.1.0">

#### [@stdlib/blas/ext/base/gnansum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gnansum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gnansumkbn-v0.1.0">

#### [@stdlib/blas/ext/base/gnansumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gnansumkbn)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gnansumkbn2-v0.1.0">

#### [@stdlib/blas/ext/base/gnansumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gnansumkbn2)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gnansumors-v0.1.0">

#### [@stdlib/blas/ext/base/gnansumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gnansumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gnansumpw-v0.1.0">

#### [@stdlib/blas/ext/base/gnansumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gnansumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-grev-v0.1.0">

#### [@stdlib/blas/ext/base/grev](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/grev)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`e75f7b8`](https://github.com/stdlib-js/stdlib/commit/e75f7b8bad22e572742076f4f0cabcf491cb616d) - update import paths for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gsort2hp-v0.1.0">

#### [@stdlib/blas/ext/base/gsort2hp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gsort2hp)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gsort2ins-v0.1.0">

#### [@stdlib/blas/ext/base/gsort2ins](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gsort2ins)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gsort2sh-v0.1.0">

#### [@stdlib/blas/ext/base/gsort2sh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gsort2sh)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gsorthp-v0.1.0">

#### [@stdlib/blas/ext/base/gsorthp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gsorthp)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gsortins-v0.1.0">

#### [@stdlib/blas/ext/base/gsortins](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gsortins)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gsortsh-v0.1.0">

#### [@stdlib/blas/ext/base/gsortsh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gsortsh)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gsum-v0.1.0">

#### [@stdlib/blas/ext/base/gsum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gsum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gsumkbn-v0.1.0">

#### [@stdlib/blas/ext/base/gsumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gsumkbn)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gsumkbn2-v0.1.0">

#### [@stdlib/blas/ext/base/gsumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gsumkbn2)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gsumors-v0.1.0">

#### [@stdlib/blas/ext/base/gsumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gsumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-gsumpw-v0.1.0">

#### [@stdlib/blas/ext/base/gsumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/gsumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sapx-v0.1.0">

#### [@stdlib/blas/ext/base/sapx](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sapx)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sapxsum-v0.1.0">

#### [@stdlib/blas/ext/base/sapxsum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sapxsum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sapxsumkbn-v0.1.0">

#### [@stdlib/blas/ext/base/sapxsumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sapxsumkbn)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sapxsumkbn2-v0.1.0">

#### [@stdlib/blas/ext/base/sapxsumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sapxsumkbn2)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sapxsumors-v0.1.0">

#### [@stdlib/blas/ext/base/sapxsumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sapxsumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sapxsumpw-v0.1.0">

#### [@stdlib/blas/ext/base/sapxsumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sapxsumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sasumpw-v0.1.0">

#### [@stdlib/blas/ext/base/sasumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sasumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-scusum-v0.1.0">

#### [@stdlib/blas/ext/base/scusum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/scusum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-scusumkbn-v0.1.0">

#### [@stdlib/blas/ext/base/scusumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/scusumkbn)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-scusumkbn2-v0.1.0">

#### [@stdlib/blas/ext/base/scusumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/scusumkbn2)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-scusumors-v0.1.0">

#### [@stdlib/blas/ext/base/scusumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/scusumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-scusumpw-v0.1.0">

#### [@stdlib/blas/ext/base/scusumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/scusumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sdsapxsum-v0.1.0">

#### [@stdlib/blas/ext/base/sdsapxsum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sdsapxsum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sdsapxsumpw-v0.1.0">

#### [@stdlib/blas/ext/base/sdsapxsumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sdsapxsumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sdsnansum-v0.1.0">

#### [@stdlib/blas/ext/base/sdsnansum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sdsnansum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sdsnansumpw-v0.1.0">

#### [@stdlib/blas/ext/base/sdsnansumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sdsnansumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sdssum-v0.1.0">

#### [@stdlib/blas/ext/base/sdssum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sdssum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sdssumpw-v0.1.0">

#### [@stdlib/blas/ext/base/sdssumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sdssumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-sfill-v0.1.0">

#### [@stdlib/blas/ext/base/sfill](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/sfill)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-snansum-v0.1.0">

#### [@stdlib/blas/ext/base/snansum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/snansum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-snansumkbn-v0.1.0">

#### [@stdlib/blas/ext/base/snansumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/snansumkbn)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-snansumkbn2-v0.1.0">

#### [@stdlib/blas/ext/base/snansumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/snansumkbn2)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-snansumors-v0.1.0">

#### [@stdlib/blas/ext/base/snansumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/snansumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-snansumpw-v0.1.0">

#### [@stdlib/blas/ext/base/snansumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/snansumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-srev-v0.1.0">

#### [@stdlib/blas/ext/base/srev](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/srev)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssort2hp-v0.1.0">

#### [@stdlib/blas/ext/base/ssort2hp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssort2hp)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssort2ins-v0.1.0">

#### [@stdlib/blas/ext/base/ssort2ins](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssort2ins)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssort2sh-v0.1.0">

#### [@stdlib/blas/ext/base/ssort2sh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssort2sh)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssorthp-v0.1.0">

#### [@stdlib/blas/ext/base/ssorthp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssorthp)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssortins-v0.1.0">

#### [@stdlib/blas/ext/base/ssortins](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssortins)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssortsh-v0.1.0">

#### [@stdlib/blas/ext/base/ssortsh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssortsh)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssum-v0.1.0">

#### [@stdlib/blas/ext/base/ssum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssum)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssumkbn-v0.1.0">

#### [@stdlib/blas/ext/base/ssumkbn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssumkbn)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssumkbn2-v0.1.0">

#### [@stdlib/blas/ext/base/ssumkbn2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssumkbn2)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssumors-v0.1.0">

#### [@stdlib/blas/ext/base/ssumors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssumors)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="blas-ext-base-ssumpw-v0.1.0">

#### [@stdlib/blas/ext/base/ssumpw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/base/ssumpw)

<details>

<section class="features">

##### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`c1a2754`](https://github.com/stdlib-js/stdlib/commit/c1a27540e7832f4c73543f81916a678a7d8b33a9) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`e75f7b8`](https://github.com/stdlib-js/stdlib/commit/e75f7b8bad22e572742076f4f0cabcf491cb616d) - **fix:** update import paths for `Collection` type definition _(by Athan Reines)_
-   [`2e197bc`](https://github.com/stdlib-js/stdlib/commit/2e197bc4bab1c252c283ff512d82610648368598) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`4d943eb`](https://github.com/stdlib-js/stdlib/commit/4d943eb98ed10314432bbfa5a3af3634ea19b969) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`42c921a`](https://github.com/stdlib-js/stdlib/commit/42c921ab62b8cdf789a9e76b06b18074e850af5e) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`a9f7c78`](https://github.com/stdlib-js/stdlib/commit/a9f7c78cf0414fd5b48418008de73910e71ec02e) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2022-08-29)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-28)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->


<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Extended BLAS

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base (i.e., lower-level) extensions to basic linear algebra subprograms (BLAS).



<section class="usage">

## Usage

```javascript
import extblas from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base@v0.2.1-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { dapx, dapxsum, dapxsumkbn, dapxsumkbn2, dapxsumors, dapxsumpw, dasumpw, dcusum, dcusumkbn, dcusumkbn2, dcusumors, dcusumpw, dfill, dnanasum, dnanasumors, dnannsum, dnannsumkbn, dnannsumkbn2, dnannsumors, dnannsumpw, dnansum, dnansumkbn, dnansumkbn2, dnansumors, dnansumpw, drev, dsapxsum, dsapxsumpw, dsnannsumors, dsnansum, dsnansumors, dsnansumpw, dsort2hp, dsort2ins, dsort2sh, dsorthp, dsortins, dsortsh, dssum, dssumors, dssumpw, dsum, dsumkbn, dsumkbn2, dsumors, dsumpw, gapx, gapxsum, gapxsumkbn, gapxsumkbn2, gapxsumors, gapxsumpw, gasumpw, gcusum, gcusumkbn, gcusumkbn2, gcusumors, gcusumpw, gfill, gfillBy, gnannsumkbn, gnansum, gnansumkbn, gnansumkbn2, gnansumors, gnansumpw, grev, gsort2hp, gsort2ins, gsort2sh, gsorthp, gsortins, gsortsh, gsum, gsumkbn, gsumkbn2, gsumors, gsumpw, sapx, sapxsum, sapxsumkbn, sapxsumkbn2, sapxsumors, sapxsumpw, sasumpw, scusum, scusumkbn, scusumkbn2, scusumors, scusumpw, sdsapxsum, sdsapxsumpw, sdsnansum, sdsnansumpw, sdssum, sdssumpw, sfill, snansum, snansumkbn, snansumkbn2, snansumors, snansumpw, srev, ssort2hp, ssort2ins, ssort2sh, ssorthp, ssortins, ssortsh, ssum, ssumkbn, ssumkbn2, ssumors, ssumpw } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base@v0.2.1-deno/mod.js';
```

#### extblas

Namespace for "base" (i.e., lower-level) extensions to basic linear algebra subprograms (BLAS).

```javascript
var ns = extblas;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`dapx( N, alpha, x, stride )`][@stdlib/blas/ext/base/dapx]</span><span class="delimiter">: </span><span class="description">add a constant to each element in a double-precision floating-point strided array.</span>
-   <span class="signature">[`dapxsum( N, alpha, x, stride )`][@stdlib/blas/ext/base/dapxsum]</span><span class="delimiter">: </span><span class="description">add a constant to each double-precision floating-point strided array element and compute the sum.</span>
-   <span class="signature">[`dapxsumkbn( N, alpha, x, stride )`][@stdlib/blas/ext/base/dapxsumkbn]</span><span class="delimiter">: </span><span class="description">add a constant to each double-precision floating-point strided array element and compute the sum using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dapxsumkbn2( N, alpha, x, stride )`][@stdlib/blas/ext/base/dapxsumkbn2]</span><span class="delimiter">: </span><span class="description">add a constant to each double-precision floating-point strided array element and compute the sum using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dapxsumors( N, alpha, x, stride )`][@stdlib/blas/ext/base/dapxsumors]</span><span class="delimiter">: </span><span class="description">add a constant to each double-precision floating-point strided array element and compute the sum using ordinary recursive summation.</span>
-   <span class="signature">[`dapxsumpw( N, alpha, x, stride )`][@stdlib/blas/ext/base/dapxsumpw]</span><span class="delimiter">: </span><span class="description">add a constant to each double-precision floating-point strided array element and compute the sum using pairwise summation.</span>
-   <span class="signature">[`dasumpw( N, x, stride )`][@stdlib/blas/ext/base/dasumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of double-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`dcusum( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusum]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcusumkbn( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusumkbn]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dcusumkbn2( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dcusumors( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusumors]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`dcusumpw( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusumpw]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`dfill( N, alpha, x, stride )`][@stdlib/blas/ext/base/dfill]</span><span class="delimiter">: </span><span class="description">fill a double-precision floating-point strided array with a specified scalar constant.</span>
-   <span class="signature">[`dnanasum( N, x, stride )`][@stdlib/blas/ext/base/dnanasum]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of double-precision floating-point strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanasumors( N, x, stride )`][@stdlib/blas/ext/base/dnanasumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnannsum( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`dnannsumkbn( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnannsumkbn2( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnannsumors( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnannsumpw( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`dnansum( N, x, stride )`][@stdlib/blas/ext/base/dnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`dnansumkbn( N, x, stride )`][@stdlib/blas/ext/base/dnansumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnansumkbn2( N, x, stride )`][@stdlib/blas/ext/base/dnansumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnansumors( N, x, stride )`][@stdlib/blas/ext/base/dnansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnansumpw( N, x, stride )`][@stdlib/blas/ext/base/dnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`drev( N, x, stride )`][@stdlib/blas/ext/base/drev]</span><span class="delimiter">: </span><span class="description">reverse a double-precision floating-point strided array in-place.</span>
-   <span class="signature">[`dsapxsum( N, alpha, x, stride )`][@stdlib/blas/ext/base/dsapxsum]</span><span class="delimiter">: </span><span class="description">add a constant to each single-precision floating-point strided array element and compute the sum using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsapxsumpw( N, alpha, x, stride )`][@stdlib/blas/ext/base/dsapxsumpw]</span><span class="delimiter">: </span><span class="description">add a constant to each single-precision floating-point strided array element and compute the sum using pairwise summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsnannsumors( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dsnannsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnansum( N, x, stride )`][@stdlib/blas/ext/base/dsnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnansumors( N, x, stride )`][@stdlib/blas/ext/base/dsnansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnansumpw( N, x, stride )`][@stdlib/blas/ext/base/dsnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using pairwise summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsort2hp( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dsort2hp]</span><span class="delimiter">: </span><span class="description">simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using heapsort.</span>
-   <span class="signature">[`dsort2ins( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dsort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="signature">[`dsort2sh( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dsort2sh]</span><span class="delimiter">: </span><span class="description">simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using Shellsort.</span>
-   <span class="signature">[`dsorthp( N, order, x, stride )`][@stdlib/blas/ext/base/dsorthp]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using heapsort.</span>
-   <span class="signature">[`dsortins( N, order, x, stride )`][@stdlib/blas/ext/base/dsortins]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using insertion sort.</span>
-   <span class="signature">[`dsortsh( N, order, x, stride )`][@stdlib/blas/ext/base/dsortsh]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using Shellsort.</span>
-   <span class="signature">[`dssum( N, x, stride )`][@stdlib/blas/ext/base/dssum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dssumors( N, x, stride )`][@stdlib/blas/ext/base/dssumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using ordinary recursive summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dssumpw( N, x, stride )`][@stdlib/blas/ext/base/dssumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using pairwise summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsum( N, x, stride )`][@stdlib/blas/ext/base/dsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dsumkbn( N, x, stride )`][@stdlib/blas/ext/base/dsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dsumkbn2( N, x, stride )`][@stdlib/blas/ext/base/dsumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dsumors( N, x, stride )`][@stdlib/blas/ext/base/dsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`dsumpw( N, x, stride )`][@stdlib/blas/ext/base/dsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`gapx( N, alpha, x, stride )`][@stdlib/blas/ext/base/gapx]</span><span class="delimiter">: </span><span class="description">add a constant to each element in a strided array.</span>
-   <span class="signature">[`gapxsum( N, alpha, x, stride )`][@stdlib/blas/ext/base/gapxsum]</span><span class="delimiter">: </span><span class="description">add a constant to each strided array element and compute the sum.</span>
-   <span class="signature">[`gapxsumkbn( N, alpha, x, stride )`][@stdlib/blas/ext/base/gapxsumkbn]</span><span class="delimiter">: </span><span class="description">add a constant to each strided array element and compute the sum using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gapxsumkbn2( N, alpha, x, stride )`][@stdlib/blas/ext/base/gapxsumkbn2]</span><span class="delimiter">: </span><span class="description">add a constant to each strided array element and compute the sum using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gapxsumors( N, alpha, x, stride )`][@stdlib/blas/ext/base/gapxsumors]</span><span class="delimiter">: </span><span class="description">add a constant to each strided array element and compute the sum using ordinary recursive summation.</span>
-   <span class="signature">[`gapxsumpw( N, alpha, x, stride )`][@stdlib/blas/ext/base/gapxsumpw]</span><span class="delimiter">: </span><span class="description">add a constant to each strided array element and compute the sum using pairwise summation.</span>
-   <span class="signature">[`gasumpw( N, x, stride )`][@stdlib/blas/ext/base/gasumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of strided array elements using pairwise summation.</span>
-   <span class="signature">[`gcusum( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusum]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements.</span>
-   <span class="signature">[`gcusumkbn( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusumkbn]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gcusumkbn2( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gcusumors( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusumors]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`gcusumpw( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusumpw]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using pairwise summation.</span>
-   <span class="signature">[`gfillBy( N, x, stride, clbk[, thisArg] )`][@stdlib/blas/ext/base/gfill-by]</span><span class="delimiter">: </span><span class="description">fill a strided array according to a provided callback function.</span>
-   <span class="signature">[`gfill( N, alpha, x, stride )`][@stdlib/blas/ext/base/gfill]</span><span class="delimiter">: </span><span class="description">fill a strided array with a specified scalar constant.</span>
-   <span class="signature">[`gnannsumkbn( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/gnannsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gnansum( N, x, stride )`][@stdlib/blas/ext/base/gnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`gnansumkbn( N, x, stride )`][@stdlib/blas/ext/base/gnansumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gnansumkbn2( N, x, stride )`][@stdlib/blas/ext/base/gnansumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gnansumors( N, x, stride )`][@stdlib/blas/ext/base/gnansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`gnansumpw( N, x, stride )`][@stdlib/blas/ext/base/gnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`grev( N, x, stride )`][@stdlib/blas/ext/base/grev]</span><span class="delimiter">: </span><span class="description">reverse a strided array in-place.</span>
-   <span class="signature">[`gsort2hp( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gsort2hp]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using heapsort.</span>
-   <span class="signature">[`gsort2ins( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gsort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="signature">[`gsort2sh( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gsort2sh]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using Shellsort.</span>
-   <span class="signature">[`gsorthp( N, order, x, stride )`][@stdlib/blas/ext/base/gsorthp]</span><span class="delimiter">: </span><span class="description">sort a strided array using heapsort.</span>
-   <span class="signature">[`gsortins( N, order, x, stride )`][@stdlib/blas/ext/base/gsortins]</span><span class="delimiter">: </span><span class="description">sort a strided array using insertion sort.</span>
-   <span class="signature">[`gsortsh( N, order, x, stride )`][@stdlib/blas/ext/base/gsortsh]</span><span class="delimiter">: </span><span class="description">sort a strided array using Shellsort.</span>
-   <span class="signature">[`gsum( N, x, stride )`][@stdlib/blas/ext/base/gsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements.</span>
-   <span class="signature">[`gsumkbn( N, x, stride )`][@stdlib/blas/ext/base/gsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gsumkbn2( N, x, stride )`][@stdlib/blas/ext/base/gsumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gsumors( N, x, stride )`][@stdlib/blas/ext/base/gsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`gsumpw( N, x, stride )`][@stdlib/blas/ext/base/gsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using pairwise summation.</span>
-   <span class="signature">[`sapx( N, alpha, x, stride )`][@stdlib/blas/ext/base/sapx]</span><span class="delimiter">: </span><span class="description">add a constant to each element in a single-precision floating-point strided array.</span>
-   <span class="signature">[`sapxsum( N, alpha, x, stride )`][@stdlib/blas/ext/base/sapxsum]</span><span class="delimiter">: </span><span class="description">add a constant to each single-precision floating-point strided array element and compute the sum.</span>
-   <span class="signature">[`sapxsumkbn( N, alpha, x, stride )`][@stdlib/blas/ext/base/sapxsumkbn]</span><span class="delimiter">: </span><span class="description">add a constant to each single-precision floating-point strided array element and compute the sum using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`sapxsumkbn2( N, alpha, x, stride )`][@stdlib/blas/ext/base/sapxsumkbn2]</span><span class="delimiter">: </span><span class="description">add a constant to each single-precision floating-point strided array element and compute the sum using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`sapxsumors( N, alpha, x, stride )`][@stdlib/blas/ext/base/sapxsumors]</span><span class="delimiter">: </span><span class="description">add a constant to each single-precision floating-point strided array element and compute the sum using ordinary recursive summation.</span>
-   <span class="signature">[`sapxsumpw( N, alpha, x, stride )`][@stdlib/blas/ext/base/sapxsumpw]</span><span class="delimiter">: </span><span class="description">add a constant to each single-precision floating-point strided array element and compute the sum using pairwise summation.</span>
-   <span class="signature">[`sasumpw( N, x, stride )`][@stdlib/blas/ext/base/sasumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of single-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`scusum( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusum]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scusumkbn( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusumkbn]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`scusumkbn2( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`scusumors( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusumors]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`scusumpw( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusumpw]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`sdsapxsum( N, alpha, x, stride )`][@stdlib/blas/ext/base/sdsapxsum]</span><span class="delimiter">: </span><span class="description">add a constant to each single-precision floating-point strided array element and compute the sum using extended accumulation.</span>
-   <span class="signature">[`sdsapxsumpw( N, alpha, x, stride )`][@stdlib/blas/ext/base/sdsapxsumpw]</span><span class="delimiter">: </span><span class="description">add a constant to each single-precision floating-point strided array element and compute the sum using pairwise summation with extended accumulation.</span>
-   <span class="signature">[`sdsnansum( N, x, stride )`][@stdlib/blas/ext/base/sdsnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using extended accumulation.</span>
-   <span class="signature">[`sdsnansumpw( N, x, stride )`][@stdlib/blas/ext/base/sdsnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation with extended accumulation.</span>
-   <span class="signature">[`sdssum( N, x, stride )`][@stdlib/blas/ext/base/sdssum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using extended accumulation.</span>
-   <span class="signature">[`sdssumpw( N, x, stride )`][@stdlib/blas/ext/base/sdssumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using pairwise summation with extended accumulation.</span>
-   <span class="signature">[`sfill( N, alpha, x, stride )`][@stdlib/blas/ext/base/sfill]</span><span class="delimiter">: </span><span class="description">fill a single-precision floating-point strided array with a specified scalar constant.</span>
-   <span class="signature">[`snansum( N, x, stride )`][@stdlib/blas/ext/base/snansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`snansumkbn( N, x, stride )`][@stdlib/blas/ext/base/snansumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`snansumkbn2( N, x, stride )`][@stdlib/blas/ext/base/snansumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`snansumors( N, x, stride )`][@stdlib/blas/ext/base/snansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`snansumpw( N, x, stride )`][@stdlib/blas/ext/base/snansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`srev( N, x, stride )`][@stdlib/blas/ext/base/srev]</span><span class="delimiter">: </span><span class="description">reverse a single-precision floating-point strided array in-place.</span>
-   <span class="signature">[`ssort2hp( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/ssort2hp]</span><span class="delimiter">: </span><span class="description">simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using heapsort.</span>
-   <span class="signature">[`ssort2ins( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/ssort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="signature">[`ssort2sh( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/ssort2sh]</span><span class="delimiter">: </span><span class="description">simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using Shellsort.</span>
-   <span class="signature">[`ssorthp( N, order, x, stride )`][@stdlib/blas/ext/base/ssorthp]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array using heapsort.</span>
-   <span class="signature">[`ssortins( N, order, x, stride )`][@stdlib/blas/ext/base/ssortins]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array using insertion sort.</span>
-   <span class="signature">[`ssortsh( N, order, x, stride )`][@stdlib/blas/ext/base/ssortsh]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array using Shellsort.</span>
-   <span class="signature">[`ssum( N, x, stride )`][@stdlib/blas/ext/base/ssum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`ssumkbn( N, x, stride )`][@stdlib/blas/ext/base/ssumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`ssumkbn2( N, x, stride )`][@stdlib/blas/ext/base/ssumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`ssumors( N, x, stride )`][@stdlib/blas/ext/base/ssumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`ssumpw( N, x, stride )`][@stdlib/blas/ext/base/ssumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using pairwise summation.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@deno/mod.js';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base@v0.2.1-deno/mod.js';

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base

[test-image]: https://github.com/stdlib-js/blas-ext-base/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/blas-ext-base/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/blas/ext/base/dapx]: https://github.com/stdlib-js/blas-ext-base-dapx/tree/deno

[@stdlib/blas/ext/base/dapxsum]: https://github.com/stdlib-js/blas-ext-base-dapxsum/tree/deno

[@stdlib/blas/ext/base/dapxsumkbn]: https://github.com/stdlib-js/blas-ext-base-dapxsumkbn/tree/deno

[@stdlib/blas/ext/base/dapxsumkbn2]: https://github.com/stdlib-js/blas-ext-base-dapxsumkbn2/tree/deno

[@stdlib/blas/ext/base/dapxsumors]: https://github.com/stdlib-js/blas-ext-base-dapxsumors/tree/deno

[@stdlib/blas/ext/base/dapxsumpw]: https://github.com/stdlib-js/blas-ext-base-dapxsumpw/tree/deno

[@stdlib/blas/ext/base/dasumpw]: https://github.com/stdlib-js/blas-ext-base-dasumpw/tree/deno

[@stdlib/blas/ext/base/dcusum]: https://github.com/stdlib-js/blas-ext-base-dcusum/tree/deno

[@stdlib/blas/ext/base/dcusumkbn]: https://github.com/stdlib-js/blas-ext-base-dcusumkbn/tree/deno

[@stdlib/blas/ext/base/dcusumkbn2]: https://github.com/stdlib-js/blas-ext-base-dcusumkbn2/tree/deno

[@stdlib/blas/ext/base/dcusumors]: https://github.com/stdlib-js/blas-ext-base-dcusumors/tree/deno

[@stdlib/blas/ext/base/dcusumpw]: https://github.com/stdlib-js/blas-ext-base-dcusumpw/tree/deno

[@stdlib/blas/ext/base/dfill]: https://github.com/stdlib-js/blas-ext-base-dfill/tree/deno

[@stdlib/blas/ext/base/dnanasum]: https://github.com/stdlib-js/blas-ext-base-dnanasum/tree/deno

[@stdlib/blas/ext/base/dnanasumors]: https://github.com/stdlib-js/blas-ext-base-dnanasumors/tree/deno

[@stdlib/blas/ext/base/dnannsum]: https://github.com/stdlib-js/blas-ext-base-dnannsum/tree/deno

[@stdlib/blas/ext/base/dnannsumkbn]: https://github.com/stdlib-js/blas-ext-base-dnannsumkbn/tree/deno

[@stdlib/blas/ext/base/dnannsumkbn2]: https://github.com/stdlib-js/blas-ext-base-dnannsumkbn2/tree/deno

[@stdlib/blas/ext/base/dnannsumors]: https://github.com/stdlib-js/blas-ext-base-dnannsumors/tree/deno

[@stdlib/blas/ext/base/dnannsumpw]: https://github.com/stdlib-js/blas-ext-base-dnannsumpw/tree/deno

[@stdlib/blas/ext/base/dnansum]: https://github.com/stdlib-js/blas-ext-base-dnansum/tree/deno

[@stdlib/blas/ext/base/dnansumkbn]: https://github.com/stdlib-js/blas-ext-base-dnansumkbn/tree/deno

[@stdlib/blas/ext/base/dnansumkbn2]: https://github.com/stdlib-js/blas-ext-base-dnansumkbn2/tree/deno

[@stdlib/blas/ext/base/dnansumors]: https://github.com/stdlib-js/blas-ext-base-dnansumors/tree/deno

[@stdlib/blas/ext/base/dnansumpw]: https://github.com/stdlib-js/blas-ext-base-dnansumpw/tree/deno

[@stdlib/blas/ext/base/drev]: https://github.com/stdlib-js/blas-ext-base-drev/tree/deno

[@stdlib/blas/ext/base/dsapxsum]: https://github.com/stdlib-js/blas-ext-base-dsapxsum/tree/deno

[@stdlib/blas/ext/base/dsapxsumpw]: https://github.com/stdlib-js/blas-ext-base-dsapxsumpw/tree/deno

[@stdlib/blas/ext/base/dsnannsumors]: https://github.com/stdlib-js/blas-ext-base-dsnannsumors/tree/deno

[@stdlib/blas/ext/base/dsnansum]: https://github.com/stdlib-js/blas-ext-base-dsnansum/tree/deno

[@stdlib/blas/ext/base/dsnansumors]: https://github.com/stdlib-js/blas-ext-base-dsnansumors/tree/deno

[@stdlib/blas/ext/base/dsnansumpw]: https://github.com/stdlib-js/blas-ext-base-dsnansumpw/tree/deno

[@stdlib/blas/ext/base/dsort2hp]: https://github.com/stdlib-js/blas-ext-base-dsort2hp/tree/deno

[@stdlib/blas/ext/base/dsort2ins]: https://github.com/stdlib-js/blas-ext-base-dsort2ins/tree/deno

[@stdlib/blas/ext/base/dsort2sh]: https://github.com/stdlib-js/blas-ext-base-dsort2sh/tree/deno

[@stdlib/blas/ext/base/dsorthp]: https://github.com/stdlib-js/blas-ext-base-dsorthp/tree/deno

[@stdlib/blas/ext/base/dsortins]: https://github.com/stdlib-js/blas-ext-base-dsortins/tree/deno

[@stdlib/blas/ext/base/dsortsh]: https://github.com/stdlib-js/blas-ext-base-dsortsh/tree/deno

[@stdlib/blas/ext/base/dssum]: https://github.com/stdlib-js/blas-ext-base-dssum/tree/deno

[@stdlib/blas/ext/base/dssumors]: https://github.com/stdlib-js/blas-ext-base-dssumors/tree/deno

[@stdlib/blas/ext/base/dssumpw]: https://github.com/stdlib-js/blas-ext-base-dssumpw/tree/deno

[@stdlib/blas/ext/base/dsum]: https://github.com/stdlib-js/blas-ext-base-dsum/tree/deno

[@stdlib/blas/ext/base/dsumkbn]: https://github.com/stdlib-js/blas-ext-base-dsumkbn/tree/deno

[@stdlib/blas/ext/base/dsumkbn2]: https://github.com/stdlib-js/blas-ext-base-dsumkbn2/tree/deno

[@stdlib/blas/ext/base/dsumors]: https://github.com/stdlib-js/blas-ext-base-dsumors/tree/deno

[@stdlib/blas/ext/base/dsumpw]: https://github.com/stdlib-js/blas-ext-base-dsumpw/tree/deno

[@stdlib/blas/ext/base/gapx]: https://github.com/stdlib-js/blas-ext-base-gapx/tree/deno

[@stdlib/blas/ext/base/gapxsum]: https://github.com/stdlib-js/blas-ext-base-gapxsum/tree/deno

[@stdlib/blas/ext/base/gapxsumkbn]: https://github.com/stdlib-js/blas-ext-base-gapxsumkbn/tree/deno

[@stdlib/blas/ext/base/gapxsumkbn2]: https://github.com/stdlib-js/blas-ext-base-gapxsumkbn2/tree/deno

[@stdlib/blas/ext/base/gapxsumors]: https://github.com/stdlib-js/blas-ext-base-gapxsumors/tree/deno

[@stdlib/blas/ext/base/gapxsumpw]: https://github.com/stdlib-js/blas-ext-base-gapxsumpw/tree/deno

[@stdlib/blas/ext/base/gasumpw]: https://github.com/stdlib-js/blas-ext-base-gasumpw/tree/deno

[@stdlib/blas/ext/base/gcusum]: https://github.com/stdlib-js/blas-ext-base-gcusum/tree/deno

[@stdlib/blas/ext/base/gcusumkbn]: https://github.com/stdlib-js/blas-ext-base-gcusumkbn/tree/deno

[@stdlib/blas/ext/base/gcusumkbn2]: https://github.com/stdlib-js/blas-ext-base-gcusumkbn2/tree/deno

[@stdlib/blas/ext/base/gcusumors]: https://github.com/stdlib-js/blas-ext-base-gcusumors/tree/deno

[@stdlib/blas/ext/base/gcusumpw]: https://github.com/stdlib-js/blas-ext-base-gcusumpw/tree/deno

[@stdlib/blas/ext/base/gfill-by]: https://github.com/stdlib-js/blas-ext-base-gfill-by/tree/deno

[@stdlib/blas/ext/base/gfill]: https://github.com/stdlib-js/blas-ext-base-gfill/tree/deno

[@stdlib/blas/ext/base/gnannsumkbn]: https://github.com/stdlib-js/blas-ext-base-gnannsumkbn/tree/deno

[@stdlib/blas/ext/base/gnansum]: https://github.com/stdlib-js/blas-ext-base-gnansum/tree/deno

[@stdlib/blas/ext/base/gnansumkbn]: https://github.com/stdlib-js/blas-ext-base-gnansumkbn/tree/deno

[@stdlib/blas/ext/base/gnansumkbn2]: https://github.com/stdlib-js/blas-ext-base-gnansumkbn2/tree/deno

[@stdlib/blas/ext/base/gnansumors]: https://github.com/stdlib-js/blas-ext-base-gnansumors/tree/deno

[@stdlib/blas/ext/base/gnansumpw]: https://github.com/stdlib-js/blas-ext-base-gnansumpw/tree/deno

[@stdlib/blas/ext/base/grev]: https://github.com/stdlib-js/blas-ext-base-grev/tree/deno

[@stdlib/blas/ext/base/gsort2hp]: https://github.com/stdlib-js/blas-ext-base-gsort2hp/tree/deno

[@stdlib/blas/ext/base/gsort2ins]: https://github.com/stdlib-js/blas-ext-base-gsort2ins/tree/deno

[@stdlib/blas/ext/base/gsort2sh]: https://github.com/stdlib-js/blas-ext-base-gsort2sh/tree/deno

[@stdlib/blas/ext/base/gsorthp]: https://github.com/stdlib-js/blas-ext-base-gsorthp/tree/deno

[@stdlib/blas/ext/base/gsortins]: https://github.com/stdlib-js/blas-ext-base-gsortins/tree/deno

[@stdlib/blas/ext/base/gsortsh]: https://github.com/stdlib-js/blas-ext-base-gsortsh/tree/deno

[@stdlib/blas/ext/base/gsum]: https://github.com/stdlib-js/blas-ext-base-gsum/tree/deno

[@stdlib/blas/ext/base/gsumkbn]: https://github.com/stdlib-js/blas-ext-base-gsumkbn/tree/deno

[@stdlib/blas/ext/base/gsumkbn2]: https://github.com/stdlib-js/blas-ext-base-gsumkbn2/tree/deno

[@stdlib/blas/ext/base/gsumors]: https://github.com/stdlib-js/blas-ext-base-gsumors/tree/deno

[@stdlib/blas/ext/base/gsumpw]: https://github.com/stdlib-js/blas-ext-base-gsumpw/tree/deno

[@stdlib/blas/ext/base/sapx]: https://github.com/stdlib-js/blas-ext-base-sapx/tree/deno

[@stdlib/blas/ext/base/sapxsum]: https://github.com/stdlib-js/blas-ext-base-sapxsum/tree/deno

[@stdlib/blas/ext/base/sapxsumkbn]: https://github.com/stdlib-js/blas-ext-base-sapxsumkbn/tree/deno

[@stdlib/blas/ext/base/sapxsumkbn2]: https://github.com/stdlib-js/blas-ext-base-sapxsumkbn2/tree/deno

[@stdlib/blas/ext/base/sapxsumors]: https://github.com/stdlib-js/blas-ext-base-sapxsumors/tree/deno

[@stdlib/blas/ext/base/sapxsumpw]: https://github.com/stdlib-js/blas-ext-base-sapxsumpw/tree/deno

[@stdlib/blas/ext/base/sasumpw]: https://github.com/stdlib-js/blas-ext-base-sasumpw/tree/deno

[@stdlib/blas/ext/base/scusum]: https://github.com/stdlib-js/blas-ext-base-scusum/tree/deno

[@stdlib/blas/ext/base/scusumkbn]: https://github.com/stdlib-js/blas-ext-base-scusumkbn/tree/deno

[@stdlib/blas/ext/base/scusumkbn2]: https://github.com/stdlib-js/blas-ext-base-scusumkbn2/tree/deno

[@stdlib/blas/ext/base/scusumors]: https://github.com/stdlib-js/blas-ext-base-scusumors/tree/deno

[@stdlib/blas/ext/base/scusumpw]: https://github.com/stdlib-js/blas-ext-base-scusumpw/tree/deno

[@stdlib/blas/ext/base/sdsapxsum]: https://github.com/stdlib-js/blas-ext-base-sdsapxsum/tree/deno

[@stdlib/blas/ext/base/sdsapxsumpw]: https://github.com/stdlib-js/blas-ext-base-sdsapxsumpw/tree/deno

[@stdlib/blas/ext/base/sdsnansum]: https://github.com/stdlib-js/blas-ext-base-sdsnansum/tree/deno

[@stdlib/blas/ext/base/sdsnansumpw]: https://github.com/stdlib-js/blas-ext-base-sdsnansumpw/tree/deno

[@stdlib/blas/ext/base/sdssum]: https://github.com/stdlib-js/blas-ext-base-sdssum/tree/deno

[@stdlib/blas/ext/base/sdssumpw]: https://github.com/stdlib-js/blas-ext-base-sdssumpw/tree/deno

[@stdlib/blas/ext/base/sfill]: https://github.com/stdlib-js/blas-ext-base-sfill/tree/deno

[@stdlib/blas/ext/base/snansum]: https://github.com/stdlib-js/blas-ext-base-snansum/tree/deno

[@stdlib/blas/ext/base/snansumkbn]: https://github.com/stdlib-js/blas-ext-base-snansumkbn/tree/deno

[@stdlib/blas/ext/base/snansumkbn2]: https://github.com/stdlib-js/blas-ext-base-snansumkbn2/tree/deno

[@stdlib/blas/ext/base/snansumors]: https://github.com/stdlib-js/blas-ext-base-snansumors/tree/deno

[@stdlib/blas/ext/base/snansumpw]: https://github.com/stdlib-js/blas-ext-base-snansumpw/tree/deno

[@stdlib/blas/ext/base/srev]: https://github.com/stdlib-js/blas-ext-base-srev/tree/deno

[@stdlib/blas/ext/base/ssort2hp]: https://github.com/stdlib-js/blas-ext-base-ssort2hp/tree/deno

[@stdlib/blas/ext/base/ssort2ins]: https://github.com/stdlib-js/blas-ext-base-ssort2ins/tree/deno

[@stdlib/blas/ext/base/ssort2sh]: https://github.com/stdlib-js/blas-ext-base-ssort2sh/tree/deno

[@stdlib/blas/ext/base/ssorthp]: https://github.com/stdlib-js/blas-ext-base-ssorthp/tree/deno

[@stdlib/blas/ext/base/ssortins]: https://github.com/stdlib-js/blas-ext-base-ssortins/tree/deno

[@stdlib/blas/ext/base/ssortsh]: https://github.com/stdlib-js/blas-ext-base-ssortsh/tree/deno

[@stdlib/blas/ext/base/ssum]: https://github.com/stdlib-js/blas-ext-base-ssum/tree/deno

[@stdlib/blas/ext/base/ssumkbn]: https://github.com/stdlib-js/blas-ext-base-ssumkbn/tree/deno

[@stdlib/blas/ext/base/ssumkbn2]: https://github.com/stdlib-js/blas-ext-base-ssumkbn2/tree/deno

[@stdlib/blas/ext/base/ssumors]: https://github.com/stdlib-js/blas-ext-base-ssumors/tree/deno

[@stdlib/blas/ext/base/ssumpw]: https://github.com/stdlib-js/blas-ext-base-ssumpw/tree/deno

<!-- </toc-links> -->

</section>

<!-- /.links -->

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
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { capx, caxpb, caxpby, cdiff, cfill, cindexOf, cindexOfColumn, cindexOfRow, clastIndexOfRow, coneTo, csum, csumkbn, cunitspace, cwapx, cwhere, cwxsa, cxpy, cxsa, cxsy, czeroTo, dapx, dapxsum, dapxsumkbn, dapxsumkbn2, dapxsumors, dapxsumpw, dasumpw, daxpb, daxpby, dcartesianPower, dcartesianProduct, dcartesianSquare, dcircshift, dcuany, dcuevery, dcunone, dcusome, dcusum, dcusumkbn, dcusumkbn2, dcusumors, dcusumpw, ddiff, dediff, dfill, dindexOf, dindexOfColumn, dindexOfFalsy, dindexOfRow, dindexOfTruthy, dlastIndexOf, dlastIndexOfRow, dlinspace, dminheapSiftDown, dmskrev, dnanasum, dnanasumors, dnancount, dnancusumkbn, dnannsum, dnannsumkbn, dnannsumkbn2, dnannsumors, dnannsumpw, dnansum, dnansumkbn, dnansumkbn2, dnansumors, dnansumpw, dnone, doneTo, dones, drev, drrss, drss, drssbl, drsskbn, dsapxsum, dsapxsumpw, dsnannsumors, dsnansum, dsnansumors, dsnansumpw, dsome, dsort, dsort2hp, dsort2ins, dsort2sh, dsorthp, dsortins, dsortsh, dssum, dssumors, dssumpw, dsum, dsumkbn, dsumkbn2, dsumors, dsumpw, dunitspace, dvander, dwapx, dwhere, dwxsa, dxpy, dxsa, dxsy, dzeroTo, dzeros, gany, gapx, gapxsum, gapxsumkbn, gapxsumkbn2, gapxsumors, gapxsumpw, gasumpw, gaxpb, gaxpby, gcartesianPower, gcartesianProduct, gcartesianSquare, gcircshift, gconjoin, gcuany, gcuevery, gcunone, gcusome, gcusum, gcusumkbn, gcusumkbn2, gcusumors, gcusumpw, gdiff, gediff, gevery, gfill, gfillBy, gfindIndex, gfindLastIndex, gindexOf, gindexOfColumn, gindexOfFalsy, gindexOfRow, gindexOfTruthy, gjoin, gjoinBetween, glastIndexOf, glastIndexOfRow, glastIndexOfTruthy, glinspace, gminheapSiftDown, gminheapify, gmskrev, gnancount, gnannsumkbn, gnannsumpw, gnansum, gnansumkbn, gnansumkbn2, gnansumors, gnansumpw, gnone, goneTo, greplicate, grev, gsome, gsort, gsort2hp, gsort2ins, gsort2sh, gsorthp, gsortins, gsortsh, gsum, gsumkbn, gsumkbn2, gsumors, gsumpw, gunitspace, gvander, gwapx, gwhere, gwxsa, gxpy, gxsa, gxsy, gzeroTo, ndarray, sapx, sapxsum, sapxsumkbn, sapxsumkbn2, sapxsumors, sapxsumpw, sasumpw, saxpb, saxpby, scartesianPower, scartesianProduct, scartesianSquare, scircshift, scuany, scuevery, scunone, scusome, scusum, scusumkbn, scusumkbn2, scusumors, scusumpw, sdiff, sdsapxsum, sdsapxsumpw, sdsnansum, sdsnansumpw, sdssum, sdssumpw, sediff, sfill, sindexOf, sindexOfColumn, sindexOfFalsy, sindexOfRow, sindexOfTruthy, slastIndexOf, slastIndexOfRow, slinspace, sminheapSiftDown, smskrev, snancount, snansum, snansumkbn, snansumkbn2, snansumors, snansumpw, snone, soneTo, sones, srev, ssome, ssort, ssort2hp, ssort2ins, ssort2sh, ssorthp, ssortins, ssortsh, ssum, ssumkbn, ssumkbn2, ssumors, ssumpw, sunitspace, svander, swapx, swhere, swxsa, sxpy, sxsa, sxsy, szeroTo, szeros, wasm, zapx, zaxpb, zaxpby, zdiff, zfill, zindexOf, zindexOfColumn, zindexOfRow, zlastIndexOfRow, znancount, zoneTo, zsum, zsumkbn, zunitspace, zwapx, zwhere, zwxsa, zxpy, zxsa, zzeroTo } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base@esm/index.mjs';
```

#### ns

Namespace for "base" (i.e., lower-level) extensions to basic linear algebra subprograms (BLAS).

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`capx( N, alpha, x, strideX )`][@stdlib/blas/ext/base/capx]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each element in a single-precision complex floating-point strided array.</span>
-   <span class="signature">[`caxpb( N, alpha, beta, x, strideX )`][@stdlib/blas/ext/base/caxpb]</span><span class="delimiter">: </span><span class="description">multiply each element in a single-precision complex floating-point strided array by a scalar constant and add a scalar constant to each result.</span>
-   <span class="signature">[`caxpby( N, alpha, x, strideX, beta, y, strideY )`][@stdlib/blas/ext/base/caxpby]</span><span class="delimiter">: </span><span class="description">multiply a single-precision complex floating-point strided array `x` by a constant and add the result to a single-precision complex floating-point strided array `y` multiplied by a constant.</span>
-   <span class="signature">[`cdiff( N, k, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut, workspace, strideW )`][@stdlib/blas/ext/base/cdiff]</span><span class="delimiter">: </span><span class="description">calculate the k-th discrete forward difference of a single-precision complex floating-point strided array.</span>
-   <span class="signature">[`cfill( N, alpha, x, strideX )`][@stdlib/blas/ext/base/cfill]</span><span class="delimiter">: </span><span class="description">fill a single-precision complex floating-point strided array with a specified scalar constant.</span>
-   <span class="signature">[`cindexOfColumn( order, M, N, A, LDA, x, strideX, workspace, strideW )`][@stdlib/blas/ext/base/cindex-of-column]</span><span class="delimiter">: </span><span class="description">return the index of the first column in a single-precision complex floating-point input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`cindexOfRow( order, M, N, A, LDA, x, strideX, workspace, strideW )`][@stdlib/blas/ext/base/cindex-of-row]</span><span class="delimiter">: </span><span class="description">return the index of the first row in a single-precision complex floating-point input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`cindexOf( N, searchElement, x, strideX )`][@stdlib/blas/ext/base/cindex-of]</span><span class="delimiter">: </span><span class="description">return the first index of a specified search element in a single-precision complex floating-point strided array.</span>
-   <span class="signature">[`clastIndexOfRow( order, M, N, A, LDA, x, strideX, workspace, strideW )`][@stdlib/blas/ext/base/clast-index-of-row]</span><span class="delimiter">: </span><span class="description">return the index of the last row in a single-precision complex floating-point input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`coneTo( N, x, strideX )`][@stdlib/blas/ext/base/cone-to]</span><span class="delimiter">: </span><span class="description">fill a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from one.</span>
-   <span class="signature">[`csum( N, x, strideX )`][@stdlib/blas/ext/base/csum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision complex floating-point strided array elements.</span>
-   <span class="signature">[`csumkbn( N, x, strideX )`][@stdlib/blas/ext/base/csumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision complex floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`cunitspace( N, start, x, strideX )`][@stdlib/blas/ext/base/cunitspace]</span><span class="delimiter">: </span><span class="description">fill a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.</span>
-   <span class="signature">[`cwhere( N, condition, strideC, x, strideX, y, strideY, out, strideOut )`][@stdlib/blas/ext/base/cwhere]</span><span class="delimiter">: </span><span class="description">take elements from one of two single-precision complex floating-point strided arrays depending on a condition.</span>
-   <span class="signature">[`cwxsa( N, alpha, x, strideX, w, strideW )`][@stdlib/blas/ext/base/cwxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a single-precision complex floating-point strided array `x` and assign the results to elements in a single-precision complex floating-point strided array `w`.</span>
-   <span class="signature">[`cxpy( N, x, strideX, y, strideY )`][@stdlib/blas/ext/base/cxpy]</span><span class="delimiter">: </span><span class="description">add elements of a single-precision complex floating-point strided array `x` to the corresponding elements of a single-precision complex floating-point strided array `y` and assign the results to `y`.</span>
-   <span class="signature">[`cxsa( N, alpha, x, strideX )`][@stdlib/blas/ext/base/cxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a single-precision complex floating-point strided array.</span>
-   <span class="signature">[`czeroTo( N, x, strideX )`][@stdlib/blas/ext/base/czero-to]</span><span class="delimiter">: </span><span class="description">fill a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from zero.</span>
-   <span class="signature">[`dapx( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dapx]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each element in a double-precision floating-point strided array.</span>
-   <span class="signature">[`dapxsum( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dapxsum]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each double-precision floating-point strided array element and compute the sum.</span>
-   <span class="signature">[`dapxsumkbn( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dapxsumkbn]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each double-precision floating-point strided array element and compute the sum using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dapxsumkbn2( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dapxsumkbn2]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each double-precision floating-point strided array element and compute the sum using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dapxsumors( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dapxsumors]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each double-precision floating-point strided array element and compute the sum using ordinary recursive summation.</span>
-   <span class="signature">[`dapxsumpw( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dapxsumpw]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each double-precision floating-point strided array element and compute the sum using pairwise summation.</span>
-   <span class="signature">[`dasumpw( N, x, strideX )`][@stdlib/blas/ext/base/dasumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of double-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`daxpb( N, alpha, beta, x, strideX )`][@stdlib/blas/ext/base/daxpb]</span><span class="delimiter">: </span><span class="description">multiply each element in a double-precision floating-point strided array by a scalar constant and add a scalar constant to each result.</span>
-   <span class="signature">[`daxpby( N, alpha, x, strideX, beta, y, strideY )`][@stdlib/blas/ext/base/daxpby]</span><span class="delimiter">: </span><span class="description">multiply a double-precision floating-point strided array `x` by a constant and add the result to a double-precision floating-point strided array `y` multiplied by a constant.</span>
-   <span class="signature">[`dcartesianPower( order, N, k, x, strideX, out, LDO )`][@stdlib/blas/ext/base/dcartesian-power]</span><span class="delimiter">: </span><span class="description">compute the Cartesian power for a double-precision floating-point strided array.</span>
-   <span class="signature">[`dcartesianProduct( order, M, N, x, strideX, y, strideY, out, LDO )`][@stdlib/blas/ext/base/dcartesian-product]</span><span class="delimiter">: </span><span class="description">compute the Cartesian product for two double-precision floating-point strided arrays.</span>
-   <span class="signature">[`dcartesianSquare( order, N, x, strideX, out, LDO )`][@stdlib/blas/ext/base/dcartesian-square]</span><span class="delimiter">: </span><span class="description">compute the Cartesian square for a double-precision floating-point strided array.</span>
-   <span class="signature">[`dcircshift( N, k, x, strideX )`][@stdlib/blas/ext/base/dcircshift]</span><span class="delimiter">: </span><span class="description">circularly shift the elements of a double-precision floating-point strided array by a specified number of positions.</span>
-   <span class="signature">[`dcuany( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dcuany]</span><span class="delimiter">: </span><span class="description">cumulatively test whether at least one element in a double-precision floating-point strided array is truthy.</span>
-   <span class="signature">[`dcuevery( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dcuevery]</span><span class="delimiter">: </span><span class="description">cumulatively test whether every element in a double-precision floating-point strided array is truthy.</span>
-   <span class="signature">[`dcunone( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dcunone]</span><span class="delimiter">: </span><span class="description">cumulatively test whether every element in a double-precision floating-point strided array is falsy.</span>
-   <span class="signature">[`dcusome( N, k, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dcusome]</span><span class="delimiter">: </span><span class="description">cumulatively test whether at least `k` elements in a double-precision floating-point strided array are truthy.</span>
-   <span class="signature">[`dcusum( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusum]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcusumkbn( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusumkbn]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dcusumkbn2( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dcusumors( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusumors]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`dcusumpw( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusumpw]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`ddiff( N, k, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut, workspace, strideW )`][@stdlib/blas/ext/base/ddiff]</span><span class="delimiter">: </span><span class="description">calculate the k-th discrete forward difference of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dediff( N, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut )`][@stdlib/blas/ext/base/dediff]</span><span class="delimiter">: </span><span class="description">calculate the differences between consecutive elements of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dfill( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dfill]</span><span class="delimiter">: </span><span class="description">fill a double-precision floating-point strided array with a specified scalar constant.</span>
-   <span class="signature">[`dindexOfColumn( order, M, N, A, LDA, x, strideX, workspace, strideW )`][@stdlib/blas/ext/base/dindex-of-column]</span><span class="delimiter">: </span><span class="description">return the index of the first column in a double-precision floating-point input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`dindexOfRow( order, M, N, A, LDA, x, strideX, workspace, strideW )`][@stdlib/blas/ext/base/dindex-of-row]</span><span class="delimiter">: </span><span class="description">return the index of the first row in a double-precision floating-point input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`dindexOfTruthy( N, x, strideX )`][@stdlib/blas/ext/base/dindex-of-truthy]</span><span class="delimiter">: </span><span class="description">return the index of the first truthy element in a double-precision floating-point strided array.</span>
-   <span class="signature">[`dindexOf( N, searchElement, x, strideX )`][@stdlib/blas/ext/base/dindex-of]</span><span class="delimiter">: </span><span class="description">return the first index of a specified search element in a double-precision floating-point strided array.</span>
-   <span class="signature">[`dlastIndexOfRow( order, M, N, A, LDA, x, strideX, workspace, strideW )`][@stdlib/blas/ext/base/dlast-index-of-row]</span><span class="delimiter">: </span><span class="description">return the index of the last row in a double-precision floating-point input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`dlastIndexOf( N, searchElement, x, strideX )`][@stdlib/blas/ext/base/dlast-index-of]</span><span class="delimiter">: </span><span class="description">return the last index of a specified search element in a double-precision floating-point strided array.</span>
-   <span class="signature">[`dlinspace( N, start, stop, endpoint, x, strideX )`][@stdlib/blas/ext/base/dlinspace]</span><span class="delimiter">: </span><span class="description">fill a double-precision floating-point strided array with linearly spaced values over a specified interval.</span>
-   <span class="signature">[`dminheapSiftDown( N, index, value, x, strideX )`][@stdlib/blas/ext/base/dminheap-sift-down]</span><span class="delimiter">: </span><span class="description">sift a value down from a specified index in a double-precision floating-point strided min-heap until the heap property is restored.</span>
-   <span class="signature">[`dmskrev( N, x, strideX, mask, strideMask )`][@stdlib/blas/ext/base/dmskrev]</span><span class="delimiter">: </span><span class="description">reverse a double-precision floating-point strided array in-place according to a mask.</span>
-   <span class="signature">[`dnanasum( N, x, strideX )`][@stdlib/blas/ext/base/dnanasum]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of double-precision floating-point strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanasumors( N, x, strideX )`][@stdlib/blas/ext/base/dnanasumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnancount( N, x, strideX )`][@stdlib/blas/ext/base/dnancount]</span><span class="delimiter">: </span><span class="description">calculate the number of non-`NaN` elements in a double-precision floating-point strided array.</span>
-   <span class="signature">[`dnancusumkbn( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dnancusumkbn]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnannsum( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`dnannsumkbn( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnannsumkbn2( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnannsumors( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnannsumpw( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`dnansum( N, x, strideX )`][@stdlib/blas/ext/base/dnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`dnansumkbn( N, x, strideX )`][@stdlib/blas/ext/base/dnansumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnansumkbn2( N, x, strideX )`][@stdlib/blas/ext/base/dnansumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnansumors( N, x, strideX )`][@stdlib/blas/ext/base/dnansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnansumpw( N, x, strideX )`][@stdlib/blas/ext/base/dnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`doneTo( N, x, strideX )`][@stdlib/blas/ext/base/done-to]</span><span class="delimiter">: </span><span class="description">fill a double-precision floating-point strided array with linearly spaced numeric elements which increment by `1` starting from one.</span>
-   <span class="signature">[`dones( N, x, strideX )`][@stdlib/blas/ext/base/dones]</span><span class="delimiter">: </span><span class="description">fill a double-precision floating-point strided array with ones.</span>
-   <span class="signature">[`drev( N, x, strideX )`][@stdlib/blas/ext/base/drev]</span><span class="delimiter">: </span><span class="description">reverse a double-precision floating-point strided array in-place.</span>
-   <span class="signature">[`drrss( N, x, strideX, y, strideY )`][@stdlib/blas/ext/base/drrss]</span><span class="delimiter">: </span><span class="description">calculate the square root of the residual sum of squares of two double-precision floating-point strided arrays.</span>
-   <span class="signature">[`drss( N, x, strideX, y, strideY )`][@stdlib/blas/ext/base/drss]</span><span class="delimiter">: </span><span class="description">calculate the residual sum of squares of two double-precision floating-point strided arrays.</span>
-   <span class="signature">[`drssbl( N, x, strideX, y, strideY )`][@stdlib/blas/ext/base/drssbl]</span><span class="delimiter">: </span><span class="description">calculate the residual sum of squares of two double-precision floating-point strided arrays using Blue's algorithm.</span>
-   <span class="signature">[`drsskbn( N, x, strideX, y, strideY )`][@stdlib/blas/ext/base/drsskbn]</span><span class="delimiter">: </span><span class="description">calculate the residual sum of squares of two double-precision floating-point strided arrays using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dsapxsum( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dsapxsum]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element, and compute the sum using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsapxsumpw( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dsapxsumpw]</span><span class="delimiter">: </span><span class="description">add a constant to each single-precision floating-point strided array element, and compute the sum using pairwise summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsnannsumors( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dsnannsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnansum( N, x, strideX )`][@stdlib/blas/ext/base/dsnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnansumors( N, x, strideX )`][@stdlib/blas/ext/base/dsnansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnansumpw( N, x, strideX )`][@stdlib/blas/ext/base/dsnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using pairwise summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsort( N, order, x, strideX )`][@stdlib/blas/ext/base/dsort]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array.</span>
-   <span class="signature">[`dsort2hp( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dsort2hp]</span><span class="delimiter">: </span><span class="description">simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using heapsort.</span>
-   <span class="signature">[`dsort2ins( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dsort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="signature">[`dsort2sh( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dsort2sh]</span><span class="delimiter">: </span><span class="description">simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using Shellsort.</span>
-   <span class="signature">[`dsorthp( N, order, x, strideX )`][@stdlib/blas/ext/base/dsorthp]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using heapsort.</span>
-   <span class="signature">[`dsortins( N, order, x, strideX )`][@stdlib/blas/ext/base/dsortins]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using insertion sort.</span>
-   <span class="signature">[`dsortsh( N, order, x, stride )`][@stdlib/blas/ext/base/dsortsh]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using Shellsort.</span>
-   <span class="signature">[`dssum( N, x, strideX )`][@stdlib/blas/ext/base/dssum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dssumors( N, x, strideX )`][@stdlib/blas/ext/base/dssumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using ordinary recursive summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dssumpw( N, x, strideX )`][@stdlib/blas/ext/base/dssumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using pairwise summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsum( N, x, strideX )`][@stdlib/blas/ext/base/dsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dsumkbn( N, x, strideX )`][@stdlib/blas/ext/base/dsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dsumkbn2( N, x, strideX )`][@stdlib/blas/ext/base/dsumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dsumors( N, x, strideX )`][@stdlib/blas/ext/base/dsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`dsumpw( N, x, strideX )`][@stdlib/blas/ext/base/dsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`dunitspace( N, start, x, strideX )`][@stdlib/blas/ext/base/dunitspace]</span><span class="delimiter">: </span><span class="description">fill a double-precision floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.</span>
-   <span class="signature">[`dvander( order, mode, M, N, x, strideX, out, ldo )`][@stdlib/blas/ext/base/dvander]</span><span class="delimiter">: </span><span class="description">generate a double-precision floating-point Vandermonde matrix.</span>
-   <span class="signature">[`dwapx( N, alpha, x, strideX, w, strideW )`][@stdlib/blas/ext/base/dwapx]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each element in a double-precision floating-point strided array `x` and assign the results to elements in a double-precision floating-point strided array `w`.</span>
-   <span class="signature">[`dwhere( N, condition, strideC, x, strideX, y, strideY, out, strideOut )`][@stdlib/blas/ext/base/dwhere]</span><span class="delimiter">: </span><span class="description">take elements from one of two double-precision floating-point strided arrays depending on a condition.</span>
-   <span class="signature">[`dwxsa( N, alpha, x, strideX, w, strideW )`][@stdlib/blas/ext/base/dwxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a double-precision floating-point strided array `x` and assign the results to elements in a double-precision floating-point strided array `w`.</span>
-   <span class="signature">[`dxpy( N, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dxpy]</span><span class="delimiter">: </span><span class="description">add elements of a double-precision floating-point strided array `x` to the corresponding elements of a double-precision floating-point strided array `y` and assign the results to `y`.</span>
-   <span class="signature">[`dxsa( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a double-precision floating-point strided array.</span>
-   <span class="signature">[`dzeroTo( N, x, strideX )`][@stdlib/blas/ext/base/dzero-to]</span><span class="delimiter">: </span><span class="description">fill a double-precision floating-point strided array with linearly spaced numeric elements which increment by `1` starting from zero.</span>
-   <span class="signature">[`dzeros( N, x, strideX )`][@stdlib/blas/ext/base/dzeros]</span><span class="delimiter">: </span><span class="description">fill a double-precision floating-point strided array with zeros.</span>
-   <span class="signature">[`gany( N, x, strideX )`][@stdlib/blas/ext/base/gany]</span><span class="delimiter">: </span><span class="description">test whether at least one element in a strided array is truthy.</span>
-   <span class="signature">[`gapx( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gapx]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each element in a strided array.</span>
-   <span class="signature">[`gapxsum( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gapxsum]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each strided array element and compute the sum.</span>
-   <span class="signature">[`gapxsumkbn( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gapxsumkbn]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each strided array element and compute the sum using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gapxsumkbn2( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gapxsumkbn2]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each strided array element and compute the sum using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gapxsumors( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gapxsumors]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each strided array element and compute the sum using ordinary recursive summation.</span>
-   <span class="signature">[`gapxsumpw( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gapxsumpw]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each strided array element and compute the sum using pairwise summation.</span>
-   <span class="signature">[`gasumpw( N, x, strideX )`][@stdlib/blas/ext/base/gasumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of strided array elements using pairwise summation.</span>
-   <span class="signature">[`gaxpb( N, alpha, beta, x, strideX )`][@stdlib/blas/ext/base/gaxpb]</span><span class="delimiter">: </span><span class="description">multiply each element in a strided array by a scalar constant and add a scalar constant to each result.</span>
-   <span class="signature">[`gaxpby( N, alpha, x, strideX, beta, y, strideY )`][@stdlib/blas/ext/base/gaxpby]</span><span class="delimiter">: </span><span class="description">multiply a strided array `x` by a constant and add the result to a strided array `y` multiplied by a constant.</span>
-   <span class="signature">[`gcartesianPower( order, N, k, x, strideX, out, LDO )`][@stdlib/blas/ext/base/gcartesian-power]</span><span class="delimiter">: </span><span class="description">compute the Cartesian power for a strided array.</span>
-   <span class="signature">[`gcartesianProduct( order, M, N, x, strideX, y, strideY, out, LDO )`][@stdlib/blas/ext/base/gcartesian-product]</span><span class="delimiter">: </span><span class="description">compute the Cartesian product for two strided arrays.</span>
-   <span class="signature">[`gcartesianSquare( order, N, x, strideX, out, LDO )`][@stdlib/blas/ext/base/gcartesian-square]</span><span class="delimiter">: </span><span class="description">compute the Cartesian square for a strided array.</span>
-   <span class="signature">[`gcircshift( N, k, x, strideX )`][@stdlib/blas/ext/base/gcircshift]</span><span class="delimiter">: </span><span class="description">circularly shift the elements of a strided array by a specified number of positions.</span>
-   <span class="signature">[`gconjoin( N, prefix, suffix, conjunction, oxfordComma, x, strideX )`][@stdlib/blas/ext/base/gconjoin]</span><span class="delimiter">: </span><span class="description">return a string created by joining strided array elements into a human-readable list using a conjunction.</span>
-   <span class="signature">[`gcuany( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/gcuany]</span><span class="delimiter">: </span><span class="description">cumulatively test whether at least one element in a strided array is truthy.</span>
-   <span class="signature">[`gcuevery( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/gcuevery]</span><span class="delimiter">: </span><span class="description">cumulatively test whether every element in a strided array is truthy.</span>
-   <span class="signature">[`gcunone( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/gcunone]</span><span class="delimiter">: </span><span class="description">cumulatively test whether every element in a strided array is falsy.</span>
-   <span class="signature">[`gcusome( N, k, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/gcusome]</span><span class="delimiter">: </span><span class="description">cumulatively test whether at least `k` elements in a strided array are truthy.</span>
-   <span class="signature">[`gcusum( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusum]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements.</span>
-   <span class="signature">[`gcusumkbn( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusumkbn]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gcusumkbn2( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gcusumors( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusumors]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`gcusumpw( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusumpw]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using pairwise summation.</span>
-   <span class="signature">[`gdiff( N, k, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut, workspace, strideW )`][@stdlib/blas/ext/base/gdiff]</span><span class="delimiter">: </span><span class="description">calculate the k-th discrete forward difference of a strided array.</span>
-   <span class="signature">[`gediff( N, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut )`][@stdlib/blas/ext/base/gediff]</span><span class="delimiter">: </span><span class="description">calculate the differences between consecutive elements of a strided array.</span>
-   <span class="signature">[`gevery( N, x, strideX )`][@stdlib/blas/ext/base/gevery]</span><span class="delimiter">: </span><span class="description">test whether every element in a strided array is truthy.</span>
-   <span class="signature">[`gfillBy( N, x, strideX, clbk[, thisArg] )`][@stdlib/blas/ext/base/gfill-by]</span><span class="delimiter">: </span><span class="description">fill a strided array according to a provided callback function.</span>
-   <span class="signature">[`gfill( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gfill]</span><span class="delimiter">: </span><span class="description">fill a strided array with a specified scalar constant.</span>
-   <span class="signature">[`gfindIndex( N, x, strideX, clbk[, thisArg] )`][@stdlib/blas/ext/base/gfind-index]</span><span class="delimiter">: </span><span class="description">return the index of the first element which passes a test implemented by a predicate function.</span>
-   <span class="signature">[`gfindLastIndex( N, x, strideX, clbk[, thisArg] )`][@stdlib/blas/ext/base/gfind-last-index]</span><span class="delimiter">: </span><span class="description">return the index of the last element which passes a test implemented by a predicate function.</span>
-   <span class="signature">[`gindexOfColumn( order, M, N, A, LDA, x, strideX )`][@stdlib/blas/ext/base/gindex-of-column]</span><span class="delimiter">: </span><span class="description">return the index of the first column in an input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`gindexOfFalsy( N, x, strideX )`][@stdlib/blas/ext/base/gindex-of-falsy]</span><span class="delimiter">: </span><span class="description">return the index of the first falsy element in a strided array.</span>
-   <span class="signature">[`gindexOfRow( order, M, N, A, LDA, x, strideX )`][@stdlib/blas/ext/base/gindex-of-row]</span><span class="delimiter">: </span><span class="description">return the index of the first row in an input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`gindexOfTruthy( N, x, strideX )`][@stdlib/blas/ext/base/gindex-of-truthy]</span><span class="delimiter">: </span><span class="description">return the index of the first truthy element in a strided array.</span>
-   <span class="signature">[`gindexOf( N, searchElement, x, strideX )`][@stdlib/blas/ext/base/gindex-of]</span><span class="delimiter">: </span><span class="description">return the first index of a specified search element in a strided array.</span>
-   <span class="signature">[`gjoinBetween( N, prefix, suffix, x, strideX, separators, strideS )`][@stdlib/blas/ext/base/gjoin-between]</span><span class="delimiter">: </span><span class="description">return a string by joining strided array elements using a specified separator for each pair of consecutive elements.</span>
-   <span class="signature">[`gjoin( N, separator, x, strideX )`][@stdlib/blas/ext/base/gjoin]</span><span class="delimiter">: </span><span class="description">return a string created by joining strided array elements using a specified separator.</span>
-   <span class="signature">[`glastIndexOfRow( order, M, N, A, LDA, x, strideX, workspace, strideW )`][@stdlib/blas/ext/base/glast-index-of-row]</span><span class="delimiter">: </span><span class="description">return the index of the last row in an input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`glastIndexOfTruthy( N, x, strideX )`][@stdlib/blas/ext/base/glast-index-of-truthy]</span><span class="delimiter">: </span><span class="description">return the index of the last truthy element in a strided array.</span>
-   <span class="signature">[`glastIndexOf( N, searchElement, x, strideX )`][@stdlib/blas/ext/base/glast-index-of]</span><span class="delimiter">: </span><span class="description">return the last index of a specified search element in a strided array.</span>
-   <span class="signature">[`glinspace( N, start, stop, endpoint, x, strideX )`][@stdlib/blas/ext/base/glinspace]</span><span class="delimiter">: </span><span class="description">fill a strided array with linearly spaced values over a specified interval.</span>
-   <span class="signature">[`gminheapSiftDown( N, index, value, x, strideX )`][@stdlib/blas/ext/base/gminheap-sift-down]</span><span class="delimiter">: </span><span class="description">sift a value down from a specified index in a strided min-heap until the heap property is restored.</span>
-   <span class="signature">[`gminheapify( N, x, strideX )`][@stdlib/blas/ext/base/gminheapify]</span><span class="delimiter">: </span><span class="description">convert a strided array to a min-heap.</span>
-   <span class="signature">[`gmskrev( N, x, strideX, mask, strideMask )`][@stdlib/blas/ext/base/gmskrev]</span><span class="delimiter">: </span><span class="description">reverse a strided array in-place according to a mask.</span>
-   <span class="signature">[`gnancount( N, x, strideX )`][@stdlib/blas/ext/base/gnancount]</span><span class="delimiter">: </span><span class="description">calculate the number of non-`NaN` elements in a strided array.</span>
-   <span class="signature">[`gnannsumkbn( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/gnannsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gnannsumpw( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/gnannsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`gnansum( N, x, strideX )`][@stdlib/blas/ext/base/gnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`gnansumkbn( N, x, strideX )`][@stdlib/blas/ext/base/gnansumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gnansumkbn2( N, x, strideX )`][@stdlib/blas/ext/base/gnansumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gnansumors( N, x, strideX )`][@stdlib/blas/ext/base/gnansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`gnansumpw( N, x, strideX )`][@stdlib/blas/ext/base/gnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`gnone( N, x, strideX )`][@stdlib/blas/ext/base/gnone]</span><span class="delimiter">: </span><span class="description">test whether every element in a strided array is falsy.</span>
-   <span class="signature">[`goneTo( N, x, strideX )`][@stdlib/blas/ext/base/gone-to]</span><span class="delimiter">: </span><span class="description">fill a strided array with linearly spaced numeric elements which increment by `1` starting from one.</span>
-   <span class="signature">[`greplicate( N, k, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/greplicate]</span><span class="delimiter">: </span><span class="description">replicate each strided array element a specified number of times.</span>
-   <span class="signature">[`grev( N, x, strideX )`][@stdlib/blas/ext/base/grev]</span><span class="delimiter">: </span><span class="description">reverse a strided array in-place.</span>
-   <span class="signature">[`gsome( N, k, x, strideX )`][@stdlib/blas/ext/base/gsome]</span><span class="delimiter">: </span><span class="description">test whether a strided array contains at least `k` truthy elements.</span>
-   <span class="signature">[`gsort( N, order, x, strideX )`][@stdlib/blas/ext/base/gsort]</span><span class="delimiter">: </span><span class="description">sort a strided array.</span>
-   <span class="signature">[`gsort2hp( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gsort2hp]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using heapsort.</span>
-   <span class="signature">[`gsort2ins( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gsort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="signature">[`gsort2sh( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gsort2sh]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using Shellsort.</span>
-   <span class="signature">[`gsorthp( N, order, x, strideX )`][@stdlib/blas/ext/base/gsorthp]</span><span class="delimiter">: </span><span class="description">sort a strided array using heapsort.</span>
-   <span class="signature">[`gsortins( N, order, x, strideX )`][@stdlib/blas/ext/base/gsortins]</span><span class="delimiter">: </span><span class="description">sort a strided array using insertion sort.</span>
-   <span class="signature">[`gsortsh( N, order, x, strideX )`][@stdlib/blas/ext/base/gsortsh]</span><span class="delimiter">: </span><span class="description">sort a strided array using Shellsort.</span>
-   <span class="signature">[`gsum( N, x, strideX )`][@stdlib/blas/ext/base/gsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements.</span>
-   <span class="signature">[`gsumkbn( N, x, strideX )`][@stdlib/blas/ext/base/gsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gsumkbn2( N, x, strideX )`][@stdlib/blas/ext/base/gsumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gsumors( N, x, strideX )`][@stdlib/blas/ext/base/gsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`gsumpw( N, x, strideX )`][@stdlib/blas/ext/base/gsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using pairwise summation.</span>
-   <span class="signature">[`gunitspace( N, start, x, strideX )`][@stdlib/blas/ext/base/gunitspace]</span><span class="delimiter">: </span><span class="description">fill a strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.</span>
-   <span class="signature">[`gvander( order, mode, M, N, x, strideX, out, ldo )`][@stdlib/blas/ext/base/gvander]</span><span class="delimiter">: </span><span class="description">generate a Vandermonde matrix.</span>
-   <span class="signature">[`gwapx( N, alpha, x, strideX, w, strideW )`][@stdlib/blas/ext/base/gwapx]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each element in a strided array `x` and assign the results to elements in a strided array `w`.</span>
-   <span class="signature">[`gwhere( N, condition, strideC, x, strideX, y, strideY, out, strideOut )`][@stdlib/blas/ext/base/gwhere]</span><span class="delimiter">: </span><span class="description">take elements from one of two strided arrays depending on a condition.</span>
-   <span class="signature">[`gwxsa( N, alpha, x, strideX, w, strideW )`][@stdlib/blas/ext/base/gwxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a strided array `x` and assign the results to elements in a strided array `w`.</span>
-   <span class="signature">[`gxpy( N, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gxpy]</span><span class="delimiter">: </span><span class="description">add elements of a strided array `x` to the corresponding elements of a strided array `y` and assign the results to `y`.</span>
-   <span class="signature">[`gxsa( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a strided array.</span>
-   <span class="signature">[`gzeroTo( N, x, strideX )`][@stdlib/blas/ext/base/gzero-to]</span><span class="delimiter">: </span><span class="description">fill a strided array with linearly spaced numeric elements which increment by `1` starting from zero.</span>
-   <span class="signature">[`ndarray`][@stdlib/blas/ext/base/ndarray]</span><span class="delimiter">: </span><span class="description">base ndarray extended BLAS functions.</span>
-   <span class="signature">[`sapx( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sapx]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each element in a single-precision floating-point strided array.</span>
-   <span class="signature">[`sapxsum( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sapxsum]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum.</span>
-   <span class="signature">[`sapxsumkbn( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sapxsumkbn]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`sapxsumkbn2( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sapxsumkbn2]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`sapxsumors( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sapxsumors]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum using ordinary recursive summation.</span>
-   <span class="signature">[`sapxsumpw( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sapxsumpw]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum using pairwise summation.</span>
-   <span class="signature">[`sasumpw( N, x, strideX )`][@stdlib/blas/ext/base/sasumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of single-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`saxpb( N, alpha, beta, x, strideX )`][@stdlib/blas/ext/base/saxpb]</span><span class="delimiter">: </span><span class="description">multiply each element in a single-precision floating-point strided array by a scalar constant and add a scalar constant to each result.</span>
-   <span class="signature">[`saxpby( N, alpha, x, strideX, beta, y, strideY )`][@stdlib/blas/ext/base/saxpby]</span><span class="delimiter">: </span><span class="description">multiply a single-precision floating-point strided array `x` by a constant and add the result to a single-precision floating-point strided array `y` multiplied by a constant.</span>
-   <span class="signature">[`scartesianPower( order, N, k, x, strideX, out, LDO )`][@stdlib/blas/ext/base/scartesian-power]</span><span class="delimiter">: </span><span class="description">compute the Cartesian power for a single-precision floating-point strided array.</span>
-   <span class="signature">[`scartesianProduct( order, M, N, x, strideX, y, strideY, out, LDO )`][@stdlib/blas/ext/base/scartesian-product]</span><span class="delimiter">: </span><span class="description">compute the Cartesian product for two single-precision floating-point strided arrays.</span>
-   <span class="signature">[`scartesianSquare( order, N, x, strideX, out, LDO )`][@stdlib/blas/ext/base/scartesian-square]</span><span class="delimiter">: </span><span class="description">compute the Cartesian square for a single-precision floating-point strided array.</span>
-   <span class="signature">[`scircshift( N, k, x, strideX )`][@stdlib/blas/ext/base/scircshift]</span><span class="delimiter">: </span><span class="description">circularly shift the elements of a single-precision floating-point strided array by a specified number of positions.</span>
-   <span class="signature">[`scuany( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/scuany]</span><span class="delimiter">: </span><span class="description">cumulatively test whether at least one element in a single-precision floating-point strided array is truthy.</span>
-   <span class="signature">[`scuevery( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/scuevery]</span><span class="delimiter">: </span><span class="description">cumulatively test whether every element in a single-precision floating-point strided array is truthy.</span>
-   <span class="signature">[`scunone( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/scunone]</span><span class="delimiter">: </span><span class="description">cumulatively test whether every element in a single-precision floating-point strided array is falsy.</span>
-   <span class="signature">[`scusome( N, k, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/scusome]</span><span class="delimiter">: </span><span class="description">cumulatively test whether at least `k` elements in a single-precision floating-point strided array are truthy.</span>
-   <span class="signature">[`scusum( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusum]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scusumkbn( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusumkbn]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`scusumkbn2( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`scusumors( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusumors]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`scusumpw( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusumpw]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`sdiff( N, k, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut, workspace, strideW )`][@stdlib/blas/ext/base/sdiff]</span><span class="delimiter">: </span><span class="description">calculate the k-th discrete forward difference of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sdsapxsum( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sdsapxsum]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum using extended accumulation.</span>
-   <span class="signature">[`sdsapxsumpw( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sdsapxsumpw]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum using pairwise summation with extended accumulation.</span>
-   <span class="signature">[`sdsnansum( N, x, strideX )`][@stdlib/blas/ext/base/sdsnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using extended accumulation.</span>
-   <span class="signature">[`sdsnansumpw( N, x, strideX )`][@stdlib/blas/ext/base/sdsnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation with extended accumulation.</span>
-   <span class="signature">[`sdssum( N, x, strideX )`][@stdlib/blas/ext/base/sdssum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using extended accumulation.</span>
-   <span class="signature">[`sdssumpw( N, x, strideX )`][@stdlib/blas/ext/base/sdssumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using pairwise summation with extended accumulation.</span>
-   <span class="signature">[`sediff( N, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut )`][@stdlib/blas/ext/base/sediff]</span><span class="delimiter">: </span><span class="description">calculate the differences between consecutive elements of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sfill( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sfill]</span><span class="delimiter">: </span><span class="description">fill a single-precision floating-point strided array with a specified scalar constant.</span>
-   <span class="signature">[`sindexOfColumn( order, M, N, A, LDA, x, strideX, workspace, strideW )`][@stdlib/blas/ext/base/sindex-of-column]</span><span class="delimiter">: </span><span class="description">return the index of the first column in a single-precision floating-point input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`sindexOfRow( order, M, N, A, LDA, x, strideX, workspace, strideW )`][@stdlib/blas/ext/base/sindex-of-row]</span><span class="delimiter">: </span><span class="description">return the index of the first row in a single-precision floating-point input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`sindexOfTruthy( N, x, strideX )`][@stdlib/blas/ext/base/sindex-of-truthy]</span><span class="delimiter">: </span><span class="description">return the index of the first truthy element in a single-precision floating-point strided array.</span>
-   <span class="signature">[`sindexOf( N, searchElement, x, strideX )`][@stdlib/blas/ext/base/sindex-of]</span><span class="delimiter">: </span><span class="description">return the first index of a specified search element in a single-precision floating-point strided array.</span>
-   <span class="signature">[`slastIndexOfRow( order, M, N, A, LDA, x, strideX, workspace, strideW )`][@stdlib/blas/ext/base/slast-index-of-row]</span><span class="delimiter">: </span><span class="description">return the index of the last row in a single-precision floating-point input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`slastIndexOf( N, searchElement, x, strideX )`][@stdlib/blas/ext/base/slast-index-of]</span><span class="delimiter">: </span><span class="description">return the last index of a specified search element in a single-precision floating-point strided array.</span>
-   <span class="signature">[`slinspace( N, start, stop, endpoint, x, strideX )`][@stdlib/blas/ext/base/slinspace]</span><span class="delimiter">: </span><span class="description">fill a single-precision floating-point strided array with linearly spaced values over a specified interval.</span>
-   <span class="signature">[`sminheapSiftDown( N, index, value, x, strideX )`][@stdlib/blas/ext/base/sminheap-sift-down]</span><span class="delimiter">: </span><span class="description">sift a value down from a specified index in a single-precision floating-point strided min-heap until the heap property is restored.</span>
-   <span class="signature">[`smskrev( N, x, strideX, mask, strideMask )`][@stdlib/blas/ext/base/smskrev]</span><span class="delimiter">: </span><span class="description">reverse a single-precision floating-point strided array in-place according to a mask.</span>
-   <span class="signature">[`snancount( N, x, strideX )`][@stdlib/blas/ext/base/snancount]</span><span class="delimiter">: </span><span class="description">calculate the number of non-`NaN` elements in a single-precision floating-point strided array.</span>
-   <span class="signature">[`snansum( N, x, strideX )`][@stdlib/blas/ext/base/snansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`snansumkbn( N, x, strideX )`][@stdlib/blas/ext/base/snansumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`snansumkbn2( N, x, strideX )`][@stdlib/blas/ext/base/snansumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`snansumors( N, x, strideX )`][@stdlib/blas/ext/base/snansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`snansumpw( N, x, strideX )`][@stdlib/blas/ext/base/snansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`soneTo( N, x, strideX )`][@stdlib/blas/ext/base/sone-to]</span><span class="delimiter">: </span><span class="description">fill a single-precision floating-point strided array with linearly spaced numeric elements which increment by `1` starting from one.</span>
-   <span class="signature">[`sones( N, x, strideX )`][@stdlib/blas/ext/base/sones]</span><span class="delimiter">: </span><span class="description">fill a single-precision floating-point strided array with ones.</span>
-   <span class="signature">[`srev( N, x, strideX )`][@stdlib/blas/ext/base/srev]</span><span class="delimiter">: </span><span class="description">reverse a single-precision floating-point strided array in-place.</span>
-   <span class="signature">[`ssort( N, order, x, strideX )`][@stdlib/blas/ext/base/ssort]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array.</span>
-   <span class="signature">[`ssort2hp( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/ssort2hp]</span><span class="delimiter">: </span><span class="description">simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using heapsort.</span>
-   <span class="signature">[`ssort2ins( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/ssort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="signature">[`ssort2sh( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/ssort2sh]</span><span class="delimiter">: </span><span class="description">simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using Shellsort.</span>
-   <span class="signature">[`ssorthp( N, order, x, strideX )`][@stdlib/blas/ext/base/ssorthp]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array using heapsort.</span>
-   <span class="signature">[`ssortins( N, order, x, stride )`][@stdlib/blas/ext/base/ssortins]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array using insertion sort.</span>
-   <span class="signature">[`ssortsh( N, order, x, stride )`][@stdlib/blas/ext/base/ssortsh]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array using Shellsort.</span>
-   <span class="signature">[`ssum( N, x, strideX )`][@stdlib/blas/ext/base/ssum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`ssumkbn( N, x, strideX )`][@stdlib/blas/ext/base/ssumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`ssumkbn2( N, x, strideX )`][@stdlib/blas/ext/base/ssumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`ssumors( N, x, strideX )`][@stdlib/blas/ext/base/ssumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`ssumpw( N, x, strideX )`][@stdlib/blas/ext/base/ssumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`sunitspace( N, start, x, strideX )`][@stdlib/blas/ext/base/sunitspace]</span><span class="delimiter">: </span><span class="description">fill a single-precision floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.</span>
-   <span class="signature">[`svander( order, mode, M, N, x, strideX, out, ldo )`][@stdlib/blas/ext/base/svander]</span><span class="delimiter">: </span><span class="description">generate a single-precision floating-point Vandermonde matrix.</span>
-   <span class="signature">[`swapx( N, alpha, x, strideX, w, strideW )`][@stdlib/blas/ext/base/swapx]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each element in a single-precision floating-point strided array `x` and assign the results to elements in a single-precision floating-point strided array `w`.</span>
-   <span class="signature">[`swhere( N, condition, strideC, x, strideX, y, strideY, out, strideOut )`][@stdlib/blas/ext/base/swhere]</span><span class="delimiter">: </span><span class="description">take elements from one of two single-precision floating-point strided arrays depending on a condition.</span>
-   <span class="signature">[`swxsa( N, alpha, x, strideX, w, strideW )`][@stdlib/blas/ext/base/swxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a single-precision floating-point strided array `x` and assign the results to elements in a single-precision floating-point strided array `w`.</span>
-   <span class="signature">[`sxpy( N, x, strideX, y, strideY )`][@stdlib/blas/ext/base/sxpy]</span><span class="delimiter">: </span><span class="description">add elements of a single-precision floating-point strided array `x` to the corresponding elements of a single-precision floating-point strided array `y` and assign the results to `y`.</span>
-   <span class="signature">[`sxsa( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a single-precision floating-point strided array.</span>
-   <span class="signature">[`szeroTo( N, x, strideX )`][@stdlib/blas/ext/base/szero-to]</span><span class="delimiter">: </span><span class="description">fill a single-precision floating-point strided array with linearly spaced numeric elements which increment by `1` starting from zero.</span>
-   <span class="signature">[`szeros( N, x, strideX )`][@stdlib/blas/ext/base/szeros]</span><span class="delimiter">: </span><span class="description">fill a single-precision floating-point strided array with zeros.</span>
-   <span class="signature">[`wasm`][@stdlib/blas/ext/base/wasm]</span><span class="delimiter">: </span><span class="description">extensions to basic linear algebra subprograms (BLAS) compiled to WebAssembly.</span>
-   <span class="signature">[`zapx( N, alpha, x, strideX )`][@stdlib/blas/ext/base/zapx]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each element in a double-precision complex floating-point strided array.</span>
-   <span class="signature">[`zaxpb( N, alpha, beta, x, strideX )`][@stdlib/blas/ext/base/zaxpb]</span><span class="delimiter">: </span><span class="description">multiply each element in a double-precision complex floating-point strided array by a scalar constant and add a scalar constant to each result.</span>
-   <span class="signature">[`zaxpby( N, alpha, x, strideX, beta, y, strideY )`][@stdlib/blas/ext/base/zaxpby]</span><span class="delimiter">: </span><span class="description">multiply a double-precision complex floating-point strided array `x` by a constant and add the result to a double-precision complex floating-point strided array `y` multiplied by a constant.</span>
-   <span class="signature">[`zdiff( N, k, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut, workspace, strideW )`][@stdlib/blas/ext/base/zdiff]</span><span class="delimiter">: </span><span class="description">calculate the k-th discrete forward difference of a double-precision complex floating-point strided array.</span>
-   <span class="signature">[`zfill( N, alpha, x, strideX )`][@stdlib/blas/ext/base/zfill]</span><span class="delimiter">: </span><span class="description">fill a double-precision complex floating-point strided array with a specified scalar constant.</span>
-   <span class="signature">[`zindexOfColumn( order, M, N, A, LDA, x, strideX, workspace, strideW )`][@stdlib/blas/ext/base/zindex-of-column]</span><span class="delimiter">: </span><span class="description">return the index of the first column in a double-precision complex floating-point input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`zindexOfRow( order, M, N, A, LDA, x, strideX, workspace, strideW )`][@stdlib/blas/ext/base/zindex-of-row]</span><span class="delimiter">: </span><span class="description">return the index of the first row in a double-precision complex floating-point input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`zindexOf( N, searchElement, x, strideX )`][@stdlib/blas/ext/base/zindex-of]</span><span class="delimiter">: </span><span class="description">return the first index of a specified search element in a double-precision complex floating-point strided array.</span>
-   <span class="signature">[`zlastIndexOfRow( order, M, N, A, LDA, x, strideX, workspace, strideW )`][@stdlib/blas/ext/base/zlast-index-of-row]</span><span class="delimiter">: </span><span class="description">return the index of the last row in a double-precision complex floating-point input matrix which has the same elements as a provided search vector.</span>
-   <span class="signature">[`znancount( N, x, strideX )`][@stdlib/blas/ext/base/znancount]</span><span class="delimiter">: </span><span class="description">calculate the number of non-`NaN` elements in a double-precision complex floating-point strided array.</span>
-   <span class="signature">[`zoneTo( N, x, strideX )`][@stdlib/blas/ext/base/zone-to]</span><span class="delimiter">: </span><span class="description">fill a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from one.</span>
-   <span class="signature">[`zsum( N, x, strideX )`][@stdlib/blas/ext/base/zsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision complex floating-point strided array elements.</span>
-   <span class="signature">[`zsumkbn( N, x, strideX )`][@stdlib/blas/ext/base/zsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision complex floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`zunitspace( N, start, x, strideX )`][@stdlib/blas/ext/base/zunitspace]</span><span class="delimiter">: </span><span class="description">fill a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.</span>
-   <span class="signature">[`zwhere( N, condition, strideC, x, strideX, y, strideY, out, strideOut )`][@stdlib/blas/ext/base/zwhere]</span><span class="delimiter">: </span><span class="description">take elements from one of two double-precision complex floating-point strided arrays depending on a condition.</span>
-   <span class="signature">[`zwxsa( N, alpha, x, strideX, w, strideW )`][@stdlib/blas/ext/base/zwxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a double-precision complex floating-point strided array `x` and assign the results to elements in a double-precision complex floating-point strided array `w`.</span>
-   <span class="signature">[`zxpy( N, x, strideX, y, strideY )`][@stdlib/blas/ext/base/zxpy]</span><span class="delimiter">: </span><span class="description">add elements of a double-precision complex floating-point strided array `x` to the corresponding elements of a double-precision complex floating-point strided array `y` and assign the results to `y`.</span>
-   <span class="signature">[`zxsa( N, alpha, x, strideX )`][@stdlib/blas/ext/base/zxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a double-precision complex floating-point strided array.</span>
-   <span class="signature">[`zzeroTo( N, x, strideX )`][@stdlib/blas/ext/base/zzero-to]</span><span class="delimiter">: </span><span class="description">fill a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from zero.</span>

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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base

[test-image]: https://github.com/stdlib-js/blas-ext-base/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

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

[@stdlib/blas/ext/base/capx]: https://github.com/stdlib-js/blas-ext-base-capx/tree/esm

[@stdlib/blas/ext/base/caxpb]: https://github.com/stdlib-js/blas-ext-base-caxpb/tree/esm

[@stdlib/blas/ext/base/caxpby]: https://github.com/stdlib-js/blas-ext-base-caxpby/tree/esm

[@stdlib/blas/ext/base/cdiff]: https://github.com/stdlib-js/blas-ext-base-cdiff/tree/esm

[@stdlib/blas/ext/base/cfill]: https://github.com/stdlib-js/blas-ext-base-cfill/tree/esm

[@stdlib/blas/ext/base/cindex-of-column]: https://github.com/stdlib-js/blas-ext-base-cindex-of-column/tree/esm

[@stdlib/blas/ext/base/cindex-of-row]: https://github.com/stdlib-js/blas-ext-base-cindex-of-row/tree/esm

[@stdlib/blas/ext/base/cindex-of]: https://github.com/stdlib-js/blas-ext-base-cindex-of/tree/esm

[@stdlib/blas/ext/base/clast-index-of-row]: https://github.com/stdlib-js/blas-ext-base-clast-index-of-row/tree/esm

[@stdlib/blas/ext/base/cone-to]: https://github.com/stdlib-js/blas-ext-base-cone-to/tree/esm

[@stdlib/blas/ext/base/csum]: https://github.com/stdlib-js/blas-ext-base-csum/tree/esm

[@stdlib/blas/ext/base/csumkbn]: https://github.com/stdlib-js/blas-ext-base-csumkbn/tree/esm

[@stdlib/blas/ext/base/cunitspace]: https://github.com/stdlib-js/blas-ext-base-cunitspace/tree/esm

[@stdlib/blas/ext/base/cwhere]: https://github.com/stdlib-js/blas-ext-base-cwhere/tree/esm

[@stdlib/blas/ext/base/cwxsa]: https://github.com/stdlib-js/blas-ext-base-cwxsa/tree/esm

[@stdlib/blas/ext/base/cxpy]: https://github.com/stdlib-js/blas-ext-base-cxpy/tree/esm

[@stdlib/blas/ext/base/cxsa]: https://github.com/stdlib-js/blas-ext-base-cxsa/tree/esm

[@stdlib/blas/ext/base/czero-to]: https://github.com/stdlib-js/blas-ext-base-czero-to/tree/esm

[@stdlib/blas/ext/base/dapx]: https://github.com/stdlib-js/blas-ext-base-dapx/tree/esm

[@stdlib/blas/ext/base/dapxsum]: https://github.com/stdlib-js/blas-ext-base-dapxsum/tree/esm

[@stdlib/blas/ext/base/dapxsumkbn]: https://github.com/stdlib-js/blas-ext-base-dapxsumkbn/tree/esm

[@stdlib/blas/ext/base/dapxsumkbn2]: https://github.com/stdlib-js/blas-ext-base-dapxsumkbn2/tree/esm

[@stdlib/blas/ext/base/dapxsumors]: https://github.com/stdlib-js/blas-ext-base-dapxsumors/tree/esm

[@stdlib/blas/ext/base/dapxsumpw]: https://github.com/stdlib-js/blas-ext-base-dapxsumpw/tree/esm

[@stdlib/blas/ext/base/dasumpw]: https://github.com/stdlib-js/blas-ext-base-dasumpw/tree/esm

[@stdlib/blas/ext/base/daxpb]: https://github.com/stdlib-js/blas-ext-base-daxpb/tree/esm

[@stdlib/blas/ext/base/daxpby]: https://github.com/stdlib-js/blas-ext-base-daxpby/tree/esm

[@stdlib/blas/ext/base/dcartesian-power]: https://github.com/stdlib-js/blas-ext-base-dcartesian-power/tree/esm

[@stdlib/blas/ext/base/dcartesian-product]: https://github.com/stdlib-js/blas-ext-base-dcartesian-product/tree/esm

[@stdlib/blas/ext/base/dcartesian-square]: https://github.com/stdlib-js/blas-ext-base-dcartesian-square/tree/esm

[@stdlib/blas/ext/base/dcircshift]: https://github.com/stdlib-js/blas-ext-base-dcircshift/tree/esm

[@stdlib/blas/ext/base/dcuany]: https://github.com/stdlib-js/blas-ext-base-dcuany/tree/esm

[@stdlib/blas/ext/base/dcuevery]: https://github.com/stdlib-js/blas-ext-base-dcuevery/tree/esm

[@stdlib/blas/ext/base/dcunone]: https://github.com/stdlib-js/blas-ext-base-dcunone/tree/esm

[@stdlib/blas/ext/base/dcusome]: https://github.com/stdlib-js/blas-ext-base-dcusome/tree/esm

[@stdlib/blas/ext/base/dcusum]: https://github.com/stdlib-js/blas-ext-base-dcusum/tree/esm

[@stdlib/blas/ext/base/dcusumkbn]: https://github.com/stdlib-js/blas-ext-base-dcusumkbn/tree/esm

[@stdlib/blas/ext/base/dcusumkbn2]: https://github.com/stdlib-js/blas-ext-base-dcusumkbn2/tree/esm

[@stdlib/blas/ext/base/dcusumors]: https://github.com/stdlib-js/blas-ext-base-dcusumors/tree/esm

[@stdlib/blas/ext/base/dcusumpw]: https://github.com/stdlib-js/blas-ext-base-dcusumpw/tree/esm

[@stdlib/blas/ext/base/ddiff]: https://github.com/stdlib-js/blas-ext-base-ddiff/tree/esm

[@stdlib/blas/ext/base/dediff]: https://github.com/stdlib-js/blas-ext-base-dediff/tree/esm

[@stdlib/blas/ext/base/dfill]: https://github.com/stdlib-js/blas-ext-base-dfill/tree/esm

[@stdlib/blas/ext/base/dindex-of-column]: https://github.com/stdlib-js/blas-ext-base-dindex-of-column/tree/esm

[@stdlib/blas/ext/base/dindex-of-row]: https://github.com/stdlib-js/blas-ext-base-dindex-of-row/tree/esm

[@stdlib/blas/ext/base/dindex-of-truthy]: https://github.com/stdlib-js/blas-ext-base-dindex-of-truthy/tree/esm

[@stdlib/blas/ext/base/dindex-of]: https://github.com/stdlib-js/blas-ext-base-dindex-of/tree/esm

[@stdlib/blas/ext/base/dlast-index-of-row]: https://github.com/stdlib-js/blas-ext-base-dlast-index-of-row/tree/esm

[@stdlib/blas/ext/base/dlast-index-of]: https://github.com/stdlib-js/blas-ext-base-dlast-index-of/tree/esm

[@stdlib/blas/ext/base/dlinspace]: https://github.com/stdlib-js/blas-ext-base-dlinspace/tree/esm

[@stdlib/blas/ext/base/dminheap-sift-down]: https://github.com/stdlib-js/blas-ext-base-dminheap-sift-down/tree/esm

[@stdlib/blas/ext/base/dmskrev]: https://github.com/stdlib-js/blas-ext-base-dmskrev/tree/esm

[@stdlib/blas/ext/base/dnanasum]: https://github.com/stdlib-js/blas-ext-base-dnanasum/tree/esm

[@stdlib/blas/ext/base/dnanasumors]: https://github.com/stdlib-js/blas-ext-base-dnanasumors/tree/esm

[@stdlib/blas/ext/base/dnancount]: https://github.com/stdlib-js/blas-ext-base-dnancount/tree/esm

[@stdlib/blas/ext/base/dnancusumkbn]: https://github.com/stdlib-js/blas-ext-base-dnancusumkbn/tree/esm

[@stdlib/blas/ext/base/dnannsum]: https://github.com/stdlib-js/blas-ext-base-dnannsum/tree/esm

[@stdlib/blas/ext/base/dnannsumkbn]: https://github.com/stdlib-js/blas-ext-base-dnannsumkbn/tree/esm

[@stdlib/blas/ext/base/dnannsumkbn2]: https://github.com/stdlib-js/blas-ext-base-dnannsumkbn2/tree/esm

[@stdlib/blas/ext/base/dnannsumors]: https://github.com/stdlib-js/blas-ext-base-dnannsumors/tree/esm

[@stdlib/blas/ext/base/dnannsumpw]: https://github.com/stdlib-js/blas-ext-base-dnannsumpw/tree/esm

[@stdlib/blas/ext/base/dnansum]: https://github.com/stdlib-js/blas-ext-base-dnansum/tree/esm

[@stdlib/blas/ext/base/dnansumkbn]: https://github.com/stdlib-js/blas-ext-base-dnansumkbn/tree/esm

[@stdlib/blas/ext/base/dnansumkbn2]: https://github.com/stdlib-js/blas-ext-base-dnansumkbn2/tree/esm

[@stdlib/blas/ext/base/dnansumors]: https://github.com/stdlib-js/blas-ext-base-dnansumors/tree/esm

[@stdlib/blas/ext/base/dnansumpw]: https://github.com/stdlib-js/blas-ext-base-dnansumpw/tree/esm

[@stdlib/blas/ext/base/done-to]: https://github.com/stdlib-js/blas-ext-base-done-to/tree/esm

[@stdlib/blas/ext/base/dones]: https://github.com/stdlib-js/blas-ext-base-dones/tree/esm

[@stdlib/blas/ext/base/drev]: https://github.com/stdlib-js/blas-ext-base-drev/tree/esm

[@stdlib/blas/ext/base/drrss]: https://github.com/stdlib-js/blas-ext-base-drrss/tree/esm

[@stdlib/blas/ext/base/drss]: https://github.com/stdlib-js/blas-ext-base-drss/tree/esm

[@stdlib/blas/ext/base/drssbl]: https://github.com/stdlib-js/blas-ext-base-drssbl/tree/esm

[@stdlib/blas/ext/base/drsskbn]: https://github.com/stdlib-js/blas-ext-base-drsskbn/tree/esm

[@stdlib/blas/ext/base/dsapxsum]: https://github.com/stdlib-js/blas-ext-base-dsapxsum/tree/esm

[@stdlib/blas/ext/base/dsapxsumpw]: https://github.com/stdlib-js/blas-ext-base-dsapxsumpw/tree/esm

[@stdlib/blas/ext/base/dsnannsumors]: https://github.com/stdlib-js/blas-ext-base-dsnannsumors/tree/esm

[@stdlib/blas/ext/base/dsnansum]: https://github.com/stdlib-js/blas-ext-base-dsnansum/tree/esm

[@stdlib/blas/ext/base/dsnansumors]: https://github.com/stdlib-js/blas-ext-base-dsnansumors/tree/esm

[@stdlib/blas/ext/base/dsnansumpw]: https://github.com/stdlib-js/blas-ext-base-dsnansumpw/tree/esm

[@stdlib/blas/ext/base/dsort]: https://github.com/stdlib-js/blas-ext-base-dsort/tree/esm

[@stdlib/blas/ext/base/dsort2hp]: https://github.com/stdlib-js/blas-ext-base-dsort2hp/tree/esm

[@stdlib/blas/ext/base/dsort2ins]: https://github.com/stdlib-js/blas-ext-base-dsort2ins/tree/esm

[@stdlib/blas/ext/base/dsort2sh]: https://github.com/stdlib-js/blas-ext-base-dsort2sh/tree/esm

[@stdlib/blas/ext/base/dsorthp]: https://github.com/stdlib-js/blas-ext-base-dsorthp/tree/esm

[@stdlib/blas/ext/base/dsortins]: https://github.com/stdlib-js/blas-ext-base-dsortins/tree/esm

[@stdlib/blas/ext/base/dsortsh]: https://github.com/stdlib-js/blas-ext-base-dsortsh/tree/esm

[@stdlib/blas/ext/base/dssum]: https://github.com/stdlib-js/blas-ext-base-dssum/tree/esm

[@stdlib/blas/ext/base/dssumors]: https://github.com/stdlib-js/blas-ext-base-dssumors/tree/esm

[@stdlib/blas/ext/base/dssumpw]: https://github.com/stdlib-js/blas-ext-base-dssumpw/tree/esm

[@stdlib/blas/ext/base/dsum]: https://github.com/stdlib-js/blas-ext-base-dsum/tree/esm

[@stdlib/blas/ext/base/dsumkbn]: https://github.com/stdlib-js/blas-ext-base-dsumkbn/tree/esm

[@stdlib/blas/ext/base/dsumkbn2]: https://github.com/stdlib-js/blas-ext-base-dsumkbn2/tree/esm

[@stdlib/blas/ext/base/dsumors]: https://github.com/stdlib-js/blas-ext-base-dsumors/tree/esm

[@stdlib/blas/ext/base/dsumpw]: https://github.com/stdlib-js/blas-ext-base-dsumpw/tree/esm

[@stdlib/blas/ext/base/dunitspace]: https://github.com/stdlib-js/blas-ext-base-dunitspace/tree/esm

[@stdlib/blas/ext/base/dvander]: https://github.com/stdlib-js/blas-ext-base-dvander/tree/esm

[@stdlib/blas/ext/base/dwapx]: https://github.com/stdlib-js/blas-ext-base-dwapx/tree/esm

[@stdlib/blas/ext/base/dwhere]: https://github.com/stdlib-js/blas-ext-base-dwhere/tree/esm

[@stdlib/blas/ext/base/dwxsa]: https://github.com/stdlib-js/blas-ext-base-dwxsa/tree/esm

[@stdlib/blas/ext/base/dxpy]: https://github.com/stdlib-js/blas-ext-base-dxpy/tree/esm

[@stdlib/blas/ext/base/dxsa]: https://github.com/stdlib-js/blas-ext-base-dxsa/tree/esm

[@stdlib/blas/ext/base/dzero-to]: https://github.com/stdlib-js/blas-ext-base-dzero-to/tree/esm

[@stdlib/blas/ext/base/dzeros]: https://github.com/stdlib-js/blas-ext-base-dzeros/tree/esm

[@stdlib/blas/ext/base/gany]: https://github.com/stdlib-js/blas-ext-base-gany/tree/esm

[@stdlib/blas/ext/base/gapx]: https://github.com/stdlib-js/blas-ext-base-gapx/tree/esm

[@stdlib/blas/ext/base/gapxsum]: https://github.com/stdlib-js/blas-ext-base-gapxsum/tree/esm

[@stdlib/blas/ext/base/gapxsumkbn]: https://github.com/stdlib-js/blas-ext-base-gapxsumkbn/tree/esm

[@stdlib/blas/ext/base/gapxsumkbn2]: https://github.com/stdlib-js/blas-ext-base-gapxsumkbn2/tree/esm

[@stdlib/blas/ext/base/gapxsumors]: https://github.com/stdlib-js/blas-ext-base-gapxsumors/tree/esm

[@stdlib/blas/ext/base/gapxsumpw]: https://github.com/stdlib-js/blas-ext-base-gapxsumpw/tree/esm

[@stdlib/blas/ext/base/gasumpw]: https://github.com/stdlib-js/blas-ext-base-gasumpw/tree/esm

[@stdlib/blas/ext/base/gaxpb]: https://github.com/stdlib-js/blas-ext-base-gaxpb/tree/esm

[@stdlib/blas/ext/base/gaxpby]: https://github.com/stdlib-js/blas-ext-base-gaxpby/tree/esm

[@stdlib/blas/ext/base/gcartesian-power]: https://github.com/stdlib-js/blas-ext-base-gcartesian-power/tree/esm

[@stdlib/blas/ext/base/gcartesian-product]: https://github.com/stdlib-js/blas-ext-base-gcartesian-product/tree/esm

[@stdlib/blas/ext/base/gcartesian-square]: https://github.com/stdlib-js/blas-ext-base-gcartesian-square/tree/esm

[@stdlib/blas/ext/base/gcircshift]: https://github.com/stdlib-js/blas-ext-base-gcircshift/tree/esm

[@stdlib/blas/ext/base/gconjoin]: https://github.com/stdlib-js/blas-ext-base-gconjoin/tree/esm

[@stdlib/blas/ext/base/gcuany]: https://github.com/stdlib-js/blas-ext-base-gcuany/tree/esm

[@stdlib/blas/ext/base/gcuevery]: https://github.com/stdlib-js/blas-ext-base-gcuevery/tree/esm

[@stdlib/blas/ext/base/gcunone]: https://github.com/stdlib-js/blas-ext-base-gcunone/tree/esm

[@stdlib/blas/ext/base/gcusome]: https://github.com/stdlib-js/blas-ext-base-gcusome/tree/esm

[@stdlib/blas/ext/base/gcusum]: https://github.com/stdlib-js/blas-ext-base-gcusum/tree/esm

[@stdlib/blas/ext/base/gcusumkbn]: https://github.com/stdlib-js/blas-ext-base-gcusumkbn/tree/esm

[@stdlib/blas/ext/base/gcusumkbn2]: https://github.com/stdlib-js/blas-ext-base-gcusumkbn2/tree/esm

[@stdlib/blas/ext/base/gcusumors]: https://github.com/stdlib-js/blas-ext-base-gcusumors/tree/esm

[@stdlib/blas/ext/base/gcusumpw]: https://github.com/stdlib-js/blas-ext-base-gcusumpw/tree/esm

[@stdlib/blas/ext/base/gdiff]: https://github.com/stdlib-js/blas-ext-base-gdiff/tree/esm

[@stdlib/blas/ext/base/gediff]: https://github.com/stdlib-js/blas-ext-base-gediff/tree/esm

[@stdlib/blas/ext/base/gevery]: https://github.com/stdlib-js/blas-ext-base-gevery/tree/esm

[@stdlib/blas/ext/base/gfill-by]: https://github.com/stdlib-js/blas-ext-base-gfill-by/tree/esm

[@stdlib/blas/ext/base/gfill]: https://github.com/stdlib-js/blas-ext-base-gfill/tree/esm

[@stdlib/blas/ext/base/gfind-index]: https://github.com/stdlib-js/blas-ext-base-gfind-index/tree/esm

[@stdlib/blas/ext/base/gfind-last-index]: https://github.com/stdlib-js/blas-ext-base-gfind-last-index/tree/esm

[@stdlib/blas/ext/base/gindex-of-column]: https://github.com/stdlib-js/blas-ext-base-gindex-of-column/tree/esm

[@stdlib/blas/ext/base/gindex-of-falsy]: https://github.com/stdlib-js/blas-ext-base-gindex-of-falsy/tree/esm

[@stdlib/blas/ext/base/gindex-of-row]: https://github.com/stdlib-js/blas-ext-base-gindex-of-row/tree/esm

[@stdlib/blas/ext/base/gindex-of-truthy]: https://github.com/stdlib-js/blas-ext-base-gindex-of-truthy/tree/esm

[@stdlib/blas/ext/base/gindex-of]: https://github.com/stdlib-js/blas-ext-base-gindex-of/tree/esm

[@stdlib/blas/ext/base/gjoin-between]: https://github.com/stdlib-js/blas-ext-base-gjoin-between/tree/esm

[@stdlib/blas/ext/base/gjoin]: https://github.com/stdlib-js/blas-ext-base-gjoin/tree/esm

[@stdlib/blas/ext/base/glast-index-of-row]: https://github.com/stdlib-js/blas-ext-base-glast-index-of-row/tree/esm

[@stdlib/blas/ext/base/glast-index-of-truthy]: https://github.com/stdlib-js/blas-ext-base-glast-index-of-truthy/tree/esm

[@stdlib/blas/ext/base/glast-index-of]: https://github.com/stdlib-js/blas-ext-base-glast-index-of/tree/esm

[@stdlib/blas/ext/base/glinspace]: https://github.com/stdlib-js/blas-ext-base-glinspace/tree/esm

[@stdlib/blas/ext/base/gminheap-sift-down]: https://github.com/stdlib-js/blas-ext-base-gminheap-sift-down/tree/esm

[@stdlib/blas/ext/base/gminheapify]: https://github.com/stdlib-js/blas-ext-base-gminheapify/tree/esm

[@stdlib/blas/ext/base/gmskrev]: https://github.com/stdlib-js/blas-ext-base-gmskrev/tree/esm

[@stdlib/blas/ext/base/gnancount]: https://github.com/stdlib-js/blas-ext-base-gnancount/tree/esm

[@stdlib/blas/ext/base/gnannsumkbn]: https://github.com/stdlib-js/blas-ext-base-gnannsumkbn/tree/esm

[@stdlib/blas/ext/base/gnannsumpw]: https://github.com/stdlib-js/blas-ext-base-gnannsumpw/tree/esm

[@stdlib/blas/ext/base/gnansum]: https://github.com/stdlib-js/blas-ext-base-gnansum/tree/esm

[@stdlib/blas/ext/base/gnansumkbn]: https://github.com/stdlib-js/blas-ext-base-gnansumkbn/tree/esm

[@stdlib/blas/ext/base/gnansumkbn2]: https://github.com/stdlib-js/blas-ext-base-gnansumkbn2/tree/esm

[@stdlib/blas/ext/base/gnansumors]: https://github.com/stdlib-js/blas-ext-base-gnansumors/tree/esm

[@stdlib/blas/ext/base/gnansumpw]: https://github.com/stdlib-js/blas-ext-base-gnansumpw/tree/esm

[@stdlib/blas/ext/base/gnone]: https://github.com/stdlib-js/blas-ext-base-gnone/tree/esm

[@stdlib/blas/ext/base/gone-to]: https://github.com/stdlib-js/blas-ext-base-gone-to/tree/esm

[@stdlib/blas/ext/base/greplicate]: https://github.com/stdlib-js/blas-ext-base-greplicate/tree/esm

[@stdlib/blas/ext/base/grev]: https://github.com/stdlib-js/blas-ext-base-grev/tree/esm

[@stdlib/blas/ext/base/gsome]: https://github.com/stdlib-js/blas-ext-base-gsome/tree/esm

[@stdlib/blas/ext/base/gsort]: https://github.com/stdlib-js/blas-ext-base-gsort/tree/esm

[@stdlib/blas/ext/base/gsort2hp]: https://github.com/stdlib-js/blas-ext-base-gsort2hp/tree/esm

[@stdlib/blas/ext/base/gsort2ins]: https://github.com/stdlib-js/blas-ext-base-gsort2ins/tree/esm

[@stdlib/blas/ext/base/gsort2sh]: https://github.com/stdlib-js/blas-ext-base-gsort2sh/tree/esm

[@stdlib/blas/ext/base/gsorthp]: https://github.com/stdlib-js/blas-ext-base-gsorthp/tree/esm

[@stdlib/blas/ext/base/gsortins]: https://github.com/stdlib-js/blas-ext-base-gsortins/tree/esm

[@stdlib/blas/ext/base/gsortsh]: https://github.com/stdlib-js/blas-ext-base-gsortsh/tree/esm

[@stdlib/blas/ext/base/gsum]: https://github.com/stdlib-js/blas-ext-base-gsum/tree/esm

[@stdlib/blas/ext/base/gsumkbn]: https://github.com/stdlib-js/blas-ext-base-gsumkbn/tree/esm

[@stdlib/blas/ext/base/gsumkbn2]: https://github.com/stdlib-js/blas-ext-base-gsumkbn2/tree/esm

[@stdlib/blas/ext/base/gsumors]: https://github.com/stdlib-js/blas-ext-base-gsumors/tree/esm

[@stdlib/blas/ext/base/gsumpw]: https://github.com/stdlib-js/blas-ext-base-gsumpw/tree/esm

[@stdlib/blas/ext/base/gunitspace]: https://github.com/stdlib-js/blas-ext-base-gunitspace/tree/esm

[@stdlib/blas/ext/base/gvander]: https://github.com/stdlib-js/blas-ext-base-gvander/tree/esm

[@stdlib/blas/ext/base/gwapx]: https://github.com/stdlib-js/blas-ext-base-gwapx/tree/esm

[@stdlib/blas/ext/base/gwhere]: https://github.com/stdlib-js/blas-ext-base-gwhere/tree/esm

[@stdlib/blas/ext/base/gwxsa]: https://github.com/stdlib-js/blas-ext-base-gwxsa/tree/esm

[@stdlib/blas/ext/base/gxpy]: https://github.com/stdlib-js/blas-ext-base-gxpy/tree/esm

[@stdlib/blas/ext/base/gxsa]: https://github.com/stdlib-js/blas-ext-base-gxsa/tree/esm

[@stdlib/blas/ext/base/gzero-to]: https://github.com/stdlib-js/blas-ext-base-gzero-to/tree/esm

[@stdlib/blas/ext/base/ndarray]: https://github.com/stdlib-js/blas-ext-base-ndarray/tree/esm

[@stdlib/blas/ext/base/sapx]: https://github.com/stdlib-js/blas-ext-base-sapx/tree/esm

[@stdlib/blas/ext/base/sapxsum]: https://github.com/stdlib-js/blas-ext-base-sapxsum/tree/esm

[@stdlib/blas/ext/base/sapxsumkbn]: https://github.com/stdlib-js/blas-ext-base-sapxsumkbn/tree/esm

[@stdlib/blas/ext/base/sapxsumkbn2]: https://github.com/stdlib-js/blas-ext-base-sapxsumkbn2/tree/esm

[@stdlib/blas/ext/base/sapxsumors]: https://github.com/stdlib-js/blas-ext-base-sapxsumors/tree/esm

[@stdlib/blas/ext/base/sapxsumpw]: https://github.com/stdlib-js/blas-ext-base-sapxsumpw/tree/esm

[@stdlib/blas/ext/base/sasumpw]: https://github.com/stdlib-js/blas-ext-base-sasumpw/tree/esm

[@stdlib/blas/ext/base/saxpb]: https://github.com/stdlib-js/blas-ext-base-saxpb/tree/esm

[@stdlib/blas/ext/base/saxpby]: https://github.com/stdlib-js/blas-ext-base-saxpby/tree/esm

[@stdlib/blas/ext/base/scartesian-power]: https://github.com/stdlib-js/blas-ext-base-scartesian-power/tree/esm

[@stdlib/blas/ext/base/scartesian-product]: https://github.com/stdlib-js/blas-ext-base-scartesian-product/tree/esm

[@stdlib/blas/ext/base/scartesian-square]: https://github.com/stdlib-js/blas-ext-base-scartesian-square/tree/esm

[@stdlib/blas/ext/base/scircshift]: https://github.com/stdlib-js/blas-ext-base-scircshift/tree/esm

[@stdlib/blas/ext/base/scuany]: https://github.com/stdlib-js/blas-ext-base-scuany/tree/esm

[@stdlib/blas/ext/base/scuevery]: https://github.com/stdlib-js/blas-ext-base-scuevery/tree/esm

[@stdlib/blas/ext/base/scunone]: https://github.com/stdlib-js/blas-ext-base-scunone/tree/esm

[@stdlib/blas/ext/base/scusome]: https://github.com/stdlib-js/blas-ext-base-scusome/tree/esm

[@stdlib/blas/ext/base/scusum]: https://github.com/stdlib-js/blas-ext-base-scusum/tree/esm

[@stdlib/blas/ext/base/scusumkbn]: https://github.com/stdlib-js/blas-ext-base-scusumkbn/tree/esm

[@stdlib/blas/ext/base/scusumkbn2]: https://github.com/stdlib-js/blas-ext-base-scusumkbn2/tree/esm

[@stdlib/blas/ext/base/scusumors]: https://github.com/stdlib-js/blas-ext-base-scusumors/tree/esm

[@stdlib/blas/ext/base/scusumpw]: https://github.com/stdlib-js/blas-ext-base-scusumpw/tree/esm

[@stdlib/blas/ext/base/sdiff]: https://github.com/stdlib-js/blas-ext-base-sdiff/tree/esm

[@stdlib/blas/ext/base/sdsapxsum]: https://github.com/stdlib-js/blas-ext-base-sdsapxsum/tree/esm

[@stdlib/blas/ext/base/sdsapxsumpw]: https://github.com/stdlib-js/blas-ext-base-sdsapxsumpw/tree/esm

[@stdlib/blas/ext/base/sdsnansum]: https://github.com/stdlib-js/blas-ext-base-sdsnansum/tree/esm

[@stdlib/blas/ext/base/sdsnansumpw]: https://github.com/stdlib-js/blas-ext-base-sdsnansumpw/tree/esm

[@stdlib/blas/ext/base/sdssum]: https://github.com/stdlib-js/blas-ext-base-sdssum/tree/esm

[@stdlib/blas/ext/base/sdssumpw]: https://github.com/stdlib-js/blas-ext-base-sdssumpw/tree/esm

[@stdlib/blas/ext/base/sediff]: https://github.com/stdlib-js/blas-ext-base-sediff/tree/esm

[@stdlib/blas/ext/base/sfill]: https://github.com/stdlib-js/blas-ext-base-sfill/tree/esm

[@stdlib/blas/ext/base/sindex-of-column]: https://github.com/stdlib-js/blas-ext-base-sindex-of-column/tree/esm

[@stdlib/blas/ext/base/sindex-of-row]: https://github.com/stdlib-js/blas-ext-base-sindex-of-row/tree/esm

[@stdlib/blas/ext/base/sindex-of-truthy]: https://github.com/stdlib-js/blas-ext-base-sindex-of-truthy/tree/esm

[@stdlib/blas/ext/base/sindex-of]: https://github.com/stdlib-js/blas-ext-base-sindex-of/tree/esm

[@stdlib/blas/ext/base/slast-index-of-row]: https://github.com/stdlib-js/blas-ext-base-slast-index-of-row/tree/esm

[@stdlib/blas/ext/base/slast-index-of]: https://github.com/stdlib-js/blas-ext-base-slast-index-of/tree/esm

[@stdlib/blas/ext/base/slinspace]: https://github.com/stdlib-js/blas-ext-base-slinspace/tree/esm

[@stdlib/blas/ext/base/sminheap-sift-down]: https://github.com/stdlib-js/blas-ext-base-sminheap-sift-down/tree/esm

[@stdlib/blas/ext/base/smskrev]: https://github.com/stdlib-js/blas-ext-base-smskrev/tree/esm

[@stdlib/blas/ext/base/snancount]: https://github.com/stdlib-js/blas-ext-base-snancount/tree/esm

[@stdlib/blas/ext/base/snansum]: https://github.com/stdlib-js/blas-ext-base-snansum/tree/esm

[@stdlib/blas/ext/base/snansumkbn]: https://github.com/stdlib-js/blas-ext-base-snansumkbn/tree/esm

[@stdlib/blas/ext/base/snansumkbn2]: https://github.com/stdlib-js/blas-ext-base-snansumkbn2/tree/esm

[@stdlib/blas/ext/base/snansumors]: https://github.com/stdlib-js/blas-ext-base-snansumors/tree/esm

[@stdlib/blas/ext/base/snansumpw]: https://github.com/stdlib-js/blas-ext-base-snansumpw/tree/esm

[@stdlib/blas/ext/base/sone-to]: https://github.com/stdlib-js/blas-ext-base-sone-to/tree/esm

[@stdlib/blas/ext/base/sones]: https://github.com/stdlib-js/blas-ext-base-sones/tree/esm

[@stdlib/blas/ext/base/srev]: https://github.com/stdlib-js/blas-ext-base-srev/tree/esm

[@stdlib/blas/ext/base/ssort]: https://github.com/stdlib-js/blas-ext-base-ssort/tree/esm

[@stdlib/blas/ext/base/ssort2hp]: https://github.com/stdlib-js/blas-ext-base-ssort2hp/tree/esm

[@stdlib/blas/ext/base/ssort2ins]: https://github.com/stdlib-js/blas-ext-base-ssort2ins/tree/esm

[@stdlib/blas/ext/base/ssort2sh]: https://github.com/stdlib-js/blas-ext-base-ssort2sh/tree/esm

[@stdlib/blas/ext/base/ssorthp]: https://github.com/stdlib-js/blas-ext-base-ssorthp/tree/esm

[@stdlib/blas/ext/base/ssortins]: https://github.com/stdlib-js/blas-ext-base-ssortins/tree/esm

[@stdlib/blas/ext/base/ssortsh]: https://github.com/stdlib-js/blas-ext-base-ssortsh/tree/esm

[@stdlib/blas/ext/base/ssum]: https://github.com/stdlib-js/blas-ext-base-ssum/tree/esm

[@stdlib/blas/ext/base/ssumkbn]: https://github.com/stdlib-js/blas-ext-base-ssumkbn/tree/esm

[@stdlib/blas/ext/base/ssumkbn2]: https://github.com/stdlib-js/blas-ext-base-ssumkbn2/tree/esm

[@stdlib/blas/ext/base/ssumors]: https://github.com/stdlib-js/blas-ext-base-ssumors/tree/esm

[@stdlib/blas/ext/base/ssumpw]: https://github.com/stdlib-js/blas-ext-base-ssumpw/tree/esm

[@stdlib/blas/ext/base/sunitspace]: https://github.com/stdlib-js/blas-ext-base-sunitspace/tree/esm

[@stdlib/blas/ext/base/svander]: https://github.com/stdlib-js/blas-ext-base-svander/tree/esm

[@stdlib/blas/ext/base/swapx]: https://github.com/stdlib-js/blas-ext-base-swapx/tree/esm

[@stdlib/blas/ext/base/swhere]: https://github.com/stdlib-js/blas-ext-base-swhere/tree/esm

[@stdlib/blas/ext/base/swxsa]: https://github.com/stdlib-js/blas-ext-base-swxsa/tree/esm

[@stdlib/blas/ext/base/sxpy]: https://github.com/stdlib-js/blas-ext-base-sxpy/tree/esm

[@stdlib/blas/ext/base/sxsa]: https://github.com/stdlib-js/blas-ext-base-sxsa/tree/esm

[@stdlib/blas/ext/base/szero-to]: https://github.com/stdlib-js/blas-ext-base-szero-to/tree/esm

[@stdlib/blas/ext/base/szeros]: https://github.com/stdlib-js/blas-ext-base-szeros/tree/esm

[@stdlib/blas/ext/base/wasm]: https://github.com/stdlib-js/blas-ext-base-wasm/tree/esm

[@stdlib/blas/ext/base/zapx]: https://github.com/stdlib-js/blas-ext-base-zapx/tree/esm

[@stdlib/blas/ext/base/zaxpb]: https://github.com/stdlib-js/blas-ext-base-zaxpb/tree/esm

[@stdlib/blas/ext/base/zaxpby]: https://github.com/stdlib-js/blas-ext-base-zaxpby/tree/esm

[@stdlib/blas/ext/base/zdiff]: https://github.com/stdlib-js/blas-ext-base-zdiff/tree/esm

[@stdlib/blas/ext/base/zfill]: https://github.com/stdlib-js/blas-ext-base-zfill/tree/esm

[@stdlib/blas/ext/base/zindex-of-column]: https://github.com/stdlib-js/blas-ext-base-zindex-of-column/tree/esm

[@stdlib/blas/ext/base/zindex-of-row]: https://github.com/stdlib-js/blas-ext-base-zindex-of-row/tree/esm

[@stdlib/blas/ext/base/zindex-of]: https://github.com/stdlib-js/blas-ext-base-zindex-of/tree/esm

[@stdlib/blas/ext/base/zlast-index-of-row]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-row/tree/esm

[@stdlib/blas/ext/base/znancount]: https://github.com/stdlib-js/blas-ext-base-znancount/tree/esm

[@stdlib/blas/ext/base/zone-to]: https://github.com/stdlib-js/blas-ext-base-zone-to/tree/esm

[@stdlib/blas/ext/base/zsum]: https://github.com/stdlib-js/blas-ext-base-zsum/tree/esm

[@stdlib/blas/ext/base/zsumkbn]: https://github.com/stdlib-js/blas-ext-base-zsumkbn/tree/esm

[@stdlib/blas/ext/base/zunitspace]: https://github.com/stdlib-js/blas-ext-base-zunitspace/tree/esm

[@stdlib/blas/ext/base/zwhere]: https://github.com/stdlib-js/blas-ext-base-zwhere/tree/esm

[@stdlib/blas/ext/base/zwxsa]: https://github.com/stdlib-js/blas-ext-base-zwxsa/tree/esm

[@stdlib/blas/ext/base/zxpy]: https://github.com/stdlib-js/blas-ext-base-zxpy/tree/esm

[@stdlib/blas/ext/base/zxsa]: https://github.com/stdlib-js/blas-ext-base-zxsa/tree/esm

[@stdlib/blas/ext/base/zzero-to]: https://github.com/stdlib-js/blas-ext-base-zzero-to/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->

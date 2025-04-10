/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import dapx = require( '@stdlib/blas-ext-base-dapx' );
import dapxsum = require( '@stdlib/blas-ext-base-dapxsum' );
import dapxsumkbn = require( '@stdlib/blas-ext-base-dapxsumkbn' );
import dapxsumkbn2 = require( '@stdlib/blas-ext-base-dapxsumkbn2' );
import dapxsumors = require( '@stdlib/blas-ext-base-dapxsumors' );
import dapxsumpw = require( '@stdlib/blas-ext-base-dapxsumpw' );
import dasumpw = require( '@stdlib/blas-ext-base-dasumpw' );
import dcusum = require( '@stdlib/blas-ext-base-dcusum' );
import dcusumkbn = require( '@stdlib/blas-ext-base-dcusumkbn' );
import dcusumkbn2 = require( '@stdlib/blas-ext-base-dcusumkbn2' );
import dcusumors = require( '@stdlib/blas-ext-base-dcusumors' );
import dcusumpw = require( '@stdlib/blas-ext-base-dcusumpw' );
import dfill = require( '@stdlib/blas-ext-base-dfill' );
import dnanasum = require( '@stdlib/blas-ext-base-dnanasum' );
import dnanasumors = require( '@stdlib/blas-ext-base-dnanasumors' );
import dnannsum = require( '@stdlib/blas-ext-base-dnannsum' );
import dnannsumkbn = require( '@stdlib/blas-ext-base-dnannsumkbn' );
import dnannsumkbn2 = require( '@stdlib/blas-ext-base-dnannsumkbn2' );
import dnannsumors = require( '@stdlib/blas-ext-base-dnannsumors' );
import dnannsumpw = require( '@stdlib/blas-ext-base-dnannsumpw' );
import dnansum = require( '@stdlib/blas-ext-base-dnansum' );
import dnansumkbn = require( '@stdlib/blas-ext-base-dnansumkbn' );
import dnansumkbn2 = require( '@stdlib/blas-ext-base-dnansumkbn2' );
import dnansumors = require( '@stdlib/blas-ext-base-dnansumors' );
import dnansumpw = require( '@stdlib/blas-ext-base-dnansumpw' );
import drev = require( '@stdlib/blas-ext-base-drev' );
import dsapxsum = require( '@stdlib/blas-ext-base-dsapxsum' );
import dsapxsumpw = require( '@stdlib/blas-ext-base-dsapxsumpw' );
import dsnannsumors = require( '@stdlib/blas-ext-base-dsnannsumors' );
import dsnansum = require( '@stdlib/blas-ext-base-dsnansum' );
import dsnansumors = require( '@stdlib/blas-ext-base-dsnansumors' );
import dsnansumpw = require( '@stdlib/blas-ext-base-dsnansumpw' );
import dsort2hp = require( '@stdlib/blas-ext-base-dsort2hp' );
import dsort2ins = require( '@stdlib/blas-ext-base-dsort2ins' );
import dsort2sh = require( '@stdlib/blas-ext-base-dsort2sh' );
import dsorthp = require( '@stdlib/blas-ext-base-dsorthp' );
import dsortins = require( '@stdlib/blas-ext-base-dsortins' );
import dsortsh = require( '@stdlib/blas-ext-base-dsortsh' );
import dssum = require( '@stdlib/blas-ext-base-dssum' );
import dssumors = require( '@stdlib/blas-ext-base-dssumors' );
import dssumpw = require( '@stdlib/blas-ext-base-dssumpw' );
import dsum = require( '@stdlib/blas-ext-base-dsum' );
import dsumkbn = require( '@stdlib/blas-ext-base-dsumkbn' );
import dsumkbn2 = require( '@stdlib/blas-ext-base-dsumkbn2' );
import dsumors = require( '@stdlib/blas-ext-base-dsumors' );
import dsumpw = require( '@stdlib/blas-ext-base-dsumpw' );
import gapx = require( '@stdlib/blas-ext-base-gapx' );
import gapxsum = require( '@stdlib/blas-ext-base-gapxsum' );
import gapxsumkbn = require( '@stdlib/blas-ext-base-gapxsumkbn' );
import gapxsumkbn2 = require( '@stdlib/blas-ext-base-gapxsumkbn2' );
import gapxsumors = require( '@stdlib/blas-ext-base-gapxsumors' );
import gapxsumpw = require( '@stdlib/blas-ext-base-gapxsumpw' );
import gasumpw = require( '@stdlib/blas-ext-base-gasumpw' );
import gcusum = require( '@stdlib/blas-ext-base-gcusum' );
import gcusumkbn = require( '@stdlib/blas-ext-base-gcusumkbn' );
import gcusumkbn2 = require( '@stdlib/blas-ext-base-gcusumkbn2' );
import gcusumors = require( '@stdlib/blas-ext-base-gcusumors' );
import gcusumpw = require( '@stdlib/blas-ext-base-gcusumpw' );
import gfill = require( '@stdlib/blas-ext-base-gfill' );
import gfillBy = require( '@stdlib/blas-ext-base-gfill-by' );
import gnannsumkbn = require( '@stdlib/blas-ext-base-gnannsumkbn' );
import gnansum = require( '@stdlib/blas-ext-base-gnansum' );
import gnansumkbn = require( '@stdlib/blas-ext-base-gnansumkbn' );
import gnansumkbn2 = require( '@stdlib/blas-ext-base-gnansumkbn2' );
import gnansumors = require( '@stdlib/blas-ext-base-gnansumors' );
import gnansumpw = require( '@stdlib/blas-ext-base-gnansumpw' );
import grev = require( '@stdlib/blas-ext-base-grev' );
import gsort2hp = require( '@stdlib/blas-ext-base-gsort2hp' );
import gsort2ins = require( '@stdlib/blas-ext-base-gsort2ins' );
import gsort2sh = require( '@stdlib/blas-ext-base-gsort2sh' );
import gsorthp = require( '@stdlib/blas-ext-base-gsorthp' );
import gsortins = require( '@stdlib/blas-ext-base-gsortins' );
import gsortsh = require( '@stdlib/blas-ext-base-gsortsh' );
import gsum = require( '@stdlib/blas-ext-base-gsum' );
import gsumkbn = require( '@stdlib/blas-ext-base-gsumkbn' );
import gsumkbn2 = require( '@stdlib/blas-ext-base-gsumkbn2' );
import gsumors = require( '@stdlib/blas-ext-base-gsumors' );
import gsumpw = require( '@stdlib/blas-ext-base-gsumpw' );
import sapx = require( '@stdlib/blas-ext-base-sapx' );
import sapxsum = require( '@stdlib/blas-ext-base-sapxsum' );
import sapxsumkbn = require( '@stdlib/blas-ext-base-sapxsumkbn' );
import sapxsumkbn2 = require( '@stdlib/blas-ext-base-sapxsumkbn2' );
import sapxsumors = require( '@stdlib/blas-ext-base-sapxsumors' );
import sapxsumpw = require( '@stdlib/blas-ext-base-sapxsumpw' );
import sasumpw = require( '@stdlib/blas-ext-base-sasumpw' );
import scusum = require( '@stdlib/blas-ext-base-scusum' );
import scusumkbn = require( '@stdlib/blas-ext-base-scusumkbn' );
import scusumkbn2 = require( '@stdlib/blas-ext-base-scusumkbn2' );
import scusumors = require( '@stdlib/blas-ext-base-scusumors' );
import scusumpw = require( '@stdlib/blas-ext-base-scusumpw' );
import sdsapxsum = require( '@stdlib/blas-ext-base-sdsapxsum' );
import sdsapxsumpw = require( '@stdlib/blas-ext-base-sdsapxsumpw' );
import sdsnansum = require( '@stdlib/blas-ext-base-sdsnansum' );
import sdsnansumpw = require( '@stdlib/blas-ext-base-sdsnansumpw' );
import sdssum = require( '@stdlib/blas-ext-base-sdssum' );
import sdssumpw = require( '@stdlib/blas-ext-base-sdssumpw' );
import sfill = require( '@stdlib/blas-ext-base-sfill' );
import snansum = require( '@stdlib/blas-ext-base-snansum' );
import snansumkbn = require( '@stdlib/blas-ext-base-snansumkbn' );
import snansumkbn2 = require( '@stdlib/blas-ext-base-snansumkbn2' );
import snansumors = require( '@stdlib/blas-ext-base-snansumors' );
import snansumpw = require( '@stdlib/blas-ext-base-snansumpw' );
import srev = require( '@stdlib/blas-ext-base-srev' );
import ssort2hp = require( '@stdlib/blas-ext-base-ssort2hp' );
import ssort2ins = require( '@stdlib/blas-ext-base-ssort2ins' );
import ssort2sh = require( '@stdlib/blas-ext-base-ssort2sh' );
import ssorthp = require( '@stdlib/blas-ext-base-ssorthp' );
import ssortins = require( '@stdlib/blas-ext-base-ssortins' );
import ssortsh = require( '@stdlib/blas-ext-base-ssortsh' );
import ssum = require( '@stdlib/blas-ext-base-ssum' );
import ssumkbn = require( '@stdlib/blas-ext-base-ssumkbn' );
import ssumkbn2 = require( '@stdlib/blas-ext-base-ssumkbn2' );
import ssumors = require( '@stdlib/blas-ext-base-ssumors' );
import ssumpw = require( '@stdlib/blas-ext-base-ssumpw' );
import wasm = require( '@stdlib/blas-ext-base-wasm' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Adds a scalar constant to each element in a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.dapx( x.length, 5.0, x, 1 );
	* // x => <Float64Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.dapx.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => <Float64Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
	*/
	dapx: typeof dapx;

	/**
	* Adds a scalar constant to each double-precision floating-point strided array element and computes the sum.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dapxsum( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dapxsum.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	dapxsum: typeof dapxsum;

	/**
	* Adds a scalar constant to each double-precision floating-point strided array element and computes the sum using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dapxsumkbn( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dapxsumkbn.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	dapxsumkbn: typeof dapxsumkbn;

	/**
	* Adds a scalar constant to each double-precision floating-point strided array element and computes the sum using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dapxsumkbn2( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dapxsumkbn2.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	dapxsumkbn2: typeof dapxsumkbn2;

	/**
	* Adds a scalar constant to each double-precision floating-point strided array element and computes the sum using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dapxsumors( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dapxsumors.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	dapxsumors: typeof dapxsumors;

	/**
	* Adds a scalar constant to each double-precision floating-point strided array element and computes the sum using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dapxsumpw( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dapxsumpw.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	dapxsumpw: typeof dapxsumpw;

	/**
	* Computes the sum of absolute values (L1 norm) of double-precision floating-point strided array elements using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dasumpw( x.length, x, 1 );
	* // returns 5.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dasumpw.ndarray( x.length, x, 1, 0 );
	* // returns 5.0
	*/
	dasumpw: typeof dasumpw;

	/**
	* Computes the cumulative sum of double-precision floating-point strided array elements.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcusum( x.length, 0.0, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcusum.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, -1.0, 1.0 ]
	*/
	dcusum: typeof dcusum;

	/**
	* Computes the cumulative sum of double-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcusumkbn( x.length, 0.0, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcusumkbn.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, -1.0, 1.0 ]
	*/
	dcusumkbn: typeof dcusumkbn;

	/**
	* Computes the cumulative sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcusumkbn2( x.length, 0.0, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcusumkbn2.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, -1.0, 1.0 ]
	*/
	dcusumkbn2: typeof dcusumkbn2;

	/**
	* Computes the cumulative sum of double-precision floating-point strided array elements using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcusumors( x.length, 0.0, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcusumors.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, -1.0, 1.0 ]
	*/
	dcusumors: typeof dcusumors;

	/**
	* Computes the cumulative sum of double-precision floating-point strided array elements using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcusumpw( x.length, 0.0, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcusumpw.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, -1.0, 1.0 ]
	*/
	dcusumpw: typeof dcusumpw;

	/**
	* Fills a double-precision floating-point strided array with a specified scalar value.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.dfill( x.length, 5.0, x, 1 );
	* // x => <Float64Array>[ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.dfill.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => <Float64Array>[ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
	*/
	dfill: typeof dfill;

	/**
	* Computes the sum of absolute values (L1 norm) of double-precision floating-point strided array elements, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanasum( x.length, x, 1 );
	* // returns 5.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanasum.ndarray( x.length, x, 1, 0 );
	* // returns 5.0
	*/
	dnanasum: typeof dnanasum;

	/**
	* Computes the sum of absolute values (L1 norm) of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanasumors( x.length, x, 1 );
	* // returns 5.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanasumors.ndarray( x.length, x, 1, 0 );
	* // returns 5.0
	*/
	dnanasumors: typeof dnanasumors;

	/**
	* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array whose first element is the sum and whose second element is the number of non-NaN elements
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dnannsum( x.length, x, 1, out, 1 );
	* // returns <Float64Array>[ 1.0, 3 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dnannsum( x.length, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ 1.0, 3 ]
	*/
	dnannsum: typeof dnannsum;

	/**
	* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array whose first element is the sum and whose second element is the number of non-NaN elements
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dnannsumkbn( x.length, x, 1, out, 1 );
	* // returns <Float64Array>[ 1.0, 3 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dnannsumkbn( x.length, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ 1.0, 3 ]
	*/
	dnannsumkbn: typeof dnannsumkbn;

	/**
	* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array whose first element is the sum and whose second element is the number of non-NaN elements
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dnannsumkbn2( x.length, x, 1, out, 1 );
	* // returns <Float64Array>[ 1.0, 3 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dnannsumkbn2( x.length, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ 1.0, 3 ]
	*/
	dnannsumkbn2: typeof dnannsumkbn2;

	/**
	* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array whose first element is the sum and whose second element is the number of non-NaN elements
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dnannsumors( x.length, x, 1, out, 1 );
	* // returns <Float64Array>[ 1.0, 3 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dnannsumors( x.length, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ 1.0, 3 ]
	*/
	dnannsumors: typeof dnannsumors;

	/**
	* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array whose first element is the sum and whose second element is the number of non-NaN elements
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dnannsumpw( x.length, x, 1, out, 1 );
	* // returns <Float64Array>[ 1.0, 3 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dnannsumpw( x.length, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ 1.0, 3 ]
	*/
	dnannsumpw: typeof dnannsumpw;

	/**
	* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnansum( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnansum.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dnansum: typeof dnansum;

	/**
	* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnansumkbn( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnansumkbn.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dnansumkbn: typeof dnansumkbn;

	/**
	* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnansumkbn2( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnansumkbn2.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dnansumkbn2: typeof dnansumkbn2;

	/**
	* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnansumors( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnansumors.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dnansumors: typeof dnansumors;

	/**
	* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnansumpw( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnansumpw.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dnansumpw: typeof dnansumpw;

	/**
	* Reverses a double-precision floating-point strided array in-place.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.drev( x.length, x, 1 );
	* // x => <Float64Array>[ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.drev.ndarray( x.length, x, 1, 0 );
	* // x => <Float64Array>[ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
	*/
	drev: typeof drev;

	/**
	* Adds a scalar constant to each single-precision floating-point strided array element, and computes the sum using extended accumulation and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsapxsum( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsapxsum.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	dsapxsum: typeof dsapxsum;

	/**
	* Adds a constant to each single-precision floating-point strided array element, and computes the sum using pairwise summation with extended accumulation and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsapxsumpw( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsapxsumpw.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	dsapxsumpw: typeof dsapxsumpw;

	/**
	* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param out - output array whose first element is the sum and whose second element is the number of non-NaN elements
	* @param strideOut - `out` stride length
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dsnannsumors( x.length, x, 1, out, 1 );
	* // returns <Float64Array>[ 1.0, 3 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dsnannsumors( x.length, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ 1.0, 3 ]
	*/
	dsnannsumors: typeof dsnannsumors;

	/**
	* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using extended accumulation, and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dsnansum( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dsnansum.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dsnansum: typeof dsnansum;

	/**
	* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dsnansumors( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dsnansumors.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dsnansumors: typeof dsnansumors;

	/**
	* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using pairwise summation with extended accumulation, and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dsnansumpw( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dsnansumpw.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dsnansumpw: typeof dsnansumpw;

	/**
	* Simultaneously sorts two double-precision floating-point strided arrays based on the sort order of the first array using heapsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `x`
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	*
	* ns.dsort2hp( x.length, 1, x, 1, y, 1 );
	*
	* console.log( x );
	* // => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	*
	* ns.dsort2hp.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
	*
	* console.log( x );
	* // => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
	*/
	dsort2hp: typeof dsort2hp;

	/**
	* Simultaneously sorts two double-precision floating-point strided arrays based on the sort order of the first array using insertion sort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `x`
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	*
	* ns.dsort2ins( x.length, 1, x, 1, y, 1 );
	*
	* console.log( x );
	* // => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	*
	* ns.dsort2ins.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
	*
	* console.log( x );
	* // => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
	*/
	dsort2ins: typeof dsort2ins;

	/**
	* Simultaneously sorts two double-precision floating-point strided arrays based on the sort order of the first array using Shellsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `x`
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	*
	* ns.dsort2sh( x.length, 1, x, 1, y, 1 );
	*
	* console.log( x );
	* // => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	*
	* ns.dsort2sh.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
	*
	* console.log( x );
	* // => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
	*/
	dsort2sh: typeof dsort2sh;

	/**
	* Sorts a double-precision floating-point strided array using heapsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	*
	* ns.dsorthp( x.length, 1, x, 1 );
	* // x => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	*
	* ns.dsorthp.ndarray( x.length, 1, x, 1, 0 );
	* // x => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*/
	dsorthp: typeof dsorthp;

	/**
	* Sorts a double-precision floating-point strided array using insertion sort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	*
	* ns.dsortins( x.length, 1, x, 1 );
	* // x => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	*
	* ns.dsortins.ndarray( x.length, 1, x, 1, 0 );
	* // x => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*/
	dsortins: typeof dsortins;

	/**
	* Sorts a double-precision floating-point strided array using Shellsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - input array
	* @param stride - stride length
	* @returns `x`
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	*
	* ns.dsortsh( x.length, 1, x, 1 );
	* // x => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	*
	* ns.dsortsh.ndarray( x.length, 1, x, 1, 0 );
	* // x => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*/
	dsortsh: typeof dsortsh;

	/**
	* Computes the sum of single-precision floating-point strided array elements using extended accumulation and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dssum( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dssum.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dssum: typeof dssum;

	/**
	* Computes the sum of single-precision floating-point strided array elements using ordinary recursive summation with extended accumulation and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dssumors( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dssumors.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dssumors: typeof dssumors;

	/**
	* Computes the sum of single-precision floating-point strided array elements using pairwise summation with extended accumulation and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dssumpw( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dssumpw.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dssumpw: typeof dssumpw;

	/**
	* Computes the sum of double-precision floating-point strided array elements.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsum( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsum.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dsum: typeof dsum;

	/**
	* Computes the sum of double-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsumkbn( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsumkbn.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dsumkbn: typeof dsumkbn;

	/**
	* Computes the sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsumkbn2( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsumkbn2.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dsumkbn2: typeof dsumkbn2;

	/**
	* Computes the sum of double-precision floating-point strided array elements using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsumors( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsumors.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dsumors: typeof dsumors;

	/**
	* Computes the sum of double-precision floating-point strided array elements using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsumpw( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsumpw.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dsumpw: typeof dsumpw;

	/**
	* Adds a scalar constant to each element in a strided array.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* ns.gapx( x.length, 5.0, x, 1 );
	* // x => [ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* ns.gapx.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => [ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
	*/
	gapx: typeof gapx;

	/**
	* Adds a scalar constant to each strided array element and computes the sum.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gapxsum( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gapxsum.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	gapxsum: typeof gapxsum;

	/**
	* Adds a scalar constant to each strided array element and computes the sum using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gapxsumkbn( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gapxsumkbn.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	gapxsumkbn: typeof gapxsumkbn;

	/**
	* Adds a scalar constant to each strided array element and computes the sum using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gapxsumkbn2( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gapxsumkbn2.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	gapxsumkbn2: typeof gapxsumkbn2;

	/**
	* Adds a scalar constant to each strided array element and computes the sum using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gapxsumors( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gapxsumors.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	gapxsumors: typeof gapxsumors;

	/**
	* Adds a scalar constant to each strided array element and computes the sum using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gapxsumpw( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gapxsumpw.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	gapxsumpw: typeof gapxsumpw;

	/**
	* Computes the sum of absolute values (L1 norm) of strided array elements using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gasumpw( x.length, x, 1 );
	* // returns 5.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gasumpw.ndarray( x.length, x, 1, 0 );
	* // returns 5.0
	*/
	gasumpw: typeof gasumpw;

	/**
	* Computes the cumulative sum of strided array elements.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.gcusum( x.length, 0.0, x, 1, y, 1 );
	* // y => [ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.gcusum.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, -1.0, 1.0 ]
	*/
	gcusum: typeof gcusum;

	/**
	* Computes the cumulative sum of strided array elements using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.gcusumkbn( x.length, 0.0, x, 1, y, 1 );
	* // y => [ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.gcusumkbn.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, -1.0, 1.0 ]
	*/
	gcusumkbn: typeof gcusumkbn;

	/**
	* Computes the cumulative sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.gcusumkbn2( x.length, 0.0, x, 1, y, 1 );
	* // y => [ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.gcusumkbn2.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, -1.0, 1.0 ]
	*/
	gcusumkbn2: typeof gcusumkbn2;

	/**
	* Computes the cumulative sum of strided array elements using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.gcusumors( x.length, 0.0, x, 1, y, 1 );
	* // y => [ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.gcusumors.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, -1.0, 1.0 ]
	*/
	gcusumors: typeof gcusumors;

	/**
	* Computes the cumulative sum of strided array elements using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.gcusumpw( x.length, 0.0, x, 1, y, 1 );
	* // y => [ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* ns.gcusumpw.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, -1.0, 1.0 ]
	*/
	gcusumpw: typeof gcusumpw;

	/**
	* Fills a strided array with a specified scalar constant.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* ns.gfill( x.length, 5.0, x, 1 );
	* // x => [ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* ns.gfill.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => [ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
	*/
	gfill: typeof gfill;

	/**
	* Fills a strided array according to a provided callback function.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback return value is used as the fill value for the current array index.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param clbk - callback function
	* @param thisArg - execution context
	* @returns `x`
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function fill() {
	*     return 5.0;
	* }
	*
	* ns.gfillBy( x.length, x, 1, fill );
	* // x => [ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function fill() {
	*     return 5.0;
	* }
	*
	* ns.gfillBy.ndarray( x.length, x, 1, 0, fill );
	* // x => [ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
	*/
	gfillBy: typeof gfillBy;

	/**
	* Computes the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array whose first element is the sum and whose second element is the number of non-NaN elements
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	* var out = [ 0.0, 0 ];
	*
	* var v = ns.gnannsumkbn( x.length, x, 1, out, 1 );
	* // returns [ 1.0, 3 ]
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	* var out = [ 0.0, 0 ];
	*
	* var v = ns.gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );
	* // returns [ 1.0, 3 ]
	*/
	gnannsumkbn: typeof gnannsumkbn;

	/**
	* Computes the sum of strided array elements, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.gnansum( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.gnansum.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	gnansum: typeof gnansum;

	/**
	* Computes the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.gnansumkbn( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.gnansumkbn.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	gnansumkbn: typeof gnansumkbn;

	/**
	* Computes the sum of strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.gnansumkbn2( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.gnansumkbn2.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	gnansumkbn2: typeof gnansumkbn2;

	/**
	* Computes the sum of strided array elements, ignoring `NaN` values and using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.gnansumors( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.gnansumors.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	gnansumors: typeof gnansumors;

	/**
	* Computes the sum of strided array elements, ignoring `NaN` values and using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.gnansumpw( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.gnansumpw.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	gnansumpw: typeof gnansumpw;

	/**
	* Reverses a strided array in-place.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* ns.grev( x.length, x, 1 );
	* // x => [ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* ns.grev.ndarray( x.length, x, 1, 0 );
	* // x => [ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
	*/
	grev: typeof grev;

	/**
	* Simultaneously sorts two strided arrays based on the sort order of the first array using heapsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param y - second input array
	* @param strideY - stride length for `x`
	* @returns `x`
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	* var y = [ 0.0, 1.0, 2.0, 3.0 ];
	*
	* ns.gsort2hp( x.length, 1, x, 1, y, 1 );
	*
	* console.log( x );
	* // => [ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => [ 3.0, 1.0, 0.0, 2.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	* var y = [ 0.0, 1.0, 2.0, 3.0 ];
	*
	* ns.gsort2hp.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
	*
	* console.log( x );
	* // => [ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => [ 3.0, 1.0, 0.0, 2.0 ]
	*/
	gsort2hp: typeof gsort2hp;

	/**
	* Simultaneously sorts two strided arrays based on the sort order of the first array using insertion sort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @returns `x`
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	* var y = [ 0.0, 1.0, 2.0, 3.0 ];
	*
	* ns.gsort2ins( x.length, 1, x, 1, y, 1 );
	*
	* console.log( x );
	* // => [ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => [ 3.0, 1.0, 0.0, 2.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	* var y = [ 0.0, 1.0, 2.0, 3.0 ];
	*
	* ns.gsort2ins.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
	*
	* console.log( x );
	* // => [ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => [ 3.0, 1.0, 0.0, 2.0 ]
	*/
	gsort2ins: typeof gsort2ins;

	/**
	* Simultaneously sorts two strided arrays based on the sort order of the first array using Shellsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @returns `x`
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	* var y = [ 0.0, 1.0, 2.0, 3.0 ];
	*
	* ns.gsort2sh( x.length, 1, x, 1, y, 1 );
	*
	* console.log( x );
	* // => [ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => [ 3.0, 1.0, 0.0, 2.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	* var y = [ 0.0, 1.0, 2.0, 3.0 ];
	*
	* ns.gsort2sh.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
	*
	* console.log( x );
	* // => [ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => [ 3.0, 1.0, 0.0, 2.0 ]
	*/
	gsort2sh: typeof gsort2sh;

	/**
	* Sorts a strided array using heapsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	*
	* ns.gsorthp( x.length, 1, x, 1 );
	* // x => [ -4.0, -2.0, 1.0, 3.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	*
	* ns.gsorthp.ndarray( x.length, 1, x, 1, 0 );
	* // x => [ -4.0, -2.0, 1.0, 3.0 ]
	*/
	gsorthp: typeof gsorthp;

	/**
	* Sorts a strided array using insertion sort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	*
	* ns.gsortins( x.length, 1, x, 1 );
	* // x => [ -4.0, -2.0, 1.0, 3.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	*
	* ns.gsortins.ndarray( x.length, 1, x, 1, 0 );
	* // x => [ -4.0, -2.0, 1.0, 3.0 ]
	*/
	gsortins: typeof gsortins;

	/**
	* Sorts a strided array using Shellsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	*
	* ns.gsortsh( x.length, 1, x, 1 );
	* // x => [ -4.0, -2.0, 1.0, 3.0 ]
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	*
	* ns.gsortsh.ndarray( x.length, 1, x, 1, 0 );
	* // x => [ -4.0, -2.0, 1.0, 3.0 ]
	*/
	gsortsh: typeof gsortsh;

	/**
	* Computes the sum of strided array elements.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gsum( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gsum.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	gsum: typeof gsum;

	/**
	* Computes the sum of strided array elements using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gsumkbn( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gsumkbn.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	gsumkbn: typeof gsumkbn;

	/**
	* Computes the sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gsumkbn2( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gsumkbn2.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	gsumkbn2: typeof gsumkbn2;

	/**
	* Computes the sum of strided array elements using ordinary recursion summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gsumors( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gsumors.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	gsumors: typeof gsumors;

	/**
	* Computes the sum of strided array elements using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gsumpw( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.gsumpw.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	gsumpw: typeof gsumpw;

	/**
	* Adds a scalar constant to each element in a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.sapx( x.length, 5.0, x, 1 );
	* // x => <Float32Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.sapx.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => <Float32Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
	*/
	sapx: typeof sapx;

	/**
	* Adds a scalar constant to each single-precision floating-point strided array element and computes the sum.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sapxsum( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sapxsum.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	sapxsum: typeof sapxsum;

	/**
	* Adds a scalar constant to each single-precision floating-point strided array element and computes the sum using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sapxsumkbn( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sapxsumkbn.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	sapxsumkbn: typeof sapxsumkbn;

	/**
	* Adds a scalar constant to each single-precision floating-point strided array element and computes the sum using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sapxsumkbn2( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sapxsumkbn2.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	sapxsumkbn2: typeof sapxsumkbn2;

	/**
	* Adds a scalar constant to each single-precision floating-point strided array element and computes the sum using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sapxsumors( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sapxsumors.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	sapxsumors: typeof sapxsumors;

	/**
	* Adds a scalar constant to each single-precision floating-point strided array element and computes the sum using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sapxsumpw( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sapxsumpw.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	sapxsumpw: typeof sapxsumpw;

	/**
	* Computes the sum of absolute values (L1 norm) of single-precision floating-point strided array elements using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sasumpw( x.length, x, 1 );
	* // returns 5.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sasumpw.ndarray( x.length, x, 1, 0 );
	* // returns 5.0
	*/
	sasumpw: typeof sasumpw;

	/**
	* Computes the cumulative sum of single-precision floating-point strided array elements.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scusum( x.length, 0.0, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scusum.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, -1.0, 1.0 ]
	*/
	scusum: typeof scusum;

	/**
	* Computes the cumulative sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scusumkbn( x.length, 0.0, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scusumkbn.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, -1.0, 1.0 ]
	*/
	scusumkbn: typeof scusumkbn;

	/**
	* Computes the cumulative sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scusumkbn2( x.length, 0.0, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scusumkbn2.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, -1.0, 1.0 ]
	*/
	scusumkbn2: typeof scusumkbn2;

	/**
	* Computes the cumulative sum of single-precision floating-point strided array elements using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scusumors( x.length, 0.0, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scusumors.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, -1.0, 1.0 ]
	*/
	scusumors: typeof scusumors;

	/**
	* Computes the cumulative sum of single-precision floating-point strided array elements using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scusumpw( x.length, 0.0, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, -1.0, 1.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scusumpw.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, -1.0, 1.0 ]
	*/
	scusumpw: typeof scusumpw;

	/**
	* Adds a scalar constant to each single-precision floating-point strided array element and computes the sum using extended accumulation.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sdsapxsum( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sdsapxsum.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	sdsapxsum: typeof sdsapxsum;

	/**
	* Adds a scalar constant to each single-precision floating-point strided array element and computes the sum using pairwise summation with extended accumulation.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sdsapxsumpw( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sdsapxsumpw.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	sdsapxsumpw: typeof sdsapxsumpw;

	/**
	* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using extended accumulation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.sdsnansum( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.sdsnansum.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	sdsnansum: typeof sdsnansum;

	/**
	* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation with extended accumulation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.sdsnansumpw( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.sdsnansumpw.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	sdsnansumpw: typeof sdsnansumpw;

	/**
	* Computes the sum of single-precision floating-point strided array elements using extended accumulation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sdssum( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sdssum.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	sdssum: typeof sdssum;

	/**
	* Computes the sum of single-precision floating-point strided array elements using pairwise summation with extended accumulation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sdssumpw( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sdssumpw.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	sdssumpw: typeof sdssumpw;

	/**
	* Fills a single-precision floating-point strided array with a specified scalar value.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.sfill( x.length, 5.0, x, 1 );
	* // x => <Float32Array>[ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.sfill.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => <Float32Array>[ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
	*/
	sfill: typeof sfill;

	/**
	* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snansum( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snansum.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	snansum: typeof snansum;

	/**
	* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snansumkbn( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snansumkbn.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	snansumkbn: typeof snansumkbn;

	/**
	* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snansumkbn2( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snansumkbn2.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	snansumkbn2: typeof snansumkbn2;

	/**
	* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snansumors( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snansumors.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	snansumors: typeof snansumors;

	/**
	* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snansumpw( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snansumpw.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	snansumpw: typeof snansumpw;

	/**
	* Reverses a single-precision floating-point strided array in-place.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.srev( x.length, x, 1 );
	* // x => <Float32Array>[ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.srev.ndarray( x.length, x, 1, 0 );
	* // x => <Float32Array>[ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
	*/
	srev: typeof srev;

	/**
	* Simultaneously sorts two single-precision floating-point strided arrays based on the sort order of the first array using heapsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `x`
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	*
	* ns.ssort2hp( x.length, 1, x, 1, y, 1 );
	*
	* console.log( x );
	* // => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	*
	* ns.ssort2hp.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
	*
	* console.log( x );
	* // => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
	*/
	ssort2hp: typeof ssort2hp;

	/**
	* Simultaneously sorts two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @returns first input array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	*
	* ns.ssort2ins( x.length, 1, x, 1, y, 1 );
	*
	* console.log( x );
	* // => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	*
	* ns.ssort2ins.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
	*
	* console.log( x );
	* // => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
	*/
	ssort2ins: typeof ssort2ins;

	/**
	* Simultaneously sorts two single-precision floating-point strided arrays based on the sort order of the first array using Shellsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - first stride length
	* @param y - second input array
	* @param strideY - second stride length
	* @returns `x`
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	*
	* ns.ssort2sh( x.length, 1, x, 1, y, 1 );
	*
	* console.log( x );
	* // => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	*
	* ns.ssort2sh.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
	*
	* console.log( x );
	* // => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
	*/
	ssort2sh: typeof ssort2sh;

	/**
	* Sorts a single-precision floating-point strided array using heapsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - input array
	* @param stride - stride length
	* @returns input array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	*
	* ns.ssorthp( x.length, 1, x, 1 );
	* // x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	*
	* ns.ssorthp.ndarray( x.length, 1, x, 1, 0 );
	* // x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*/
	ssorthp: typeof ssorthp;

	/**
	* Sorts a single-precision floating-point strided array using insertion sort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - input array
	* @param stride - stride length
	* @returns input array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	*
	* ns.ssortins( x.length, 1, x, 1 );
	* // x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	*
	* ns.ssortins.ndarray( x.length, 1, x, 1, 0 );
	* // x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*/
	ssortins: typeof ssortins;

	/**
	* Sorts a single-precision floating-point strided array using Shellsort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - input array
	* @param stride - stride length
	* @returns `x`
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	*
	* ns.ssortsh( x.length, 1, x, 1 );
	* // x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	*
	* ns.ssortsh.ndarray( x.length, 1, x, 1, 0 );
	* // x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*/
	ssortsh: typeof ssortsh;

	/**
	* Computes the sum of single-precision floating-point strided array elements.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.ssum( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.ssum.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	ssum: typeof ssum;

	/**
	* Computes the sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.ssumkbn( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.ssumkbn.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	ssumkbn: typeof ssumkbn;

	/**
	* Computes the sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.ssumkbn2( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.ssumkbn2.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	ssumkbn2: typeof ssumkbn2;

	/**
	* Computes the sum of single-precision floating-point strided array elements using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.ssumors( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.ssumors.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	ssumors: typeof ssumors;

	/**
	* Computes the sum of single-precision floating-point strided array elements using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.ssumpw( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.ssumpw.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	ssumpw: typeof ssumpw;

	/**
	* Extensions to basic linear algebra subprograms (BLAS) compiled to WebAssembly.
	*/
	wasm: typeof wasm;
}

/**
* Extended base (i.e., lower-level) basic linear algebra subroutines (BLAS).
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;

/** @license Apache-2.0 */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property/dist' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name dapx
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapx}
*/
setReadOnly( ns, 'dapx', require( '@stdlib/blas-ext-base-dapx/dist' ) );

/**
* @name dapxsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapxsum}
*/
setReadOnly( ns, 'dapxsum', require( '@stdlib/blas-ext-base-dapxsum/dist' ) );

/**
* @name dapxsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapxsumkbn}
*/
setReadOnly( ns, 'dapxsumkbn', require( '@stdlib/blas-ext-base-dapxsumkbn/dist' ) );

/**
* @name dapxsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapxsumkbn2}
*/
setReadOnly( ns, 'dapxsumkbn2', require( '@stdlib/blas-ext-base-dapxsumkbn2/dist' ) );

/**
* @name dapxsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapxsumors}
*/
setReadOnly( ns, 'dapxsumors', require( '@stdlib/blas-ext-base-dapxsumors/dist' ) );

/**
* @name dapxsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapxsumpw}
*/
setReadOnly( ns, 'dapxsumpw', require( '@stdlib/blas-ext-base-dapxsumpw/dist' ) );

/**
* @name dasumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dasumpw}
*/
setReadOnly( ns, 'dasumpw', require( '@stdlib/blas-ext-base-dasumpw/dist' ) );

/**
* @name dcusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcusum}
*/
setReadOnly( ns, 'dcusum', require( '@stdlib/blas-ext-base-dcusum/dist' ) );

/**
* @name dcusumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcusumkbn}
*/
setReadOnly( ns, 'dcusumkbn', require( '@stdlib/blas-ext-base-dcusumkbn/dist' ) );

/**
* @name dcusumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcusumkbn2}
*/
setReadOnly( ns, 'dcusumkbn2', require( '@stdlib/blas-ext-base-dcusumkbn2/dist' ) );

/**
* @name dcusumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcusumors}
*/
setReadOnly( ns, 'dcusumors', require( '@stdlib/blas-ext-base-dcusumors/dist' ) );

/**
* @name dcusumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcusumpw}
*/
setReadOnly( ns, 'dcusumpw', require( '@stdlib/blas-ext-base-dcusumpw/dist' ) );

/**
* @name dfill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dfill}
*/
setReadOnly( ns, 'dfill', require( '@stdlib/blas-ext-base-dfill/dist' ) );

/**
* @name dnanasum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnanasum}
*/
setReadOnly( ns, 'dnanasum', require( '@stdlib/blas-ext-base-dnanasum/dist' ) );

/**
* @name dnanasumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnanasumors}
*/
setReadOnly( ns, 'dnanasumors', require( '@stdlib/blas-ext-base-dnanasumors/dist' ) );

/**
* @name dnannsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnannsum}
*/
setReadOnly( ns, 'dnannsum', require( '@stdlib/blas-ext-base-dnannsum/dist' ) );

/**
* @name dnannsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnannsumkbn}
*/
setReadOnly( ns, 'dnannsumkbn', require( '@stdlib/blas-ext-base-dnannsumkbn/dist' ) );

/**
* @name dnannsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnannsumkbn2}
*/
setReadOnly( ns, 'dnannsumkbn2', require( '@stdlib/blas-ext-base-dnannsumkbn2/dist' ) );

/**
* @name dnannsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnannsumors}
*/
setReadOnly( ns, 'dnannsumors', require( '@stdlib/blas-ext-base-dnannsumors/dist' ) );

/**
* @name dnannsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnannsumpw}
*/
setReadOnly( ns, 'dnannsumpw', require( '@stdlib/blas-ext-base-dnannsumpw/dist' ) );

/**
* @name dnansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnansum}
*/
setReadOnly( ns, 'dnansum', require( '@stdlib/blas-ext-base-dnansum/dist' ) );

/**
* @name dnansumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnansumkbn}
*/
setReadOnly( ns, 'dnansumkbn', require( '@stdlib/blas-ext-base-dnansumkbn/dist' ) );

/**
* @name dnansumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnansumkbn2}
*/
setReadOnly( ns, 'dnansumkbn2', require( '@stdlib/blas-ext-base-dnansumkbn2/dist' ) );

/**
* @name dnansumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnansumors}
*/
setReadOnly( ns, 'dnansumors', require( '@stdlib/blas-ext-base-dnansumors/dist' ) );

/**
* @name dnansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnansumpw}
*/
setReadOnly( ns, 'dnansumpw', require( '@stdlib/blas-ext-base-dnansumpw/dist' ) );

/**
* @name drev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/drev}
*/
setReadOnly( ns, 'drev', require( '@stdlib/blas-ext-base-drev/dist' ) );

/**
* @name dsapxsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsapxsum}
*/
setReadOnly( ns, 'dsapxsum', require( '@stdlib/blas-ext-base-dsapxsum/dist' ) );

/**
* @name dsapxsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsapxsumpw}
*/
setReadOnly( ns, 'dsapxsumpw', require( '@stdlib/blas-ext-base-dsapxsumpw/dist' ) );

/**
* @name dsnannsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsnannsumors}
*/
setReadOnly( ns, 'dsnannsumors', require( '@stdlib/blas-ext-base-dsnannsumors/dist' ) );

/**
* @name dsnansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsnansum}
*/
setReadOnly( ns, 'dsnansum', require( '@stdlib/blas-ext-base-dsnansum/dist' ) );

/**
* @name dsnansumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsnansumors}
*/
setReadOnly( ns, 'dsnansumors', require( '@stdlib/blas-ext-base-dsnansumors/dist' ) );

/**
* @name dsnansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsnansumpw}
*/
setReadOnly( ns, 'dsnansumpw', require( '@stdlib/blas-ext-base-dsnansumpw/dist' ) );

/**
* @name dsort2hp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsort2hp}
*/
setReadOnly( ns, 'dsort2hp', require( '@stdlib/blas-ext-base-dsort2hp/dist' ) );

/**
* @name dsort2ins
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsort2ins}
*/
setReadOnly( ns, 'dsort2ins', require( '@stdlib/blas-ext-base-dsort2ins/dist' ) );

/**
* @name dsort2sh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsort2sh}
*/
setReadOnly( ns, 'dsort2sh', require( '@stdlib/blas-ext-base-dsort2sh/dist' ) );

/**
* @name dsorthp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsorthp}
*/
setReadOnly( ns, 'dsorthp', require( '@stdlib/blas-ext-base-dsorthp/dist' ) );

/**
* @name dsortins
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsortins}
*/
setReadOnly( ns, 'dsortins', require( '@stdlib/blas-ext-base-dsortins/dist' ) );

/**
* @name dsortsh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsortsh}
*/
setReadOnly( ns, 'dsortsh', require( '@stdlib/blas-ext-base-dsortsh/dist' ) );

/**
* @name dssum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dssum}
*/
setReadOnly( ns, 'dssum', require( '@stdlib/blas-ext-base-dssum/dist' ) );

/**
* @name dssumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dssumors}
*/
setReadOnly( ns, 'dssumors', require( '@stdlib/blas-ext-base-dssumors/dist' ) );

/**
* @name dssumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dssumpw}
*/
setReadOnly( ns, 'dssumpw', require( '@stdlib/blas-ext-base-dssumpw/dist' ) );

/**
* @name dsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsum}
*/
setReadOnly( ns, 'dsum', require( '@stdlib/blas-ext-base-dsum/dist' ) );

/**
* @name dsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsumkbn}
*/
setReadOnly( ns, 'dsumkbn', require( '@stdlib/blas-ext-base-dsumkbn/dist' ) );

/**
* @name dsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsumkbn2}
*/
setReadOnly( ns, 'dsumkbn2', require( '@stdlib/blas-ext-base-dsumkbn2/dist' ) );

/**
* @name dsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsumors}
*/
setReadOnly( ns, 'dsumors', require( '@stdlib/blas-ext-base-dsumors/dist' ) );

/**
* @name dsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsumpw}
*/
setReadOnly( ns, 'dsumpw', require( '@stdlib/blas-ext-base-dsumpw/dist' ) );

/**
* @name gapx
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gapx}
*/
setReadOnly( ns, 'gapx', require( '@stdlib/blas-ext-base-gapx/dist' ) );

/**
* @name gapxsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gapxsum}
*/
setReadOnly( ns, 'gapxsum', require( '@stdlib/blas-ext-base-gapxsum/dist' ) );

/**
* @name gapxsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gapxsumkbn}
*/
setReadOnly( ns, 'gapxsumkbn', require( '@stdlib/blas-ext-base-gapxsumkbn/dist' ) );

/**
* @name gapxsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gapxsumkbn2}
*/
setReadOnly( ns, 'gapxsumkbn2', require( '@stdlib/blas-ext-base-gapxsumkbn2/dist' ) );

/**
* @name gapxsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gapxsumors}
*/
setReadOnly( ns, 'gapxsumors', require( '@stdlib/blas-ext-base-gapxsumors/dist' ) );

/**
* @name gapxsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gapxsumpw}
*/
setReadOnly( ns, 'gapxsumpw', require( '@stdlib/blas-ext-base-gapxsumpw/dist' ) );

/**
* @name gasumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gasumpw}
*/
setReadOnly( ns, 'gasumpw', require( '@stdlib/blas-ext-base-gasumpw/dist' ) );

/**
* @name gcusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcusum}
*/
setReadOnly( ns, 'gcusum', require( '@stdlib/blas-ext-base-gcusum/dist' ) );

/**
* @name gcusumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcusumkbn}
*/
setReadOnly( ns, 'gcusumkbn', require( '@stdlib/blas-ext-base-gcusumkbn/dist' ) );

/**
* @name gcusumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcusumkbn2}
*/
setReadOnly( ns, 'gcusumkbn2', require( '@stdlib/blas-ext-base-gcusumkbn2/dist' ) );

/**
* @name gcusumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcusumors}
*/
setReadOnly( ns, 'gcusumors', require( '@stdlib/blas-ext-base-gcusumors/dist' ) );

/**
* @name gcusumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcusumpw}
*/
setReadOnly( ns, 'gcusumpw', require( '@stdlib/blas-ext-base-gcusumpw/dist' ) );

/**
* @name gfill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gfill}
*/
setReadOnly( ns, 'gfill', require( '@stdlib/blas-ext-base-gfill/dist' ) );

/**
* @name gfillBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gfill-by}
*/
setReadOnly( ns, 'gfillBy', require( '@stdlib/blas-ext-base-gfill-by/dist' ) );

/**
* @name gnannsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnannsumkbn}
*/
setReadOnly( ns, 'gnannsumkbn', require( '@stdlib/blas-ext-base-gnannsumkbn/dist' ) );

/**
* @name gnansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnansum}
*/
setReadOnly( ns, 'gnansum', require( '@stdlib/blas-ext-base-gnansum/dist' ) );

/**
* @name gnansumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnansumkbn}
*/
setReadOnly( ns, 'gnansumkbn', require( '@stdlib/blas-ext-base-gnansumkbn/dist' ) );

/**
* @name gnansumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnansumkbn2}
*/
setReadOnly( ns, 'gnansumkbn2', require( '@stdlib/blas-ext-base-gnansumkbn2/dist' ) );

/**
* @name gnansumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnansumors}
*/
setReadOnly( ns, 'gnansumors', require( '@stdlib/blas-ext-base-gnansumors/dist' ) );

/**
* @name gnansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnansumpw}
*/
setReadOnly( ns, 'gnansumpw', require( '@stdlib/blas-ext-base-gnansumpw/dist' ) );

/**
* @name grev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/grev}
*/
setReadOnly( ns, 'grev', require( '@stdlib/blas-ext-base-grev/dist' ) );

/**
* @name gsort2hp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsort2hp}
*/
setReadOnly( ns, 'gsort2hp', require( '@stdlib/blas-ext-base-gsort2hp/dist' ) );

/**
* @name gsort2ins
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsort2ins}
*/
setReadOnly( ns, 'gsort2ins', require( '@stdlib/blas-ext-base-gsort2ins/dist' ) );

/**
* @name gsort2sh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsort2sh}
*/
setReadOnly( ns, 'gsort2sh', require( '@stdlib/blas-ext-base-gsort2sh/dist' ) );

/**
* @name gsorthp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsorthp}
*/
setReadOnly( ns, 'gsorthp', require( '@stdlib/blas-ext-base-gsorthp/dist' ) );

/**
* @name gsortins
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsortins}
*/
setReadOnly( ns, 'gsortins', require( '@stdlib/blas-ext-base-gsortins/dist' ) );

/**
* @name gsortsh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsortsh}
*/
setReadOnly( ns, 'gsortsh', require( '@stdlib/blas-ext-base-gsortsh/dist' ) );

/**
* @name gsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsum}
*/
setReadOnly( ns, 'gsum', require( '@stdlib/blas-ext-base-gsum/dist' ) );

/**
* @name gsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsumkbn}
*/
setReadOnly( ns, 'gsumkbn', require( '@stdlib/blas-ext-base-gsumkbn/dist' ) );

/**
* @name gsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsumkbn2}
*/
setReadOnly( ns, 'gsumkbn2', require( '@stdlib/blas-ext-base-gsumkbn2/dist' ) );

/**
* @name gsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsumors}
*/
setReadOnly( ns, 'gsumors', require( '@stdlib/blas-ext-base-gsumors/dist' ) );

/**
* @name gsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsumpw}
*/
setReadOnly( ns, 'gsumpw', require( '@stdlib/blas-ext-base-gsumpw/dist' ) );

/**
* @name sapx
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sapx}
*/
setReadOnly( ns, 'sapx', require( '@stdlib/blas-ext-base-sapx/dist' ) );

/**
* @name sapxsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sapxsum}
*/
setReadOnly( ns, 'sapxsum', require( '@stdlib/blas-ext-base-sapxsum/dist' ) );

/**
* @name sapxsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sapxsumkbn}
*/
setReadOnly( ns, 'sapxsumkbn', require( '@stdlib/blas-ext-base-sapxsumkbn/dist' ) );

/**
* @name sapxsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sapxsumkbn2}
*/
setReadOnly( ns, 'sapxsumkbn2', require( '@stdlib/blas-ext-base-sapxsumkbn2/dist' ) );

/**
* @name sapxsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sapxsumors}
*/
setReadOnly( ns, 'sapxsumors', require( '@stdlib/blas-ext-base-sapxsumors/dist' ) );

/**
* @name sapxsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sapxsumpw}
*/
setReadOnly( ns, 'sapxsumpw', require( '@stdlib/blas-ext-base-sapxsumpw/dist' ) );

/**
* @name sasumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sasumpw}
*/
setReadOnly( ns, 'sasumpw', require( '@stdlib/blas-ext-base-sasumpw/dist' ) );

/**
* @name scusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scusum}
*/
setReadOnly( ns, 'scusum', require( '@stdlib/blas-ext-base-scusum/dist' ) );

/**
* @name scusumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scusumkbn}
*/
setReadOnly( ns, 'scusumkbn', require( '@stdlib/blas-ext-base-scusumkbn/dist' ) );

/**
* @name scusumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scusumkbn2}
*/
setReadOnly( ns, 'scusumkbn2', require( '@stdlib/blas-ext-base-scusumkbn2/dist' ) );

/**
* @name scusumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scusumors}
*/
setReadOnly( ns, 'scusumors', require( '@stdlib/blas-ext-base-scusumors/dist' ) );

/**
* @name scusumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scusumpw}
*/
setReadOnly( ns, 'scusumpw', require( '@stdlib/blas-ext-base-scusumpw/dist' ) );

/**
* @name sdsapxsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sdsapxsum}
*/
setReadOnly( ns, 'sdsapxsum', require( '@stdlib/blas-ext-base-sdsapxsum/dist' ) );

/**
* @name sdsapxsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sdsapxsumpw}
*/
setReadOnly( ns, 'sdsapxsumpw', require( '@stdlib/blas-ext-base-sdsapxsumpw/dist' ) );

/**
* @name sdsnansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sdsnansum}
*/
setReadOnly( ns, 'sdsnansum', require( '@stdlib/blas-ext-base-sdsnansum/dist' ) );

/**
* @name sdsnansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sdsnansumpw}
*/
setReadOnly( ns, 'sdsnansumpw', require( '@stdlib/blas-ext-base-sdsnansumpw/dist' ) );

/**
* @name sdssum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sdssum}
*/
setReadOnly( ns, 'sdssum', require( '@stdlib/blas-ext-base-sdssum/dist' ) );

/**
* @name sdssumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sdssumpw}
*/
setReadOnly( ns, 'sdssumpw', require( '@stdlib/blas-ext-base-sdssumpw/dist' ) );

/**
* @name sfill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sfill}
*/
setReadOnly( ns, 'sfill', require( '@stdlib/blas-ext-base-sfill/dist' ) );

/**
* @name snansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/snansum}
*/
setReadOnly( ns, 'snansum', require( '@stdlib/blas-ext-base-snansum/dist' ) );

/**
* @name snansumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/snansumkbn}
*/
setReadOnly( ns, 'snansumkbn', require( '@stdlib/blas-ext-base-snansumkbn/dist' ) );

/**
* @name snansumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/snansumkbn2}
*/
setReadOnly( ns, 'snansumkbn2', require( '@stdlib/blas-ext-base-snansumkbn2/dist' ) );

/**
* @name snansumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/snansumors}
*/
setReadOnly( ns, 'snansumors', require( '@stdlib/blas-ext-base-snansumors/dist' ) );

/**
* @name snansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/snansumpw}
*/
setReadOnly( ns, 'snansumpw', require( '@stdlib/blas-ext-base-snansumpw/dist' ) );

/**
* @name srev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/srev}
*/
setReadOnly( ns, 'srev', require( '@stdlib/blas-ext-base-srev/dist' ) );

/**
* @name ssort2hp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssort2hp}
*/
setReadOnly( ns, 'ssort2hp', require( '@stdlib/blas-ext-base-ssort2hp/dist' ) );

/**
* @name ssort2ins
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssort2ins}
*/
setReadOnly( ns, 'ssort2ins', require( '@stdlib/blas-ext-base-ssort2ins/dist' ) );

/**
* @name ssort2sh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssort2sh}
*/
setReadOnly( ns, 'ssort2sh', require( '@stdlib/blas-ext-base-ssort2sh/dist' ) );

/**
* @name ssorthp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssorthp}
*/
setReadOnly( ns, 'ssorthp', require( '@stdlib/blas-ext-base-ssorthp/dist' ) );

/**
* @name ssortins
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssortins}
*/
setReadOnly( ns, 'ssortins', require( '@stdlib/blas-ext-base-ssortins/dist' ) );

/**
* @name ssortsh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssortsh}
*/
setReadOnly( ns, 'ssortsh', require( '@stdlib/blas-ext-base-ssortsh/dist' ) );

/**
* @name ssum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssum}
*/
setReadOnly( ns, 'ssum', require( '@stdlib/blas-ext-base-ssum/dist' ) );

/**
* @name ssumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssumkbn}
*/
setReadOnly( ns, 'ssumkbn', require( '@stdlib/blas-ext-base-ssumkbn/dist' ) );

/**
* @name ssumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssumkbn2}
*/
setReadOnly( ns, 'ssumkbn2', require( '@stdlib/blas-ext-base-ssumkbn2/dist' ) );

/**
* @name ssumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssumors}
*/
setReadOnly( ns, 'ssumors', require( '@stdlib/blas-ext-base-ssumors/dist' ) );

/**
* @name ssumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssumpw}
*/
setReadOnly( ns, 'ssumpw', require( '@stdlib/blas-ext-base-ssumpw/dist' ) );


// EXPORTS //

module.exports = ns;

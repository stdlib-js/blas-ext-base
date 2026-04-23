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
* @name cfill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cfill}
*/
setReadOnly( ns, 'cfill', require( '@stdlib/blas-ext-base-cfill/dist' ) );

/**
* @name cindexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cindex-of-row}
*/
setReadOnly( ns, 'cindexOfRow', require( '@stdlib/blas-ext-base-cindex-of-row/dist' ) );

/**
* @name coneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cone-to}
*/
setReadOnly( ns, 'coneTo', require( '@stdlib/blas-ext-base-cone-to/dist' ) );

/**
* @name csum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/csum}
*/
setReadOnly( ns, 'csum', require( '@stdlib/blas-ext-base-csum/dist' ) );

/**
* @name csumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/csumkbn}
*/
setReadOnly( ns, 'csumkbn', require( '@stdlib/blas-ext-base-csumkbn/dist' ) );

/**
* @name cunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cunitspace}
*/
setReadOnly( ns, 'cunitspace', require( '@stdlib/blas-ext-base-cunitspace/dist' ) );

/**
* @name czeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/czero-to}
*/
setReadOnly( ns, 'czeroTo', require( '@stdlib/blas-ext-base-czero-to/dist' ) );

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
* @name dcircshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcircshift}
*/
setReadOnly( ns, 'dcircshift', require( '@stdlib/blas-ext-base-dcircshift/dist' ) );

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
* @name ddiff
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ddiff}
*/
setReadOnly( ns, 'ddiff', require( '@stdlib/blas-ext-base-ddiff/dist' ) );

/**
* @name dfill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dfill}
*/
setReadOnly( ns, 'dfill', require( '@stdlib/blas-ext-base-dfill/dist' ) );

/**
* @name dindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dindex-of}
*/
setReadOnly( ns, 'dindexOf', require( '@stdlib/blas-ext-base-dindex-of/dist' ) );

/**
* @name dindexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dindex-of-row}
*/
setReadOnly( ns, 'dindexOfRow', require( '@stdlib/blas-ext-base-dindex-of-row/dist' ) );

/**
* @name dlastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dlast-index-of}
*/
setReadOnly( ns, 'dlastIndexOf', require( '@stdlib/blas-ext-base-dlast-index-of/dist' ) );

/**
* @name dlinspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dlinspace}
*/
setReadOnly( ns, 'dlinspace', require( '@stdlib/blas-ext-base-dlinspace/dist' ) );

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
* @name dnancount
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnancount}
*/
setReadOnly( ns, 'dnancount', require( '@stdlib/blas-ext-base-dnancount/dist' ) );

/**
* @name dnancusumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnancusumkbn}
*/
setReadOnly( ns, 'dnancusumkbn', require( '@stdlib/blas-ext-base-dnancusumkbn/dist' ) );

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
* @name doneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/done-to}
*/
setReadOnly( ns, 'doneTo', require( '@stdlib/blas-ext-base-done-to/dist' ) );

/**
* @name drev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/drev}
*/
setReadOnly( ns, 'drev', require( '@stdlib/blas-ext-base-drev/dist' ) );

/**
* @name drrss
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/drrss}
*/
setReadOnly( ns, 'drrss', require( '@stdlib/blas-ext-base-drrss/dist' ) );

/**
* @name drss
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/drss}
*/
setReadOnly( ns, 'drss', require( '@stdlib/blas-ext-base-drss/dist' ) );

/**
* @name drssbl
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/drssbl}
*/
setReadOnly( ns, 'drssbl', require( '@stdlib/blas-ext-base-drssbl/dist' ) );

/**
* @name drsskbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/drsskbn}
*/
setReadOnly( ns, 'drsskbn', require( '@stdlib/blas-ext-base-drsskbn/dist' ) );

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
* @name dsort
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsort}
*/
setReadOnly( ns, 'dsort', require( '@stdlib/blas-ext-base-dsort/dist' ) );

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
* @name dunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dunitspace}
*/
setReadOnly( ns, 'dunitspace', require( '@stdlib/blas-ext-base-dunitspace/dist' ) );

/**
* @name dvander
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dvander}
*/
setReadOnly( ns, 'dvander', require( '@stdlib/blas-ext-base-dvander/dist' ) );

/**
* @name dzeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dzero-to}
*/
setReadOnly( ns, 'dzeroTo', require( '@stdlib/blas-ext-base-dzero-to/dist' ) );

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
* @name gcircshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcircshift}
*/
setReadOnly( ns, 'gcircshift', require( '@stdlib/blas-ext-base-gcircshift/dist' ) );

/**
* @name gconjoin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gconjoin}
*/
setReadOnly( ns, 'gconjoin', require( '@stdlib/blas-ext-base-gconjoin/dist' ) );

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
* @name gfindIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gfind-index}
*/
setReadOnly( ns, 'gfindIndex', require( '@stdlib/blas-ext-base-gfind-index/dist' ) );

/**
* @name gfindLastIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gfind-last-index}
*/
setReadOnly( ns, 'gfindLastIndex', require( '@stdlib/blas-ext-base-gfind-last-index/dist' ) );

/**
* @name gindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gindex-of}
*/
setReadOnly( ns, 'gindexOf', require( '@stdlib/blas-ext-base-gindex-of/dist' ) );

/**
* @name gindexOfColumn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gindex-of-column}
*/
setReadOnly( ns, 'gindexOfColumn', require( '@stdlib/blas-ext-base-gindex-of-column/dist' ) );

/**
* @name gindexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gindex-of-row}
*/
setReadOnly( ns, 'gindexOfRow', require( '@stdlib/blas-ext-base-gindex-of-row/dist' ) );

/**
* @name gjoin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gjoin}
*/
setReadOnly( ns, 'gjoin', require( '@stdlib/blas-ext-base-gjoin/dist' ) );

/**
* @name gjoinBetween
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gjoin-between}
*/
setReadOnly( ns, 'gjoinBetween', require( '@stdlib/blas-ext-base-gjoin-between/dist' ) );

/**
* @name glastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/glast-index-of}
*/
setReadOnly( ns, 'glastIndexOf', require( '@stdlib/blas-ext-base-glast-index-of/dist' ) );

/**
* @name glinspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/glinspace}
*/
setReadOnly( ns, 'glinspace', require( '@stdlib/blas-ext-base-glinspace/dist' ) );

/**
* @name gnancount
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnancount}
*/
setReadOnly( ns, 'gnancount', require( '@stdlib/blas-ext-base-gnancount/dist' ) );

/**
* @name gnannsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnannsumkbn}
*/
setReadOnly( ns, 'gnannsumkbn', require( '@stdlib/blas-ext-base-gnannsumkbn/dist' ) );

/**
* @name gnannsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnannsumpw}
*/
setReadOnly( ns, 'gnannsumpw', require( '@stdlib/blas-ext-base-gnannsumpw/dist' ) );

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
* @name goneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gone-to}
*/
setReadOnly( ns, 'goneTo', require( '@stdlib/blas-ext-base-gone-to/dist' ) );

/**
* @name greplicate
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/greplicate}
*/
setReadOnly( ns, 'greplicate', require( '@stdlib/blas-ext-base-greplicate/dist' ) );

/**
* @name grev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/grev}
*/
setReadOnly( ns, 'grev', require( '@stdlib/blas-ext-base-grev/dist' ) );

/**
* @name gsort
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsort}
*/
setReadOnly( ns, 'gsort', require( '@stdlib/blas-ext-base-gsort/dist' ) );

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
* @name gunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gunitspace}
*/
setReadOnly( ns, 'gunitspace', require( '@stdlib/blas-ext-base-gunitspace/dist' ) );

/**
* @name gvander
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gvander}
*/
setReadOnly( ns, 'gvander', require( '@stdlib/blas-ext-base-gvander/dist' ) );

/**
* @name gwhere
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gwhere}
*/
setReadOnly( ns, 'gwhere', require( '@stdlib/blas-ext-base-gwhere/dist' ) );

/**
* @name gzeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gzero-to}
*/
setReadOnly( ns, 'gzeroTo', require( '@stdlib/blas-ext-base-gzero-to/dist' ) );

/**
* @name ndarray
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/blas/ext/base/ndarray}
*/
setReadOnly( ns, 'ndarray', require( '@stdlib/blas-ext-base-ndarray/dist' ) );

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
* @name scircshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scircshift}
*/
setReadOnly( ns, 'scircshift', require( '@stdlib/blas-ext-base-scircshift/dist' ) );

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
* @name sdiff
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sdiff}
*/
setReadOnly( ns, 'sdiff', require( '@stdlib/blas-ext-base-sdiff/dist' ) );

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
* @name sindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sindex-of}
*/
setReadOnly( ns, 'sindexOf', require( '@stdlib/blas-ext-base-sindex-of/dist' ) );

/**
* @name sindexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sindex-of-row}
*/
setReadOnly( ns, 'sindexOfRow', require( '@stdlib/blas-ext-base-sindex-of-row/dist' ) );

/**
* @name slastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/slast-index-of}
*/
setReadOnly( ns, 'slastIndexOf', require( '@stdlib/blas-ext-base-slast-index-of/dist' ) );

/**
* @name slinspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/slinspace}
*/
setReadOnly( ns, 'slinspace', require( '@stdlib/blas-ext-base-slinspace/dist' ) );

/**
* @name snancount
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/snancount}
*/
setReadOnly( ns, 'snancount', require( '@stdlib/blas-ext-base-snancount/dist' ) );

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
* @name soneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sone-to}
*/
setReadOnly( ns, 'soneTo', require( '@stdlib/blas-ext-base-sone-to/dist' ) );

/**
* @name srev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/srev}
*/
setReadOnly( ns, 'srev', require( '@stdlib/blas-ext-base-srev/dist' ) );

/**
* @name ssort
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssort}
*/
setReadOnly( ns, 'ssort', require( '@stdlib/blas-ext-base-ssort/dist' ) );

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

/**
* @name sunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sunitspace}
*/
setReadOnly( ns, 'sunitspace', require( '@stdlib/blas-ext-base-sunitspace/dist' ) );

/**
* @name svander
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/svander}
*/
setReadOnly( ns, 'svander', require( '@stdlib/blas-ext-base-svander/dist' ) );

/**
* @name szeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/szero-to}
*/
setReadOnly( ns, 'szeroTo', require( '@stdlib/blas-ext-base-szero-to/dist' ) );

/**
* @name wasm
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/blas/ext/base/wasm}
*/
setReadOnly( ns, 'wasm', require( '@stdlib/blas-ext-base-wasm/dist' ) );

/**
* @name zfill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zfill}
*/
setReadOnly( ns, 'zfill', require( '@stdlib/blas-ext-base-zfill/dist' ) );

/**
* @name zindexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zindex-of-row}
*/
setReadOnly( ns, 'zindexOfRow', require( '@stdlib/blas-ext-base-zindex-of-row/dist' ) );

/**
* @name znancount
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/znancount}
*/
setReadOnly( ns, 'znancount', require( '@stdlib/blas-ext-base-znancount/dist' ) );

/**
* @name zoneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zone-to}
*/
setReadOnly( ns, 'zoneTo', require( '@stdlib/blas-ext-base-zone-to/dist' ) );

/**
* @name zsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zsum}
*/
setReadOnly( ns, 'zsum', require( '@stdlib/blas-ext-base-zsum/dist' ) );

/**
* @name zsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zsumkbn}
*/
setReadOnly( ns, 'zsumkbn', require( '@stdlib/blas-ext-base-zsumkbn/dist' ) );

/**
* @name zunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zunitspace}
*/
setReadOnly( ns, 'zunitspace', require( '@stdlib/blas-ext-base-zunitspace/dist' ) );

/**
* @name zzeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zzero-to}
*/
setReadOnly( ns, 'zzeroTo', require( '@stdlib/blas-ext-base-zzero-to/dist' ) );


// EXPORTS //

module.exports = ns;

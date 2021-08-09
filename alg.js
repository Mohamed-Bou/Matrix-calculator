//// multiplication de deux matrices
function Multiplication(a, b){
  if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
     alert('arguments should be in 2-dimensional array format');
  }
  let x = a.length,
  z = a[0].length,
  y = b[0].length;
  if (b.length !== z) {
     // XxZ & ZxY => XxY
     alert('number of columns in the first matrix should be the same as the number of rows in the second');
  }
  let productRow = Array.apply(null, new
  Array(y)).map(Number.prototype.valueOf, 0);
  let product = new Array(x);
  for (let p = 0; p < x; p++) {
     product[p] = productRow.slice();
  }
  for (let i = 0; i < x; i++) {
     for (let j = 0; j < y; j++) {
        for (let k = 0; k < z; k++) {
           product[i][j] += a[i][k] * b[k][j];
        }
     }
  }
  return product;
}
/// inverse d'une matrice 
function inverse(_A) {
    var temp,
    N = _A.length,
    E = [];
    for (var i = 0; i < N; i++)
      E[i] = [];
    for (i = 0; i < N; i++)
      for (var j = 0; j < N; j++) {
        E[i][j] = 0;
        if (i == j)
          E[i][j] = 1;
      }
    for (var k = 0; k < N; k++) {
      temp = _A[k][k];
      for (var j = 0; j < N; j++){
        _A[k][j] /= temp;
        E[k][j] /= temp;
      }
      for (var i = k + 1; i < N; i++){
        temp = _A[i][k];
        for (var j = 0; j < N; j++){
          _A[i][j] -= _A[k][j] * temp;
           E[i][j] -= E[k][j] * temp;
        }
      }
    }
    for (var k = N - 1; k > 0; k--){
      for (var i = k - 1; i >= 0; i--){
        temp = _A[i][k];
        for (var j = 0; j < N; j++){
          _A[i][j] -= _A[k][j] * temp;
          E[i][j] -= E[k][j] * temp;
        }
      }
    }
    for (var i = 0; i < N; i++)
      for (var j = 0; j < N; j++)
        _A[i][j] = E[i][j];
    return _A;
  }
  // matrices add
  function add(A,B){
    let sum=[];
    for(var i = 0; i < A.length; i++){
        let l=[];
        for(var j=0;j<A[0].length;j++){
            l.push(A[i][j]+B[i][j]);
        }
        sum.push(l);
    }
    return(sum);
  }
// 
function Subtract(A, B) {
  let C = [];
  let i, j;
  let rc = A.length;
  let cc = A[0].length;
  for (i = 0; i < rc; i++) {
      let r = [];
      for (j = 0; j < cc; j++) {
          r.push(A[i][j] - B[i][j]);
      }
      C.push(r);
  }
  return C;
};
//
function Transpose(M) {
  let C = [];
  let i, j;
  
  let rc = M.length;
  let cc = M[0].length;
  
  for (i = 0; i < cc; i++) {
      let r = [];
      
      for (j = 0; j < rc; j++) {
          r.push(M[j][i]);
      }
      
      C.push(r);
  }
  
  return C;
};
  
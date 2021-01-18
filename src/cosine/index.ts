const dot = (a: Array<number>, b: Array<number>) => {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var sum = 0;
  for (var key in a) {
    if (hasOwnProperty.call(a, key) && hasOwnProperty.call(b, key)) {
      sum += a[key] * b[key];
    }
  }
  return sum;
};

const similarity = (a: Array<number>, b: Array<number>) => {
  var magA = Math.sqrt(dot(a, a));
  var magB = Math.sqrt(dot(b, b));
  if (magA && magB) return dot(a, b) / (magA * magB);
  else return false;
};

export const cosine = (matrix: Array<any>): Array<string> => {
  let cosine_similarity_matrix: Array<any> = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < i; j++) {
      row.push(cosine_similarity_matrix[j][i]);
    }
    row.push(1);
    for (let j = i + 1; j < matrix.length; j++) {
      row.push(similarity(matrix[i], matrix[j]));
    }
    cosine_similarity_matrix.push(row);
  }
  const toFixed = cosine_similarity_matrix.map((arr) =>
    arr.map((value: number) => parseFloat(value.toFixed(4)))
  );
  return toFixed;
};

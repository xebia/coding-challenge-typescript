export const triangleRow = (n: number): number[] => {
    if(n === 0){
        return [1];
    }

    const previousRow = triangleRow(n - 1);

    const row = [1];
    for(let i = 1; i < n; i++){
        row.push(previousRow[i - 1] + previousRow[i] + 1);
    }
    row.push(1);

    return row;
}
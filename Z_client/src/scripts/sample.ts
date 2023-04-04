/*
Arguments: An array of non-empty arrays of numbers corresponding to clusters of face ids
Returns a list of ids corresponding to a sample of the clusters
*/
function sample(sampleSize: number, clusters: Array<Array<number>>): Array<number> {
    if (sampleSize <= 0 || clusters.length == 0) return [];
    let minSize = clusters[0].length;
    clusters.forEach(el => {
        if (el.length < minSize) minSize = el.length;
    });
    let maxSampleSize: number = minSize * clusters.length;
    if (sampleSize > maxSampleSize) {
        return [];
    }
    let shuffled = clusters.sort(() => 0.5 - Math.random());

    // Get first sampleSize % clusters.length elements
    let baseCount = Math.floor(sampleSize / clusters.length);
    let extraCount = sampleSize % clusters.length;
    let base: Array<number> = []
    shuffled.forEach((el, ind) => {
        base = base.concat(el.sort(() => 0.5 - Math.random()).splice(0, baseCount + (ind < extraCount ? 1 : 0)));
    });
    return base;
}
import compute_v1 from './v1/compute';
import compute_v2 from './v2/compute';

export default function start() {

    console.log('[endpoint]: [start] Запущено');

    // console.log('[endpoint]: Compute V1 ', compute_v1([0, 1, 2, 3])); // 54
    // console.log('[endpoint]: Compute V1 ', compute_v1([1, 3, 5, 7])); // 64
    // console.log('[endpoint]: Compute V1 ', compute_v1([2, 5, 8, 11])); // 74

    // console.log('---');

    // console.log('[endpoint]: Compute V2 ', compute_v2([0, 1, 2, 3])); // 54
    // console.log('[endpoint]: Compute V2 ', compute_v2([1, 3, 5, 7])); // 64
    // console.log('[endpoint]: Compute V2 ', compute_v2([2, 5, 8, 11])); // 74
}

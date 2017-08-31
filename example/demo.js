import ID from '../src';

const taiwanID = new ID('Taiwan');

/* generate one taiwan ID */
console.log(taiwanID.generate());

/* generate A area taiwan ID */
console.log(taiwanID.generate({ area: 'A' }));

/* generate female taiwan ID */
console.log(taiwanID.generate({ gender: 'female' }));

/* generate A area female taiwan ID */
console.log(taiwanID.generate({ area: 'A', gender: 'female' }));

/* generate 5 taiwan ID */
console.log(taiwanID.generate({ count: 5 }));

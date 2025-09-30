// Day 6 — Callbacks, Promises & async/await (Node.js)

// A small async function implemented in three styles
function fetchUserCb(id, cb) {
  setTimeout(() => {
    if (id === 0) return cb(new Error('Invalid id'));
    cb(null, { id, name: `Mame${id}` });
  }, 50);
}

// Promise wrapper
const fetchUser = (id) =>
  new Promise((resolve, reject) => {
    fetchUserCb(id, (err, data) => (err ? reject(err) : resolve(data)));
  });

async function run() {
  console.log('1) Callback style:');
  await new Promise((done) => {
    fetchUserCb(1, (err, user) => {
      if (err) { console.error('Callback error:', err.message); return done(); }
      console.log('Callback result:', user);
      done();
    });
  });

  console.log('2) Promise style:');
  await fetchUser(2)
    .then((user) => console.log('Promise result:', user))
    .catch((err) => console.error('Promise error:', err.message));

  console.log('3) async/await style:');
  try {
    const user = await fetchUser(3);
    console.log('Async/await result:', user);
  } catch (err) {
    console.error('Async/await error:', err.message);
  }

  console.log('4) Parallel with Promise.all (3 requests):');
  const users = await Promise.all([4, 5, 6].map(fetchUser));
  console.log('Parallel results length:', users.length);

  console.log('5) Handling errors without failing all: Promise.allSettled');
  const results = await Promise.allSettled([fetchUser(7), fetchUser(0), fetchUser(8)]);
  console.log('AllSettled statuses:', results.map((r) => r.status));
}

run().catch((e) => console.error('Unhandled error:', e));


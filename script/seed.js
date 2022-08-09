'use strict'

const {db, models: {User, Work} } = require('../server/db')

async function seed() {
  await db.sync({ force: true }) 
  console.log('db synced!')


  const users = await Promise.all([
    User.create({ 
      name: 'Savannah Lin', 
      bio: "I hold 3+ years of experience for helping startups or small-sized business designing and building websites. I use React, Javascript, CSS, HTML5, SASS, and other tools. I’m a master at converting mockups into intuitive, user-friendly interfaces and am familiar with many code delivery methodologies. In addition, I have a consistent, demonstrated track record of developing and maintaining web performance and responsive products that achieve concrete business objectives. I welcome the chance to discuss my experience with you.",
      img: "me.png"
    }),
  ])

  console.log(`seeded ${users.length} user`)
  console.log(`seeded successfully`)

  const works = await Promise.all([
    Work.create({
      name: "Drone Forward",
      title: "Web developer",
      img: "df.webp",
      startDate: "2021-02",
      endDate: "2022-03",
      link: "https://www.droneforwardinc.com/"
    }),
    Work.create({
      name: "STAT",
      title: "Front end web developer",
      img: "stat.jpeg",
      startDate: "2019-12",
      endDate: "2021-08",
      link: "https://www.statnews.com/"
    }),
    Work.create({
      name: "MĀSK Skincare",
      title: "Web developer and designer",
      img: "mask.jpeg",
      startDate: "2019-06",
      endDate: "2019-11",
      link: "https://maskskincare.com/"
    }),
    Work.create({
      name: "Hemp Garden/IREMIA",
      title: "Web developer and designer",
      img: "hp.jpeg",
      startDate: "2019-01",
      endDate: "2019-06",
      link: "https://www.iremiacbd.co/"
    }),
    Work.create({
      name: "SMCAC",
      title: "Web developer and designer",
      img: "",
      startDate: "2018-04",
      endDate: "2019-05",
      link: "https://smcac.org/default.php"
    }),
  ]);
  console.log(`seeded ${works.length} works`);
  console.log(`seeded successfully`);

  return {
    users,
    works
  }
}


async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}


if (module === require.main) {
  runSeed()
}

module.exports = seed

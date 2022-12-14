'use strict'

const {db, models: {User, Work, School} } = require('../server/db')

async function seed() {
  await db.sync({ force: true }) 
  console.log('db synced!')


  const users = await Promise.all([
    User.create({ 
      name: 'Savannah Lin', 
      bio: "I hold 3+ years of experience for helping startups or small-sized business designing and building websites. I use React, Javascript, CSS, HTML5, SASS, and other tools. I’m a master at converting mockups into intuitive, user-friendly interfaces and am familiar with code delivery methodology. In addition, I have a consistent, demonstrated track record of developing and maintaining web performance and responsive products that achieve concrete business objectives. I welcome the chance to discuss my experience with you.",
      img: "me.png"
    }),
  ])

  console.log(`seeded ${users.length} user`)
  console.log(`seeded successfully`)

  const works = await Promise.all([
    Work.create({
      name: "Drone Forward",
      location: 'Boston',
      title: "Web developer",
      img: "https://images.unsplash.com/photo-1584441405886-bc91be61e56a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80",
      startDate: "2021-02",
      endDate: "2022-03",
      link: "https://www.droneforwardinc.com/"
    }),
    Work.create({
      name: "STAT",
      location: 'Boston',
      title: "Front end web developer",
      img: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      startDate: "2019-12",
      endDate: "2021-08",
      link: "https://www.statnews.com/"
    }),
    Work.create({
      name: "MĀSK Skincare",
      location: 'New York',
      title: "Web developer and designer",
      img: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      startDate: "2019-06",
      endDate: "2019-11",
      link: "https://maskskincare.com/"
    }),
    Work.create({
      name: "IREMIA",
      location: 'New York',
      title: "Web developer and designer",
      img: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      startDate: "2019-01",
      endDate: "2019-06",
      link: "https://www.iremiacbd.co/"
    }),
    Work.create({
      name: "SMCAC",
      location: 'Boston',
      title: "Web developer and designer",
      img: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      startDate: "2018-04",
      endDate: "2019-05",
      link: "https://smcac.org/default.php"
    }),
  ]);

  console.log(`seeded ${works.length} works`);
  console.log(`seeded successfully`);

  const schools = await Promise.all([
    School.create({ 
      name: 'Fullstack Academy',
      degree: 'Flex Immersive Coding Bootcamp'
    }),
    School.create({ 
      name: 'Northeastern University',
      degree: 'Master of Professional Studies in Informatics'
    }),
    School.create({ 
      name: 'Soochow University',
      degree: 'Master of Business Administration'
    }),
    School.create({ 
      name: 'Chinese Culture University',
      degree: 'Bachelor of Science in Information and Communication'
    }),
  ])

  console.log(`seeded ${schools.length} schools`)
  console.log(`seeded successfully`)

  return {
    users,
    works,
    schools
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

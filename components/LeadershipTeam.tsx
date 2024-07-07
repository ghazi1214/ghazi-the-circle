// components/LeadershipTeam.tsx
const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl: '/Leslie Alexander, Co-Founder  CEO.png',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl: '/Michael Foster, Co-Founder  CTO.png',
  },
  {
    name: 'Dries Vincent',
    role: 'Business Relations',
    imageUrl: '/Dries Vincent, Business Relations.png',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl: '/Lindsay Walton, Front-end Developer.png',
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    imageUrl: '/Tom Cook, Director of Product.png',
  },
  // More people...
]

export default function LeadershipTeam() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At the heart of our company is a dynamic and diverse leadership team that drives innovation and excellence. Leslie Alexander, our visionary Co-Founder and CEO, steers the ship with her strategic foresight. Michael Foster, our Co-Founder and CTO, leads with tech-savvy brilliance. Dries Vincent, in charge of Business Relations, bridges connections with finesse. Lindsay Walton, our talented Front-end Developer, brings designs to life. Courtney Henry, our creative Designer, crafts compelling visuals, and Tom Cook, our seasoned Director of Product, ensures top-tier product excellence. Together, they propel us towards a brighter future.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

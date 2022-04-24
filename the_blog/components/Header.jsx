import React, { usecontext } from 'react'

import Link from 'next/link'

const categories = [
    {name: "web", slug: "web"},
    {name: "mobile", slug: "mobile"}
]

const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-blue-400">
              The Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="md:float-right mt-2 align-middle text-blue-400 ml-4 font-semibold cursor-pointer">
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import Link from 'next/navigation'

const Navbar = () => {
  return (
    <nav>
      <Link href='/auth/login'>Login</Link>
      <Link href='/auth/register'>Register</Link>
    </nav>
  )
}

export default Navbar
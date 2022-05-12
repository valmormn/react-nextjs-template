import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { isArgumentsObject } from 'util/types'

const xtyle = `navbar mb-2 shadow-lg bg-neutral text-neutral-content flex justify-between items-center`

const themes = [
  'mytheme',
  'forest',
  'retro',
  'dark',
  'light',
  // 'synthwave',
  'emerald',
  'mytheme',
  'myothertheme'
]

const handleScroll = () => {
  console.log(scrollY)
}

function useSetThemeStyle(args) {
  const [isOnline, setIsOnline] = useState(null)

  useEffect(() => {
    console.log('useSetThemeStyle Function not implemented.')
  })
}

const Header = () => {
  const ThemeSwitch = (value: any, props: any) => {
    console.log('theme switch')
    console.log('props')
    console.log(props)

    console.log('value')
    console.log(value)
    console.log(value.target.innerHTML)

    return value.target.innerHTML

    // theme =
  }

  const themeCtx = useContext(ThemeContext)
  // const [theme, setTheme] = useState(ThemeSwitch())



  // const theme = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className={xtyle}>
        <div className="leftSide">
          <Link href="/">
            <a>
              <h4>🏠</h4>
            </a>
          </Link>
        </div>
        <div className="rightSide">
          <Link href="/shop">
            <a className="xs:hidden">
              <button className="btn btn-link">shop</button>
            </a>
          </Link>
          <Link href="/blog">
            <a className="xs:hidden">
              <button className="btn btn-link">news</button>
            </a>
          </Link>
          <div className="xs:hidden dropdown dropdown-end">
            <div tabIndex={0} className="m-1 btn">
              BR
            </div>
            <ul
              tabIndex={0}
              className="p-2  menu dropdown-content bg-neutral rounded-box w-52"
            >
              <li>
                <a>ES</a>
              </li>
              <li>
                <a>FR</a>
              </li>
              <li>
                <a>EN</a>
              </li>
            </ul>
          </div>
          <div className="xs:hidden dropdown dropdown-end">
            <div tabIndex={0} className="m-1 btn">
              themes
            </div>
            <ul
              tabIndex={0}
              className="p-2 menu dropdown-content bg-neutral rounded-box w-52"
            >
              {themes.map((theme, index) => {
                return (
                  <li key={index} value={theme} onClick={ThemeSwitch}>
                    <a>{theme}</a>
                  </li>
                )
              })}
            </ul>
          </div>
          <Link href="/about">
            <a>
              <button className="btn btn-link">
                <h4>🧔</h4>
              </button>
            </a>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header

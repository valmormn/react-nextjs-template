import Link from 'next/link'

const xtyle = `navbar mb-2 shadow-lg bg-neutral text-neutral-content flex justify-between items-center`

const Header = () => {
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
              className="p-2  menu dropdown-content bg-neutral rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
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

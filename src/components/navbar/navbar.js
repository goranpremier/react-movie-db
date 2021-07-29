import { Link } from 'react-router-dom'
import {
  Menu,
  MenuItems,
  MenuLink,
  MenuPopover,
  MenuButton,
} from '@reach/menu-button'
import {
  Close as CloseIcon,
  Menu as MenuIcon,
} from 'styled-icons/ionicons-outline'
import {
  NavbarWrapper,
  DesktopMenu,
  StyledMovieDBLogo,
  MobilePopover,
  MobileMenu,
  MobileMenuIcon,
} from './navbar.styles'

const LINKS = [
  { url: '/movies', name: 'Movies' },
  { url: '/tv', name: 'TV Shows' },
  { url: '/persons', name: 'Persons' },
]

function MobileNav() {
  return (
    <Menu>
      {({ isExpanded }) => (
        <>
          <MenuButton as={MobileMenuIcon}>
            {isExpanded ? <CloseIcon /> : <MenuIcon />}
          </MenuButton>
          {
            <MenuPopover
              as={MobilePopover}
              position={(r) => ({
                top: 61,
                left: 0,
                bottom: 0,
                right: 0,
              })}
            >
              <MenuItems as={MobileMenu}>
                {LINKS.map((link) => (
                  <MenuLink key={link.url} to={link.url} as={Link}>
                    {link.name}
                  </MenuLink>
                ))}
              </MenuItems>
            </MenuPopover>
          }
        </>
      )}
    </Menu>
  )
}

function Navbar() {
  return (
    <NavbarWrapper>
      <div>
        <Link to="/">
          <StyledMovieDBLogo />
        </Link>
        <DesktopMenu>
          {LINKS.map((link) => (
            <Link key={link.url} to={link.url}>
              {link.name}
            </Link>
          ))}
        </DesktopMenu>
      </div>
      <div>
        <MobileNav />
      </div>
    </NavbarWrapper>
  )
}

export { Navbar }

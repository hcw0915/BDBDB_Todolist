import React from 'react'
import { Navbar, Button, Divider, Box } from '@mantine/core'

import { IconLayoutDashboard } from '@tabler/icons-react'
import { IconChartHistogram } from '@tabler/icons-react'
import { IconSettings } from '@tabler/icons-react'
import { IconPhoneIncoming } from '@tabler/icons-react'

export const NavBarSection = ({ opened, navOption, setNavOption }) => {
  const navBarStyles = {
    color: 'indigo',
    size: 'sm',
    my: 'xs',
    fullWidth: true,
    uppercase: true,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }

  const sections = [
    { text: 'Dashboard', Component: <IconLayoutDashboard size="1.5rem" /> },
    { text: 'Charts', Component: <IconChartHistogram size="1.5rem" /> },
    { text: 'Settings', Component: <IconSettings size="1.5rem" /> },
    { text: 'Contact', Component: <IconPhoneIncoming size="1.5rem" /> },
  ]

  return (
    <Navbar
      p="lg"
      hidden={!opened}
      hiddenBreakpoint="sm"
      width={{ sm: 200, md: 200, lg: 200 }}
    >
      <Navbar.Section>
        <Box sx={{ textAlign: 'center' }} mb={5}>
          Category
        </Box>
      </Navbar.Section>
      <Divider />
      {sections.map((section) => (
        <Navbar.Section key={section.text} h={45}>
          <Button
            {...navBarStyles}
            leftIcon={section.Component}
            variant={navOption === section.text ? 'light' : 'subtle'}
            onClick={() => setNavOption(section.text)}
          >
            {section.text}
          </Button>
        </Navbar.Section>
      ))}
    </Navbar>
  )
}

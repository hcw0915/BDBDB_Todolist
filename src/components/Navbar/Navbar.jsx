import { useState } from 'react'
import {
  AppShell,
  Header,
  Aside,
  Text,
  MediaQuery,
  BackgroundImage,
} from '@mantine/core'
import { Burger, useMantineTheme, Anchor, Image, Footer } from '@mantine/core'
import { NavBarSection } from './NavBarSection'

export function NavbarLayout({ children, navOption, setNavOption }) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <NavBarSection
          opened={opened}
          navOption={navOption}
          setNavOption={setNavOption}
        />
      }
      // aside={
      //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 400 }}>
      //       <Text>Application sidebar</Text>
      //     </Aside>
      //   </MediaQuery>
      // }
      footer={
        <Footer height={50} p="xs">
          <marquee direction="left" height="30">
            聽說 TodoList 不可以當成作品, 但是我覺得，待辦事項也可以很多樣,
            至少我覺得蠻有成就感的, 看怎麼寫而已啦~
          </marquee>
        </Footer>
      }
      header={
        <Header
          height={{ base: 50, md: 70 }}
          p="md"
          style={{
            // background: "url('../../../public/bdbdb.jpg')",
            // background: 'rgb(0,0,0)',
            background:
              'linear-gradient(90deg, #1d1d1d 0%, rgba(1,0,31,1) 100%)',
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Anchor href="#">
              <Image
                maw={30}
                mx={10}
                radius="sm"
                src="logo.png"
                alt="不呆板待辦__BDBDB"
              />
            </Anchor>
            <Text>不呆板待辦__BDBDB</Text>
          </div>
        </Header>
      }
    >
      {children}
      {/* <Text>Resize app to see responsive navbar in action</Text> */}
    </AppShell>
  )
}

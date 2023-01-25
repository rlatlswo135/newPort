import React, { useCallback, useEffect, useMemo, useState } from "react";
import tw from "tailwind-styled-components";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import { NavInfo } from "@/types";

export const Header = React.memo(() => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const NAV: NavInfo[] = useMemo(
    () => [
      { path: "/", text: "Home" },
      { path: "/project", text: "project" },
    ],
    []
  );

  useEffect(() => {
    const html = document.querySelector<HTMLHtmlElement>("html");
    if (darkMode) {
      html?.classList.add("dark");
      return;
    }
    html?.classList.remove("dark");
  }, [darkMode]);

  return (
    <Container>
      <Menus>
        {NAV.map((item) => (
          <Link key={`nav-${item.text}`} to={`${item.path}`}>
            <Menu>{item.text}</Menu>
          </Link>
        ))}
        <DarkMode>
          <Switch onClick={() => setDarkMode((prev) => !prev)}>
            <Ball />
          </Switch>
          {darkMode ? <MdDarkMode /> : <MdWbSunny />}
        </DarkMode>
      </Menus>
    </Container>
  );
});

const Container = tw.nav`
border-b-1 bg-light py-1
dark:bg-dark
`;

const Menus = tw.ul`
h-12 sticky top-0 flex justify-evenly
dark:text-white
`;

const Menu = tw.li`
flex items-center h-full font-bold
hover:border-b-2 hover:border-b-violet-600 hover:cursor-pointer
`;

const DarkMode = tw.div`
flex items-center
`;

const Switch = tw.div`
flex items-center px-[1px] border-[0.5px] w-14 h-6 relative rounded-xl bg-gray-300 mr-2
hover:cursor-pointer
`;

const Ball = tw.div`
absolute h-5 w-5 bg-white rounded-full transition-all duration-200
dark:bg-dark dark:translate-x-[160%]
`;

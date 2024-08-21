import { Outlet } from "react-router-dom";
import MobileHeader from "../components/navbar/components/MobileHeader";
import { Box, Stack } from "@mantine/core";
import MobileFooter from "../components/MobileFooter";
import { useWindowScroll } from "@mantine/hooks";
import { useEffect, useState } from "react";

const MobileLayout = () => {
  const [scroll] = useWindowScroll();
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(1); // 1 > 0 -> true

  useEffect(() => {
    if (scroll.y < lastScrollY) {
      // User is scrolling up
      setIsFooterVisible(true);
    } else {
      // User is scrolling down
      setIsFooterVisible(false);
    }

    // Update the last scroll position
    setLastScrollY(scroll.y);
  }, [scroll.y]);

  return (
    <Stack style={{ minHeight: "100vh" }}>
      <MobileHeader />
      <Box px="sm" style={{ flex: 1, overflowY: "auto" }}>
        <Outlet />
      </Box>
      <Box
        hidden={!isFooterVisible}
        w="100%"
        style={{ position: "fixed", bottom: 0, left: 0 }}
      >
        <MobileFooter />
      </Box>
    </Stack>
  );
};

export default MobileLayout;

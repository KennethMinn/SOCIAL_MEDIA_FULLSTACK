import { Avatar, Card, Flex, Group, Image, Stack, Text } from "@mantine/core";
import { IconBookmark, IconHeart } from "@tabler/icons-react";

const FeedList = () => {
  return (
    <Stack align="center">
      <Card radius="md" w={{ xs: 340, md: 400, lg: 500 }} withBorder>
        <Stack>
          <Group align="center">
            <Avatar name="M" />
            <Flex direction="column" gap={0}>
              <Text fz={15}>Kenneth Minn</Text>
              <Text fz={12} c="dark" opacity={0.7}>
                1 day ago
              </Text>
            </Flex>
          </Group>
          <Flex direction="column" gap={0}>
            <Text truncate="end">
              Caption asdfakldsfj aks aksfjsad kfjksd asfdasdf
            </Text>
            <Group align="center" gap={3} opacity={0.7}>
              <Text fz={13}>#fyp</Text>
              <Text fz={13}>#fy</Text>
            </Group>
          </Flex>
          <Image
            radius="md"
            src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800"
          />
          <Group align="center" justify="space-between">
            <IconHeart />
            <IconBookmark />
          </Group>
        </Stack>
      </Card>
    </Stack>
  );
};

export default FeedList;

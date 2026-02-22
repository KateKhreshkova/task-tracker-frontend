import {Box, Flex, HStack, IconButton} from "@chakra-ui/react";
import {Menu, Star, User} from "lucide-react";
import { Text } from "@chakra-ui/react";

export const Header = () => {
    return (
        <Box
            as="header"
            bg="purple.500"
            px={6}
            py={4}
            boxShadow="sm"
        >
            <Flex
                maxW="1200px"
                mx="auto"
                align="center"
                justify="space-between"
            >
                <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="white"
                    letterSpacing="wide"
                >
                    TODO APP
                </Text>

                <HStack>
                    <IconButton aria-label="Star" variant="ghost" color="white">
                        <Star size={18} />
                    </IconButton>

                    <IconButton aria-label="User" variant="ghost" color="white">
                        <User size={18} />
                    </IconButton>

                    <IconButton aria-label="Menu" variant="ghost" color="white">
                        <Menu size={18} />
                    </IconButton>
                </HStack>
            </Flex>
        </Box>
    );
};


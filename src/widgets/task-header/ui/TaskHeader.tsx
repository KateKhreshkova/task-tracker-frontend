import {HStack, Text, Spacer, VStack, Box} from "@chakra-ui/react";
import {LogoutButton} from "../../../features/auth";
import {useAppSelector} from "../../../shared/lib/hooks/useAppSelector.ts";

export const TaskHeader = () => {
    const {user} = useAppSelector(state => state.user);
    return (
        <Box
            px={8}
            py={6}
            borderBottom="1px solid"
            borderColor="whiteAlpha.200"
            bg="gray.900"
        >
            <HStack align="center">

                {/* LEFT */}
                <VStack align="start" gap={1}>
                    <Text fontSize="3xl" fontWeight="bold" color="white">
                        Task Dashboard
                    </Text>

                    <Text color="gray.400">
                        Manage and organize your daily tasks
                    </Text>
                </VStack>

                <Spacer />

                {/* RIGHT */}
                <HStack gap={4} alignItems="center">

                    <HStack align="center" gap={2}>
                        <Box
                            boxSize="8px"
                            bg="green.400"
                            borderRadius="full"
                            flexShrink={0}
                        />

                        {user && (
                            <Text color="gray.300">
                                {user.email}
                            </Text>
                        )}
                    </HStack>

                    <LogoutButton></LogoutButton>

                </HStack>

            </HStack>
        </Box>
    );
};
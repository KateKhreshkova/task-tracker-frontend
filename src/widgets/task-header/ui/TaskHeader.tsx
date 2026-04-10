import { HStack, Text, Spacer, VStack, Box } from "@chakra-ui/react";
import { LogoutButton } from "../../../features/auth";
import { useAppSelector } from "../../../shared/lib/hooks/useAppSelector.ts";
import { LayoutDashboard } from "lucide-react";

export const TaskHeader = () => {
    const { user } = useAppSelector((state) => state.user);

    // Get user initials for avatar
    const getInitials = (email?: string) => {
        if (!email) return "U";
        return email.charAt(0).toUpperCase();
    };

    return (
        <Box
            px={{ base: 4, md: 8 }}
            py={{ base: 4, md: 5 }}
            borderBottom="1px solid"
            borderColor="whiteAlpha.100"
            bg="gray.900"
            position="relative"
            overflow="hidden"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                    "linear-gradient(90deg, rgba(34, 197, 94, 0.03) 0%, transparent 50%, rgba(56, 189, 248, 0.03) 100%)",
                pointerEvents: "none",
            }}
        >
            <HStack align="center" position="relative" zIndex={1}>
                {/* LEFT - Title Section */}
                <HStack gap={4} align="center">
                    <Box
                        p={2.5}
                        bg="green.400/10"
                        rounded="xl"
                        border="1px solid"
                        borderColor="green.400/20"
                        display={{ base: "none", md: "flex" }}
                    >
                        <LayoutDashboard size={22} color="#4ADE80" />
                    </Box>
                    <VStack align="start" gap={0.5}>
                        <Text
                            fontSize={{ base: "xl", md: "2xl" }}
                            fontWeight="bold"
                            color="white"
                            letterSpacing="-0.02em"
                        >
                            Task Dashboard
                        </Text>
                        <Text
                            color="gray.400"
                            fontSize={{ base: "xs", md: "sm" }}
                            display={{ base: "none", sm: "block" }}
                        >
                            Manage and organize your daily tasks
                        </Text>
                    </VStack>
                </HStack>

                <Spacer />

                {/* RIGHT - User Section */}
                <HStack gap={{ base: 2, md: 4 }} alignItems="center">
                    {/* User Info */}
                    <HStack
                        align="center"
                        gap={3}
                        bg="whiteAlpha.50"
                        px={{ base: 2, md: 4 }}
                        py={2}
                        rounded="xl"
                        border="1px solid"
                        borderColor="whiteAlpha.100"
                        transition="all 0.2s"
                        _hover={{
                            bg: "whiteAlpha.100",
                            borderColor: "whiteAlpha.200",
                        }}
                    >
                        {/* Avatar */}
                        <Box
                            w={{ base: "32px", md: "36px" }}
                            h={{ base: "32px", md: "36px" }}
                            bg="linear-gradient(135deg, #4ADE80, #22C55E)"
                            rounded="lg"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            boxShadow="0 4px 12px rgba(34, 197, 94, 0.3)"
                        >
                            <Text
                                color="gray.900"
                                fontWeight="bold"
                                fontSize={{ base: "sm", md: "md" }}
                            >
                                {getInitials(user?.email)}
                            </Text>
                        </Box>

                        {/* Email & Status */}
                        <VStack
                            align="start"
                            gap={0}
                            display={{ base: "none", md: "flex" }}
                        >
                            {user && (
                                <Text
                                    color="white"
                                    fontSize="sm"
                                    fontWeight="medium"
                                    maxW="180px"
                                    overflow="hidden"
                                    textOverflow="ellipsis"
                                    whiteSpace="nowrap"
                                >
                                    {user.email}
                                </Text>
                            )}
                            <HStack gap={1.5}>
                                <Box
                                    w="6px"
                                    h="6px"
                                    bg="green.400"
                                    borderRadius="full"
                                    boxShadow="0 0 8px rgba(34, 197, 94, 0.6)"
                                />
                                <Text color="gray.500" fontSize="xs">
                                    Online
                                </Text>
                            </HStack>
                        </VStack>
                    </HStack>

                    {/* Logout Button */}
                    <LogoutButton />
                </HStack>
            </HStack>
        </Box>
    );
};

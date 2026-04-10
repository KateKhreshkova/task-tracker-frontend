import { Box, HStack, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { ArrowUpRight, Layers, Zap, ExternalLink, Github } from "lucide-react";

interface LinkCardProps {
    icon: React.ElementType;
    iconColor: string;
    iconBg: string;
    gradientColors: string;
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
    accentColor: string;
}

const LinkCard = ({
    icon: Icon,
    iconColor,
    iconBg,
    gradientColors,
    title,
    description,
    linkText,
    linkHref,
    accentColor,
}: LinkCardProps) => {
    return (
        <Box
            bg="gray.800/70"
            border="1px solid"
            borderColor="whiteAlpha.150"
            rounded="2xl"
            p={{ base: 6, md: 7 }}
            boxShadow="0 24px 56px rgba(0,0,0,0.35)"
            position="relative"
            overflow="hidden"
            _hover={{
                borderColor: "whiteAlpha.300",
                transform: "translateY(-4px)",
                boxShadow: "0 32px 70px rgba(0,0,0,0.45)",
            }}
            css={{
                transition: "all 0.3s ease",
            }}
        >
            {/* Gradient accent line */}
            <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="4px"
                bgGradient={gradientColors}
            />

            {/* Subtle background glow */}
            <Box
                position="absolute"
                top="-50%"
                right="-30%"
                w="200px"
                h="200px"
                bg={accentColor}
                opacity={0.05}
                filter="blur(60px)"
                borderRadius="full"
                pointerEvents="none"
            />

            <Stack gap={5} position="relative" zIndex={1}>
                {/* Icon with enhanced styling */}
                <HStack justify="space-between" align="start">
                    <Box
                        w="60px"
                        h="60px"
                        rounded="xl"
                        bg={iconBg}
                        color="gray.900"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        boxShadow={`0 12px 28px ${accentColor}40`}
                        position="relative"
                        _before={{
                            content: '""',
                            position: "absolute",
                            inset: "-2px",
                            bg: iconBg,
                            rounded: "xl",
                            opacity: 0.3,
                            filter: "blur(8px)",
                        }}
                    >
                        <Icon size={26} />
                    </Box>
                    <Box
                        p={2}
                        bg="whiteAlpha.100"
                        rounded="lg"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        color="gray.400"
                        _hover={{
                            bg: "whiteAlpha.200",
                            color: "white",
                        }}
                        css={{
                            transition: "all 0.2s",
                        }}
                    >
                        <ExternalLink size={16} />
                    </Box>
                </HStack>

                {/* Content */}
                <VStack align="start" gap={3}>
                    <Text fontWeight="bold" color="white" fontSize={{ base: "lg", md: "xl" }}>
                        {title}
                    </Text>
                    <Text color="gray.300" lineHeight="1.7" fontSize={{ base: "sm", md: "md" }}>
                        {description}
                    </Text>
                </VStack>

                {/* Link */}
                <Link
                    href={linkHref}
                    target="_blank"
                    rel="noreferrer"
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    color={iconColor}
                    fontWeight="semibold"
                    fontSize="sm"
                    _hover={{
                        gap: 3,
                        opacity: 0.8,
                        textDecoration: "none",
                    }}
                    css={{
                        transition: "all 0.2s",
                    }}
                    mt={1}
                >
                    {linkText}
                    <ArrowUpRight size={18} />
                </Link>
            </Stack>
        </Box>
    );
};

export const AboutLinks = () => {
    return (
        <Stack gap={6} pb={{ base: 2, xl: 6 }}>
            {/* Section header */}
            <HStack gap={3} mb={2}>
                <Box
                    w="6px"
                    h="6px"
                    bg="blue.400"
                    rounded="full"
                    boxShadow="0 0 10px rgba(96, 165, 250, 0.6)"
                />
                <Text
                    fontSize="xs"
                    letterSpacing="0.2em"
                    textTransform="uppercase"
                    color="blue.300"
                    fontWeight="semibold"
                >
                    Resources & Links
                </Text>
            </HStack>

            {/* Digital Innovation Card */}
            <LinkCard
                icon={Zap}
                iconColor="green.300"
                iconBg="green.400"
                gradientColors="linear(to-r, rgba(34,197,94,0.95), rgba(56,189,248,0.9))"
                title="Digital Innovation Project"
                description="Created as part of a broader digital innovation initiative, exploring modern full-stack patterns in a real deployed context."
                linkText="Visit project site"
                linkHref="https://digitalinnovationfreyberg.weebly.com/"
                accentColor="rgba(34,197,94,1)"
            />

            {/* GitHub Card */}
            <LinkCard
                icon={Github}
                iconColor="blue.300"
                iconBg="blue.400"
                gradientColors="linear(to-r, rgba(96,165,250,0.95), rgba(129,140,248,0.9))"
                title="Project Details"
                description="Full source code, architecture notes, and deployment docs are available on GitHub — including CI/CD pipelines and API specs."
                linkText="View on GitHub"
                linkHref="https://github.com/KateKhreshkova"
                accentColor="rgba(96,165,250,1)"
            />

            {/* Additional info card */}
            <Box
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.100"
                rounded="xl"
                p={5}
                _hover={{
                    bg: "whiteAlpha.100",
                    borderColor: "whiteAlpha.200",
                }}
                css={{
                    transition: "all 0.2s",
                }}
            >
                <HStack gap={4} flexWrap="wrap">
                    <HStack gap={2}>
                        <Layers size={16} color="#9CA3AF" />
                        <Text color="gray.400" fontSize="sm">
                            Open Source
                        </Text>
                    </HStack>
                    <Box w="1px" h="16px" bg="whiteAlpha.300" />
                    <Text color="gray.500" fontSize="sm">
                        Built with modern web technologies
                    </Text>
                </HStack>
            </Box>
        </Stack>
    );
};
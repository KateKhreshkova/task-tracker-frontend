import type {FC} from "react";
import {Box, HStack, Text} from "@chakra-ui/react";
import {Zap} from "lucide-react";

interface Props {
    title: string,
    description: string
}
export const FeaturePreviewCard: FC<Props> = ({description, title}) => {
    return (
        <Box
            bg="gray.800"
            borderRadius="12px"
            p={6}
            boxShadow="0 8px 20px rgba(0,0,0,0.25)"
            textAlign="center"
        >
            <HStack justify="center" mb={3}>
                <Zap size={20} color="#22C55E" />
                <Text fontWeight="bold" fontSize="lg" color="green.400">
                    {title}
                </Text>
            </HStack>
            <Text color="gray.400" mt={2}>
                {description}
            </Text>
        </Box>
    );
};

